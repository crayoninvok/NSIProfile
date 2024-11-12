"use client";

import { useState } from "react";
import { Input, Textarea } from "@nextui-org/react"; // Import NextUI components


export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-16 flex-col md:flex-row gap-3 ">
      <div className="w-[50%] text-center justify-center card h-[90vh] bg-transparant">
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/I4ODTTi810A?autoplay=1&mute=1&loop=1&playlist=I4ODTTi810A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="card max-w-3xl bg-gray-800 shadow-2xl rounded-lg p-6 lg:p-8 w-[50%]">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-8">
          We re here to help! Please fill out the form below, and we ll get back
          to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-300">
                Your Name
              </span>
            </label>
            <Input
              name="name"
              fullWidth
              color="primary"
              isClearable
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-300">
                Email Address
              </span>
            </label>
            <Input
              name="email"
              type="email"
              fullWidth
              color="primary"
              isClearable
              placeholder="johndoe@example.com"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-gray-300">
                Your Message
              </span>
            </label>
            <Textarea
              name="message"
              fullWidth
              color="primary"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <a
              href="mailto:dathariqf@gmail.com"
              className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out px-8 py-3 rounded-lg"
            >
              Send Message
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
