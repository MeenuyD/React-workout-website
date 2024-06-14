import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';

const OptionsMenu = ({ onCardioClick, onStrengthClick, onSportClick }) => {
  return (
    <div className="absolute top-16 right-4 bg-gray-800 dark:bg-gray-200 rounded-lg shadow-lg p-4 space-y-2">
      <div className="flex items-center p-4 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-300 rounded-lg" onClick={onCardioClick}>
        <FontAwesomeIcon icon={faHeartbeat} className="text-white dark:text-gray-800 mr-2" />
        <span className="text-white dark:text-gray-800">Cardio</span>
      </div>
      <div className="flex items-center p-4 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-300 rounded-lg" onClick={onStrengthClick}>
        <FontAwesomeIcon icon={faDumbbell} className="text-white dark:text-gray-800 mr-2" />
        <span className="text-white dark:text-gray-800">Strength</span>
      </div>
      <div className="flex items-center p-4 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-300 rounded-lg" onClick={onSportClick}>
        <FontAwesomeIcon icon={faRunning} className="text-white dark:text-gray-800 mr-2" />
        <span className="text-white dark:text-gray-800">Sport</span>
      </div>
    </div>
  );
};

export default OptionsMenu;
