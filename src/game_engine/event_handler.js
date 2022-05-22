export class EventHandler {
  #handler_record = new Map();

  constructor() {
    // TODO: register the event dispatch function for
    //       browser events
    //  - keypress
    //  - mouse events
    //  - resize
  }

  register_handler(event_type) {
    // TODO: add handler to the handler record
  }

  send_event(event) {
    // TODO: call event dispatch for with the specified event
  }

  event_dispatch(event) {
    // TODO: check handler record for a handler for the specified event
    //       and call the handler(s)
  }
}
