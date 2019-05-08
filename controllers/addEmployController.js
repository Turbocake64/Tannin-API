const db = require("../models");
module.exports = {
    addEmployee: function (req, res) {
       const {name, lastName, email, password, restaurantId}= req.body;
        console.log("////////////////");
        console.log(req.body);
        console.log("////////////////");
        db.Employees.findOne({email:email}).then(employee=>{
            console.log(employee);
            if(!employee){
            db.Employees.create({
            firstName: name,
            lastName: lastName,
            email: email,
            password: password,
            restaurantId: restaurantId,
            isAdmin: false
        }).then(data=>{
            console.log(data);
            db.Restaurants.findOneAndUpdate({_id: data.restaurantId}, {$push:{Employees: data._id}}, {new: true}).then(data=> {
                console.log(data);
                res.json(data);
            });
        });  
    }
    else {
        res.json("Employee already exists");
    }
})
            // db.Restaurants.findOneAndUpdate({_id:newEmployee.restaurantId}, {$push: {employees:newEmployee._id}},{new: true}).then(data=>{
            //     console.log(data);
            //     res.json(data);
            // })
            // .catch(function (err) {
            //     // If an error occurs, send it back to the client
            //     res.json(err);
            // });
       
            // Specify that we want to populate the retrieved users with any associated notes
            
            
    }
}