import { useContext } from "react";
import { HabitContext } from "../context/habitContext";

export const HabitTracking = () => {
  const { data, setDisplayHabit, displayHabit } = useContext(HabitContext);
  return (
    <div>
      <h2>Habits</h2>
      <div className="habit-card">
        {data.map((item) => {
          const { url, id, name } = item;
          return (
            <div className="habit-title-card">
              <img
                src={url}
                key={id}
                height="150"
                width="300"
                className="habit-image"
              />
              <h3 className="habit-name" onClick={() => setDisplayHabit(item)}>
                {name}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="habit-details">
        {displayHabit && <h2>Name: {displayHabit.name}</h2>}
      </div>
    </div>
  );
};
