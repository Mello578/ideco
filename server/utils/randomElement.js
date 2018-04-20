function randomElement(data){
  return data[Math.round(Math.random()*(data.length - 1 - 0) + 0)];
}

module.exports = randomElement;