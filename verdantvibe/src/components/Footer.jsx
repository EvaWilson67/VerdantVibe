import "./css/Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content center columns gallery two">
        <p>&copy; EvaWilson</p>
        <input
          type="button"
          class="back-button"
          value="Back"
          onclick="window.history.back()"
        />
      </div>
    </footer>
  );
}

export default Footer;
