import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Update from '../assets/pages/update_icon.jpg';

// Handle Continue Button
const Updates = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                Thank you for using this tool! Looking ahead, here are some updates for the stress management feature!
                </p>
                {characters.map((character) => (
                    <div className="profile d-flex align-items-center mb-4" key={character.name}>
                        <img src={character.image} alt={character.name} className="rounded shadow-sm me-3" style={{ width: '100px', height: '100px' }} />
                        <div className="description text-start">
                            <h3 className="h5 mb-2">{character.name} ({character.name === 'Personalized Scenarios:' ? 'Update' : 'Update'}):</h3>
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
        name: 'Personalized Scenarios: ',
        image: Update,
        description: 'Gain insights tailored to your specific stressors.',
    },
    {
        name: 'Peer Support Thread:',
        image: Update,
        description: 'Engage in discussions with fellow students about challenging negative thought patterns.',
    },
];

export default Updates;