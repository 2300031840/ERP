import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FacultyAttendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Sahil', attendance: '' },
    { id: 2, name: 'Krishna', attendance: '' },
    { id: 3, name: 'Eshwar', attendance: '' },
  ]);

  const handleAttendanceChange = (id, value) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => 
        student.id === id ? { ...student, attendance: value } : student
      )
    );
  };

  const handleSubmit = () => {
    console.log('Attendance data submitted:', students);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Faculty Attendance</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel variant='filled'>Attendance</InputLabel>
                    <Select
                      value={student.attendance}
                      onChange={(e) => handleAttendanceChange(student.id, e.target.value)}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Present">Present</MenuItem>
                      <MenuItem value="Absent">Absent</MenuItem>
                      <MenuItem value="Late">Late</MenuItem>
                    </Select>
                    
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <center>
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
        Submit Attendance
      </Button>
      </center>
    </div>
  );
};

export default FacultyAttendance;
