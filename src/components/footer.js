import "../css/footer.css";
import instagramIcon from "../media/images/instagramIcon.png";
import slackIcon from "../media/images/slackIcon.ico";

function Footer() {
  return (
    <div className="footer">
      <div id="socialLinks">
        <a
          className="socialLink"
          target="_about"
          href="https://www.instagram.com/gatorsdbf/"
        >
          <img alt="instagram_icon" className="socialImage" src={instagramIcon} />
          <span className="socialText">Instagram</span>
        </a>

        <a
          className="socialLink"
          target="_about"
          href="https://join.slack.com/t/ufdesignbuildfly/signup\"
        >
          <img alt="slack_icon" className="socialImage" src={slackIcon} />
          <span className="socialText">Slack</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
