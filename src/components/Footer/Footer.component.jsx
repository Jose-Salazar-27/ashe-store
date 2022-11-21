// External libraries dependencies
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

// Components and styled components
import { StyledFooter } from './footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='footer-container'>
        <div className='footer-section'>
          <h5>Store info</h5>
          <h6>Addres</h6>
          <p>Foobar country, baz city</p>

          <h6>Call us</h6>
          <p>(+00) 123-456-789</p>

          <h6>Mail Us</h6>
          <p>thud@email.com</p>
        </div>

        <div className='footer-section'>
          <h5>Policies & Info</h5>
          <p>My Account</p>
          <p>Contact Us</p>
          <p>FAQs </p>
        </div>

        <div className='footer-section'>
          <h5>Information</h5>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className='social-media'>
        <h5>Follow us</h5>
        <BsFacebook className='social-media-icon' />
        <BsInstagram className='social-media-icon' />
        <BsLinkedin className='social-media-icon' />
        <BsTwitter className='social-media-icon' />
      </div>
    </StyledFooter>
  );
};
