const express = require("express");
const app = express();
const port = 3000;

app.get("/spaces", (req, res) => {
    /*  QUERY types
    
       /spaces?search=Aveiro&type=hotdesk&amenities=coffee+fax
    
       search      -> specifies the text inputted in search box
       type        -> type of item being search
       amenities   -> list of amenities selected
    */
    var r = req.query;
    /* 
        Retrieving matches from database with query parameters...
    */
    var response = [
        {
            id: "AveiroHub",
            name: "Aveiro Hub",
            rating: "4.5",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: "30",
        },
        {
            id: "WorkSmart",
            name: "Work Smart",
            rating: "4",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: "27",
        },
    ];
    res.send(response);
});


app.get("/spaces/:name", (req, res) => {
    /*  Route path
    
       /spaces/AveiroHub
    
       :name        -> Each space has a unique name id to retrieve info from databases
        
        This will be fetch every time a space's page is opened.    
    */
    var name = req.params.name;
    /* 
        Retrieving matches from database with routing parameters...
    */
    var response = {
        id: "AveiroHub",
        name: "Aveiro Hub",
        rating: "4.5",
        description: "Lorem ipsum dolor sit amet...",
        priceTable: [
            {
                id: "hotdesk",
                day: "15",
                week: "60",
            },
            {
                id: "office",
                day: "25",
                week: "100",
            },
        ],
    };
    res.send(response);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
