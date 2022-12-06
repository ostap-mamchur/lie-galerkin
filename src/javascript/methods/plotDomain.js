import { func } from "./functions";
import * as Plotly from "plotly.js";

export function plotDomain([a, b]) {
  const n = 200;
  const nodes = [];
  const h = (b - a) / n;

  for (let i = 0; i <= n; i++) {
    nodes.push(a + i * h);
  }

  const data = [
    {
      x: nodes.map((node) => func(node)[0]),
      y: nodes.map((node) => func(node)[1]),
      mode: "lines",
      type: "scatter",
    },
  ];

  // Define Layout
  const layout = {
  };

  Plotly.newPlot("domain", data, layout);
}