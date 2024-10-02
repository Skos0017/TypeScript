export abstract class Good {
    protected abstract _title: string;
    protected abstract _description: string;
    protected abstract _price: number;

    public abstract getInfo(): string;
}