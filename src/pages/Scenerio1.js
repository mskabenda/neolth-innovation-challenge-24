import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Shelly from '../assets/pages/Character_1_Icon.jpg';
import Sarah from '../assets/pages/Character_2_Icon.jpg';

// Handle Continue Button
const Scenerio1 = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/Scenerio02');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                Midterm season brings heightened academic pressure with heavy workloads and impending exams, challenging students to balance their coursework with personal well-being
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
        description: 'Shelly adeptly employs cognitive restructuring to challenge negative thoughts and practices mindfulness to maintain balance. This proactive approach not only facilitates strong performance on finals but also fosters a sense of well-being, minimizing stress and strain.',
    },
    {
        name: 'Sarah',
        image: Sarah,
        description: 'Faltering under the weight of academic pressures, Sarah forsakes tasks and self-care, resulting in heightened anxiety and subpar performance on finals. This exacerbates strain on her mental health, underscoring the necessity of effective coping mechanisms.',
    },
];

export default Scenerio1;
