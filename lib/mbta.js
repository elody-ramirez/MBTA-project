'use strict'
// All intersect at Park Street
const MBTA = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Haymarket', 'Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let total = 0

  if (startLine === endLine) {
    total = direct(startLine, startStation, endStation)
  } else {
    total = leastStops(startLine, startStation, endLine, endStation)
  }
  return total

  // if (startLine === endLine) {
  //   total = direct(startLine, startStation, endStation)
  // } else if ( just 2 Lines){
  // total = leastStops(startLine, startStation, endLine, endStation) }
  // } else if ( with 3 Lines ) {
  // }
  // return total
}

const direct = function (line, start, end) {
  const startnum = MBTA[line].indexOf(start)
  const endnum = MBTA[line].indexOf(end)
  return Math.abs(startnum - endnum)
}

const findIntersections = function (start, finish) {
  const begin = MBTA[start]
  const end = MBTA[finish]
  return begin.filter(value => end.includes(value))
}

const distanceToIntersections = function (thisLine, otherLine, station) {
  const intersections = findIntersections(thisLine, otherLine)
  const line = MBTA[thisLine]
  const position1 = line.indexOf(station)
  // const distance = []
  const distance = intersections.map(value => {
    return Math.abs(position1 - line.indexOf(value))
  })
  // for (let i = 0; i < intersections.length; i++) {
  //   distance[i] = Math.abs(position1 - line.indexOf(intersections[i]))
  // }
  return distance
}

const leastStops = function (startLine, startStation, endLine, endStation) {
  const firstLine = distanceToIntersections(startLine, endLine, startStation)
  const secondLine = distanceToIntersections(endLine, startLine, endStation)
  const stops = firstLine.map((value, index) => value + secondLine[index])

  let least = stops[0]

  for (let i = 1; i < stops.length; i++) {
    if (least > stops[i]) {
      least = stops[i]
    }
  }
  return least
}

console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
