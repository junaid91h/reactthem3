import React from "react";

const Header =(props)=>{
 
    return(
      <div className="section container-fluid " >
        <div className="section container pt-5">
                <h3 className="text-left">{props.data[0].ha1}</h3>
                <br/><br/>
                <div className="row">
                    <div className="col-sm">
                        <div id="coimg">
                            <h4 className="ml-3 text-white">{props.data[0].ha2} </h4>
                            <p className="ml-3 text-white">{props.data[0].ha3}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="coimg2">
                        <h4 className="ml-3 text-white">{props.data[0].ha4}</h4>
                            <p className="ml-3 text-white">{props.data[0].ha3}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="coimg3">
                        <h4 className="ml-3 text-white">{props.data[0].ha5}</h4>
                            <p className="ml-3 text-white">{props.data[0].ha3}</p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div id="coimg4">
                        <h4 className="ml-3 text-white">{props.data[0].ha6}</h4>
                            <p className="ml-3 text-white"> {props.data[0].ha3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            

        </div>

        
      
    )

}
export default Header
