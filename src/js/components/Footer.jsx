import React from "react"
const Footer =(props)=>{
    return(
        <div>
           
           <div className="section container-fluid " >
               <div className="row">
                   <div className="col-sm-6 bg-primary d-flex justify-content-center">
                       
                       <img id="maail" className="ml-4 mt-5" src="./img/mail.png" alt=""/>
                       <h3 className="display-4 ml-5 mt-5 text-white">{props.data[0].fot1}  </h3>
                   </div>
                   <div className="col-sm-6 bg-danger  ">
                   <div className="input-group text-center pt-5 ">
        <input type="text" className="pl-5  ml-5 mt-5 w-75 " placeholder="Enter Your Email"  />
        <div className="input-group-append">
          <button className="btn btn-secondary mt-5" type="button"><i class="fas fa-paper-plane"></i></button>
          
        </div>
        <p className="text-white ml-5" id="sss"> {props.data[0].fot2}  </p>
      </div>
                   </div>

               </div>

           </div>

           <div className="container-fluid" id="fooj">
           <h2 className="  text-white ml-5 font-weight-bold" href="#"> <img className="rounded-circle" id="logoimh" src="./img/s2.png" alt=""/> Child Learn </h2>
           <p className="text-muted pt-4">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ipnut libero <br/> malesuada feugiat. Lorem ipsum dolor sit amet, consectetur elit.</p>
           <div className="container text-center ">
           <ul class="social_section_1info d-flex justify-content-center liko  ">
					<li class="mb-2 mr-4 liko facebook "><span class="fab fa-facebook"></span></li>
					<li class="mb-2  mr-4  twitter"><span class="fab fa-twitter"></span></li>
					<li class="google  mr-4 "><span class="fab fa-google-plus"></span></li>
					<li class="linkedin  mr-4 "><span class="fab fa-linkedin"></span></li>
					<li class="pinterest  mr-4 "><span class="fab fa-pinterest"></span></li>
					<li class="vimeo  mr-4 "><span class="fab fa-vimeo"></span></li>
				</ul>
           </div>
<br/><br/>
           </div>
           <div className="container-fluid text-center bg-dark pt-3 text-white pb-3">
               <h5>
               {props.data[0].fot3}

               </h5>
           </div>


        </div>
    )
}
export default Footer;