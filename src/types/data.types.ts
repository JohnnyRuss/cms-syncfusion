type SidebarLinkT = {
  title: string;
  links: Array<{ name: string; icon: React.ReactNode }>;
};

type SparklineChartDataT = Array<{ x: number; yval: number }>;

export type { SidebarLinkT, SparklineChartDataT };
