var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articles= {
//OBJECT named "articleOne" 
    'article-one':{
      title:'Article One | Kshitiz',
      heading: 'Article One',
      date:'8 January 2020',
      content:`  <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p>
      <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p>
      <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p> 
    `
    },
    'article-two':{
      title:'Article Two | Kshitiz',
      heading: 'Article Two',
      date:'8 January 2020',
      content:`  <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p>
      <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p>
      <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p> 
    `
    },
    'article-three':{
      title:'Article Three | Kshitiz',
      heading: 'Article Three',
      date:'8 January 2020',
      content:`  <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p>
      <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p>
      <p>Place the text in this place.Place the text in this place.Place the text in this place.Place the text in this place.</p> 
    `
    }

};

//This function recieves the "data" from Object "articleOne" 
//as it passed as a parameter to createTemplate function.
function createTemplate(data){
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;
//javascript string responsible to maintain structureof html document
//"htmlTemplate" contains variable recieved from object aticleOne. 
var htmlTemplate = `
<html>
  <head>
    <title>${title}</title>
<meta name="viewport" content="width-device-width,initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
  <body>
    <div class="container">
    <div>
      <a href="/">Home</a>
      </div>
    <hr/>
    <div>
      <h3>${heading}</h3>
      </div>
    <div>
      ${date};
      </div>
    <div>
    </div>
    ${content};
  </div>
  
    </body>
</html>

`;
return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
/*
//article-one.html page get displayed by javascript as 
//string by modified by object(articleOne) and function(createTemplate) 
app.get('/article-one',function(req,res){
  res.send(createTemplate(articleOne));
  //Here res.send() recieves the string returned by 
  //javascript by RETURN STATEMENT to function createTemplate()
});*/


app.get('/:articleName',function(req,res){
  //articlesName=article-one . This is a feature provided by "express framework"
  //articles[articleName]== {} content object of article-one 
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
