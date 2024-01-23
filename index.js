const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [1604030, 730, 739630, 440, 1938090, 550, 945360, 582660, 2357570, 252490, 238320, 760160];  // VRising, CS2, Phasmophobia, TF2, COD, L4D2, Amongus, BDO, OW2, Rust, Outlast, Bloodhunt
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
