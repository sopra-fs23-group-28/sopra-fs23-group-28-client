/**
 * User model
 */
class User {
  constructor(data = {}) {
    this.id = null;
    this.username = null;
    this.camelColor = null;
    this.stepState = null;
    this.bonusTool = null;
    this.gameCreator = null;
    this.token = null;
    this.status = null;
    Object.assign(this, data);
  }
}
export default User;
