import firework from "mouse-firework";

// 初始化烟花效果
firework({
  excludeElements: ["a"], // 排除链接，避免点链接也触发
  particles: [
    {
      shape: "circle", // 粒子形状：circle, polygon, star
      move: "emit", // 粒子运动方式
      easing: "easeOutExpo", // 缓动函数
      colors: [
        "rgba(255,99,71,.9)",
        "rgba(135,206,235,.9)",
        "rgba(173,216,230,.9)",
        "rgba(240,128,128,.9)",
      ],
      number: 30, // 粒子数量
      duration: [1200, 1800], // 持续时间
      shapeOptions: {
        radius: [10, 20], // 粒子半径
      },
    },
  ],
});
