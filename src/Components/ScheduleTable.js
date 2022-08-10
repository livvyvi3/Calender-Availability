import {Table, Thead, Tbody,Tfoot,Tr, Th,Td,TableCaption,TableContainer, } from '@chakra-ui/react'
import React from 'react'
import "../src/styles.css";


function ScheduleTable(){
    
    return (
        <TableContainer>
            <TableCaption>Calender Availability Table</TableCaption>
            <Thead>
                <Tr>
                    <Th>each table header has to be pull from the jsonfile in a certain format</Th>                    
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>09:00 - 10:00</Td>
                </Tr>
                <Tr>
                    <Td>10:00 - 11:00</Td>
                </Tr>
                <Tr>
                    <Td>11:00 - 12:00</Td>
                </Tr>
                <Tr>
                    <Td>12:00 - 13:00</Td>
                </Tr>
                <Tr>
                    <Td>13:00 - 14:00</Td>
                </Tr>
                <Tr>
                    <Td>14:00 - 15:00</Td>
                </Tr>
                <Tr>
                    <Td>15:00 - 16:00</Td>
                </Tr>
                <Tr>
                    <Td>16:00 - 17:00</Td>
                </Tr>
                <Tr>
                    <Td>17:00 - 18:00</Td>
                </Tr>
            </Tbody>

        </TableContainer>
    );
}
export default ScheduleTable;