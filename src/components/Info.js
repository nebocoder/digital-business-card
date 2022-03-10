import portraitImage from '../images/portrait.png';
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';

export default function Info() {
  return (
    <div className="info--section">
      <img className="info--section__image" src={portraitImage} />
      <h1 className="info--section__title">Laura Smith</h1>
      <p className="info--section__subtitle">Frontend Developer</p>
      <small className="info--section__website">laurasmith.website</small>

      <div className="info--section__buttons">
        <button className="info--button__email">
          <img src={emailIcon} />
          Email
        </button>
        <button className="info--button__linkedin">
          <img src={linkedinIcon} />
          Linkedin
        </button>
      </div>
    </div>
  );
}
