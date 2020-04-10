require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./database');
const Track = require('./models/Track');

console.log(connectToDatabase);

console.log(Track);

('use strict');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Track.create(JSON.parse(event.body))
      .then((note) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the Track.',
        })
      );
  });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Track.findById(event.pathParameters.id)
      .then((note) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the track.',
        })
      );
  });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Track.find()
      .then((notes) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(notes),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the notes.',
        })
      );
  });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Track.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), {
      new: true,
    })
      .then((note) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(note),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the notes.',
        })
      );
  });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(() => {
    Track.findByIdAndRemove(event.pathParameters.id)
      .then((note) =>
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Removed note with id: ' + track._id,
            note: note,
          }),
        })
      )
      .catch((err) =>
        callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the notes.',
        })
      );
  });
};
