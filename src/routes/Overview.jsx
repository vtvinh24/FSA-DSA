import DayGrid from "../components/DayGrid";

const Overview = () => {
  return (
    <div className="flex min-h-screen justify-center self-center">
      {/* Current submission: [N] */}
      {/* Done so far: X/Y */}
      <DayGrid />
      {/* Powered by LIB1, 2, 3, ... */}
    </div>
  );
};

export default Overview;
