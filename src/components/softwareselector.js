import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ServiceSelector extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            successfulPOST: false,
            friendPairs: null
          };
      }
    
    handleSubmit = (event, inputName) => {
      event.preventDefault();
      const reqObj = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "username": inputName
                })
              }
      fetch('https://friends-of-app-api.herokuapp.com/twitter_accounts', reqObj)
      .then(resp => resp.json())
      .then(acctResp => {
        fetch(`https://friends-of-app-api.herokuapp.com/friendship_analyses/${acctResp.id}`)
          .then(resp => resp.json())
          .then(frResp => {
            console.log(frResp)
            this.setState({
              username: inputName,
              successfulPOST: true,
              friendPairs: frResp
                })
              });
          });
    }

    handleChange(event) {
      this.setState({username: event.target.value});
    }

    handleLogin() {
        console.log('clicked');
    }

    render() {
        return (
            <div className="serviceselector">
                <div className="row">

                <div className="">
                        <div className="">
                            <h5 className="">Friends Of</h5>
                              <div className="">
                                <p className="">Enter a Twitter account to see which accounts are most followed by the people whom <i>that</i> account follows</p>
                                <Form id="newaccountform" className="p-0" onSubmit={(e) => this.handleSubmit(e, this.state.username)}>
                                    <Form.Group controlId="formUsername">
                                        <Form.Label>Enter a Twitter Handle:</Form.Label>
                                        <Form.Control className="" type="username" placeholder="@username" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                                    </Form.Group>
                                    <Button variant="outline-info" type="submit" >Submit</Button>
                                </Form>
                            </div>
                            <p>*note: free API rate limiting makes this demo only.</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <h5 className="">Second Degree</h5>
                              <div className="">
                                <p className="">Enter two twitter accounts to see which accounts followed by the first themselves follow the second.</p>
                                <Link to="/seconddegree">
                                    Select Accounts
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ServiceSelector;
