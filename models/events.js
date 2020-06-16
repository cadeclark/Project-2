module.exports = (sequelize, DataTypes) =>{
let Event = sequelize.define("Event", {
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
return Event
}
