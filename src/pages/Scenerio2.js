import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Shelly from '../assets/pages/Character_1_Icon.jpg';
import Sarah from '../assets/pages/Character_2_Icon.jpg';

// Handle Continue Button
const Scenerio02 = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/Scenerio03');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                College students face significant financial concerns, including tuition fees, student loans, and living expenses, which can create considerable stress and uncertainty about their financial future.
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
        description: 'Shelly confronts her financial concerns head-on. By proactively managing her finances and seeking support when needed, she reduces financial stress and maintains stability, allowing her to focus on her studies and personal growth.',
    },
    {
        name: 'Sarah',
        image: Sarah,
        description: 'Sarah struggles to address her financial concerns, avoiding discussions about budgeting or seeking financial assistance. This leads to mounting anxiety and uncertainty about her ability to afford tuition and living expenses, impacting her academic performance and overall well-being.',
    },
];

export default Scenerio02;
