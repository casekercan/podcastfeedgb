import _ from 'lodash';

function getData() {

    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let parser = new RSSParser();
    parser.parseURL(CORS_PROXY + 'https://podcasts.subsplash.com/wxmqmtj/podcast.rss', function (err, feed) {
        document.write("<h1>" + feed.title + "</h1>");
        feed.items.forEach(item => {
            document.write("<h3>DATE: " + item.pubDate + "</h3>");
            document.write("<p> SPEAKER: " + item.itunes["author"] + "</p>");
            document.write("<p> MESSAGE TITLE: " + item.title + "</p>");
            document.write("<p> AUDIO URL: <a href=" + item.enclosure["url"] + " target=`_blank`> Click Here to Play/Download </a></p>");
            document.write("<hr>");
        });
    })
}





document.body.appendChild(getData());
