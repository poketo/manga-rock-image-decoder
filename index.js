const url = require('url');
const got = require('got');
const { createError, send } = require('micro');
const decodeWebP = require('./lib/decode');

module.exports = async (req, res) => {
  const query = url.parse(req.url, true).query;
  const imageUrl = query.url;

  if (Object.keys(query).length === 0) {
    res.end('Pass a .mri image URL to the ?url= query string');
    return;
  }

  if (!imageUrl) {
    throw createError(400, 'Missing image URL');
  }

  if (!imageUrl.endsWith('.mri')) {
    throw createError(400, 'Invalid .mri image URL');
  }

  if (!/mrcdn\.info/i.test(imageUrl)) {
    throw createError(400, 'Only MangaRock URLs are accepted');
  }

  let request;

  try {
    request = await got(query.url, { encoding: null });
  } catch (err) {
    throw createError(err.statusCode, err.statusMessage);
  }

  const buffer = Buffer.from(decodeWebP(request.body));

  res.setHeader('Content-Type', 'image/webp');
  send(res, 200, buffer);
};
