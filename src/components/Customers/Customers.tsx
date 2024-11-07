import {
  Page,
  Edit,
  Sort,
  Filter,
  Inject,
  Toolbar,
  Selection,
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "@/data/dummy";

import { Header } from "@/components/Layouts";

const Customers: React.FC = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        allowSelection
        allowFiltering
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((customer, index) => (
            <ColumnDirective key={`order-${index}`} {...customer} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page, Sort, Selection, Filter, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
