import { create, Whatsapp } from 'venom-bot';


create({
	session: "test", //name of session
	multidevice: true,
}).then((client) => start(client))
	.catch((erro) => {
		console.log(erro);
	});

// const compareTime = (hour, minute, second) =>
// 	new Date(Date.now()).getHours() === Number(hour) &&
// 	new Date(Date.now()).getMinutes() === Number(minute) &&
// 	new Date(Date.now()).getSeconds() === Number(second);
const GM = [
    "☀","✨","🌞","👾"
  ];
  const random = Math.floor(Math.random() * GM.length);
let	start = ((client:Whatsapp)=>{
		client.onMessage((msg) => {
			console.log(msg,msg.body);
			if (msg.body.toLowerCase().includes('gm') || msg.body.toLowerCase().includes('good morning')) {
				client.reply(msg.from, 'Good Morning '+GM[random]+" !!!",msg.id)
			}
		})
	}	)

  
