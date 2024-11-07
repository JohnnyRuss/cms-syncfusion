import { lazy } from "react";

const Calendar = lazy(() => import("@/components/Calendar/Calendar"));

const CalendarPage: React.FC = () => {
  return <Calendar />;
};

export default CalendarPage;
