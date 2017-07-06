'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    * index(params) {
      let topics =  yield this.ctx.model.Topic.find(params);
      return topics;
    }
    * create(params) {
      return yield this.ctx.model.Topic.create(params);
    }
  }
  return TopicService;
};
