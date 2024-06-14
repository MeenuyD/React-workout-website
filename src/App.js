import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import OptionsMenu from './Components/OptionsMenu';
import WorkoutModal from './Components/WorkoutModal';
import WorkoutItem from './Components/WorkoutItem';

function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showCardioModal, setShowCardioModal] = useState(false);
  const [showStrengthModal, setShowStrengthModal] = useState(false);
  const [showSportModal, setShowSportModal] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  const handleAddClick = () => {
    setShowOptions(!showOptions);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleCardioClick = () => {
    setShowCardioModal(true);
    setShowOptions(false);
  };

  const handleStrengthClick = () => {
    setShowStrengthModal(true);
    setShowOptions(false);
  };

  const handleSportClick = () => {
    setShowSportModal(true);
    setShowOptions(false);
  };

  const handleSaveWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
    setShowCardioModal(false);
    setShowStrengthModal(false);
    setShowSportModal(false);
  };

  const handleDeleteWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  return (
    <div className={`App h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        <div className="p-2 rounded-full bg-gray-800 dark:bg-gray-200">
          <FontAwesomeIcon 
            icon={faBars} 
            className="text-white dark:text-gray-800 text-xl cursor-pointer" 
            onClick={handleMenuClick} 
          />
        </div>
        <div className="p-2 rounded-full bg-gray-800 dark:bg-gray-200">
          <FontAwesomeIcon 
            icon={darkMode ? faSun : faMoon} 
            className="text-white dark:text-gray-800 text-xl cursor-pointer" 
            onClick={toggleDarkMode} 
          />
        </div>
        <div className="p-2 rounded-full bg-gray-800 dark:bg-gray-200">
          <FontAwesomeIcon 
            icon={faPlus} 
            className="text-white dark:text-gray-800 text-xl cursor-pointer" 
            onClick={handleAddClick} 
          />
        </div>
      </div>
      {showOptions && (
        <OptionsMenu 
          onCardioClick={handleCardioClick} 
          onStrengthClick={handleStrengthClick} 
          onSportClick={handleSportClick} 
        />
      )}
      {showCardioModal && (
        <WorkoutModal
          title="Create New Cardio Workout"
          options={['Running', 'Swimming', 'Cycling', 'Walking', 'Jogging', 'Other']}
          onSave={handleSaveWorkout}
          onClose={() => setShowCardioModal(false)}
        />
      )}
      {showStrengthModal && (
        <WorkoutModal
          title="Create New Strength Workout"
          options={['Push ups', 'Sit ups', 'Squats', 'Pull ups', 'Weight lifting', 'Other']}
          onSave={handleSaveWorkout}
          onClose={() => setShowStrengthModal(false)}
        />
      )}
      {showSportModal && (
        <WorkoutModal
          title="Create New Sport Workout"
          options={['Football', 'Basketball', 'Tennis', 'Volleyball', 'Badminton', 'Other']}
          onSave={handleSaveWorkout}
          onClose={() => setShowSportModal(false)}
        />
      )}
      <div className="mt-20 pt-10 dark:border-gray-700">
        {workouts.map((workout, index) => (
          <WorkoutItem 
            key={index} 
            workout={workout} 
            onDelete={() => handleDeleteWorkout(index)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;

