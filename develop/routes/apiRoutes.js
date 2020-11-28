var db = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        newNote.id = db.length;
        db.push(newNote);
        console.log(db);
        res.json(true);

        fs.writeFile("db/db.json", JSON.stringify(db), function(error) {
            if (error) throw error;
            console.log("Note saved");
        });
    });

    app.delete("/api/notes/:id", function(req, res){
        var idDelete = req.params.id;
        db = db.filter(function(note) {
            return note.id != idDelete;
        });

        res.json(true);
        
        fs.writeFile("db/db.json", JSON.stringify(db), function(error) {
            if (error) throw error;
            console.log("Note Deleted.");
        });
    });
};