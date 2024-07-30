import { Avatar } from "../../../src/avatar/domain/Avatar";
    
describe("Avatar", () => {
    it("El avatar se mueve a la izquierda", () => {
    const avatar = new Avatar();
    const initialPositionHorizontal = avatar.getHorizontalPosition();
    avatar.moveLeft();
expect(avatar.getHorizontalPosition()).toBeLessThan(initialPositionHorizontal);
    })

    it("El avatar se mueve a la derecha", () => {
    const avatar = new Avatar();
    const initialPositionHorizontal = avatar.getHorizontalPosition();
    avatar.moveRight();
expect(avatar.getHorizontalPosition()).toBeGreaterThan(initialPositionHorizontal);
    })
})