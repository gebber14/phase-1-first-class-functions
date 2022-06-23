function receivesAFunction(callbackFuncOne) {
    callbackFuncOne();
}


function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() { 
    }
}
