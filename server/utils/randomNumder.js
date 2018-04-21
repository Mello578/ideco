function randomElement(max, min = 0){
  return Math.round(Math.random()*(max - min) + min);
}

module.exports = randomElement;