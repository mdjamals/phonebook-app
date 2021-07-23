import { LitElement, html } from "lit-element";
import SideMenu from "../../js/component/SideMenu";
import ContentArea from "../../js/component/ContentArea";

class PhonebookComp extends LitElement {
  constructor() {
    super();
    this.total = 0;
    this.popupOpen = false;
    this.togglePopup = this.togglePopup.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.allContacts = [];
  }

  static get properties() {
    return {
      total: Number,
      popupOpen: { type: Boolean },
      allContacts: { type: Array },
    };
  }

  firstUpdated() {}

  togglePopup() {
    this.popupOpen = !this.popupOpen;
    console.log("clicked button");
    console.log(this.popupOpen);

    // this.requestUpdate(); not required as we hae difined the property type above
  }

  saveContact(contact) {
    console.log("saved contacts");
    console.log(contact);

    function immutablePush(arr, newEntry) {
      return [...arr, newEntry];
    }
    let newArray = immutablePush(this.allContacts, contact);
    this.allContacts = newArray;
    this.togglePopup();
    console.log("===================");
    console.log(this.allContacts);
  }

  deleteContact(contact) {
    console.log(contact);
    function immutableDelete(arr, index) {
      return arr.slice(0, index).concat(arr.slice(index + 1));
    }
    const newArray = immutableDelete(this.allContacts, contact);
    this.allContacts = newArray;
  }

  render() {
    return html`
      <style>
        @import "./css/global.css";
        .main-page{
          display: grid;
          grid-template-columns: 250px 1fr;
        }
      </style>
      <div class="main-page">
        <side-menu .togglePopup=${this.togglePopup}></side-menu>
        <content-area ?popupOpen="${this.popupOpen}" .togglePopup=${this.togglePopup} .saveContact="${this.saveContact}" .allContacts="${this.allContacts}" .deleteContact="${this.deleteContact}"></content-area>
        </section>
      </div>
    `;
  }
}

customElements.define("app-polymer", PhonebookComp);
