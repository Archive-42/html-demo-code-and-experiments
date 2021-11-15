

    const data = {};
    data.table = []
    for (i = 0; i < 26; i++) {
        const obj = {
            id: i,
            square: i * i
        };
        data.table.push(obj)
    }
    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            obj.table.push({
                id: 2,
                square: 3
            }); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 
        }
    });
    fs.writeFile('myjsonfile.json', json, 'utf8', callback);

});