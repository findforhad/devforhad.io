import React from "react";
import "./index.scss";

const WhoIam = () => {
  return (
    <main className="container mt-5">
      <h4 className="text-center" style={{ fontWeight: 300 }}>
        WHO I AM
      </h4>
      <hr />
      <div className="row">
        <div className="col-md-6 col-sm-8">
          <h6 style={{ fontWeight: 200, lineHeight: "30px" }}>
            I am a highly talented, experienced, professional and cooperative
            software engineer, I am working in programming and web world for
            more than 3 years. Now I am looking for a fully distributed team
            where people are working all around the world. I assure you for a
            wide range of quality IT services. Elegant Web Frontend, Backend,
            and Mobile app development are the major filed I am expert in. I am
            specialized in ReactJS, React Native, NodeJS, MongoDB, SQL,
            Javascript, ECMAScript Standard. I am able to balance lots of
            concerns in my field. I believe sharing is a way to sharpen our
            memory. I love remote job because I love the flexibility. I always
            enjoy new challenges. Please hire me if your company is looking for
            a dedicated and hard worker Tech Guy.
          </h6>
        </div>
        <div className="col-md-6 col-sm-8 skill">
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              Android App Development | React Native
            </h6>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              iOS App Development | React Native
            </h6>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              {" "}
              Web Frontend Development | React Redux
            </h6>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "97%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
          <div className="progress-item">
            <h6 style={{ fontWeight: 200 }}>
              Web Backend Development | NodeJS
            </h6>

            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhoIam;
