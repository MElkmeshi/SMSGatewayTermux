const express = require('express')
const app = express()
const port = 3000

const { exec } = require("child_process");

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/run', (req,res) => {
exec("termux-sms-send -n 21891044132232 test2", (error, stdout, stderr) => {
    if (error) {
        res.send(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        res.send(`stderr: ${stderr}`);
        return;
    }
    res.send(`stdout: ${stdout}`);
});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
