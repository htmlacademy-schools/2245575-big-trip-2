import { createElement } from '../render.js';

const createTripTemplate = () =>
  `<ul class="trip-events__list">
  </ul>`;

export default class TripView {
  getTemplate() {
    return createTripTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
