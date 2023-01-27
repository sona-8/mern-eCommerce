// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Box } from "@mui/material";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Eclair", 262, 16.0, 24, 6.0),
// ];

// export default function OrderTable() {
//   return (
//     <Box mt={4}>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="caption table">
//           <caption>A basic table example with a caption</caption>
//           <TableHead>
//             <TableRow>
//               <TableCell>Order ID</TableCell>
//               <TableCell>Customer</TableCell>
//               <TableCell align="right">Order</TableCell>
//               <TableCell align="right">Delivery Date</TableCell>
//               <TableCell align="right">Delivery Pricing</TableCell>
//               <TableCell align="right">Delivery Status</TableCell>
//               <TableCell align="right">Payment Status</TableCell>
//               {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.name}>
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="left">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }
