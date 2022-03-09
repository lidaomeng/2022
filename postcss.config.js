module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 100 versions"],
    }), // 自动添加css前缀
  ],
};
