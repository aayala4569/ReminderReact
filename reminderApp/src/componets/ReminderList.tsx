import React from "react";
import Reminder from "../Models/reminder";


interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void
}
const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (

    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item d-flex justify-content-between text-white"  key={item.id}>
          {item.title}
          <button className="btn btn-outline-danger round-pill" onClick={() => onRemoveReminder(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
