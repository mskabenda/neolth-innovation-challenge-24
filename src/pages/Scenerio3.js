import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Shelly from '../assets/pages/Character_1_Icon.jpg';
import Sarah from '../assets/pages/Character_2_Icon.jpg';

// Handle Continue Button
const Scenerio03 = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/Scenerio04');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                    Navigating social relationships presents college students with various challenges and opportunities for personal growth.
                </p>
                {characters.map((character) => (
                    <div className="profile d-flex align-items-center mb-4" key={character.name}>
                        <img src={character.image} alt={character.name} className="rounded shadow-sm me-3" style={{ width: '100px', height: '100px' }} />
                        <div className="description text-start">
                            <h3 className="h5 mb-2">{character.name} ({character.name === 'Shelly' ? 'Healthy' : 'Unhealthy'}):</h3>
                            <p>{character.description}</p>
                        </div>
                    </div>
                ))}
                <ContinueButton onClick={handleContinue} />
            </div>
        </div>
    );
};

const characters = [
    {
        name: 'Shelly',
        image: Shelly,
        description: 'Shelly actively engages in building and maintaining healthy social relationships. By prioritizing healthy communication and mutual respect, Shelly experiences positive social interactions that enhance her well-being and contribute to her personal development.',
    },
    {
        name: 'Sarah',
        image: Sarah,
        description: 'Struggling to navigate social relationships, Sarah experiences difficulty in establishing boundaries and communicating effectively with others. Her challenges contribute to heightened stress and impact her overall well-being and relationships creating more stress.',
    },
];

export default Scenerio03;
