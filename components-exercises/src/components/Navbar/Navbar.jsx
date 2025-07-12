import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div class="logo">MyLogo</div>
      <div className="nav-links">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
