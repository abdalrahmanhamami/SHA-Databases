// This is the connector (also known as driver)
// that we can use to connect to a MySQL process
// and access its databases.
const mysql = require('mysql');
 

class TodoModel {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // Loads all the TODOs in the database
    load(callback) {
        const selectTodoItems = "SELECT * FROM todo_items";
        this.dbConnection.query(selectTodoItems, function(err, results, fields) {
            if(err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    create() {
        // Write code and query to create a new TODO item
        const createItem = "INSERT INTO todo_items(text, user_id) VALUES ('Wash the Clothes', 3)";
        this.dbConnection.query(createItem, function(err,results){
            if(err) throw err;
            console.log(results);
        })
    }
    update(id, description, callback) {
        // Write code and query to update and existing TODO item
        const updateItem = "UPDATE todo_items SET text = 'Teach class 11 about NOSQL databases' WHERE text= 'Teach class 11 about databases' " ;
        this.dbConnection.query(this.updateItem, function (err, result){
            if(err) throw err;
            console.log(results.affectedRows +"record(s) updated");
        });
        
    }

    delete(id, callback) {
        // Write code and query to delete an existing TODO item
        const deleteItem = "DELETE FROM todo_items WHERE text= 'Do the dishes' " ;
        this.dbConnection.query(this.deleteItem, function (err, result){
            if(err) throw err;
            console.log(results.affectedRows +"record(s) deleted");
        });
    }

    tagTodoItem(todoItemId, tagId, callback) {
        // Write code and query add a tag to a TODO item
        const insertTag =" INSERT INTO tags description VALUES 'school' and INSERT INTO ";        
        this.dbConnection.query(this.insertItem, function (err, result){
            if(err) throw err;
            console.log(results.affectedRows +"record(s) updated");
        });
    }
        
    untagTodoItem(todoItemId, tagId, callback) {
        // Write code and query remove a tag from a TODO item
    }


    markCompleted(todoItemId, callback) {
        // Write code to mark a TODO item as completed
    }
}

const dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'asd.1234',
    database : 'todo_app'
});

dbConnection.connect(function(err) {
    if (err != null) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + dbConnection.threadId);

    const todoModel = new TodoModel(dbConnection);
    todoModel.load(function(err, todoItems) {
        if(err) {
            console.log("error loading TODO items:", err);
        }

        console.log("existing todo items:", todoItems);
    });

    todoModel.create();
});