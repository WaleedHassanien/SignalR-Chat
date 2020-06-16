var connect = new signalR.HubConnectionBuilder().withUrl("/chat").build();
connect.on("Receive", function (userName, Message) {

    var msg = userName + " " + Message
    var li = document.createElement("li");
    li.textContent = msg;
    $("#listMessage").prepend(li);
});
connect.start();
$("#btnMessage").on("click", function () {
    var user = $("#txtName").val();
    var Message = $("#txtMessage").val();
    connect.invoke("sendMessage", user, Message)
});

