import React from "react";
import "./_footer.scss";
import footerImg from "../../assets/logo-white.png";

const Footer = () => {
  const aboutLinks = [
    { title: "About Us", url: "#" },
    { title: "Contact Us", url: "#" },
    { title: "Blog", url: "#" },
    { title: "Advice Centre", url: "#" },
    { title: "FAQ", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Terms & Conditions", url: "#" }
  ];

  const homeownersLink = [
    { title: "Post a Job", url: "#" },
    { title: "How it Works", url: "#" },
    { title: "Trade Directory", url: "#" },
    { title: "Cost Guides", url: "#" },
    { title: "Homeowner Support", url: "#" },
    { title: "Homeowner Privacy", url: "#" },
    { title: "Terms of Use", url: "#" }
  ];

  const tradesmenLink = [
    { title: "Signup as a Trade", url: "#" },
    { title: "How it Works", url: "#" },
    { title: "My Account", url: "#" },
    { title: "Getting Started", url: "#" },
    { title: "Trade Support", url: "#" },
    { title: "Tradesperson Privacy", url: "#" },
    { title: "Terms of Use", url: "#" }
  ];

  return (
    // footer
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-12 c-border'>
            <div class='section-first'>
              {/* white logo */}
              <a className='footer-logo' href='/'>
                <div className='img-box'>
                  <img src={footerImg} width='30' height='30' alt='logo' />
                </div>
                <div className='f-logo-text'>
                  <span>my</span>
                  <span>job</span>
                  <span>quote</span>
                </div>
              </a>
              <p>
                MyJobQuote connects homeowners with local tradespeople. Hiring a
                tradesperson has never been so easy!
              </p>
              {/* Social */}
              <h3>Follow Us</h3>
              <a
                className='social'
                href='https://www.facebook.com/MyJobQuote'
                target='_blank'
              >
                <i class='fab fa-twitter'></i>
              </a>
              <a
                className='social'
                href='https://twitter.com/MyJobQuote'
                target='_blank'
              >
                <i class='fab fa-facebook-f'></i>
              </a>
            </div>
          </div>
          <div className='col-md-8 link-section'>
            <div className='row'>
              <div className='col-md-4 col-6 section-links'>
                <h2>About Us</h2>
                {aboutLinks.map(link => (
                  <a className='section-link' href={link.url}>
                    {link.title}
                  </a>
                ))}
              </div>
              <div className='col section-links'>
                <h2>Homeowners</h2>

                {homeownersLink.map(link => (
                  <a className='section-link' href={link.url}>
                    {link.title}
                  </a>
                ))}
              </div>
              <div className='col section-links'>
                <h2>Tradesmen</h2>
                {tradesmenLink.map(link => (
                  <a className='section-link' href={link.url}>
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Right Reserved */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-second'>
              <div className='copy-right'>
                <p>Copyright 2020 MyJobQuote.co.uk. All rights reserved</p>

                <p>
                  <a
                    href='https://www.myjobquote.co.uk/privacy-policy'
                    aria-label='Privacy policy'
                  >
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a
                    href='https://www.myjobquote.co.uk/terms-and-conditions'
                    aria-label='Terms and conditions'
                  >
                    Terms and Conditions
                  </a>{" "}
                  |{" "}
                  <a
                    href='https://www.myjobquote.co.uk/sitemap'
                    aria-label='Website sitemap'
                  >
                    Sitemap
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
