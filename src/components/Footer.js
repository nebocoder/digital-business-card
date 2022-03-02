import twitterLogo from '../images/twitter.png';
import facebookLogo from '../images/facebook.png';
import instagramLogo from '../images/instagram.png';
import githubLogo from '../images/github.png';

export default function Footer() {
  return (
    <div class="footer--section">
      <ul class="footer--section__list">
        <li class="footer--list__item">
          <img src={twitterLogo} />
        </li>
        <li class="footer--list__item">
          <img src={facebookLogo} />
        </li>
        <li class="footer--list__item">
          <img src={instagramLogo} />
        </li>
        <li class="footer--list__item">
          <img src={githubLogo} />
        </li>
      </ul>
    </div>
  );
}
