/**
 * User model
 */
class Lobby {
  constructor(data = {}) {
    this.id = null;
    this.creatorId = null;
    this.roundNumber = null;
    this.maxSteps = null;
    this.userIds = null;
    Object.assign(this, data);
  }
}
export default Lobby;
