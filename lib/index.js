"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _superagent = _interopRequireDefault(require("superagent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class KintoHubClient {
  constructor(config) {
    if (!config.endpoint || !config.clientId || !config.clientSecret) {
      throw new Error('Missing KintoHub Client Config');
    }

    this.endpoint = config.endpoint;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.apiToken = '';
  }

  get APIToken() {
    return this.apiToken;
  }

  refreshAPIToken() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const res = yield _superagent.default.post(_this.endpoint).send({
        clientId: _this.clientId,
        clientSecret: _this.clientSecret
      });
      _this.apiToken = res.body.data.token;
    })();
  }

}

function createKintoHubClient(config) {
  if (!config.endpoint || !config.clientId || !config.clientSecret) {
    throw new Error('Missing KintoHub Client Config');
  }

  return new KintoHubClient(config);
}

var _default = createKintoHubClient;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJLaW50b0h1YkNsaWVudCIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwiZW5kcG9pbnQiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsIkVycm9yIiwiYXBpVG9rZW4iLCJBUElUb2tlbiIsInJlZnJlc2hBUElUb2tlbiIsInJlcyIsInJlcXVlc3QiLCJwb3N0Iiwic2VuZCIsImJvZHkiLCJkYXRhIiwidG9rZW4iLCJjcmVhdGVLaW50b0h1YkNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztBQVFBLE1BQU1BLGNBQU4sQ0FBcUI7QUFNbkJDLEVBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUErQjtBQUN4QyxRQUFJLENBQUNBLE1BQU0sQ0FBQ0MsUUFBUixJQUFvQixDQUFDRCxNQUFNLENBQUNFLFFBQTVCLElBQXdDLENBQUNGLE1BQU0sQ0FBQ0csWUFBcEQsRUFBa0U7QUFDaEUsWUFBTSxJQUFJQyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNEOztBQUVELFNBQUtILFFBQUwsR0FBZ0JELE1BQU0sQ0FBQ0MsUUFBdkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCRixNQUFNLENBQUNFLFFBQXZCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkgsTUFBTSxDQUFDRyxZQUEzQjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7QUFFRCxNQUFJQyxRQUFKLEdBQXVCO0FBQ3JCLFdBQU8sS0FBS0QsUUFBWjtBQUNEOztBQUVLRSxFQUFBQSxlQUFOLEdBQXdCO0FBQUE7O0FBQUE7QUFDdEIsWUFBTUMsR0FBRyxTQUFTQyxvQkFBUUMsSUFBUixDQUFhLEtBQUksQ0FBQ1QsUUFBbEIsRUFBNEJVLElBQTVCLENBQWlDO0FBQ2pEVCxRQUFBQSxRQUFRLEVBQUUsS0FBSSxDQUFDQSxRQURrQztBQUVqREMsUUFBQUEsWUFBWSxFQUFFLEtBQUksQ0FBQ0E7QUFGOEIsT0FBakMsQ0FBbEI7QUFLQSxNQUFBLEtBQUksQ0FBQ0UsUUFBTCxHQUFnQkcsR0FBRyxDQUFDSSxJQUFKLENBQVNDLElBQVQsQ0FBY0MsS0FBOUI7QUFOc0I7QUFPdkI7O0FBNUJrQjs7QUErQnJCLFNBQVNDLG9CQUFULENBQThCZixNQUE5QixFQUE0RTtBQUMxRSxNQUFJLENBQUNBLE1BQU0sQ0FBQ0MsUUFBUixJQUFvQixDQUFDRCxNQUFNLENBQUNFLFFBQTVCLElBQXdDLENBQUNGLE1BQU0sQ0FBQ0csWUFBcEQsRUFBa0U7QUFDaEUsVUFBTSxJQUFJQyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNEOztBQUVELFNBQU8sSUFBSU4sY0FBSixDQUFtQkUsTUFBbkIsQ0FBUDtBQUNEOztlQUVjZSxvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuXG5pbnRlcmZhY2UgS2ludG9IdWJDbGllbnRDb25maWcge1xuICBlbmRwb2ludDogc3RyaW5nO1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBjbGllbnRTZWNyZXQ6IHN0cmluZztcbn1cblxuY2xhc3MgS2ludG9IdWJDbGllbnQge1xuICBwcml2YXRlIGVuZHBvaW50OiBzdHJpbmc7XG4gIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBjbGllbnRTZWNyZXQ6IHN0cmluZztcbiAgcHJpdmF0ZSBhcGlUb2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogS2ludG9IdWJDbGllbnRDb25maWcpIHtcbiAgICBpZiAoIWNvbmZpZy5lbmRwb2ludCB8fCAhY29uZmlnLmNsaWVudElkIHx8ICFjb25maWcuY2xpZW50U2VjcmV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgS2ludG9IdWIgQ2xpZW50IENvbmZpZycpO1xuICAgIH1cblxuICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgdGhpcy5jbGllbnRJZCA9IGNvbmZpZy5jbGllbnRJZDtcbiAgICB0aGlzLmNsaWVudFNlY3JldCA9IGNvbmZpZy5jbGllbnRTZWNyZXQ7XG4gICAgdGhpcy5hcGlUb2tlbiA9ICcnO1xuICB9XG5cbiAgZ2V0IEFQSVRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXBpVG9rZW47XG4gIH1cblxuICBhc3luYyByZWZyZXNoQVBJVG9rZW4oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdC5wb3N0KHRoaXMuZW5kcG9pbnQpLnNlbmQoe1xuICAgICAgY2xpZW50SWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHRoaXMuY2xpZW50U2VjcmV0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5hcGlUb2tlbiA9IHJlcy5ib2R5LmRhdGEudG9rZW47XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2ludG9IdWJDbGllbnQoY29uZmlnOiBLaW50b0h1YkNsaWVudENvbmZpZyk6IEtpbnRvSHViQ2xpZW50IHtcbiAgaWYgKCFjb25maWcuZW5kcG9pbnQgfHwgIWNvbmZpZy5jbGllbnRJZCB8fCAhY29uZmlnLmNsaWVudFNlY3JldCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBLaW50b0h1YiBDbGllbnQgQ29uZmlnJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IEtpbnRvSHViQ2xpZW50KGNvbmZpZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUtpbnRvSHViQ2xpZW50O1xuIl19