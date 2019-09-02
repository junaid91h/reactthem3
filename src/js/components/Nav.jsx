import React from "react";

const Nav = (props) =>{
    let res =props.data[0].nav_link.map((item,index)=>{
        return(
            <div key= {index} >
                <li className="nav-item active text-white">
              <a className="nav-link text-white" href="#"> {item.link} <span className="sr-only">(current)</span></a>
            </li>
            </div>
        )
    });

    let aa =props.data2[0].sli.map((item,index)=>{
      return(
          <div key= {index} >
             <h2 className="text-left text-white display-4">{item.sl1}</h2>
           <h2 className="text-left text-white display-4">{item.sl2}</h2>
           <br/>
           <p className="text-left text-white">
           {item.sl3}
           <br/>
           <br/>
           </p>
           <button className="btn text-left btn-primary btn-lg batk"> Read More</button>
           <br/>
           <br/>
           <br/>
           <br/>
          </div>
      )
  });
    
    
    return(
        <div className="mnav" id="backimg">
          <br/>
          <div className="d-flex justify-content-end align-items-center">
          <div>
            <p className="text-white container" id="fopad"><i class="fa fa-clock"></i> &nbsp; Mon-Sat : 9:00 to 17:00 &nbsp; &nbsp; <i class="far fa-envelope-open"></i> &nbsp; info@junaid.com </p>
          </div>
          </div>
            <nav className="navbar navbar-expand-lg navbar-light  ">
        <h2 className="  text-white ml-5 font-weight-bold" href="#"> <img className="rounded-circle" id="logoimh" src="./img/s2.png" alt=""/> {props.data[0].logo_text} </h2>
        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav " aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation ">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mar sm-bg-light " id="navbarNav">
          <ul className="navbar-nav ulh text-white">
              {res}
          </ul>
        </div>
      </nav>

{/* header code */}
    <div className="container pt-5">
      <div className="row">
        <div className="col-sm-7">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators batk">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
           {aa}
          </div>
          <div className="carousel-item">
          {aa}
          </div>
          <div className="carousel-item">
          {aa}
          </div>
        </div>
      </div>
        </div>
        <div className="col-sm-5">
          <div className="w-100 bg-white pt-5">
            <div>
              <h5 className="text-left ml-5 pl-2">Register and Join in our school</h5>
              <form action="">
                <input type="text" className="pt-2 pb-2 w-75 pl-2" placeholder="Student Name" />
                <input type="text" className="pt-2 pb-2 w-75 pl-2 mt-4" placeholder=" Your Email Id" />
                <input type="text" className="pt-2 pb-2 w-75 pl-2 mt-4" placeholder="Contact Number" />
                <div className="form-group pt-2 pb-2 w-100  ml-5 mt-3">
              <select className="form-control pb-2  w-75 ml-2" id= "exampleFormControlSelect1">
                <option>Class or Standard</option>
                <option>class 6th</option>
                <option>class 7th</option>
                <option>class 8th</option>
                <option>class 9th</option>
                <option>class 10th</option>
              </select>
            </div>
            <button className="btn btn-primary w-75 pt-2 pb-2">Get Started</button>
            <p id="sss" className="mr-5 ">
            <span>By registering, you agree to our <a href="#">Terms &amp; Conditions.</a></span>
            </p>
              </form>
              <br/><br/>
            </div>
          </div>
          


        </div>

      </div>
      </div>

<br/><br/>









        </div>
    )
}

export default Nav;