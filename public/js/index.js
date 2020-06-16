console.log("test");
// events call
findAllEvents = () => {
  $.get("/api/events/").then((eventData) => {
    console.log(eventData);
    for (let i = 0; i < eventData.length; i++) {
      const element = eventData[i];
      let el = `
      <div class="row mx-auto">
       <div class="events col-12">${element.name}</div>
      </div>
      `;
      $(".box1").append(el);
    }
  });
};
// function to find all events by creator
findByCreator = (creator) => {
  $.get(`/api/events/creator/${creator}`).then((eventData) =>{

    console.log(eventData)
  } 
  );
};
findAllEvents();