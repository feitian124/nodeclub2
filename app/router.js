'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('topics', '/topics', 'topic');
};
