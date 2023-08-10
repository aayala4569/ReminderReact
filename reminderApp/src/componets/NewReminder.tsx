import React, { useState } from "react";

//Add a loading indicator
//add error handling
//style it

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderProps) => {
  const [title, setTitle] = useState("");
  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    //Data validation
    if (!title) return;
    onAddReminder(title);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="rounded-pill my-4 ">
        ADD
      </button>
    </form>
  );
};

export default NewReminder;
