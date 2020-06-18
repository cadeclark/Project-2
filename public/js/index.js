
// events call
findAllEvents = () => {
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
    <p class="list-group-item list-group-item-action list-group-item-secondary">Name: ${data.name} location: ${data.location} Time: ${data.time} Creator: ${data.creator}</p>
    `;
    $("#event-info").append(el);
  })
});
// function to find all events by creator
findByCreator = (creator) => {
  $.get(`/api/events/creator/${creator}`).then((eventData) => {
    console.log(eventData);
  });
};
findAllEvents();
findByCreator();
