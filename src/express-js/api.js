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
            parking: true,
            location:
                "Rua 25 de Abril, nº2 , Aveiro, 3810-111 Aveiro, Portugal",
            description:
                "Premium cowork office in Aveiro (Portuguese Venice).AveiroHub exists in order to change the way people feel about their working week.",
            price: "30",
            thumbnail: "assets/office_1.jpg",
        },
        {
            id: "WorkSmart",
            name: "Work Smart",
            parking: false,
            rating: "4",
            location:
                "Rua Sargento Mor, nº32 3ºD, Ilhavo, 3910-456 Ilhavo, Portugal",
            description:
                "In Ocupa Cowork Aveiro you can get more than just a place to work... you get a community, you get free coffee. Place near the Aveiro river",
            price: "27",
            thumbnail: "assets/office_2.jpg",
        },
        {
            id: "OcupaAveiro",
            name: "Ocupa Aveiro",
            rating: "4.5",
            parking: false,
            location: "Rua da Igrega, nº60 , Anadia, 3780-161 Anadia, Portugal",
            description:
                "In Ocupa Cowork Aveiro you can get more than just a place to work... you get a community, you get free coffee. Place near the Aveiro river",
            price: "20",
            thumbnail: "assets/office_3.jpg",
        },
        {
            id: "BusinessCenter",
            name: "Business Center",
            rating: "4.2",
            parking: true,
            location:
                "Avenida de Maio, nº23, Aveiro, 3910-456 Aveiro, Portugal",
            description:
                "In Ocupa Cowork Aveiro you can get more than just a place to work... you get a community, you get free coffee. Place near the Aveiro river",
            price: "25",
            thumbnail: "assets/office_4.jpg",
        },
        {
            id: "ClubWork",
            name: "Club Work",
            rating: "3.9",
            parking: false,
            location:
                "Avenida de Janeiro, nº23, Aveiro, 3910-456 Aveiro, Portugal",
            description:
                "In Ocupa Cowork Aveiro you can get more than just a place to work... you get a community, you get free coffee. Place near the Aveiro river",
            price: "17",
            thumbnail: "assets/office_5.jpg",
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
        nReview: 134,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Diam maecenas ultricies mi eget mauris. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Semper eget duis at tellus at. Augue ut lectus arcu bibendum at. Eget lorem dolor sed viverra ipsum nunc aliquet. Dui sapien eget mi proin sed libero. Gravida cum sociis natoque penatibus et magnis. Luctus accumsan tortor posuere ac ut consequat. Suspendisse in est ante in nibh mauris cursus mattis molestie. Magna fermentum iaculis eu non diam phasellus vestibulum. Bibendum ut tristique et egestas quis ipsum. Ipsum faucibus vitae aliquet nec ullamcorper sit.",
        location: "Rua 25 de Abril, nº2 , Aveiro, 3810-111 Aveiro, Portugal",
        accessHours: [
            "09:00 am - 10:00 pm",
            "10:00 am - 08:00 pm",
            "01:00 am - 08:00 pm",
        ],
        priceTable: [
            {
                id: "hotdesk",
                name: "Hot Desk",
                list: [
                    {
                        people: "1",
                        duration: "1 day",
                        price: "15",
                        hours: "8 per/day",
                    },
                    {
                        people: "1",
                        duration: "1 week",
                        price: "75",
                        hours: "8 per/day",
                    },
                    {
                        people: "1",
                        duration: "1 month",
                        price: "250",
                        hours: "10 per/day",
                    },
                ],
            },
            {
                id: "privoffice",
                name: "Private Office",
                list: [
                    {
                        people: "1-4",
                        duration: "1 day",
                        price: "40",
                        hours: "8 per/day",
                    },
                    {
                        people: "1-4",
                        duration: "1 week",
                        price: "240",
                        hours: "8 per/day",
                    },
                    {
                        people: "1-4",
                        duration: "1 month",
                        price: "810",
                        hours: "10 per/day",
                    },
                ],
            },
        ],
        amenities: ["Free coffee", "Heating", "High Speed Wifi", "Kitchen"],
    };
    res.send(response);
});

app.post("/book/:name", (req, res) => {});

app.get("/profile/:name", (req, res) => {
    /*  Route path
    
       /profile/johndoe
    
       :name        -> Each user has a unique name id to retrieve info from databases
        
        This will be fetch every time a profile's page is opened.    
    */
    var name = req.params.name;
    /* 
        Retrieving matches from database with routing parameters...
    */
    var response = {
        id: "johndoe",
        name: "John Doe",
        email: "john_doe@email.com",
        password: "",
        bookings: [
            {
                id: "123",
                space_id: "WorkSmart",
                checkin: "22Jun2021-09:00",
                checkout: "22Jun2021-17:00",
                type: "hotdesk",
                price: "35",
                amenities: [],
            },
            {
                id: "124",
                space_id: "Worker",
                checkin: "13Mar2021-09:00",
                checkout: "15Mar2021-16:00",
                type: "office",
                price: "100",
                amenities: ["coffee", "zoom", "snack"],
            },
        ],
    };
    res.send(response);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
