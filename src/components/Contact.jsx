import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white rounded-lg shadow my-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg">Email: 
        <a href="mailto:quinton.stibbins@gmail.com" className="text-blue-600 hover:underline ml-1">
          quinton.stibbins@gmail.com
        </a>
      </p>
    </section>
  );
}
