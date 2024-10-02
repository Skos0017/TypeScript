export declare abstract class Good {
    protected abstract _title: string;
    protected abstract _description: string;
    protected abstract _price: number;
    abstract getInfo(): string;
}
