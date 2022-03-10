import twitterLogo from '../images/twitter.png';
import facebookLogo from '../images/facebook.png';
import instagramLogo from '../images/instagram.png';
import githubLogo from '../images/github.png';

export default function Footer() {
  return (
    <div className="footer--section">
      <ul className="footer--section__list">
        <li className="footer--list__item">
          <a href="twitter.com" target="_blank">
            <img src={twitterLogo} />
          </a>
        </li>
        <li className="footer--list__item">
          <a href="facebook.com" target="_blank">
            <img src={facebookLogo} />
          </a>
        </li>
        <li className="footer--list__item">
          <a href="instagram.com" target="_blank">
            <img src={instagramLogo} />
          </a>
        </li>
        <li className="footer--list__item">
          <a href="github.com" target="_blank">
            <img src={githubLogo} />
          </a>
        </li>
      </ul>
    </div>
  );
}
