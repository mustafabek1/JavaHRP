import React, { Component }  from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

 class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: ''
        }
    }

      updeteUser = (user) => {
       this.props.history.push({
            pathname: `/KulaniciDuzenle/{data.id}`,
            state: {data: user}
        })
    }
    deleteUser = (id) => {
        console.log("delete :", id);
        axios.delete("http://localhost:8080/persons/"+id)
        .then(res => {
           this.props.history.push({
                pathname: "/",
                
            })
        });
    }


    

    componentDidMount() {
        axios.get("http://localhost:8080/persons")
        .then((res) => {
            this.setState({data: res.data });
            console.log("data", res.data);
        });
    }
    render(){
     return (
            <div>
      <body>
   
    
   <table class="table">
     <thead>
       <tr>
         <th>Id</th>
         <th>TCNO</th>
         <th>Email</th>
         <th>GSM</th>
         <th>Password</th>
         <th>Adress</th>
         <th>islem</th>
       </tr>
     </thead>
     <tbody>
       {this.state.data.map(user =>{
         return(
           <tr key={user.id}>
             <td>{user.id}</td>
            <td>{user.tckn}</td>
            <td>{user.email}</td>
            <th>{user.gsm}</th>
            <th>{user.password}</th>
            <th>{user.adress}</th>
            <td>
                 <button onClick={(e) => this.updeteUser(user)}
                     className="btn btn-success"> duzenle
                  </button>
                           
                             
                 <button onClick={(e) => this.deleteUser(user.id)}
                    className="btn btn-danger" > sil
                 </button>
                           

               </td>
            
 
           </tr>
         );
       })}
     
      
     </tbody>
   </table>
 </body>

 <Link to="/KulaniciEkle" className="btn btn-danger"
                                          style={{marginLeft: "10px"}}>Kulanici Ekle
                                    </Link>
                                   
            </div>
        )
    }
    
}

export default User;