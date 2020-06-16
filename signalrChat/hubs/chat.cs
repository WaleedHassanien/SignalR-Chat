using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace signalrChat.hubs
{
    public class chat:Hub
    {
        public async Task sendMessage(string fromUser,string Message)
        {
            await Clients.All.SendAsync("Receive", fromUser, Message);
        }
    }
}
