String.prototype.capital = function(allWords) {
    return (allWords) ?
        this.split(' ').map(word => word.capital()).join(' ') :
        this.charAt(0).toUpperCase() + this.slice(1);
}

console.log("mifah faris hidayat".capital(true));