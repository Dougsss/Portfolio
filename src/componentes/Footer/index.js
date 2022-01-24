/* eslint-disable no-undef */
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import './style.css';

const Footer = ({empresa}) => {
  const generateDateString = () => {
    const creationYear = '2021';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
  }
  return(
    <footer id="footer">
      <ul className="social-list">
        <li>
          <a href="https://www.facebook.com/douglas.araujo.921/" >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/dougs.araujo/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/douglas-araujo-393998179">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className="copy-right">
        <span>{empresa}</span> 
        Todos os direitos reservados. &copy; Copyright {generateDateString()}
      </p>
    </footer>
  )
}
export default Footer;