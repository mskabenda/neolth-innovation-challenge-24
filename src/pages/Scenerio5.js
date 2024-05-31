import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Shelly from '../assets/pages/Character_1_Icon.jpg';
import Sarah from '../assets/pages/Character_2_Icon.jpg';

// Handle Continue Button
const Scenerio5 = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/Updates');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                Concerns about future job prospects and career paths contribute to career uncertainty among college students.
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
        description: 'Applying principles from Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT), Shelly explores her interests, seeks mentorship, and sets short-term goals, fostering a sense of direction and confidence in her career journey.',
    },
    {
        name: 'Sarah',
        image: Sarah,
        description: 'Struggling with career uncertainty, Sarah experiences anxiety and indecision, impacting her confidence and well-being. This underscores the importance of addressing career concerns through therapeutic interventions like CBT and DBT to navigate uncertainty effectively.',
    },
];

export default Scenerio5;
