import React from 'react';
import './Footer.scss';
import appStoreImage from '../../assets/images/MobileScreen/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.png';
import playStoreImage from '../../assets/images/MobileScreen/Group 16773.png';
import logo from '../../assets/images/PHOTO-2021-06-16-18-42-19_copy_2.png';
import icon1 from '../../assets/images/MobileScreen/Group 17242@2x.png';
import icon2 from '../../assets/images/MobileScreen/Mask Group 456.png';
import icon3 from '../../assets/images/MobileScreen/mastercard-logo-mastercard-logo-png-vector-download-19.png';
import newIcon1 from '../../assets/images/icons/Group 17218.png';
import newIcon2 from '../../assets/images/icons/Group 17222.png';
import newIcon3 from '../../assets/images/icons/Group 17098.png';
import newIcon4 from '../../assets/images/icons/Group 17218.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid py-5">
        {/* Separator Line */}
        <div className="footer-separator mb-4"></div>

        <div className="container d-md-none">
          {/* Mobile Version */}
          <div className="footer-row row mb-4 text-center">
            <div className="col-12 mb-4">
              <img src={logo} alt="Logo" className="footer-logo mx-auto" />
            </div>
            <div className="col-12">
              <h2 className="footer-heading">Join us for an <br /> unforgettable experience</h2>
              <h6 className="footer-download-text">DOWNLOAD THE GROOVE</h6>
              <div className="footer-download-buttons d-flex justify-content-center">
                <img src={appStoreImage} alt="Apple Store" className="me-2" />
                <img src={playStoreImage} alt="Play Store" />
              </div>
            </div>
          </div>

          <div className="footer-row row mb-4 text-left">
            <div className="col-12">
              <h3 className="footer-column-heading">LOCATION</h3>
              <p>Al-Hizam Park</p>
              <p>Al-Semairi, Yanbu Al Bahr 46455</p>
              <p>Riyadh, Saudi Arabia</p>
            </div>
            <div className="col-12">
              <h3 className="footer-column-heading">WORKING HOURS</h3>
              <p>Sun until Thurs: 4:00 PM</p>
              <p>Fri & Sat: 2:30 PM</p>
              <h3 className="footer-column-heading">Gates Close at:</h3>
              <p>Thu & Fri: 12:30 AM</p>
            </div>
            <div className="col-12">
              <h3 className="footer-column-heading">GUEST SERVICE CALL</h3>
              <h6>cc@thegroves-sa.com</h6>
              <p>920001672</p>
            </div>
          </div>

          <div className="footer-row row mb-4">
            <div className="col-12 text-left">
              <div className="footer-icons d-flex justify-content-start flex-wrap">
                <img src={newIcon1} alt="Icon 1" className="me-2" style={{ width: '27px', height: '30px' }} />
                <img src={newIcon2} alt="Icon 2" className="me-2" style={{ width: '30px', height: '30px' }} />
                <img src={newIcon3} alt="Icon 3" className="me-2" style={{ width: '29px', height: '30px' }} />
                <img src={newIcon4} alt="Icon 4" style={{ width: '30px', height: '28px' }} />
              </div>
            </div>
          </div>

          <div className="footer-row row">
            <div className="col-12 text-left">
              <div className="d-flex flex-row flex-wrap">
                <h3 className="footer-column-heading me-3">Terms & Conditions</h3>
                <h3 className="footer-column-heading me-3">Privacy Policy</h3>
                <h3 className="footer-column-heading">@2023 The Groves for Entertainment</h3>
              </div>
              <div className="footer-icons d-flex justify-content-start mt-2">
                <img src={icon1} alt="Icon 1" className="me-2" style={{ width: '43px', height: '14px' }} />
                <img src={icon2} alt="Icon 2" className="me-2" style={{ width: '31px', height: '31px' }} />
                <img src={icon3} alt="Icon 3" className="me-2" style={{ width: '26px', height: '26px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="container d-none d-md-block">
          {/* Desktop Version */}
          {/* Row 1 */}
          <div className="footer-row row align-items-center mb-4">
            <div className="col-md-6">
              <h2 className="footer-heading">Join us for an <br /> unforgettable experience</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <h6 className="footer-download-text">DOWNLOAD THE GROOVE</h6>
              <div className="footer-download-buttons d-flex justify-content-end">
                <img src={appStoreImage} alt="Apple Store" className="me-2" />
                <img src={playStoreImage} alt="Play Store" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="footer-row row mb-4">
            <div className="col-md-4">
              <h3 className="footer-column-heading">LOCATION</h3>
              <p>Al-Hizam Park</p>
              <p>Al-Semairi, Yanbu Al Bahr 46455</p>
              <p>Riyadh, Saudi Arabia</p>
            </div>
            <div className="col-md-4">
              <h3 className="footer-column-heading">WORKING HOURS</h3>
              <p>Sun until Thurs: 4:00 PM</p>
              <p>Fri & Sat: 2:30 PM</p>
              <h3 className="footer-column-heading">Gates Close at:</h3>
              <p>Thu & Fri: 12:30 AM</p>
            </div>
            <div className="col-md-4">
              <h3 className="footer-column-heading">GUEST SERVICE CALL</h3>
              <h6>cc@thegroves-sa.com</h6>
              <p>920001672</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="footer-row row mb-4">
            <div className="col-md-6">
              <img src={logo} alt="Logo" className="footer-logo" />
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-icons d-flex justify-content-end">
                <img src={newIcon1} alt="Icon 1" className="me-2" style={{ width: '27px', height: '30px' }} />
                <img src={newIcon2} alt="Icon 2" className="me-2" style={{ width: '30px', height: '30px' }} />
                <img src={newIcon3} alt="Icon 3" className="me-2" style={{ width: '29px', height: '30px' }} />
                <img src={newIcon4} alt="Icon 4" style={{ width: '30px', height: '28px' }} />
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="footer-row row align-items-center mb-4">
            <div className="col-md-6 col-12">
              <div className="d-flex flex-column flex-md-row">
                <h3 className="footer-column-heading me-md-3">Terms & Conditions</h3>
                <h3 className="footer-column-heading me-md-3">Privacy Policy</h3>
                <h3 className="footer-column-heading">@2023 The Groves for Entertainment</h3>
              </div>
            </div>
            <div className="col-md-6 col-12 text-md-end">
              <div className="footer-icons d-flex justify-content-end">
                <img src={icon1} alt="Icon 1" className="me-2" style={{ width: '43px', height: '14px' }} />
                <img src={icon2} alt="Icon 2" className="me-2" style={{ width: '31px', height: '31px' }} />
                <img src={icon3} alt="Icon 3" className="me-2" style={{ width: '26px', height: '26px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
