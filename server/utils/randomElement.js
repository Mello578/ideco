function randomElement(data){
  const newData = data[Math.round(Math.random()*((data.length - 1) - 0) + 0)];
  return Object.assign({}, newData);
}

module.exports = randomElement;