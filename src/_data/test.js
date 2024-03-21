const rect = require('./rectangle')

x = rect.perimetre(20, 30);
y = rect.surface(20, 30);



module.exports.infosrectangle = () => {
    return {
        perimetre: x,
        surface: y
    }
}