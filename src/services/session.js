import jwtDecode from 'jwt-decode';

/* eslint-disable */
class Session {

  constructor() {
    this._onAuthCallbacks = [];
    this._token = null;
    this._user = null;
    this._never_logged = null;
    this.setToken(localStorage.getItem('fti-token'));
  }

  /**
   * Verify if user is authenticated
   * @returns {boolean}
   */
  isAuthenticated() {
    return !!this.getToken();
  }

  /**
   * Add event listener for authentication
   * @param func
   */
  onAuthentication(func) {
    this._onAuthCallbacks.push(func);
  }

  /**
   * Get user
   * @returns {null|*}
   */
  getUser() {
    return this._user;
  }

  /**
   * Get jwt token
   * @returns {null|*}
   */
  getToken() {
    return this._token;
  }

  /**
   * Set auth jwt token
   * and extract user from it
   * @param token
   */
  setToken(token) {
    this._token = token;
    if (this._token) {
      try {
        this._user = jwtDecode(token);
        this._never_logged = this._user.never_logged
        delete this._user.never_logged
        localStorage.setItem('fti-token', this._token);
        if(localStorage.getItem('never_logged') == null){
          localStorage.setItem('never_logged',this._never_logged)
        }
        this._emitAuthenticationEvent();
      } catch (err) {
        this._user = null;
        this._token = null;
        this._never_logged = null;
        localStorage.removeItem('fti-token');
        localStorage.removeItem('never_logged');
      }
    }
  }

  /**
   * Remove authentication
   */
  removeToken() {
    this._token = null;
    this._user = null;
    this._never_logged = null;
    localStorage.removeItem('fti-token');
    localStorage.removeItem('never_logged');
  }

  /**
   * Emit authentication event
   * @private
   */
  _emitAuthenticationEvent() {
    this._onAuthCallbacks.forEach(func => func(this.getToken(), this.getUser()));
  }

  /**
   * Check if user has admin role
   * @returns {boolean}
   */
  isAdmin() {
    return this._user.role.includes('admin')
  }
}
/* eslint-enable */
export default new Session();
