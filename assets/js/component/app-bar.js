class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Welcome to my movie App</h2>`;
    }
}

customElements.define("app-bar", AppBar);