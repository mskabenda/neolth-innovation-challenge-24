import React from 'react';
import './css/footer.css'

// Import icon images
import dashboardIcon from '../assets/footer/dashboard_icon.jpg';
import calendarIcon from '../assets/footer/calender_icon.jpg';
import practicesIcon from '../assets/footer/practices_icon.jpg';
import communityIcon from '../assets/footer/community_icon.jpg';
import reportsIcon from '../assets/footer/reports_icon.jpg';

function Footer() {
  const icons = [
    { name: 'Dashboard', image: dashboardIcon },
    { name: 'Calendar', image: calendarIcon },
    { name: 'Practices', image: practicesIcon },
    { name: 'Community', image: communityIcon },
    { name: 'Reports', image: reportsIcon },
  ];

  return (
  <footer className="footer">
    <div className="footer-container">
      {icons.map((icon) => (
        <div className="footer-icon" key={icon.name}>
          <img src={icon.image} alt={icon.name} />
          <p className="icon-name">{icon.name}</p>
        </div>
      ))}
    </div>
  </footer>
);
}

export default Footer;