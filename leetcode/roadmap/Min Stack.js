var MinStack = function () {
  this.elements = [];
};
/**
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
    this.elements.push({
      value: val,
      min: this.elements.length === 0 ? val : Math.min(val, this.getMin()),
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements = this.elements.slice(0, this.elements.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};

var obj = new MinStack();
obj.push([]);
obj.push([-2]);
obj.push([0]);
obj.push([-3]);
obj.push([]);
obj.push([]);
obj.push([]);
obj.push([]);
console.log(obj);
obj.pop();
console.log(obj);
console.log(obj.top());
console.log(obj.getMin());
