const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '>';
const dateWithouthSecond = new Date();
const cas = new Date().toLocaleString('cz', { timeZone: 'Europe/Prague', hour: '2-digit', minute:'2-digit' });
const usedCommandRecently = new Set();

bot.on('ready', () =>{
    console.log('Online');
    bot.user.setActivity('>help', {type: 'WATCHING'});
})

//admincmds id 726428996379869194

//oznamování stramů---------------------------------------------------------------------------------------------------------------//
bot.on('ready', () =>{
    console.log(cas)
    setInterval(() =>{
        delete hours
        delete minutes
        delete finalTime
        delete dt
        const dt = new Date();
        const hours = dt.getHours(); // gives the value in 24 hours format
        const hours2 = hours + 1;
        const minutes = dt.getMinutes() ; 
        const cas = hours2 + ":" + minutes;
       if(cas == '18:50'){
       bot.channels.cache.get("726447986372247602").send("@everyone stream začíná za 10 minut | http://twitch.tv/xd_p0tat0");
       }
       else(console.log(cas));
   }, 60000)
})
//--------------------------------------------------------------------------------------------------------------------------------//

//příkazy-------------------------------------------------------------------------------------------------------------------------//
bot.on('message', msg=>{
    if (msg.author.bot){
        console.log('Ignorovaná zpráva:',msg.content,'| Důvod: zprávu odeslal bot.');
        return;
    }
    if(msg.content === "čau"){
        msg.channel.send('ahoj :)');
    }
    if(msg.content === "ahoj"){
        msg.channel.send('čau :)');
    }
    if(msg.content === "hotel"){
        msg.channel.send('trivago');
        msg.react('🏨');
    }
    if(msg.content === ">time"){
        delete hours
        delete minutes
        delete finalTime
        delete dt
        const dt = new Date();
        const hours = dt.getHours(); // gives the value in 24 hours format
        const hours2 = hours + 1;
        const minutes = dt.getMinutes() ; 
        const cas = hours2 + ":" + minutes;
        msg.channel.send(cas);
    }
    if(msg.content === ">info"){
        msg.channel.send('Verze **0.8.1**, Název verze: **Český update** | Vytvořil <@399139182725038080>\nChangelog:*Bugfix a přidaná funkce >napad*');
    }
    if(msg.content === ">help"){
        msg.channel.send('**Příkazy pro FoxBota:**\n**>time** - Zobrazí současný čas (hh:mm:ss).\n**>help** - Zobrazí nápovědu pro příkazy (tohle).\n**>info** - Zobrazí informace o botovi, changelog.\n**>napad** (zpráva) - Pošle nápad do kanálu s nápady.');
    }
    if(msg.channel.id === "726484288647725077"){
        msg.react('✅');
        msg.react('❌');
    }
    if(msg.channel.id === "769123649063878656"){
        msg.react('✅');
        msg.react('❌');
    }
    if(msg.content === '>cooldown'){
        msg.channel.send('Na tomto příkazu se pracuje...')
        
    }
    
})
//--------------------------------------------------------------------------------------------------------------------------------//

//Direct msg system---------------------------------------------------------------------------------------------------------------//
bot.on('message', msg=>{
    if(msg.content.startsWith('>dm') && msg.author.id == 399139182725038080){
        (msg.channel.send('Posílám zprávu'));
        mention = msg.mentions.users.first();
        dmmsg = msg.content.slice (4);
        mention.send(dmmsg);
    }
})
//--------------------------------------------------------------------------------------------------------------------------------//

//nápady--------------------------------------------------------------------------------------------------------------------------//
bot.on('message', msg=>{
    if(msg.content.startsWith('>napad')){
        if(msg.channel.id === 769130381181321236){
        if(usedCommandRecently.has(msg.author.id)){
            msg.reply('dej si pauzu. Tenhle příkaz se dá použít jen jednou za hodinu.')
        }
        else{
        mention = msg.mentions.users.first();
        napados = msg.content.slice (7);
        bot.channels.cache.get("769218051928490055").send(napados + ' | Poslal:' + ' <@'+msg.author+'>');
        usedCommandRecently.add(msg.author.id);
        setTimeout(() =>  {
            usedCommandRecently.delete(msg.author.id);
        }, 3600000)
        }} else{msg.reply('tenhle příkaz se dá použít pouze v příkazovém kanále na serveru Česká Republika')}
    }
    if(msg.channel.id === "769218051928490055"){
        msg.react('✅');
        msg.react('❌');
    }
    
})
//--------------------------------------------------------------------------------------------------------------------------------//

bot.login(process.env.TOKEN);
