# MangaRock Image Decoder

> Decode images from MangaRock's proprietary format

MangaRock has a nice API to work with, but obscures images by [encoding them as bitwise xor'd .webp images](https://www.reddit.com/r/codes/comments/7mdx70/need_help_decrypting_this_string/). This codebase is a web microservice that decodes images into their native .webp format for easy consumption outside of MangaRock.

This microservice was built for the [poketo library](https://github.com/poketo/node).

## Usage

This microservice is deployed to `https://mri-image-decoder.now.sh`. To decode an image, simply pass the image's URL to the `?url` query parameter like so:

```
https://mri-image-decoder.now.sh?url=https://f01.mrcdn.info/file/mrfiles/i/6/n/l/T3.3BZTN7p5.mri
```

This will return the image with the correct content type set, so you can simply load or use it like any other image URL:

```html
<img src="https://mri-image-decoder.now.sh?url=https://f01.mrcdn.info/file/mrfiles/i/6/n/l/T3.3BZTN7p5.mri" />
```

## Credits

Thanks to [this reddit answer](https://www.reddit.com/r/codes/comments/7mdx70/need_help_decrypting_this_string/) and the [Tachiyomi codebase](https://github.com/inorichi/tachiyomi) for their implementations, which helped me write this module.

## License

MIT
