import Day from "./Day";

const days = Array.from({ length: 15 }, (_, i) => i + 1);

const DayGrid = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-5 md:gap-4 sm:grid-cols-3 sm:gap-2 grid-cols-1 gap-4">
        {days.map((day) => (
          <Day
            key={day}
            day={day}
          />
        ))}
      </div>
    </div>
  );
};

export default DayGrid;
