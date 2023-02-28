/* eslint-disable @typescript-eslint/no-explicit-any */

export class Collection<T> extends Map<string, T>
{

    private data : Array<T>

    get count() : number { return this.size}

    get first() : T { return this.item(1) }

    get last() : T { return this.item(this.count)}

    get isFill() : boolean { return (this.count != 0) }
    
    get list() : T[] { return this.data  }

    get map() : any { return this.list.map }

    get idNext() : string { return (this.count + 1).toString() }

    constructor()
    {
      super()

      this.data = new Array<T>
    }
    
    item(index : number) : T { return this.data[index-1] }

    find(key : string) : T | undefined  { return this.get(key) }

    exist(key : string) : boolean  { return (this.find(key) != undefined) }

    add(key : string, value : T)
    {       
        
        if (!this.exist(key))
          {
            super.set(key, value)

            this.data.push(value)
          }

    }

  }