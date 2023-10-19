let events = ['Birthday Party', 'Wedding', 'Conference', 'Music Concert', 'Art Exhibition'];

let selectedEvents = [];
let event1 = events[Math.floor(Math.random() * events.length)];
selectedEvents.push(event1);
let event2 = events[Math.floor(Math.random() * events.length)];
while (event2 === event1) {
  event2 = events[Math.floor(Math.random() * events.length)];
}
selectedEvents.push(event2);

console.log("Selected Events: ", selectedEvents);

function performEvent(event) {
  console.log("Performing", event);
}

selectedEvents.forEach(performEvent);