import { LitElement, html } from "lit-element";

export default class SideMenu extends LitElement {
  constructor() {
    super();
    this.total = 0;
  }

  static get properties() {
    return {
      total: Number,
      togglePopup: Function,
    };
  }

  firstUpdated() {}

  render() {
    return html`
      <style>
        @import "./css/global.css";
        #side-menu {
          height: 100vh;
          background: #323759;
          padding: 50px 25px;
        }
        #side-menu .logo {
          text-align: center;
        }
        #side-menu .menu .title {
          font-weight: 700;
          color: #ccced7;
          margin: 1rem 0;
        }
        #side-menu .menu nav a {
          color: #ccced7;
          text-decoration: none;
          text-transform: capitalize;
          display: block;
          padding: 10px 10px 0px 0;
        }
        #side-menu .menu nav a span.icon {
          padding: 10px 10px 0px 0;
        }
      </style>
      <section id="side-menu">
        <div class="logo">
          <img src="./images/logo.png" />
        </div>
        <div class="menu">
          <div class="title">Contacts</div>
          <nav>
            <a href="#" @click="${this.togglePopup}">
              <span class="icon"> + </span>Add Contacts
            </a>
          </nav>
        </div>
      </section>
    `;
  }
}

customElements.define("side-menu", SideMenu);
