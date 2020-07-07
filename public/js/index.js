
// events call
const findAllEvents = () => {
  $.get("/api/events/").then((eventData) => {
    console.log(eventData);
    for (let i = 0; i < eventData.length; i++) {
      const element = eventData[i];
      let el = `
      <p class="list-group-item list-group-item-action list-group-item-secondary" id=${element.id}>${element.name}</p>
      `;
      $(".list-group").append(el);
    }
  });
};
$(".list-group").click((event) => {
  console.log(event.target.id);
  $.get(`/api/events/${event.target.id}`).then((idData) => {
    let data = idData[0]
    console.log(idData[0])
    let el = `
    <div class="col-lg-7" id="event-info">
        <h1 class="event-titles" id="event-info">Event info</h1>
        <h3 class="anton" id="event-creator">Created by: ${data.creator}</h3>
        <br>
        <h3 class="anton" id="event-time">Time: ${data.time}</h3>
        <br>
        <h3 class="anton" id="event-location">Location: ${data.location}</h3>
      </div>
    `;
    $("#event-info").append(el);
  })
});
// function to find all events by creator
const findByCreator = (creator) => {
  $.get(`/api/events/creator/${creator}`).then((eventData) => {
    console.log(eventData);
  });
};
findAllEvents();
findByCreator();
