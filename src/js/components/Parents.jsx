import React from "react";
const Parents=(props)=>{
    let aa =props.data[0].sli2.map((item,index)=>{
        return(
            <div key= {index} >
               <div className="section container pt-5">
                <div className="section container ">

                    <p className="text-white"> Best Education I Have Ever Seen</p>
                    <p className="text-white">" Vivamus magna justo, lacinia eget consectetur sed, <br/> convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. <br/>
                    Nulla quis lorem ut libero malesuada feugiat. Donec rutrum. "</p>

                </div>
                <div className="container pt-5 rounded-circle" >
                    <img className="rounded-circle" src="./img/ts1.jpg" alt=""/>
                    <br/>
                    <h4 className="text-center text-white pt-4 pb-5">JOHN ELISA</h4>

                </div>
                </div>
            </div>
        )
    });
    return(
        <div>

            <div className="section container-fluid pt-5" id="stdimg">
                <h1 className="text-center text-white pt-5">What Parents Say About Us</h1>




    <div id="carouselExampleIndicator" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicator" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicator" data-slide-to={1} />
          <li data-target="#carouselExampleIndicator" data-slide-to={2} />
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
            <div className="section container-fluid " >
        <div className="section container pt-5">
                <h3 className="text-left">Our Teachers</h3>
                <br/><br/>
                <div className="row">
                    <div className="col-sm-3">
                        <div >
                           <img src="./img/team1.jpg" id="tec" alt=""/>
                        </div>
                        <br/>
                        <h4 className="text-center"> Facillities</h4>
                            <p className="text-center">MATHS TEACHER</p>
                    </div>
                    <div className="col-sm-3">
                        <div>
                        <img src="./img/team2.jpg" id="tec" alt=""/>
                        </div>
                        <br/>
                        <h4 className="text-center"> Stas Melnik</h4>
                            <p className="text-center">ENGLISH TEACHER</p>
                    </div>
                    <div className="col-sm-3">
                        <div>
                        <img src="./img/team3.jpg" id="tec" alt=""/>
                        </div>
                        <br/>
                        <h4 className="text-center"> Lise Laurie</h4>
                            <p className="text-center">PHYSICS TEACHER</p>
                    </div>
                    <div className="col-sm-3">
                        <div>
                        <img src="./img/team4.jpg" id="tec" alt=""/>
                        </div>
                        <br/>
                        <h4 className="text-center"> Effie Eleanora</h4>
                            <p className="text-center">HISTORY TEACHER</p>
                    </div>
                </div>
            </div>
            <br/>
            

        </div>
        </div>
    )
}
export default Parents;