var Parser = require('rss-parser');
var parser = new Parser();


(async () => {

    let feed = await parser.parseURL('https://podcasts.subsplash.com/wxmqmtj/podcast.rss');
    console.log(feed.title);


    feed.items.forEach(item => {
        console.log("-------------------------");
        console.log("DATE: " + item.pubDate);
        console.log("SPEAKER: " + item.itunes["author"]);
        console.log("MESSAGE TITLE: " + item.title);
        console.log("AUDIO URL: " + item.enclosure["url"]);
    });


})();