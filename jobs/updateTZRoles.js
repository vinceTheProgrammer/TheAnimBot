const TZRoles = ["865023119486615584","865023262295588886","865023442940067842","865023571265060935","865023803423588392","865023811219750923","865023817562456084","865023825561255986","865023828013875251","865023830607396905","865023833136037900","865023836872245259","865023838584045588","865023842392080384","865023845304107058","865023848146927626","865023850559438889","865023853390856212","865023856665690112","865023859589382174","865023862449635388","865023866036682752","865023869177036868","865023871786024971"];
const guild = '734988771539419137';
const rateLimit = 12000;
module.exports = {
    execute(client) {
        console.log("EEEEE");
        TZRoles.forEach(function (role, index) {
            setTimeout(function () {
            let roleName = client.guilds.cache.get(guild).roles.cache.get(role).name;
            let rNArray = roleName.split(' ');
            let hour = Number(rNArray.shift());
            let newHour;
            if (hour == 23) {
                newHour = 0;
            } else {
                newHour = hour + 1;
            }
            rNArray.unshift(newHour.toString());
            let newRoleName = rNArray.join(' ');
            client.guilds.cache.get(guild).roles.cache.get(role).setName(newRoleName);
        }, index * rateLimit); 
        });
    }
}