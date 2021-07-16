const cron = require('node-cron');
const updateTZRoles =  require('./updateTZRoles');

module.exports = {
    execute(client) {
        let updateTZ = cron.schedule('0 * * * *', () => {
            updateTZRoles.execute(client);
          });
        updateTZ.start();
    }
}