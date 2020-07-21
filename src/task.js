class Task {
    constructor(desc) {
        this.info = desc;
    }

    createLine() {
        return `
            <li>
                ${this.info}
                <button data-description="${this.info}">DEL</button>
            </li>
            `;
    }
}