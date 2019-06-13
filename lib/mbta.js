'use strict'
// All intersect at Park Street
const MBTA = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  let total = 0
  if (startLine === endLine) {
    total = direct(startLine, startStation, endStation)
  } else {
    total = Math.abs(park(startLine, startStation) + park(endLine, endStation))
  }
  return total
}

const direct = function (line, start, end) {
  const startnum = MBTA[line].indexOf(start)
  const endnum = MBTA[line].indexOf(end)
  const stops = Math.abs(startnum - endnum)
  return stops
}

const park = function (line, station) {
  let stops = 0
  if (line === 'Red' || line === 'Green') {
    stops = Math.abs(MBTA[line].indexOf(station) - 1)
  } else {
    stops = Math.abs(MBTA[line].indexOf(station) - 2)
  }
  return stops
}

console.log(stopsBetweenStations('Green', 'Boylston', 'Green', 'Copley'))

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
