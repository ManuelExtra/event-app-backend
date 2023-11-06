const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const eventCategories = {
  CONFERENCE: 'conference',
  MEETING: 'meetinng',
  SEMINAR: 'seminar',
  TRAINING_SESSION: 'training-session',
  TRADE_SHOW: 'trade-show',
  DINNER: 'dinner',
  POLITICAL_EVENT: 'political-event',
  FUND_RAISER: 'fund-raiser',
  REUNION: 'reunion',
  SPORTS_EVENT: 'sports-event',
  OTHER: 'other',
};

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: eventCategories,
    },
    language: {
      type: String,
      required: true,
      trim: true,
      default: 'English'
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    planner_email: {
      type: String,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      required: true,
      trim: true,
    },
    venue: {
      type: String,
      required: true,
      trim: true,
    },
    event_date: {
      type: Date,
      required: true,
      trim: true,
    },
    event_time: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);
eventSchema.plugin(paginate);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;