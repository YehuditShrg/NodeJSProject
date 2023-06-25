const { connect } = require('../models/dataBase');
const { Team } = require('../models/team');
const logger = console;//require('../logger/api.logger');

class teamsRepository {
    
    constructor() {
        connect();
    }

    async getAllTeams() {
        const teams = await Team.find({});
        console.log('teams:::', teams);
        return teams;
    }

    async getByID(teamID) {
        const team = await Team.findOne({ ID: teamID });
        console.log('teams:::', team);
        return team;
    }

    async createTeam(team) {
        let data = {};
        try {
            data = await Team.create(team);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateTeam(team) {
        let data = {};
        try {
            data = await Team.updateOne(team);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteTeam(teamID) {
        let data = {};
        try {
            data = await Team.deleteOne({ ID: teamID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new teamsRepository();