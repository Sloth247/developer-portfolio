import React from 'react';
import VisuallyHidden from './styles/VisuallyHidden';

const Contact = () => {
  return (
    <section className="pb-87 pt-375  px-4 bg-grey text-center ">
      <h2 className="text-40 tracking-minus2 leading-10 mb-5">Contact</h2>

      <form action="">
        <p className="mb-50 text-lightGrey">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
        <div className="grid">
          <div className="mb-8">
            <label htmlFor="name">
              <VisuallyHidden>Name</VisuallyHidden>
            </label>
            <input
              id="name"
              type="name"
              placeholder="NAME"
              className="pl-6 pb-4 border-0 bg-grey text-white uppercase placeholder:text-white w-full border-b"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email">
              <VisuallyHidden>Email</VisuallyHidden>
            </label>
            <input
              id="email"
              type="email"
              placeholder="EMAIL"
              className="pl-6 pb-4 border-0 bg-grey text-white uppercase placeholder:text-white w-full border-b"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message">
              <VisuallyHidden>Message</VisuallyHidden>
            </label>
            <textarea
              id="message"
              type="text"
              placeholder="MESSAGE"
              className="pl-6 border-0 bg-grey text-white uppercase placeholder:text-white w-full border-b min-h-668"
            />
          </div>

          <button
            type="submit"
            className="justify-self-end uppercase leading-26 font-bold bg-grey border-solid border-0 border-b-2 border-green text-white tracking-custom hover:text-green pb-2.5 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
