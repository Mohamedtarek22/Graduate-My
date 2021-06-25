import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const Spacesign = new GestureDescription('Space');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Down Right"
//     ]
//   ]

//Thumb
Spacesign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);
Spacesign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.70);

//Index
Spacesign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
Spacesign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
Spacesign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
Spacesign.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.70);

//Ring
Spacesign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
Spacesign.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.70);

//Pinky
Spacesign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
Spacesign.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.70);

