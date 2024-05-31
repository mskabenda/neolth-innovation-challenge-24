import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Shelly from '../assets/pages/Character_1_Icon.jpg';
import Sarah from '../assets/pages/Character_2_Icon.jpg';

// Handle Continue Button
const Meettwo = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/Scenerio01');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                    To help you understand the impact of healthy versus unhealthy coping skills, we introduce Shelly and Sarah.
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
        description: 'Shelly challenges her thoughts and behaviors using CBT and DBT techniques. She seeks support, practices mindfulness, and maintains balance, helping her thrive in college.',
    },
    {
        name: 'Sarah',
        image: Sarah,
        description: 'Sarah struggles with negative patterns and gives into maladaptive thoughts and behaviors. She avoids seeking help and neglects self-care, leading to increased stress and anxiety.',
    },
];

export default Meettwo;
