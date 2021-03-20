
import './App.css';
import React from 'react'
import KulaniciEkle from "./component/KulaniciEkle";
import KulaniciDuzenle from "./component/KulaniciDuzenle";
import User from "./component/User";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  
  
  
  return (
 <div className="App">
   <Router>
     <Switch>
         <Route exact path="/" component={User}></Route>
         <Route exact path="/KulaniciEkle" component={KulaniciEkle}></Route>
         <Route exact path="/KulaniciDuzenle/:id" component={KulaniciDuzenle}></Route>
     </Switch>
   </Router>
  
  
</div>


  );
}

export default App;