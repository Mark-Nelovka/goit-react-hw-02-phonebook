import React from "react";
import { nanoid } from "nanoid";

export default function ContactList({ contacts, filter }) {
  // console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, number }) => {
        return (
          <li key={nanoid()}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
}
