let ex = require('expresss')
let path = require('path');
let app = ex()
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}

app.listen(3090);