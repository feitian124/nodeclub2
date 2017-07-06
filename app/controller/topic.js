'use strict';

module.exports = app => {
  const createRule = {
    //accesstoken: 'string',
    title: 'string',
    tab: { type: 'enum', values: ['ask', 'share', 'job'], required: false },
    content: 'string',
  }
  class TopicController extends app.Controller {
    //GET	/posts
    * index() {
      let topics = yield this.service.topic.index(this.params);
      // yield this.ctx.render('topic/index', {topics: topics});
      this.ctx.body = topics;
      this.ctx.status = 200;
    }
    //POST	/posts
    * create() {
      this.validate(createRule);
      let str = new Date().toString();
      const id = yield this.service.topic.create({
        "id": str,
        "author_id": "541bf9b9ad60405c1f151a03",
        "tab": "share",
        "content": "content" + str,
        "last_reply_at": str,
        "good": false,
        "top": true,
        "reply_count": 0,
        "visit_count": 0,
        "create_at": str,
      });
      this.ctx.body = {
        topic_id: id
      };
      this.ctx.status = 201;
    }
    //GET	/posts/:id
    * new() {
      this.ctx.body = "topic.new";
    }
    //GET	/posts/:id/edit
    * edit() {
      this.ctx.body = "topic.edit"
    }
    //PUT	/posts/:id
    * update() {
      this.ctx.body = "topic.update"
    }
    //DELETE	/posts/:id
    * destroy() {
      this.ctx.body = "topic.destroy"
    }
  }
  return TopicController;
};

