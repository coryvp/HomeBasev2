
const config = {
    style: "mapbox://styles/mapbox/streets-v11",
    accessToken: "pk.eyJ1IjoiY3ZlbnRyZXMiLCJhIjoiY2tpMmZtYXVkMWpwMTJxb2RoeGdxd3c4eiJ9.2sqpkAKdrE9fPnrTWXZAPg",
    CSV: "./Example.csv",
    center: [-71.0932,42.3592], //Lng, Lat
    zoom: 13, //Default zoom
    title: "Search for Shelter",
    description: "You can sort shelter options by distance, or use the filters below to search options that match your needs.",
    sideBarInfo: ["Header", "Info 1", "Info 2"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Number of guests: ",
            columnHeader: "Column Name",
            listItems: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10'
            ]

        },
        {
            type: "checkbox",
            title: "Type of Accommodation: ",
            columnHeader: "Column Name",
            listItems: [
                'Apartment',
                'House',
                'Hotel',
                'Camping',
                'Other use building'
            ]
        },
        {
            type: "checkbox",
            title: "Living situation: ",
            columnHeader: "Column Name",
            listItems: ["Private quarters", "Shared quarters", "Entire accommodation"]
        },
        {
            type: "checkbox",
            title: "Specifics: ",
            columnHeader: "Column Name",
            listItems: ["Family friendly", "Female only", "Female host", "Pet friendly", "Smoking okay"]
        }
        
    ]

};
