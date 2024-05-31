// Import necessary libraries and components
import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import '../pages/css/Home.css'; // Import CSS file for styling the Home component
import ContinueButton from '../components/button'; // Import ContinueButton component

// Define the Home component
const Home = () => {
  // Define state for checkbox values, initialized to an array of false values
  const [isChecked, setIsChecked] = useState([false, false, false, false, false]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle checkbox changes
  const handleCheckboxChange = (index) => {
    const newChecked = [...isChecked]; // Copy the current state
    newChecked[index] = !newChecked[index]; // Toggle the checked state of the checkbox at the given index
    setIsChecked(newChecked); // Update the state
  };

  // Function to handle continue button click
  const handleContinue = () => {
    navigate('/meet_two'); // Navigate to the '/meet_two' route
  };


  return (
    <div className="stress-assessor-container">
      <div className="stress-assessor">
        <h1>Stress-Assessor</h1>
        <p>(check-off what you struggle with)</p>
        <form id="stress-form">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox1"
              className="stress-checkbox"
              checked={isChecked[0]}
              onChange={() => handleCheckboxChange(0)}
            />
            <label htmlFor="checkbox1"><b>Academic Pressure:</b> High expectations and heavy workloads.</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox2"
              className="stress-checkbox"
              checked={isChecked[1]}
              onChange={() => handleCheckboxChange(1)}
            />
            <label htmlFor="checkbox2"><b>Financial Concerns:</b> Tuition fees, student loans, and living expenses.</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox3"
              className="stress-checkbox"
              checked={isChecked[2]}
              onChange={() => handleCheckboxChange(2)}
            />
            <label htmlFor="checkbox3"><b>Social Relationships:</b> Navigating friendships, romantic relationships, and social networks.</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox4"
              className="stress-checkbox"
              checked={isChecked[3]}
              onChange={() => handleCheckboxChange(3)}
            />
            <label htmlFor="checkbox4"><b>Time Management:</b> Balancing studies, work, and personal life.</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox5"
              className="stress-checkbox"
              checked={isChecked[4]}
              onChange={() => handleCheckboxChange(4)}
            />
            <label htmlFor="checkbox5"><b>Career Uncertainty:</b> Balancing studies, work, and personal life.</label>
          </div>
        </form>
        <ContinueButton onClick={handleContinue} />
      </div>
    </div>
  );
};

export default Home;