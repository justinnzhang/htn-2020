// const OT = require('@opentok/client');

// let session, publisher, subcriber;

// const apiKey = '47084864';
// const sessionId =
//   '1_MX40NzA4NDg2NH5-MTYxMDg2MTU4MDU5MH5yMzREMnpXcUdaOHVyS0ZUdlJVMDd3ZUt-UH4';
// const token =
//   'T1==cGFydG5lcl9pZD00NzA4NDg2NCZzaWc9ZGQ5NzdhZDA2NDA2ZThhNzlkY2MwNjcyMGQ5YTI2NWVhYTFkY2MwMjpzZXNzaW9uX2lkPTFfTVg0ME56QTRORGcyTkg1LU1UWXhNRGcyTURNMk1qazJNbjVVYVRkdmMySlRkaXN4Tm1GaE5ISkRkelUyYm5weGRsUi1mZyZjcmVhdGVfdGltZT0xNjEwODYwMzczJm5vbmNlPTAuODY5NzU4MTEzMjQyNTkxMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjEwODYzOTcxJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';

// export const initializaSession = () => {
//   function handleError(err) {
//     console.log(err);
//   }

//   session = OT.initSession(apiKey, sessionId);
//   // create a publisher
//   publisher = OT.initPublisher(
//     'publisher',
//     {
//       insertMode: 'append',
//       width: '100%',
//       height: '100%',
//     },
//     handleError
//   );
//   // subscribe to newly created stream
//   session.on('streamCreated', function (event) {
//     subscriber = session.subscribe(
//       event.stream,
//       'Subscriber',
//       {
//         insertMode: 'append',
//         width: '100%',
//         height: '100%',
//       },
//       handleError
//     );
//   });

//   // connect to the session
//   session.connect(token, function (error) {
//     // If the connection is successful, publish to the session
//     if (error) {
//       handleError(error);
//     } else {
//       session.publish(publisher, handleError);
//     }
//   });
//   // do some action upon destroying the created stream
//   session.on('streamDestroyed', function (event) {
//     console.log('The Video chat has ended');
//   });

//   return (
//     <div id='videos'>
//       <div id='publisher'></div>
//       <div id='subscriber'></div>
//     </div>
//   );
// };
