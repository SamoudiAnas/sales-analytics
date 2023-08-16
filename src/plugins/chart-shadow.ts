import { colors } from "@/constants/colors";
import { Chart, Element, Plugin } from "chart.js";
import { AnyObject } from "chart.js/dist/types/basic";

//box-shadow: 0px 3.6527786254882812px 2.324495553970337px 0px rgba(41, 144, 52, 0.17), 0px 8.7781343460083px 5.586085796356201px 0px rgba(41, 144, 52, 0.25), 0px 16.5284481048584px 10.51810359954834px 0px rgba(41, 144, 52, 0.31), 0px 29.483928680419922px 18.76249885559082px 0px rgba(41, 144, 52, 0.37), 0px 55.146446228027344px 35.09319305419922px 0px rgba(41, 144, 52, 0.45), 0px 132px 84px 0px rgba(41, 144, 52, 0.62);

const shadows = [
  { offsetX: 0, offsetY: 4, blur: 10, color: "rgba(0, 0, 0, 0.3)" }, // First shadow
  { offsetX: 0, offsetY: 8, blur: 12, color: "rgba(0, 0, 0, 0.2)" }, // Second shadow
  { offsetX: 0, offsetY: 12, blur: 15, color: "rgba(0, 0, 0, 0.1)" }, // Third shadow
];

const drawShadow = (chart: Chart) => {
  const ctx = chart.ctx;
  const points: Element<AnyObject, AnyObject>[] = [];

  const dataSetsCount = chart.getVisibleDatasetCount();

  for (let i = 0; i < dataSetsCount; i++) {
    points.push(...chart.getDatasetMeta(i).data);
  }

  ctx.save();

  points.forEach(function (point) {
    shadows.forEach(function (shadow) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.options.radius + 3, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff";

      ctx.shadowColor = shadow.color;
      ctx.shadowBlur = shadow.blur;
      ctx.shadowOffsetX = shadow.offsetX;
      ctx.shadowOffsetY = shadow.offsetY;

      ctx.fill();
      ctx.closePath();
    });

    // Draw the original point (with border) on top of the shadows
    ctx.beginPath();
    ctx.arc(point.x, point.y, point.options.radius, 0, 2 * Math.PI);
    ctx.fillStyle = point.options.backgroundColor; // Use the original fill color
    ctx.strokeStyle = point.options.borderColor; // Use the original border color
    ctx.lineWidth = point.options.borderWidth; // Use the original border width

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  });

  ctx.restore(); // Restore the original settings
};

const shadowPlugin = {
  id: "shadowPlugin",
  afterDraw: drawShadow,
};

export default shadowPlugin;
