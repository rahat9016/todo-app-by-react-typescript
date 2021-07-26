import React from "react";

interface IProps {
  name: string;
  email?: string;
  number: number;
  handlerRemove: (email: string) => void;
}
const Contact = ({ email = "N/A", name, number, handlerRemove }: IProps) => {
  return (
    <div className="card">
      <h3 className="contact-name">Name: {name}</h3>
      <p className="contact-email">E-mail: {email}</p>
      <p className="contact-email">Number: {number}</p>
      <button className="btn" onClick={() => handlerRemove(email)}>
        Remove <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default Contact;
