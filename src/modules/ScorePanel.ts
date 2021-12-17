// 定义记分牌的类
class ScorePanel {
    score = 0;
    level = 0;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 限制等级的变量
    maxLevel: number;
    // 升级分数控制
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 2) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        // 判断何时升级
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    // 升级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''

        }
    }

}
export default ScorePanel