let input = prompt("Masukkan yang akan diubah huruf kapitalnya");
String.prototype.capital = function(allWords) {
    return (allWords) ?
        this.split(' ').map(word => word.capital()).join(' ') :
        this.charAt(0).toUpperCase() + this.slice(1);
}

console.log(input.capital(true));
alert(input.capital(true));