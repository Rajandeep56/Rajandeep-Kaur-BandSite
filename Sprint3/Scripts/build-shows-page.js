async function showTable() {
  try {
    const shows = await bandSiteApi.getShows();

    const tableSection = document.querySelector(".shows");

    const tableTitle = document.createElement("section");
    tableTitle.classList.add("shows__title-box");
    tableSection.appendChild(tableTitle);

    const heading = document.createElement("h1");
    heading.classList.add("shows__title");
    heading.innerText = "Shows";
    tableTitle.appendChild(heading);

    const showRow = document.createElement("div");
    showRow.classList.add("shows__box-main");
    tableSection.appendChild(showRow);

    const columnTitle = document.createElement("div");
    columnTitle.classList.add("shows__heading-box");
    showRow.appendChild(columnTitle);

    columnHeading(columnTitle, "DATES");
    columnHeading(columnTitle, "VENUE");
    columnHeading(columnTitle, "LOCATION");

    for (let i = 0; i < shows.length; i++) {
      const arrayRow = document.createElement("div");
      arrayRow.classList.add("shows__each-row"); 
      showRow.appendChild(arrayRow);
     
      createColumn(arrayRow, formatDateString(shows[i].date), "shows__each-row--date");
      createColumn(arrayRow, shows[i].place, "shows__each-row--venue");
      createColumn(arrayRow, shows[i].location, "shows__each-row--location");

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("shows__each-row--button-container");
      arrayRow.appendChild(buttonDiv);

      const button = document.createElement("button");
      button.classList.add("shows__each-row--button");
      button.innerText = "BUY TICKETS";
      buttonDiv.appendChild(button);
    }
  } catch (error) {
    console.error('Error fetching shows:', error.message);
  }
}

function columnHeading(maindiv, content) {
  const heading = document.createElement("h3");
  heading.classList.add(`shows__heading-box--${content.toLowerCase()}`);
  heading.innerText = content;
  maindiv.appendChild(heading);
}

function formatDateString(datetime) {
  const dateConversion = new Date(datetime);
  const date = {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  };

  return dateConversion.toLocaleDateString('en-US', date).replace(/,/g, '');
}

function createColumn(maindiv, content, classname) {
  const column = document.createElement("h4");
  column.classList.add(classname);
  column.innerText = content;
  maindiv.appendChild(column);
}


showTable();
