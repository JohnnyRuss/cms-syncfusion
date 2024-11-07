import * as Pages from "@/pages";
import { PATHS } from "@/routes/paths";

const Router = [
  // Dashboard
  {
    path: PATHS.root_page,
    title: "root-page",
    element: <Pages.EcommercePage />,
    children: [],
  },
  {
    path: PATHS.ecommerce_page,
    title: "ecommerce-page",
    element: <Pages.EcommercePage />,
    children: [],
  },
  // Pages
  {
    path: PATHS.orders_page,
    title: "orders-page",
    element: <Pages.OrdersPage />,
    children: [],
  },
  {
    path: PATHS.employees_page,
    title: "employees-page",
    element: <Pages.EmployeesPage />,
    children: [],
  },
  {
    path: PATHS.customers_page,
    title: "customers-page",
    element: <Pages.CustomersPage />,
    children: [],
  },
  // Apps
  {
    path: PATHS.kanban_page,
    title: "kanban-page",
    element: <Pages.KanbanPage />,
    children: [],
  },
  {
    path: PATHS.editor_page,
    title: "editor-page",
    element: <Pages.EditorPage />,
    children: [],
  },
  {
    path: PATHS.calendar_page,
    title: "calendar-page",
    element: <Pages.CalendarPage />,
    children: [],
  },
  {
    path: PATHS.color_picker_page,
    title: "color_picker-page",
    element: <Pages.ColorPickerPage />,
    children: [],
  },
  // Charts
  {
    path: PATHS.line_page,
    title: "line-page",
    element: <Pages.LinePage />,
    children: [],
  },
  {
    path: PATHS.area_page,
    title: "area-page",
    element: <Pages.AreaPage />,
    children: [],
  },
  {
    path: PATHS.bar_page,
    title: "bar-page",
    element: <Pages.BarPage />,
    children: [],
  },
  {
    path: PATHS.pie_page,
    title: "pie-page",
    element: <Pages.PiePage />,
    children: [],
  },
  {
    path: PATHS.financial_page,
    title: "financial-page",
    element: <Pages.FinancialPage />,
    children: [],
  },
  {
    path: PATHS.color_mapping_page,
    title: "color_mapping-page",
    element: <Pages.ColorMappingPage />,
    children: [],
  },
  {
    path: PATHS.pyramid_page,
    title: "pyramid-page",
    element: <Pages.PyramidPage />,
    children: [],
  },
  {
    path: PATHS.stacked_page,
    title: "stacked-page",
    element: <Pages.StackedPage />,
    children: [],
  },
];

export { Router };
