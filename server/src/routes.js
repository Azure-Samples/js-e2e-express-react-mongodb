const express = require('express');

const router = express.Router();
const data = require('./data');

const timeStamp = (req) => {
  const date = new Date();
  const currentTimeStamp = date.getTime();
  console.log(
    `${currentTimeStamp} - ${req.protocol}//${req.headers.host}${req.originalUrl}`
  );
};

// get all data
router.get('/list', async (req, res) => {
  timeStamp(req);

  const initialData = await data.findDocuments({});

  // return list
  res.json({ data: initialData });
});
// Delete all - depending on query string
router.delete('/list', async (req, res) => {
  timeStamp(req);

  // empty indicates all
  const docs = {};

  // delete
  await data.removeDocuments(docs);

  res.send('success');
});
// Insert 1
router.post('/item', async (req, res) => {
  timeStamp(req);

  // insert
  if (req.body && Object.keys(req.body).length > 0) {
    const newItem = [req.body];
    console.log(JSON.stringify(newItem));

    // insert params to db
    await data.insertDocuments(newItem);
  }

  res.send('success');
});
// Delete 1
router.delete('/item', async (req, res) => {
  timeStamp(req);

  // delete
  if (req.body && Object.keys(req.body).length > 0 && req.body.id) {
    const { id } = req.body;
    console.log(JSON.stringify(id));

    await data.removeDocuments({ _id: data.ObjectId(id) });
    res.send('success');
  } else {
    res.status(404).send('Missing Id');
  }
});
// Server status
router.get('/state', async (req, res) => {
  if (data.dbConnected) {
    console.log('state==connection');
    res.send('DB is connected');
  } else {
    res.status(400).send('No Db Url');
  }
});
// instead of 404 - just return home page
router.get('*', (req, res) => {
  timeStamp(req);

  res.redirect('/');
});

module.exports = router;
