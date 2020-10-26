import pptxgen from "pptxgenjs";
import { data, chartColors } from "../data";

const MASTER_SLIDE = "MASTER_SLIDE";

const getChartData = (title, data) => {
  return [
    {
      name: title,
      labels: data.map((d) => d.label),
      values: data.map((d) => d.y),
    },
  ];
};

export const exportPPT = (pageName) => {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";

  // add a new slide using MASTER SLIDE
  const slide = pptx.addSlide(MASTER_SLIDE);

  if (pageName === "Vertical Bar Chart") {
    // add slide specific text
    slide.addText("Vertical Bar Chart", {
      x: "72%",
      y: 0.3,
      w: 4,
      color: "0000FF",
      fontSize: 30,
    });

    // transform data as per your chart type
    const dataPoints = getChartData("Fruits", data);

    // define appropriate chart options for your chart
    const chartOptions = {
      x: 0.5,
      y: 1.5,
      w: "90%",
      h: 5,
      barDir: "col",
      chartColors: chartColors,
      showLabel: true,
      showPercent: true,
      valAxisHidden: true,
      valGridLine: "none",
      showValue: true,
      dataLabelPosition: "outEnd",
    };

    // add chart to the slide
    slide.addChart(pptx.charts.BAR, dataPoints, chartOptions);

    // Save PPT
    pptx.writeFile("vertical_chart.pptx");
  } else if (pageName === "Donut Chart") {
    // add slide specific text
    slide.addText("React Doughnut Chart", {
      x: "70%",
      y: 0.3,
      w: 4,
      color: "0000FF",
      fontSize: 30,
    });

    // transform data as per your chart type
    const dataPoints = getChartData("Fruits", data);

    // define appropriate chart options for your chart
    const chartOptions = {
      x: 2.5,
      y: 1.5,
      w: 8,
      h: 5,
      chartColors,
      showLabel: true,
      valAxisHidden: true,
      showLegend: true,
      legendPos: "r",
      gridLineColor: "FFFFFF",
      catAxisHidden: true,
      valGridLine: "none",
      dataLabelFontBold: true,
      dataValueFormatCode: "0%",
      dataLabelColor: "FFFFFF",
    };

    // add chart to the slide
    slide.addChart(pptx.charts.DOUGHNUT, dataPoints, chartOptions);

    // Save PPT
    pptx.writeFile("donut_chart.pptx");
  } else {
    // do nothing
  }
};
