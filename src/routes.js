import { VerticalChart } from "./Pages/VerticalChart";
import { DonutChart } from "./Pages/DonutChart";

export const routes = {
  "/": () => <VerticalChart title="Vertical Bar Chart" />,
  "/vertical-bar-chart": () => <VerticalChart title="Vertical Bar Chart" />,
  "/donut-chart": () => <DonutChart title="Donut Chart" />,
};
