import { LitElement, html } from "lit-element";

export default class ContactList extends LitElement {
  constructor() {
    super();
    this.total = 0;
    this.displayAllContacts = this.displayAllContacts.bind(this);
  }

  static get properties() {
    return {
      total: Number,
      allContacts: { type: Array },
      deleteContact: Function,
    };
  }

  firstUpdated() {}

  displayAllContacts() {
    return this.allContacts.map((contact, index) => {
      return html`
        <div class="contact">
          <div class="user-img"></div>
          <div class="fullname">
            <span class="text">${contact.first_name} ${contact.last_name}</span>
            <span class="sub">Full Name</span>
          </div>
          <div class="number">
            <span class="text">${contact.phone_number}</span>
            <span class="sub">Phone Number</span>
          </div>
          <div class="state">
            <span class="text">${contact.state}</span>
            <span class="sub">State</span>
          </div>
          <div class="category">
            <span class="text">${contact.category}</span>
            <span class="sub">category</span>
          </div>
          <div
            class="delete-btn"
            @click="${this.deleteContact.bind(null, index)}"
          >
            Delete
          </div>
        </div>
      `;
    });
  }

  render() {
    return html`
      <style>
        @import "./css/global.css";
        .contacts {
          max-width: 800px;
          padding-top: 30px;
        }
        h2 {
          color: #3e4162;
          font-weight: 300;
          margin-top: 0;
        }
        .contact {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 2fr 3fr 1fr 1fr;
          align-items: center;
          color: #3d4060;
          padding: 20px;
          border-radius: 10px;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .contact:hover {
          -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
          -moz-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
          box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.36);
        }
        .contact .user-img {
          background-image: url("https://randomuser.me/api/portraits/men/46.jpg");
          background-size: cover;
          background-position: center center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .fullname,
        .number,
        .state,
        .category {
          font-size: 1.4rem;
          font-weight: 500;
        }
        .contact .fullname {
          font-weight: 700;
          text-transform: capitalize;
        }
        .text {
          display: block;
          text-align: center;
        }
        .sub {
          display: block;
          color: #b4b5c4;
          font-weight: 300;
          font-size: 0.8rem;
          text-align: center;
        }
        .delete-btn {
          position: absolute;
          right: 0;
          height: 100%;
          padding: 20px;
          color: #ffffff;
          background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          transform: translate3d(100%, 0, 0);
          transition: all 0.4s ease-in-out;
        }
        .contact:hover .delete-btn {
          transform: translate3d(0, 0, 0);
        }
      </style>
      <section class="contacts">
        <h2>Contacts</h2>
        ${this.displayAllContacts()}
      </section>
    `;
  }
}

customElements.define("contact-list", ContactList);
