import {
  Sort,
  Page,
  Resize,
  Filter,
  Inject,
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid } from "@/data/dummy";

import { Header } from "@/components/Layouts";

const Orders: React.FC = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowResizing
        allowSorting
        allowFiltering
        allowPaging
      >
        <ColumnsDirective>
          {ordersGrid.map((order, index) => (
            <ColumnDirective key={`order-${index}`} {...order} />
          ))}
        </ColumnsDirective>

        <Inject services={[Resize, Sort, Filter, Page]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
