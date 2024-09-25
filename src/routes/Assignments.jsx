import AssignmentCard from "../components/AssignmentCard";
import { useParams } from "react-router-dom";

const asmPerDay = 5;

const Assignments = () => {
  const { day } = useParams();
  return (
    <div className="flex flex-col items-center justify-center self-center gap-2">
      <h2 className="text-4xl m-24">Day {day}</h2>
      {/* <div className="flex justify-center self-center gap-2">
        {Array.from({ length: assignments }, (_, i) => (
          <AssignmentCard
            key={i}
            day={day}
            assignment={i + 1}
          />
        ))}
      </div> */}
      {Array.from({ length: asmPerDay }, (_, i) => (
        <AssignmentCard
          key={i}
          day={Number(day)}
          id={Number(i + 1)}
        />
      ))}
    </div>
  );
};

export default Assignments;
