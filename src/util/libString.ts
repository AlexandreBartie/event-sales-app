export class Memo
{

    private data! : string[]

    get lines() : string[] { return this.data }

    set(text: string | string[] ) : string[]
    {
        if ( typeof(text) == 'string')
        {
            this.data.push(text)
        }
        else
        {
            for (const line of text) 
                this.data.push(line)
        }


        return this.data
    }

    add(text : string | string[] ) { this.set(text) }

}

