console.log("========================= es6语法 =========================");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "(" + this.x + "," + this.y + ")";
  }
}

// var point = new Point(2, 3)

// console.log(point.toString())

// console.log(point.hasOwnProperty('x'))
// console.log(point.hasOwnProperty('y'))
// console.log(point.hasOwnProperty('toString'))

// var p1 = new Point(1,2)
// var p2 = new Point(1,2)

// console.log(p1.__proto__ === p2.__proto__)
// console.log(Point.prototype.constructor === Point)

// const bar = Symbol('bar')
// const snaf = Symbol('snaf')

// class myClass {
//   foo(baz) {
//     console.log('this[bar](baz)', this[bar](baz))
//   }

//   [bar](baz) {
//     return this[snaf] = baz
//   }
// }

// let myC = new myClass()

// myC.foo('hello world')

// class Foo {
//   #a;
//   #b;
//   #sum() {
//     return #a + #b;
//   }

//   printSum() {
//     console.log(#sum())
//   }

//   constructor(a, b) {
//     #a = a;
//     #b = b;
//   }
// }

// var foo = new Foo(3, 4)
// foo.printSum()

// class Logger {
//   constructor() {
//     console.log("Logger构造函数！");
//     this.printName = this.printName.bind(this);
//   }

//   printName(name = "there") {
//     this.print(name);
//   }

//   printName1 = (name = "there") => {
//     this.print(name);
//   };

//   printName3(name = "there123") {
//     this.print(name);
//   }

//   print(text) {
//     console.log("text", text);
//   }
// }

// const logger = new Logger();

// logger.printName("李道孟");

// const { printName } = logger;
// printName("李道孟123");

// function selfish(target) {
//   const cache = new WeakMap();

//   const handler = {
//     get(target, key) {
//       const value = Reflect.get(target, key);
//       if (typeof value !== "function") {
//         return value;
//       }
//       if (!cache.has(value)) {
//         cache.set(value, value.bind(target));
//       }

//       return cache.get(value);
//     },
//   };

//   const proxy = new Proxy(target, handler);
//   return proxy;
// }

// const loggger = selfish(new Logger());
// const { printName3 } = loggger;
// printName3("李道孟456");

// console.log(Logger.name);

//////////////////////////////////////////////

// class CustomHTMLElement {
//   constructor(element) {
//     this.element = element;
//   }

//   get html() {
//     return this.element.innerHTML;
//   }

//   set html(value) {
//     this.element.innerHTML = value;
//   }
// }

// var descriptor = Object.getOwnPropertyDescriptor(
//   CustomHTMLElement.prototype,
//   "html"
// );

// console.log("descriptor", descriptor);

// console.log("get" in descriptor);
// console.log("set" in descriptor);

// class Foo {
//   myProp = 42;
//   static myStaticProp = 43;

//   constructor() {
//     console.log("myProp", this.myProp);
//     console.log("myStaticProp", Foo.myStaticProp);
//   }
//   static classMothod() {
//     return "hello";
//   }
// }

// class Bar extends Foo {
//   static classMothod() {
//     return super.classMothod() + "，李道孟！！！";
//   }
// }

// console.log(Bar.classMothod());

// new Foo();

function Person(name) {
  if (new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error("必须使用new生成实例");
  }
}

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("本类不能实例化");
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    console.log("length, width", length, width);
  }
}

// var x = new Shape()

var y = new Rectangle(3, 4);
