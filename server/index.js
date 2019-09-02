const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/data", (req, res) => {
  res.send[("hello from /data")];
  // res.send();
});

app.get("/api", (req, res) => {
  res.json(
    [
        {
            nav:[
                {
                    logo_text:"Child Learn",
                    nav_link:[
                        {
                            link:"Home"
                        }, {
                            link:"About"
                        }, {
                            link:"Services"
                        }, {
                            link:"Stats"
                        }, {
                            link:"Testimonials"
                        }, {
                            link:"Teachers"
                        },
                        {
                            link:"Subscribe"
                        }
                    ]
                }
            ],
            slider:[{
                sli:[{
                    sl1:"Education Courses.",
                    sl2:"Study For Better Future",
                    sl3:"Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi, Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante. Morbi At Dui Nisl.",
                }]
            }],
            header:[
                {
                   ha1:" Build Your Career With Our Education System",
                   ha2:"Facillities",
                   ha3:"Education",
                   ha4:"Graduation",
                   ha5:"Learning",
                   ha6:"Success",
                  
                }
            ],
            Services:[
                {
                    ser1:"Our Services",
                    ser2:"QUALITY EDUCATION",
                    ser3:"Proin varius pellentesque nunc tincidunt ante. Init id lacus",
                    ser4:"EXPERIENCED STAFF",
                    ser5:"AC CLASSROOMS",
                    ser6:" STUDY CERTIFICATE",
                    ser7:"STUDY MATERIALS",
                    ser8:"LIBRARY BOOKS",
                    ser9:"Why Choose Us",
                    ser10:"STUDY CERTIFICATE",
                    ser11:"Onec consequat sapien amet leo cur sus rhoncus. Nullam dui mi Donec at nunc enim. Proin at iaculis ",
                    ser12:"QUALITY STAFF",
                    ser13:"SPACIOUS LIBRARY"
                }
            ],
            Parents:[
                {
                    sli2:[
                        {
                            
                        }
                    ]
                }
            ],
            footer:[
                {
                    fot1:" Subscribe To Our Newsletter",
                    fot2:"we never share your email with anyone else ",
                    fot3:" © 2019 Child Learn. All Rights Reserved | Design By JUNAID ANWAR."
                }
            ]
           
        
    
        }
    ]
  );
  app.get("/users", (req, res) => {
    // res.sendFile(users.html);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server is listening on port 3000/5000/6000");
});
