import axios from 'axios';
import React, { Component } from 'react'
import {Link,} from "react-router-dom";

export default class KulaniciDuzenle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.history.location.state?.data,
            id:this.props.history.location.state?.data.id,
            gsm: this.props.history.location.state?.data.gsm,
            tckn: this.props.history.location.state?.data.tckn,
            email: this.props.history.location.state?.data.email,
            password: this.props.history.location.state?.data.password,
           adress: this.props.history.location.state?.data.adress,
           
        }
    }
    updateUser = (e) => {
        let user = {
            id: this.state.id,
            tckn: this.state.tckn,
            adress: this.state.adress,
            gsm: this.state.gsm,
            email: this.state.email,
            password:this.state.password
        };
        axios.put("http://localhost:8080/persons",user)
       .then(res => {
            this.props.history.push('/')
        });
    
        e.preventDefault();
    }

    render() {

        return (
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Kulanici duzenle</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                       
                                        <input placeholder="TC NO" tckn="name"
                                               className="form-control"
                                               value={this.state.tckn}
                                               onChange={(e) => {
                                                   this.setState({tckn: e.target.value})
                                               }}/>
                                   </div>
                                   <div className="form-group">
                                        
                                        <input placeholder="Adress" name="adress" className="form-control"
                                               value={this.state.adress}
                                               onChange={(e) => {
                                                   this.setState({adress: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                     
                                        <input placeholder="GSM" name="gsm" className="form-control"
                                               value={this.state.gsm}
                                               onChange={(e) => {
                                                   this.setState({gsm: e.target.value})
                                               }}/>
                                    </div>
                                    <div className="form-group">
                                     
                                     <input placeholder="email" name="email" className="form-control"
                                            value={this.state.email}
                                            onChange={(e) => {
                                                this.setState({email: e.target.value})
                                            }}/>
                                 </div>
                                 <div className="form-group">
                                     
                                     <input placeholder="Password" name="password" className="form-control"
                                            value={this.state.password}
                                            onChange={(e) => {
                                                this.setState({password: e.target.value})
                                            }}/>
                                 </div>
                                 <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                 <Link to="/" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>vazgec
                                    </Link>
                              </form>
                              
                          </div> 
              </div>
             
                

            </div>
        )
    }
}
