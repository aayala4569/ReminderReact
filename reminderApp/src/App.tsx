import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./componets/ReminderList";
import Reminder from "./Models/reminder";
import reminderServices from "./services/reminder";
import reminder from "./services/reminder";
import NewReminder from "./componets/NewReminder";

function App() {
  const [Reminder, setReminder] = useState<Reminder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    setIsLoading(true);

    try {
      const reminders = await reminderServices.getReminders();
      setReminder(reminders);
    } catch (error) {
      setError("Error loading, please try again.");
    }

    setIsLoading(false);
  };

  const removeReminder = (id: number) => {
    setReminder(Reminder.filter((reminder) => reminder.id !== id));
  };
  const addReminder = async (title: string) => {
    const newReminder = await reminderServices.addReminders(title);
    setReminder([newReminder, ...Reminder]);
  };

  return (
    <div className="App">
      <h1 className="remind text-center color text-white">Reminder List</h1>
      <NewReminder onAddReminder={addReminder} />
      {isLoading && <div className="spinner-border"></div>}
      {error && <div className="text-danger">{error}</div>}

      <ReminderList items={Reminder} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
