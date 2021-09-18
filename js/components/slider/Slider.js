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

    render() {
        const itemsCount = this.data.list.length;
        const listWidth = itemsCount / this.data.itemsPerView[0].itemsCount * 100;
        const itemWidth = 100 / itemsCount;

        const HTML = `<div class='carousel'>
                        <div class='gallery'>
                            <div class='list' style="width: ${listWidth}%;">
                                <div class='item' style='width: ${itemWidth}%;'>ITEM</div>
                                <div class='item' style='width: ${itemWidth}%;'>ITEM</div>
                                <div class='item' style='width: ${itemWidth}%;'>ITEM</div>
                                <div class='item' style='width: ${itemWidth}%;'>ITEM</div>
                                <div class='item' style='width: ${itemWidth}%;'>ITEM</div>
                            </div>
                        </div>
                        <div class='controls'>
                            <div class='dots'>
                                <div class='dot'></div>
                                <div class='dot'></div>
                                <div class='dot'></div>
                                <div class='dot'></div>
                                <div class='dot'></div>
                            </div>
                        </div>
                    </div>`;
        this.DOM.innerHTML = HTML;
    }
}

export { Slider };