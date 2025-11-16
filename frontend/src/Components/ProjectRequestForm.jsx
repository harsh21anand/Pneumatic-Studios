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
  const [fieldErrors, setFieldErrors] = useState({});

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

    setFieldErrors(prev => ({ ...prev, [name]: '' })); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setFieldErrors({});

    try {
      const response = await axios.post(`${API}/api/project-requests`, formData);

      setMessage(response.data.message);

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

      if (errData?.errors) {
        setFieldErrors(errData.errors);
      }

      setMessage(errData?.message || 'Submission failed—try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-xl"
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Project Request Form
      </h1>

      {/* ---- Remaining UI unchanged ---- */}
      {/* 👆 Tumhara pura form UI already perfect hai — backend URL hi update karna tha */}

      ...
    </form>
  );
};

export default ProjectRequestForm;
