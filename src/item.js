$(function () {
  var param = window.location.href.split("?")[1].split("&");
  console.log("param", param);

  var map = new Map();
  var obj = {};
  param.forEach((item) => {
    var tmp = item.split("=");
    obj[tmp[0]] = tmp[1];
    map.set(tmp[0], tmp[1]);
  });

  console.log("obj", obj);
  console.log("map", map);

  var dom = `
    <h2>江雪<h2/>
    <h2>${obj.name} -- ${map.get("age")}<h2/>
    <h3>
    千山鸟飞绝，万径人踪灭。
    孤舟蓑笠翁，独钓寒江雪。
    </h3>
  `;

  $("#main").html(dom);
});
