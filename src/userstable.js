import { Button } from "@mui/base";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows,selectedUser,deleteUser}) => {

    return(
        <TableContainer component={Paper} sx={{ margin: '20px' }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
                {
                    rows.length>0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component='th' scope="row" sx={{ borderBottom: '1px solid #dddddd', padding: '8px' }}>{row.id}</TableCell>
                        <TableCell component='th' scope="row" sx={{ borderBottom: '1px solid #dddddd', padding: '8px' }}>{row.name}</TableCell>
                        <TableCell sx={{ borderBottom: '1px solid #dddddd', padding: '8px' }}>
                            <Button 
                                sx={{
                                    margin: '0px 10px',
                                    backgroundColor: '#4CAF50', // Green color
                                    color: 'white',             // White text color
                                    padding: '5px 10px',        // Padding for the button
                                    borderRadius: '5px',        // Rounded corners
                                    border: 'none',             // Remove border
                                    cursor: 'pointer',          // Change cursor to pointer on hover
                                    '&:hover': {                // Hover effect
                                        backgroundColor: '#45a049', // Darker green color
                                    },
                                }}
                                onClick={() => selectedUser({ id: row.id, name: row.name })}
                            >
                                Update
                            </Button>
                    
                            <Button 
                                sx={{
                                    margin: '0px 10px',
                                    backgroundColor: '#f44336', // Red color
                                    color: 'white',             // White text color
                                    padding: '5px 10px',        // Padding for the button
                                    borderRadius: '5px',        // Rounded corners
                                    border: 'none',             // Remove border
                                    cursor: 'pointer',          // Change cursor to pointer on hover
                                    '&:hover': {                // Hover effect
                                        backgroundColor: '#d32f2f', // Darker red color
                                    },
                                }}
                                onClick={() => deleteUser({ id: row.id })}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                    
                        
                    )) : (
                        <TableRow  sx={{'&:last-child td, &:last-child th' : {border: 0 }}}>
                            <TableCell component='th' scope="row">No Data</TableCell>
                        </TableRow>    
                    )
                }
            <TableBody>

            </TableBody>
        </Table>
    </TableContainer>

    )
   
}

export default UsersTable;