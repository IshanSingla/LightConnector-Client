var socket; 

try{
socket= io("https://lightconnector.herokuapp.com")
}catch(e){
    alert("not able to connect to sockets")
}


socket.on("connect", () => {
    console.log(socket.id);
});



socket.on("disconnect", () => {
    // window.reload();
});






