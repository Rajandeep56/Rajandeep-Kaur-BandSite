async function showTable() {
  const shows = await bandSiteApi.getShows();

  let tableSection = document.querySelector(".shows");

  let tableTitle = document.createElement("section");
  tableTitle.classList.add("shows__title-box");
  tableSection.appendChild(tableTitle);

  let heading = document.createElement("h1");
  heading.classList.add("shows__title");
  tableTitle.appendChild(heading);
  heading.innerText = "Shows";

  let showRow = document.createElement("div");
  showRow.classList.add("shows__box-main");
  tableSection.appendChild(showRow);

  let columnTitle = document.createElement("div");
  columnTitle.classList.add("shows__heading-box");
  showRow.appendChild(columnTitle);

  let dateHeading = document.createElement("h3");
  dateHeading.classList.add("shows__heading-box--date");
  columnTitle.appendChild(dateHeading);
  dateHeading.innerText = "DATES";

  let venueHeading = document.createElement("h3");
  venueHeading.classList.add("shows__heading-box--venue");
  columnTitle.appendChild(venueHeading);
  venueHeading.innerText = "VENUE";

  let locationHeading = document.createElement("h3");
  locationHeading.classList.add("shows__heading-box--location");
  columnTitle.appendChild(locationHeading);
  locationHeading.innerText = "LOCATION";

  for (let i = 0; i < shows.length; i++) {
    let arrayRow = document.createElement("div");
    arrayRow.classList.add("shows__each-row");
    showRow.appendChild(arrayRow);

    let date = document.createElement("h4");
    date.classList.add("shows__each-row--date");
    arrayRow.appendChild(date);
    const datetime = shows[i].date;
    const dateconversion=new Date(datetime)
    date.innerText = dateconversion.toLocaleDateString('en-US');

    let venue = document.createElement("h4");
    venue.classList.add("shows__each-row--venue");
    arrayRow.appendChild(venue);
    venue.innerText = shows[i].place;

    let location = document.createElement("h4");
    location.classList.add("shows__each-row--location");
    arrayRow.appendChild(location);
    location.innerText = shows[i].location;

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("shows__each-row--button-container");
    arrayRow.appendChild(buttonDiv);

    let button = document.createElement("button");
    button.classList.add("shows__each-row--button");
    buttonDiv.appendChild(button);
    button.innerText = "BUY TICKETS";
  }
}

showTable();
