import React, { useState } from 'react';
import axios from 'axios';

const ProjectRequestForm = () => {

  const API = "https://pneumatic-studios.onrender.com";  // ✅ Backend base URL

  const [formData, setFormData] = useState({
    companyProjectName: '',
    websiteSocialLink: '',
    explorations: [],
    productStage: 'Early Idea',
    hopedAchievement: '',
    timeline: 'ASAP (within 1-2 months)',
    budgetRange: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({}); // For per-field errors

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        explorations: checked
          ? [...prev.explorations, value]
          : prev.explorations.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear field error on change
    setFieldErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setFieldErrors({});

    try {
      const response = await axios.post('http://localhost:5001/api/project-requests', formData);
      setMessage(response.data.message); // "Submitted successfully!"
      // Reset form
      setFormData({
        companyProjectName: '',
        websiteSocialLink: '',
        explorations: [],
        productStage: 'Early Idea',
        hopedAchievement: '',
        timeline: 'ASAP (within 1-2 months)',
        budgetRange: '',
        additionalInfo: ''
      });
    } catch (error) {
      const errData = error.response?.data;
      if (errData.errors) {
        setFieldErrors(errData.errors); // Per-field errors from backend
      }
      setMessage(errData.message || 'Submission failed—try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Project Request Form</h1>
      
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Company / Project Name *</label>
        <input 
          type="text" 
          name="companyProjectName" 
          value={formData.companyProjectName} 
          onChange={handleChange} 
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
        />
        {fieldErrors.companyProjectName && <p className="text-red-500 text-sm mt-1">{fieldErrors.companyProjectName}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Website or Social Link (optional)</label>
        <input 
          type="url" 
          name="websiteSocialLink" 
          value={formData.websiteSocialLink} 
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
        />
        {fieldErrors.websiteSocialLink && <p className="text-red-500 text-sm mt-1">{fieldErrors.websiteSocialLink}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">What you're exploring</label>
        {['Brand Strategy & Identity', 'UI/UX Design', 'Campaign Launch', 'Marketing & Growth'].map(option => (
          <label key={option} className="flex items-center mb-2">
            <input 
              type="checkbox" 
              name="explorations" 
              value={option} 
              checked={formData.explorations.includes(option)} 
              onChange={handleChange}
              className="mr-2" 
            />
            {option}
          </label>
        ))}
        {fieldErrors.explorations && <p className="text-red-500 text-sm mt-1">{fieldErrors.explorations}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Stage of Your Product *</label>
        {['Early Idea', 'Live Product/Expanding'].map(option => (
          <label key={option} className="flex items-center mb-2">
            <input 
              type="radio" 
              name="productStage" 
              value={option} 
              checked={formData.productStage === option} 
              onChange={handleChange} 
              required
              className="mr-2" 
            />
            {option}
          </label>
        ))}
        {fieldErrors.productStage && <p className="text-red-500 text-sm mt-1">{fieldErrors.productStage}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">What are you hoping to achieve?</label>
        <textarea 
          name="hopedAchievement" 
          value={formData.hopedAchievement} 
          onChange={handleChange} 
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
        />
        {fieldErrors.hopedAchievement && <p className="text-red-500 text-sm mt-1">{fieldErrors.hopedAchievement}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Timeline you're aiming for *</label>
        {['ASAP (within 1-2 months)', 'Near Future (3-6 months)', 'Later Exploratory'].map(option => (
          <label key={option} className="flex items-center mb-2">
            <input 
              type="radio" 
              name="timeline" 
              value={option} 
              checked={formData.timeline === option} 
              onChange={handleChange} 
              required
              className="mr-2" 
            />
            {option}
          </label>
        ))}
        {fieldErrors.timeline && <p className="text-red-500 text-sm mt-1">{fieldErrors.timeline}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Budget range</label>
        <input 
          type="text" 
          name="budgetRange" 
          value={formData.budgetRange} 
          onChange={handleChange} 
          placeholder="e.g., $5,000 - $10,000"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
        />
        {fieldErrors.budgetRange && <p className="text-red-500 text-sm mt-1">{fieldErrors.budgetRange}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Anything else we should know?</label>
        <textarea 
          name="additionalInfo" 
          value={formData.additionalInfo} 
          onChange={handleChange} 
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
        />
        {fieldErrors.additionalInfo && <p className="text-red-500 text-sm mt-1">{fieldErrors.additionalInfo}</p>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {message && <p className={`mt-4 text-center ${message.includes('successfully') || message.includes('Thanks') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}

      <p className="text-xs text-gray-500 text-center mt-4">We treat all personal information with care.</p>
    </form>
  );
};

export default ProjectRequestForm;