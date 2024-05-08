import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <span className="text-light">© 2024 My App</span>
            </div>
            <div className="col-auto">
              <div className="social-links mt-2">
                <a href="https://www.facebook.com" className="text-light me-3">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com" className="text-light me-3">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com" className="text-light me-3">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
