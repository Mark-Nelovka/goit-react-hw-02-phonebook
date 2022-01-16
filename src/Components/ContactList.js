import React from "react";
import s from "./ContList.module.css";

export default function ContactList({ contacts, onRemoveContact }) {
  // console.log(contacts);
  return (
    <ol className={s.ul}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.li} key={id}>
            {name}: {number}
            <button
              className={s.btn}
              name="delete"
              onClick={() => onRemoveContact({ id, name })}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
}
