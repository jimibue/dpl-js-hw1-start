// 1 + 1 - 6

function compareKeys(a, b) {
    // keys
    // (method) ObjectConstructor.keys(o: {}): string[] (+1 overload)
 
     
    //TODO sort
    var aKeys = Object.keys(a).sort()
    var bKeys = Object.keys(b).sort()

    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
}




