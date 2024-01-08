var shows = [
    {
      date: "Mon Sept 06 2021",
      venue: "Ronald Lane",
      location: "San Francisco, CA"
    },
    {
      date: "Tue Sept 21 2021",
      venue: "Pier 3 East",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Oct 15 2021 ",
      venue: "View Lounge",
      location: "San Francisco, CA"
    },
    {
      date: "Sat Nov 06 2021",
      venue: "Hyatt Agency",
      location: "San Francisco, CA"
    },
    {
      date: "Fri Nov 26 2021",
      venue: "Moscow Center",
      location: "San Francisco, CA"
    },
    {
      date: "Wed Dec 15 2021",
      venue: "Pres Club",
      location: "San Francisco, CA"
    }
  ];
  
  function showTable(arr) {
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
  
  
    
  
    for (let i = 0; i < shows.length; i++) {
      if(i===0){
            let tableTitle = document.createElement("section");
            tableTitle.classList.add("shows__title-container");
            tableSection.appendChild(tableTitle);

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
      }
      let arrayRow = document.createElement("div");
      arrayRow.classList.add("shows__each-row");
      showRow.appendChild(arrayRow);
  
  
      let date = document.createElement("h4");
      date.classList.add("shows__each-row--date");
      arrayRow.appendChild(date);
      date.innerText = arr[i]["date"];
  
  
      let venue = document.createElement("h4");
      venue.classList.add("shows__each-row--venue");
      arrayRow.appendChild(venue);
      venue.innerText = arr[i]["venue"];
      
  
      let location = document.createElement("h4");
      location.classList.add("shows__each-row--location");
      arrayRow.appendChild(location);
      location.innerText = arr[i]["location"];
    
      let buttonDiv = document.createElement("div");
      buttonDiv.classList.add("shows__each-row--button-container");
      arrayRow.appendChild(buttonDiv);
      let button = document.createElement("button");
      button.classList.add("shows__each-row--button");
      buttonDiv.appendChild(button);
      button.innerText = "BUY TICKETS";
    }
  }
  showTable(shows);