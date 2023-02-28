export interface iHook<S, T> 
{
    source: S;
    data: T
}

export class Hook<S, T>
{
    private list: Array<(source: S, data: T) => void> = []

    public on(handler: (source: S, data: T) => void): void 
    {
        this.list.push(handler)
        console.log(handler.name, this.list.length)
    }

    public off(handler: (source: S, data: T) => void): void 
    {
        this.list = this.list.filter((id) => id !== handler)
    }

    public trigger(source: S, data: T): void {
        // Duplicate the array to avoid side effects during iteration.
        this.list.slice(0).forEach((h) => h(source, data))
    }
}
