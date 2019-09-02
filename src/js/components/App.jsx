import React, { Component } from "react";
// import data from "./data";
import axios from 'axios';
import Nav from "./Nav";
// import data from "./data";
import Header from "./Header"
import Services from "./Services";
import Parents from "./Parents";
import Footer from "./Footer";




class App extends Component {

  state = {
   
    data:[]
    
  };
  componentDidMount() {
    axios.get("/api").then(res => {
      console.log(res);
      this.setState({
        data: [...res.data]
      });
    });
  }
  render() {
    if(this.state.data[0]){

    return (
      <div>
        <Nav data={this.state.data[0].nav} data2={this.state.data[0].slider} />
        <Header data={this.state.data[0] .header} />
        <Services data={this.state.data[0] .Services} />
        <Parents data={this.state.data[0] .Parents} />
        <Footer data={this.state.data[0] .footer} />
      </div>
    );
  }else{
    return(
      <div>Hello</div>
    )
  }
  }
}
export default App;
