
var quotes = [

    {
        content: 'A room without books is like a body without a soul',
        Author: '― Marcus Tullius Cicero',
    },

    {
        content: '“So many books, so little time."',
        Author: '― Frank Zappa',
    },

    {
        content: '“Be yourself; everyone else is already taken.”',
        Author: '― Oscar Wilde',
    }
]



function Quote(){

var Qnum = Math.floor(Math.random()*3) ;

    document.getElementById('Dcontent').innerHTML = quotes[Qnum].content
    document.getElementById('Dauthor').innerHTML = quotes[Qnum].Author


}


