function multiplyBy2(x) {
    return x * 2;
  }
  
  function add3(x) {
    return x + 3;
  }

  const result = add3(multiplyBy2(5)); 
console.log(result); 

function compose(f, g) {
    return function(x) {
      return f(g(x));
    };
  }
  
  const composedFunction = compose(add3, multiplyBy2);
  console.log(composedFunction(5)); 
  
