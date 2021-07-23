import { LitElement, html } from "lit-element";
import FormPopup from "./FormPopup";
import FavourList from "./FavouriteList";
import ContactList from "./ContactsList";

export default class ContentArea extends LitElement {
  constructor() {
    super();
    this.total = 0;
  }

  static get properties() {
    return {
      total: Number,
      togglePopup: Function,
      popupOpen: { type: Boolean },
      saveContact: Function,
      allContacts: { type: Array },
      deleteContact: Function,
    };
  }

  firstUpdated() {}

  render() {
    return html`
      <style>
        @import "./css/global.css";
        #content-area {
          background: #fcfdff;
          height: 100vh;
          padding: 50px 80px;
        }
      </style>
      <section id="content-area">
        <form-popup
          ?popupOpen="${this.popupOpen}"
          .togglePopup=${this.togglePopup}
          .saveContact="${this.saveContact}"
        >
        </form-popup>
        <favourite-list .allContacts="${this.allContacts}"></favourite-list>
        <contact-list
          .allContacts="${this.allContacts}"
          .deleteContact="${this.deleteContact}"
        ></contact-list>
      </section>
    `;
  }
}

customElements.define("content-area", ContentArea);
