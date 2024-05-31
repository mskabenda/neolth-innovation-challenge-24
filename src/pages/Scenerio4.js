import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/pages.css';
import ContinueButton from '../components/button';
import Shelly from '../assets/pages/Character_1_Icon.jpg';
import Sarah from '../assets/pages/Character_2_Icon.jpg';

// Handle Continue Button
const Scenerio04 = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/Scenerio05');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="meet-container p-4 bg-white shadow rounded">
                <p className="scenario-text text-center mb-4">
                Balancing studies, work, and personal life demands effective time management skills, posing a challenge for college students.
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
        description: 'Shelly prioritizes tasks, sets realistic goals, and practices self-discipline in managing her time effectively. By establishing boundaries, scheduling dedicated study and relaxation periods, Shelly experiences a balanced lifestyle that enhances her academic performance.',
    },
    {
        name: 'Sarah',
        image: Sarah,
        description: 'Struggling with time management, Sarah faces overwhelm and stress, falls behind in classes, stops clocking in to work, and can no longer maintain her friendships impacting her performance and well-being, ',
    },
];

export default Scenerio04;
