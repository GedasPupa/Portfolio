class Slider {
    constructor(selector, component, data) {
        this.selector = selector;
        this.component = component;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector() ||
            !this.findElementBySelector()) {
            return false;
        }

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        if(typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }
        return true;
    }

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    generateItems() {
        const itemsCount = this.data.list.length;
        const itemWidth = 100 / itemsCount;
        let HTML = '';

        for (let i = 0; i < itemsCount; i++) {
            HTML += `<div class='item1' style='width: ${itemWidth}%;'>ITEM${i+1}</div>`;            
        }
        return HTML;
    }

    generateDots(){
        let HTML = '';
        const itemsCount = this.data.list.length;

        for (let i = 0; i < itemsCount; i++) {
            HTML += `<div class='dot'></div>`;
        }
        return HTML;
    }

    render() {
        const itemsCount = this.data.list.length;
        const itemsPerView = 1;
        const listWidth = itemsCount / this.data.itemsPerView[0].itemsCount * 100;
        const itemWidth = 100 / itemsCount;
        const singleMargin = 100 / itemsPerView;

        const HTML = `<div class='carousel'>
                        <div class='gallery'>
                            <div class='list' style="width: ${listWidth}%;">
                                ${this.generateItems()}

                            </div>
                        </div>
                        <div class='controls'>
                            <div class='dots'>
                                ${this.generateDots()}

                            </div>
                        </div>
                    </div>`;
        this.DOM.innerHTML = HTML;
    }

    addEvents() {
        
    }
}

export { Slider };