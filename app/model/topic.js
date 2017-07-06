'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const TopicSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    author_id: { type: String },
    top: { type: Boolean, default: false }, // 置顶帖
    good: {type: Boolean, default: false}, // 精华帖
    lock: {type: Boolean, default: false}, // 被锁定主题
    reply_count: { type: Number, default: 0 },
    visit_count: { type: Number, default: 0 },
    collect_count: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    last_reply: { type: String },
    last_reply_at: { type: Date, default: Date.now },
    content_is_html: { type: Boolean },
    tab: {type: String},
    deleted: {type: Boolean, default: false}
  });

  return mongoose.model('Topic', TopicSchema);
}
