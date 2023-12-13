import './topBar.css';

export default function TopBar() {
  return (
    <div className="head">
      <div className="logo">
        <div className="nameT">T</div>
        <div className="nameLogo">HealthCare</div>
      </div>

      <div className="menu">
        <div className="Home">Home</div>
        <div className="menuChapter">Find a doctor</div>
        <div className="menuChapter">Apps</div>
        <div className="menuChapter">Testimonials</div>
        <div className="menuChapter">About us</div>
      </div>
    </div>
  );
}