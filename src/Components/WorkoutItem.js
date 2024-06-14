import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faTrash } from '@fortawesome/free-solid-svg-icons';

const WorkoutItem = ({ workout, onDelete }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHeartbeat} className="text-black dark:text-white mr-2" />
          <div>
            <h3 className="text-black dark:text-white">{workout.type}</h3>
            <p className="text-gray-800 dark:text-gray-300">Time: {workout.time} min</p>
            <p className="text-gray-800 dark:text-gray-300">Date: {workout.date}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faTrash} className="text-black dark:text-white cursor-pointer" onClick={onDelete} />
      </div>
    </div>
  );
};

export default WorkoutItem;
