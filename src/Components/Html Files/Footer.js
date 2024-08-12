import React from "react";
import { Link } from "react-router-dom";
import '../Css Files/Footer.css'
function Footer() {
  return (
   
    <div className="containerF">
      {/* Footer */}
      <footer className="text-center text-white">
        {/* Grid container */}
        <div className="container">
          {/* Section: Links */}
          <section className="mt-5">
            {/* Grid row*/}
            <div className="row text-center d-flex justify-content-center pt-5">
              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/LoginPrinciple" className=" color button btn btn-outline-secondary">Principle Login</Link>
                </h6>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/LoginTeacher" className=" color button btn btn-outline-secondary" >Teacher Login</Link>
                </h6>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/LoginStudent" className=" color button btn btn-outline-secondary">Student Login</Link>
                </h6>
              </div>
            
            </div>
         
          </section>
        

          <hr className="my-5" />

          {/* Section: Text */}
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 color">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>
          {/* Section: Text */}

        
        </div>
      

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)",color : "black" }}
        >
          © 2020 Copyright:
          <a className=" color" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    // End of .container
  );
}

export default Footer;
