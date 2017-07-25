function changeRandomimage() {
    const number = 16;
    var randomImage = Math.floor(Math.random() * number)+1;
    document.body.background = '/images/'+randomImage+'.jpeg';
}
changeRandomimage();