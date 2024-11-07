import {
  Page,
  Inject,
  Search,
  Toolbar,
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "@/data/dummy";

import { Header } from "@/components/Layouts";

const Employees: React.FC = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((employee, index) => (
            <ColumnDirective key={`order-${index}`} {...employee} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
