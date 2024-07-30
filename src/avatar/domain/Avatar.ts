export class Avatar {
    private horizontalPosition: number;
    constructor() {
    this.horizontalPosition = 0;
    }
    getHorizontalPosition(): number {
    return this.horizontalPosition;
    }
    moveLeft () {
    this.horizontalPosition--;
    }
    moveRight() {
    this.horizontalPosition++;
    }
    }