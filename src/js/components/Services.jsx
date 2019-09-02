import React from "react";
const Services=(props)=>{
    return(
        <div className="container ">
            <br/>
            <h1> {props.data[0].ser1} </h1>
            <br/><br/>
            <div className="row">
                <div className="col-sm">
                    <div className="border border-primary text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/s1.png" alt=""/>
                        <h5>{props.data[0].ser2}</h5>
                        <hr/>
                        <p>{props.data[0].ser3}</p>
                    </div>
                </div>
                <div className="col-sm">
                <div className="border border-primary text-center pl-3 pr-3">
                <br/>
                        <img src="./img/s2.png" alt=""/>
                        <h5>{props.data[0].ser4}</h5>
                        <hr/>
                        <p>{props.data[0].ser3}</p>
                    </div>
                </div>
                <div className="col-sm">
                <div className="border border-primary text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/s3.png" alt=""/>
                        <h5>{props.data[0].ser5}</h5>
                        <hr/>
                        <p>{props.data[0].ser3}</p>
                    </div>
                </div>
                
            </div>
            <br/>
            <div className="row">
                <div className="col-sm">
                    <div className="border border-primary text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/s4.png" alt=""/>
                        <h5>{props.data[0].ser6}</h5>
                        <hr/>
                        <p>{props.data[0].ser3}</p>
                    </div>
                </div>
                <div className="col-sm">
                <div className="border border-primary text-center pl-3 pr-3">
                <br/>
                        <img src="./img/s5.png" alt=""/>
                        <h5> {props.data[0].ser7}</h5>
                        <hr/>
                        <p>{props.data[0].ser3}</p>
                    </div>
                </div>
                <div className="col-sm">
                <div className="border border-primary text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/s6.png" alt=""/>
                        <h5>{props.data[0].ser8}</h5>
                        <hr/>
                        <p>{props.data[0].ser3}</p>
                    </div>
                </div>
                
            </div>

            <div className="pt-5 container-fluid">
                <h1>{props.data[0].ser9}</h1>
                <br/><br/>
                <div className="row">
                <div className="col-sm-4 shadow ">
                    <div className="  text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/choose1.jpg" id="coim3g" alt=""/>
                        <br/>
                        <br/>
                        <h5> <img src="./img/s1.png" id="ted" alt=""/>{props.data[0].ser10} </h5>
                        <hr/>
                        <p  className="text-left">{props.data[0].ser11}</p>
                    </div>
                </div>
                <div className="col-sm-4 shadow ">
                <div className="  text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/choose2.jpg" id="coim3g" alt=""/>
                        <br/>
                        <br/>
                        <h5><img src="./img/s3.png" id="ted" alt=""/> {props.data[0].ser12}</h5>
                        <hr/>
                        <p  className="text-left" >{props.data[0].ser11}</p>
                    </div>
                </div>
                <div className="col-sm-4 shadow ">
                <div className="  text-center pl-3 pr-3">
                        <br/>
                        <img src="./img/choose3.jpg" id="coim3g" alt=""/>
                        <br/>
                        <br/>
                        <h5><img src="./img/s6.png" id="ted" alt=""/> {props.data[0].ser13} </h5>
                        <hr/>
                        <p className="text-left">{props.data[0].ser11}</p>
                    </div>
                </div>
                
            </div>
            <br/><br/>

            </div>

           


        </div>
    )
};
export default Services;