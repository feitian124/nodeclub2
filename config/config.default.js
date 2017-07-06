'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499325048972_6908';

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1/nodeclub2',
    options: {}
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.njk',
  };

  return config;
};
