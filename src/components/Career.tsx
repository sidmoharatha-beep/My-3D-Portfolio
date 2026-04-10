import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Desktop Support Engineer</h4>
                <h5>TVS Electronics Limited · Bhubaneswar</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Handling hardware, software & network incident resolution. Managing
              IT Asset lifecycle, Software License compliance, Active Directory &
              user access management, and endpoint security hardening.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer</h4>
                <h5>Precision Informatics Pvt Ltd · Bhubaneswar</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              System configuration and deployment, infrastructure support and
              monitoring in a fast-paced IT services environment.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Consultant</h4>
                <h5>CMS IT Services · Bhubaneswar</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              IT infrastructure consulting and end-user support. Network
              troubleshooting across LAN/WAN, VPN, and TCP/IP environments.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Support Engineer</h4>
                <h5>Associate Ujaala Corporates Pvt Ltd.</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              End-to-end IT support & troubleshooting, data backup and disaster
              recovery, endpoint security, and IT operations documentation and
              reporting.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
