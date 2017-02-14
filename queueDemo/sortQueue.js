var Queue = require('../5.queue.js');

function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i]);
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function displayArr(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    console.log(arr[i] + ' ');
  }
}

var queues = [];
for (var i = 0; i < 10; i++) {
  queues[i] = new Queue();
}

var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log('Before radix sort: ');
displayArr(nums);

distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('\n\nAfter radix sort: ');
displayArr(nums);