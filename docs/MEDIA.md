# Site media

The user's `芯聚网站zip.zip` supplied the following original JPEG files. Each file was copied byte-for-byte, without retouching or recompression:

| Site file | Supplied file | Purpose |
| --- | --- | --- |
| `public/media/hero-background.jpg` | 网站背景图.jpg | Full-width homepage Hero background, 3238 × 1295 pixels |
| `public/media/company-logo.jpg` | 芯聚logo.jpg | Header and footer logo |
| `public/media/wechat-qr.jpg` | 微信公众号二维码.jpg | WeChat official-account QR |
| `public/media/wecom-qr.jpg` | 企业微信二维码.jpg | WeCom QR |

Media paths are configured in `src/content.js` under `siteMedia`. Both QR images can be opened at their original size from the footer or contact page. The Hero uses the actual image, without the old component collage. Its full image ratio is retained on wide screens; narrow screens crop responsively with `background-size: cover`.

YouTube, LinkedIn and Instagram remain icons without links, as requested. Set verified official profile URLs in `socialProfiles` to enable navigation later.
