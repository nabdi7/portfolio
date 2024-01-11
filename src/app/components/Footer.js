const Footer = () => {
  const YEAR = new Date().getFullYear();

  return (
    <div style={{ textAlign: 'center', marginTop: '8rem' }}>
      <small>
        <time>{YEAR}</time> © Najib Abdi.
        {/* <a href="/feed.xml">RSS</a> */}
      </small>
      <style jsx>{`
        small {
          display: block;
        }
        a {
          display: inline-block;
          margin-left: 10px; // Adjust the margin as needed
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
