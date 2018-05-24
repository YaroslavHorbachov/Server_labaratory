const nconf = require('nconf');
nconf.argv().env();
nconf.get('NODE_ENV') === 'production' ?
    nconf.file('./core/config/prod.json') :
    nconf.file('./core/config/dev.json');
module.exports = {
    nconf
};