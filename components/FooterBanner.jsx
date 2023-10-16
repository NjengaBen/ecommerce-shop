import Link from "next/link";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% OFF</p>
          <h3>largeText1</h3>
          <h3>largeText2</h3>
          <p>14 Aug-10 Sep</p>
        </div>
        <div className="right">
          <p>smallText</p>
          <h3>midText</h3>
          <p>desc</p>
          <Link href="/">
            <button type="button">buttonText</button>
          </Link>
        </div>

        {/* <img src="/" className="footer-banner-image" /> */}
      </div>
    </div>
  );
};

export default FooterBanner;
