/**
 * Creates a DOM element 
 * @param {string} type - the element's type
 * @param {string} className - the element's class name
 * @param {string} text - the element's text content
 */
const createElement = (type, className, text) => {
  const element = document.createElement(type)
  element.className = className
  element.textContent = text
  return element
}

/**
 * Creates a program list item element.
 * @param {string} programTitle - The program's title
 * @param {string} hostName - The program's host names
 * @param {string} programImage - The program's image width
 * @param {number} airdate - The program's airdate 
 * @return {HTMLLIElement} the list item element
 */
const createProgramListItem = (programTitle, hostName, programImage, airdate) => {
  const card = createElement('LI', 'program-card')
  const imageElm = createElement('DIV', 'program-card__image')
  imageElm.style.backgroundImage = `url(${programImage})`
  const metaElm = createElement('DIV', 'program-card__meta')
  const titleElm = createElement('DIV', 'program-card__title', `Title: ${programTitle}`)
  const hostsElm = createElement('DIV', 'program-card__hosts', `Hosts: ${hostName}`)
  const airdateElm = createElement('DIV', 'program-card__airdate', `Airdate: ${airdate}`)
  metaElm.append(titleElm, hostsElm, airdateElm)
  card.append(imageElm, metaElm)
  return card
}

/**
 * Fetches the CBC Radio One schedule for a specified region.
 * @param {string} selectedRegion - The target region
 * @return {Promise} a promise that resolves with the response to /schedule/:regionID
 */
const fetchSchedule = (selectedRegion) => {
  return fetch('/schedule/' + selectedRegion)
  .then(res => res.json())
  // HINT: if you are not familiar with Promises, please refer to:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
}

const populateSchedule = () => {
}

populateSchedule()