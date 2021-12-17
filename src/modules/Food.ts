// 定义食物的类
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }
    // 修改食物的位置
    change() {
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }


}
export default Food