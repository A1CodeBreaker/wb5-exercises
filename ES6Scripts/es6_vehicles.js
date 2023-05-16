'use strict';

const vehicles = [
    {
      color: 'Silver',
      type: 'Minivan',
      registrationState: 'CA',
      licenseNo: 'ABC-101',
      registrationExpires: new Date('3-10-2022'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A1D-2NC',
      registrationExpires: new Date('8-31-2023'),
      capacity: 3
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'A22-X00',
      registrationExpires: new Date('9-31-2023'),
      capacity: 6
    },
    {
      color: 'Red',
      type: 'Car',
      registrationState: 'CA',
      licenseNo: 'ABC-222',
      registrationExpires: new Date('12-10-2023'),
      capacity: 5
    },
    {
      color: 'Black',
      type: 'SUV',
      registrationState: 'CA',
      licenseNo: 'EEE-222',
      registrationExpires: new Date('12-10-2023'),
      capacity: 7
    },
    {
      color: 'Red',
      type: 'SUV',
      registrationState: 'TX',
      licenseNo: 'ZZ2-101',
      registrationExpires: new Date('12-30-2022'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'TX',
      licenseNo: 'CAC-7YT',
      registrationExpires: new Date('1-31-2023'),
      capacity: 5
    },
    {
      color: 'White',
      type: 'Pickup Truck',
      registrationState: 'CA',
      licenseNo: '123-ABC',
      registrationExpires: new Date('3-31-2023'),
      capacity: 5
    }
  ];
  
  // Which vehicles are red
  const displayVehicle = (vehicle) => console.log(vehicle.licenseNo, vehicle.color, vehicle.type);
  const redVehicles = vehicles.filter((vehicle) => vehicle.color === 'Red');
  console.log('Red Vehicles');
  redVehicles.forEach(displayVehicle);
  
  // Which vehicles have registrations that are expired?
  console.log('');
  console.log('expired vehicles');
  const expiredVehicles = vehicles.filter((vehicle) => vehicle.registrationExpires < new Date());
  expiredVehicles.forEach(displayVehicle);
  
  // Which vehicles that hold at least 6 people?
  console.log('');
  console.log('vehicles that hold at least 6');
  const sixOrMore = vehicles.filter((vehicle) => vehicle.capacity >= 6);
  sixOrMore.forEach(displayVehicle);
  
  // Which vehicles have license plates that end with "222"?
  console.log('');
  console.log('vehicles whose license plates end 222');
  const endsWith222 = vehicles.filter((vehicle) => vehicle.licenseNo.endsWith('222'));
  endsWith222.forEach(displayVehicle);