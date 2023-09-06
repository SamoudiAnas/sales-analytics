import { colors } from "@/constants/colors";
import { Chart, Element, Plugin } from "chart.js";
import { AnyObject } from "chart.js/dist/types/basic";

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
    ctx.fillStyle = point.options.backgroundColor;
    ctx.strokeStyle = point.options.borderColor;
    ctx.lineWidth = point.options.borderWidth;

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
