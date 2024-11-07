import {
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  WorkWeek,
  DragAndDrop,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "@/data/dummy";

import { Header } from "@/components/Layouts";

const Calendar: React.FC = () => {
  const onActionComplete = async () => {
    // if (args.requestType === "eventCreate") {
    //   const newEvent = args.data[0];
    //   // POST new event to API
    //   console.log(newEvent);
    // } else if (args.requestType === "eventChanged") {
    //   const updatedEvent = args.data;
    //   console.log(updatedEvent);
    // } else if (args.requestType === "eventRemoved") {
    //   const deletedEvent = args.data[0];
    //   console.log(deletedEvent);
    // }
  };

  return (
    <div className="m-2 md:m-10 mt-6 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />

      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
        actionComplete={onActionComplete}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
