import React, { useState } from "react";
import Contact from "./Contact";

interface IContact {
  name: string;
  email: string;
  number: number;
}
const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [constactList, setContactList] = useState<IContact[]>([]);

  const onclick = (e: any) => {
    setContactList([...constactList, contact]);
    setContact({
      name: "",
      email: "",
      number: 0,
    });
    e.preventDefault();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handlerRemove = (email: string) => {
    const newContact = constactList.filter((c) => c.email !== email);
    setContactList(newContact);
  };
  return (
    <>
      <div className="contact-wrapper">
        <h1>Contact List</h1>
        <div className="form">
          <form action="" className="form-filed">
            <input
              onChange={onChange}
              value={contact.name}
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-input"
            />
            <input
              onChange={onChange}
              value={contact.email}
              type="email"
              name="email"
              placeholder="E-mail"
              className="form-input"
            />
            <input
              onChange={onChange}
              value={contact.number}
              type="number"
              name="number"
              placeholder="Number"
              className="form-input"
            />
            <br />
            <button className="btn" onClick={onclick}>
              Add Contact
            </button>
          </form>
        </div>
      </div>
      <div className="card-item">
        {constactList.map((con) => (
          <Contact
            key={con.email}
            name={con.name}
            email={con.email}
            number={con.number}
            handlerRemove={handlerRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Contacts;
