import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "@/data/dummy";

import { Header } from "@/components/Layouts";

const Kanban: React.FC = () => {
  return (
    <div className="m-2 md:m-10 mt-6 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />

      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
        height="580px"
      >
        <ColumnsDirective>
          {kanbanGrid.map((kanban, index) => (
            <ColumnDirective key={`kanban-${index}`} {...kanban} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
