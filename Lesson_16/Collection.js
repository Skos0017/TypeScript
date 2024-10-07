"use strict";
class Dictionary {
    add(items) {
        items.push();
    }
}
class KeyValuePair {
    constructor(key, value) {
        this._key = key;
        this._value = value;
    }
    get key() {
        return this._key;
    }
    get Value() {
        return this._value;
    }
    set Key(key) {
        this._key = key;
    }
    set Value(value) {
        this._value = value;
    }
}
