'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const data = { message: 'hello, nodeclub2' };
      // render a template, path relate to `app/view`
      yield this.ctx.render('home', data);
    }
  }
  return HomeController;
};
