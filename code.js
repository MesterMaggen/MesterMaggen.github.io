'use strict'

const switcher = document.querySelector('.btn');

const test = 
{
    acceptAllDevices: true,
    optionalServices: ['battery_service'] 
}

const filter = 
{
    filters: [
        {services: [0x110A,0x110B,0x110C,0x110D,0x110E,0x110F,0x111E,0x111F,0x1108,0x1112,0x1131]},
        {name: 'JBL BoomBox'},
        {name: 'Jabra Elite Sport'},
        {name: 'SutteMaskine'},
        {namePrefix: 'JBL BoomBox'},
        {namePrefix: 'JBL'},
        {namePrefix: 'BoomBox'},
        {namePrefix: 'Jabra Elite Sport'},
        {namePrefix: 'Jabra'},
        {namePrefix: 'Elite'},
        {namePrefix: 'Sport'},
        {manufacturerData: [{companyIdentifier: 0x0057}]},
        {manufacturerData: [{companyIdentifier: 0x0067}]},
        {manufacturerData: [{companyIdentifier: 0x0089}]}
    ],
    optionalServices: ['battery_service']
}

switcher.addEventListener('click', function() 
{
    navigator.bluetooth.requestDevice(test)
    .then(device => {
    console.log(device.name);
    console.log(device.services);
    console.log(device.gatt.connect());
    })
    .then(server => { /* … */ })
    .catch(error => { console.error(error); });   
});