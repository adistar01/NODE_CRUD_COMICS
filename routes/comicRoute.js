const express = require('express');
const {addComic, getComics, getComic, replaceComic, updateComic, deleteComic} = require('../controllers/comicControllers');

const comicRouter = express.Router();

comicRouter.post('/comics', addComic);
comicRouter.get('/comics/all', getComics);
comicRouter.get('/comics/one', getComic);
comicRouter.put('/comics/replace', replaceComic);
comicRouter.patch('/comics/update', updateComic);
comicRouter.delete('/comics/delete', deleteComic);


module.exports = comicRouter;