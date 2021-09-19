class Trusted {
    constructor(sel, data) {
        this.sel = sel;
        this.data = data;

        this.DOM = null;
        this.init();
    }

    init() {
        if(!this.isValidSelector() ||
            !this.findDOM() ||
            !this.isValidData() ) {
            console.log('ERROR: something went wrong!');
            return false;
        }
        this.render();
    }

    isValidSelector() {
        if (typeof this.sel !== 'string' ||
            this.sel === '') {
            console.log("ERROR: selector is not valid!");
            return false;
        }
        return true;
    }

    isValidData() {
        if (typeof this.data !== 'object' ||
            this.data === null ||
            Array.isArray(this.data) ||
            this.data.list.length === 0 ) {
            console.log('ERROR: data is not valid!');
            return false;
        }
        return true;
    }

    findDOM() {
        this.DOM = document.getElementById(this.sel);
        return !!this.DOM;
    }

    render() {
        let HTML = '';
        for (let data of this.data.list) {
            HTML += `<div class="col-12 col-trusted col-lg-2">
                      <img src=${this.data.path + data.img} alt=${data.title}>
                    </div>`;
        };
        this.DOM.insertAdjacentHTML('afterbegin', HTML);
    }
}

export { Trusted };