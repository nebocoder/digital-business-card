import portraitImage from '../images/portrait.png';
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';

export default function Info() {
  return (
    <div class="info--section">
      <img class="info--section__image" src={portraitImage} />
      <h1 class="info--section__title">Laura Smith</h1>
      <p class="info--section__subtitle">Frontend Developer</p>
      <small class="info--section__website">laurasmith.website</small>

      <div class="info--section__buttons">
        <button class="info--button__email">
          <img src={emailIcon} />
          Email
        </button>
        <button class="info--button__linkedin">
          <img src={linkedinIcon} />
          Linkedin
        </button>
      </div>
    </div>
  );
}
