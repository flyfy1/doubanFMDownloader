doubanFMDownloader
==================

语言连接：
- [English Version](#english-version)
- [中文版](#chinese-version)

# English Version
### Requirement 
1. Chrome Dev Channel: http://www.chromium.org/getting-involved/dev-channel </br> The Dev Channel is needed, for whatever platform you're using.
2. Extension Developer Mode: chrome://extensions/ </br> Select the `Developer Mode` on the top right corner
3. Experimental API setup: chrome://flags/ search for "Experimental Extension APIs", make sure it's enabled

### Use
1. Checkout/Download this project, put it somewhere
2. In the [chrome's extenson page](chrome://extensions/), install it from somewhere.

3. Then just browse to [doubanFM](http://douban.fm/)

### Notes
1. Because of the Limitation of Google Chrome, it can only download files into the root of Download folder
2. I believe with the playlist.json file, we can easily download the corresponding file from any location. Thus I wrote this playlist.json file downloade first (as you can see from the source code it's easy to make it to be real-time downloading), and then I'll further write a script (probably in PHP..) to auto-download files and do file-renaming.


<h2 id="chinese-version">中文版</h2>

## 最终使用效果：
去[豆瓣FM](http://douban.fm/)网站收听歌曲时，在每个MP3__缓冲完毕__之后会自动下载（一般是在一个MP3播放进行中），并根据你的`chrome://downloads/`的数据，避免下载重复的歌曲（根据歌曲名决定）。

## 如何安装：
1. Dev版本的Google Chrome，[这里](http://www.chromium.org/getting-involved/dev-channel)选择`Dev channel`，对应你的系统: Windows / Mac / Linux，并替换掉现在的GoogleChrome（设置都会保存的）。需要这个版本是因为只有Dev Channel的GoogleChrome才提供了自动下载新文件的API。
2. 开启`Experimental API`功能:去[chrome extension page](chrome://extensions/)（link：`chrome://flags/`），搜索`Experimental Extension APIs`，点`enable`。
3. 安装这个GoogleChrome的扩展：[DoubanFM AutoDownloader](www.google.com)



## 常见问题
1. 下载的歌曲质量如何?
> 取决于你收听的歌曲的质量
2. 能否下载到其它文件夹?
> 不能（我也想啊……）。这是因为GoogleChrome下载文件API的限制，只能下载到你的`下载`文件夹
3. 如果我删除了GoogleChrome的下载记录会怎样？
> 再次遇到相同歌曲的时候，软件会以为你没有下载过这个歌曲，并且自动进行下载。
4. 如果我只删除了下载文件夹的记录会怎样？
> 我没有尝试过，但GoogleChrome应该还是会认为有下载过这个歌曲的，因为下载记录里面有这个歌曲的信息。

反馈信息：通过Github的`Issue`page；）
