'use client';

import React, { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnviar = () => {
    const numeroTelefone = '5535999248521'; // Seu número de telefone com o código do país
    const mensagem = `Nome: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0AContato: ${formData.contato}%0AQualificação: ${formData.qualification}%0AMensagem: ${formData.message}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagem}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <div className="container mx-auto my-16 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="bg-red-600 text-white p-8 md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Vamos conversar!</h2>
          <p className="mb-4">Se precisar de ajuda, estamos aqui!</p>
          <ul className="space-y-4">
            <li>Endereço: 50-460 northern Blvd East, 40, Near Patties South Carolina</li>
            <li>Telefone: +1 234 567 89</li>
            <li>Email: contact@firewebsite.com</li>
          </ul>
        </div>
        <div className="md:w-2/3 p-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border border-gray-300 rounded-md p-3 w-full"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border border-gray-300 rounded-md p-3 w-full"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 w-full"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contato"
                placeholder="Contato"
                className="border border-gray-300 rounded-md p-3 w-full"
                value={formData.contato}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="mb-2">Qualificação?</p>
              <div className="flex items-center space-x-4">
                {['Veiculos Leves', 'Veiculos Pesados', 'Estacionarias', 'Solares'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="qualification"
                      value={option}
                      className="form-radio"
                      checked={formData.qualification === option}
                      onChange={handleChange}
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Sua mensagem"
              className="border border-gray-300 rounded-md p-3 w-full h-32"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="button"
              className="bg-red-600 text-white px-6 py-3 rounded-md font-bold"
              onClick={handleEnviar}
            >
              Enviar para WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
