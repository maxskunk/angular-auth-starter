export class Util {

    static max = 10;
    static min = 0;

    public static randomNumber(): number {
        const min = Math.ceil(this.min);
        const max = Math.floor(this.max);

        return Math.floor(Math.random() * (max - min) + min)
    }

}