import './todolist.css';

import './common/es6/1.js';


var complete = 0;
var total = 0;

console.log('开始啦')

$(function () {

  console.log('看看是否走到了这儿')
  // 如果是单例模式，可以把方法都写在里面！
  function Todolist() {
    this.list = ["a", "b", "c", "d"];

    this.complete = 0;
    this.total = this.list.length;

    this.add = function (content) {
      this.list.unshift(content);
    };
    this.delete = function () {};
    this.deleteCompleted = function () {};
  }

  var list = new Todolist();
  console.log("list", list.list, list.total);

  function Person(name, age) {
    this.name = name;
    this.age = age;
    // N个实例N份
    this.speak = function () {
      // alert(this.name + this.age);
    };
  }

  Person.prototype = {
    constructor: Person,
    // N个实例1份
    run: function () {
      // console.log(`${this.name} is running!`);
    },
  };

  var p1 = new Person("张三", 13);
  var p2 = new Person("李四", 12);

  console.log("=================================");
  console.log(p1.speak === p2.speak);
  console.log(p1.run === p2.run);
  console.log("=================================");

  p1.speak();
  p1.run();

  total = $(".container .body .todolist-item").length;
  console.log("total", total);
  $(".container .footer span").text(`已完成${complete} / 全部${total}`);

  $(".container .body .todolist-item input").change(function () {
    $(".container .footer span").text(
      `已完成${$(":checked").length} / 全部${total}`
    );
  });

  $(".container .body .todolist-item")
    .mouseover(function () {
      $(this).find("button").css("display", "block");
    })
    .mouseout(function () {
      $(this).find("button").css("display", "none");
    });

  $("#deleteAll").click(function () {
    total -= $(":checked").length;
    $(":checked").parent().remove();

    $(".container .footer span").text(`已完成0 / 全部${total}`);
  });

  $(".container .body .todolist-item button").click(function () {
    $(this).parent().remove();

    total--;
    $(".container .footer span").text(
      `已完成${$(":checked").length} / 全部${total}`
    );
  });

  $("#input").keypress(function (e) {
    if (e.which == 13) {
      if (!$(this).val()) {
        return;
      }

      var id = new Date().getTime() + "";

      var dom = $(`<div class="todolist-item">
        <input type="checkbox" name="" id=${id}>
        <label for=${id}>
          <span>${e.target.value}</span>
        </label>
        <button>删除</button>
      </div>`);

      $(".container .body .todolist").prepend(dom);
      $(this).val("");

      // 新增处理动态DOM
      $(".container .body .todolist-item")
        .mouseover(function () {
          $(this).find("button").css("display", "block");
        })
        .mouseout(function () {
          $(this).find("button").css("display", "none");
        });

      $(".container .body .todolist-item button").click(function () {
        $(this).parent().remove();
        total--;
        $(".container .footer span").text(
          `已完成${$(":checked").length} / 全部${total}`
        );
      });

      total++;

      // 监听DOM数目
      $(".container .footer span").text(
        `已完成${$(":checked").length} / 全部${total}`
      );
    }
  });
});
