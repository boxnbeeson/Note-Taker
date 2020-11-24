var db = require("../db/db.json");

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
    });

    app.delete("/api/notes/:id", function(req, res){
        var idDelete = req.params.id;
        db = db.filter(function(note){
            return note.id == idDelete;
        });
        res.json(true);
    });
};