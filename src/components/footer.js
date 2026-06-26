import "../css/footer.css";
import instagramIcon from "../media/images/instagramIcon.png";
import slackIcon from "../media/images/slackIcon.ico";
import linkedIn from "../media/images/linkedIn.png";

const ASSET = process.env.PUBLIC_URL || "";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${ASSET}/media/images/logos/dbf-gator-plane-mark-transparent.png`} alt="Design / Build / Fly mark" />
          <div>
            <h2>Design / Build / Fly</h2>
            <p>at the University of Florida</p>
          </div>
        </div>

        <div id="socialLinks">
          <a className="socialLink" target="_blank" rel="noreferrer" href="https://www.instagram.com/gatorsdbf/">
            <img alt="Instagram" className="socialImage" src={instagramIcon} />
            <span className="socialText">@gatorsdbf</span>
          </a>
          <a className="socialLink" target="_blank" rel="noreferrer" href="https://join.slack.com/t/ufdesignbuildfly/signup/">
            <img alt="Slack" className="socialImage" src={slackIcon} />
            <span className="socialText">Join Slack</span>
          </a>
          <a className="socialLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/ufdbf/">
            <img alt="LinkedIn" className="socialImage" src={linkedIn} />
            <span className="socialText">LinkedIn</span>
          </a>
        </div>

        <div className="footer-contact">
          <a href="mailto:ufl.aiaa.dbf@gmail.com">ufl.aiaa.dbf@gmail.com</a>
          <span>Student-built aircraft. Sponsor-supported engineering.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
