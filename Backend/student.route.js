const express = require('express');
const studentRoutes = express.Router();
// const bcrytpt = require('bcryptjs')

let Student = require('./student.model');

studentRoutes.route('/add').post(function (req,res){
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student' : 'new student is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

studentRoutes.route('/:id').get(function (req, res){
    let email = req.params.id;
    console.log("yuor emaio is"+email);
    Student.findOne({$and:[{email : email}]},function (err,std){
        if(err)
            console.log(err);
        else{
            res.json(std)
        }
    });

});

// businessRoutes.route('/edit/:id').get(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err,customers){
//         res.json(customers);
//     });
// });

// businessRoutes.route('/update/:id').post(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err, customers){
//         if(!customers)
//             res.status(404).send("Data is not found??");
//         else{
//             customers.name = req.body.name;
//             customers.address = req.body.address;
//             customers.nic = req.body.nic;
//             customers.phone = req.body.phone;
//             customers.customer_type = req.body.customer_type;
//             customers.email = req.body.email;
//             customers.password = req.body.password;


//             customers.save().then(business => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// businessRoutes.route('/delete/:id').get(function(req,res){
//     Customers.findByIdAndRemove({_id:req.params.id}, function (err, customers){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });

studentRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    console.log(+email+ +password);

    let student = new Student(req.body);

    Student.findOne({$and:[{email : email},{password : password}]})
        .then(student => {
            if(student){
                student.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});

module.exports = studentRoutes;