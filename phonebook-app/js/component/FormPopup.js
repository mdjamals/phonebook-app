import { LitElement, html } from "lit-element";

export default class FormPopup extends LitElement {
  constructor() {
    super();
    this.total = 0;
    this.formData = {};
    this.change = this.change.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  static get properties() {
    return {
      total: Number,
      togglePopup: Function,
      popupOpen: { type: Boolean },
      formData: Object,
      // saveContact: Function,
    };
  }

  firstUpdated() {
    // console.log(this.popupOpen);
  }

  submitForm(event) {
    event.preventDefault();

    //console.log(this.shadowRoot.querySelectorAll("input"));
    var elements = this.shadowRoot.querySelectorAll("input");
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].type == "text") {
        elements[i].value = "";
      }
    }

    this.saveContact(this.formData);
    this.formData = {};
  }

  change(event) {
    let formData = {};
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    formData[name] = value;
    this.formData = Object.assign(this.formData, formData);

    //console.log(this.formData);
  }

  render() {
    return html`
      <style>
        @import "./css/global.css";
        .form-popup {
          background: #2b304c;
          /* width: 100vh;
          height: 100vw; */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          transition: all 0.4s ease-in-out;
          opacity: 0;
          z-index: 2;
        }
        .form-popup.active {
          visibility: visible;
          opacity: 1;
        }
        form {
          background: #fff;
          width: 800px;
          max-width: 100%;
          padding: 20px;
          border-radius: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 20px;
        }
        h2 {
          font-size: 1.4rem;
          font-weight: 500;
          grid-column: 1/5;
        }
        .form-group {
          /* padding: 20px; */
          position: relative;
        }
        label {
          display: inline-block;
          font-size: 0.7rem;
          background: #fff;
          position: absolute;
          top: -5px;
        }
        input[type="text"] {
          display: block;
          width: 100%;
          padding: 10px;
        }
        .first-name {
          grid-column: 1/3;
        }
        .last-name {
          grid-column: 3/5;
        }
        .address-1 {
          grid-column: 1/5;
        }
        .address-2 {
          grid-column: 1/5;
        }
        .city {
          grid-column: 1/3;
        }
        .button {
          justify-self: end;
          grid-column: 4/5;
        }
        .button button {
          cursor: pointer;
          padding: 10px 25px;
          color: #fff;
          border-radius: 5px;
          border: none;
          background: #1e5799;
          background: -moz-linear-gradient(
            top,
            #1e5799 0%,
            #2989d8 50%,
            #207cca 51%,
            #7db9e8 100%
          );
          background: -webkit-linear-gradient(
            top,
            #1e5799 0%,
            #2989d8 50%,
            #207cca 51%,
            #7db9e8 100%
          );
          background: linear-gradient(
            to bottom,
            #1e5799 0%,
            #2989d8 50%,
            #207cca 51%,
            #7db9e8 100%
          );
        }

        .button button:hover {
          background: #7db9e8;
          background: -moz-linear-gradient(
            top,
            #7db9e8 0%,
            #207cca 49%,
            #2989d8 50%,
            #1e5799 100%
          );
          background: -webkit-linear-gradient(
            top,
            #7db9e8 0%,
            #207cca 49%,
            #2989d8 50%,
            #1e5799 100%
          );
          background: linear-gradient(
            to bottom,
            #7db9e8 0%,
            #207cca 49%,
            #2989d8 50%,
            #1e5799 100%
          );
        }
        .close-icon {
          justify-self: end;
          grid-column: 4/5;
          cursor: pointer;
        }
      </style>
      <section class="form-popup ${this.popupOpen ? "active" : ""}">
        <form @submit="${this.submitForm}">
          <div class="close-icon" @click="${this.togglePopup}">X</div>
          <h2>Add a new contact</h2>
          <div class="form-group first-name">
            <label for="first_name">First Name</label>
            <input type="text" name="first_name" @keyup="${this.change}" />
          </div>

          <div class="form-group last-name">
            <label for="first_name">Last Name</label>
            <input type="text" name="last_name" @keyup="${this.change}" />
          </div>

          <div class="form-group address-1">
            <label for="address_1">Address #1</label>
            <input type="text" name="address_1" @keyup="${this.change}" />
          </div>

          <div class="form-group address-2">
            <label for="address_2">Address #2</label>
            <input type="text" name="address_2" @keyup="${this.change}" />
          </div>

          <div class="form-group city">
            <label for="city">City</label>
            <input type="text" name="city" @keyup="${this.change}" />
          </div>

          <div class="form-group state">
            <label for="state">State</label>
            <input type="text" name="state" @keyup="${this.change}" />
          </div>

          <div class="form-group zipcode">
            <label for="zipcode">Zipcode</label>
            <input type="text" name="zipcode" @keyup="${this.change}" />
          </div>

          <div class="form-group phone-number">
            <label for="phone_number">Phone Number</label>
            <input type="text" name="phone_number" @keyup="${this.change}" />
          </div>

          <div class="form-group category">
            <label for="category">Category</label>
            <input type="text" name="category" @keyup="${this.change}" />
          </div>

          <div class="form-group favourites">
            <label for="favourites">Favourites</label>
            <input type="text" name="favourites" @keyup="${this.change}" />
          </div>

          <div class="form-group button">
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
    `;
  }
}

customElements.define("form-popup", FormPopup);
