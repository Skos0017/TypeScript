class Dictionary<TKey, TValue>{
    private _dictionary: KeyValuePair<TKey, TValue>[];

    add(items: KeyValuePair<TKey, TValue>[]){
        items.push();
    }
}
class KeyValuePair <TKey, TValue>{
    private _key:TKey;
    private _value:TValue;

    constructor(key:TKey, value: TValue){
       this._key= key;
       this._value=value;
    }

    public get key(){
        return this._key;
    }
    public get Value(){
        return this._value;
    }

    public set Key(key:TKey){
        this._key = key;
    }
    public set Value(value:TValue){
        this._value = value;
    }
}
