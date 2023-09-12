import React from 'react';
 export const UserList = () => {
    const users = [
        { id: 1, userName: 'chadan', email: '12@ffu.com', designation: 'Admin' },
        { id: 2, userName: 'Reshab', email: 'ddyd@fff.com', designation: 'User' },
        { id: 3, userName: 'Chandann', email: 'tfytsfwys@ii.com', designation: 'ccyfyf' },
        // Add more static user data as needed
    ];
    return (
        <div className="user-list">
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>id</th>
                        <th style={tableHeaderStyle}>User Name</th>
                        <th style={tableHeaderStyle}>Email</th>
                        <th style={tableHeaderStyle}>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} style={tableRowStyle}>
                            <td style={tableCellStyle}>{user.id}</td>
                            <td style={tableCellStyle}>{user.userName}</td>
                            <td style={tableCellStyle}>{user.email}</td>
                            <td style={tableCellStyle}>{user.designation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const headingStyle = {
    color: '#666', // Gray color
    marginBottom: '20px',
};
const tableHeaderStyle = {
    background: '#F2F2F2',
    fontWeight: 'bold',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    backgroundColor:"lightGrey",
    marginTop:"30px"
};
const tableRowStyle = {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
};
const tableCellStyle = {
    padding: '10px',
};