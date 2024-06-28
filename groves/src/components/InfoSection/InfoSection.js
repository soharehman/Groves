import React from 'react';
import './InfoSection.scss';
import infoImage from '../../assets/images/eb8c9dfc98cefab4ba6ceb811eada199-removebg-preview@2x.png';
import arrowIcon from '../../assets/images/icons/Path 41544.png'; // Ensure the correct path

const InfoSection = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="infosection container py-5 d-none d-md-block">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="infosection-image text-end">
              <img src={infoImage} alt="Info Section" className="img-fluid rounded-3" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="infosection-content mx-auto px-3">
              <h2 className="infosection-subheading">EXPERIENCE THE GROVES</h2>
              <h2 className="infosection-heading">Find your place</h2>
              <p className="infosection-description">
                Our interactive map will show you the way to the <br />
                shops and restaurants that you want to see.
              </p>
              <button className="infosection-button btn btn-gradient">
              Open the Map
                <img src={arrowIcon} alt="Arrow Icon" className="infosection-arrow-icon ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="infosection container py-5 d-block d-md-none">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="infosection-content text-center px-3">
              <h2 className="infosection-subheading">EXPERIENCE THE GROVES</h2>
              <h2 className="infosection-heading">Find your place</h2>
              <p className="infosection-description">
                Our interactive map will show you the way to the <br />
                shops and restaurants that you want to see.
              </p>
              <button className="infosection-button btn btn-gradient">
          Open the Map
                <img src={arrowIcon} alt="Arrow Icon" className="infosection-arrow-icon ms-2" />
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="infosection-image text-center mt-4">
              <img src={infoImage} alt="Info Section" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
