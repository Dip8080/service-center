import React from 'react';

const Contact = () => {
    return (
        <section className="container my-5 p-4">
        <h2 className="text-center">Contact</h2>
       <div className="row mt-5">
          <div className="col-lg-12 col-sm-12">
           
            <p>'Space' defines and determines the mood of the moment. It spreads its spell, resonating an enchanting aura all around. We discover ourselves in the midst of something that only appeals to our sences. That's why, this time, we have created spaces that aim to enliven your occassions.
            </p>
            <div>
              <form>
                <div className="mb-1">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control bg-gray" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn cstm_btn_color">Submit</button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    );
};

export default Contact 