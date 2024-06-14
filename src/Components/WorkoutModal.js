import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function WorkoutModal({ title, options, onSave, onClose }) {
  const [type, setType] = useState("");
  const [metric, setMetric] = useState("time"); 
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSave = () => {
    if (!type || !value) {
      setShowError(true);
      return;
    }

    const workout = {
      type: type || options[0],
      [metric]: value || "0",
      date: new Date().toLocaleDateString(),
    };
    onSave(workout);
    onClose(); 
  };

  const handleMetricChange = (e) => {
    setMetric(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
        <div className="flex justify-end mb-4">
          <FontAwesomeIcon icon={faTimes} className="text-black dark:text-white cursor-pointer" onClick={onClose} />
        </div>
        <h2 className="text-black dark:text-white mb-4">{title}</h2>
        <div className="mb-4">
          <label className="block text-black dark:text-gray-300 mb-2">Describe your workout</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" placeholder="Describe your workout"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-black dark:text-gray-300 mb-2">Name *</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" onChange={(e) => setType(e.target.value)}>
            <option value="">Select a {title.split(" ")[2]}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-black dark:text-gray-300 mb-2">{title.includes('Strength') ? 'Reps *' : 'Time (in minutes) *'}</label>
          <input type="number" className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" placeholder={title.includes('Strength') ? "Number of reps" : "Time in minutes"} onChange={(e) => setValue(e.target.value)} />
        </div>
        {title.includes('Strength') && (
          <div className="mb-4">
            <label className="block text-black dark:text-gray-300 mb-2">Metric</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white" value={metric} onChange={handleMetricChange}>
              <option value="reps">Reps</option>
            </select>
          </div>
        )}
        {showError && (
          <div className="mb-4 text-red-600 dark:text-red-400">
            * Please fill out all required fields.
          </div>
        )}
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={handleSave}>Save</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutModal;
