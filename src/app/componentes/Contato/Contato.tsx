'use client';

import React, { useState } from 'react';
import Alert from '../Contato/Alert';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  contato: string;
  qualification: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    contato: '',
    qualification: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, contato, qualification, message } = formData;
    if (!firstName || !lastName || !email || !contato || !qualification || !message) {
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const handleEnviar = () => {
    if (!validateForm()) return;
    
    const numeroTelefone = '5535999248521';
    const mensagem = `Nome: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0AContato: ${formData.contato}%0AQualificação: ${formData.qualification}%0AMensagem: ${formData.message}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    
    <div className="container mx-auto my-16 p-6 bg-black-500 shadow-md rounded-lg text-white">
      <Alert show={showAlert} onClose={() => setShowAlert(false)} />
      <div className="flex flex-col md:flex-row">
        <div className="bg-[#8C0000] text-white p-8 md:w-1/3">
          <h1 className="text-2xl font-bold mb-4">Vamos conversar!</h1>
          <p className="mb-4">Se precisar de ajuda, estamos aqui para você!</p>
          <ul className="space-y-4">
            <li><strong>Endereço:</strong> 50-460 northern Blvd East, 40, Near Patties South Carolina</li>
            <li><strong>Telefone:</strong> +1 234 567 89</li>
            <li><strong>Email:</strong> contact@firewebsite.com</li>
          </ul>
        </div>
        <div className="md:w-2/3 p-8">
          <h2 className="text-xl font-semibold mb-6">Entre em contato conosco</h2>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="Nome"
                className="bg-transparent text-white border-b border-white p-3 w-full font-sans focus:outline-none focus:border-b-2 focus:border-red-600"
                value={formData.firstName}
                onChange={handleChange}
                aria-label="Primeiro Nome"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Sobrenome"
                className="bg-transparent text-white border-b border-white p-3 w-full font-sans focus:outline-none focus:border-b-2 focus:border-red-600"
                value={formData.lastName}
                onChange={handleChange}
                aria-label="Último Nome"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent text-white border-b border-white p-3 w-full font-sans focus:outline-none focus:border-b-2 focus:border-red-600"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email"
              />
              <input
                type="text"
                name="contato"
                placeholder="Contato"
                className="bg-transparent text-white border-b border-white p-3 w-full font-sans focus:outline-none focus:border-b-2 focus:border-red-600"
                value={formData.contato}
                onChange={handleChange}
                aria-label="Contato"
              />
            </div>
            <div>
              <h3 className="mb-2">Qualificação?</h3>
              <div className="flex flex-col md:flex-row md:space-x-4">
                {['Veículos Leves', 'Veículos Pesados', 'Estacionárias', 'Solares'].map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="qualification"
                      value={option}
                      className="form-radio focus:ring-red-600 accent-[#8C0000]"
                      checked={formData.qualification === option}
                      onChange={handleChange}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Sua mensagem"
              className="bg-transparent text-white border-b border-white p-3 w-full font-sans focus:outline-none focus:border-b-2 focus:border-red-600"
              value={formData.message}
              onChange={handleChange}
              aria-label="Mensagem"
            />
            <button
              type="button"
              className="bg-red-600 text-white px-6 py-3 rounded-md font-bold hover:bg-red-700"
              onClick={handleEnviar}
              aria-label="Enviar para WhatsApp"
            >
              Enviar para WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
