// src/components/AppointmentList.js
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Button, Table, TableBody, TableCell, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const AppointmentList = ({ appointments, onDelete }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      {appointments.map((appointment, index) => (
        <Grid item key={index} xs={12} sm={10} md={8} lg={6}>
          <Card
            sx={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '100%',
              cursor: 'pointer',
            }}
            onClick={() => handleSelectAppointment(appointment)}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="body1" component="p">
                      {appointment.patientName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" component="p">
                      {appointment.appointmentDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" component="p">
                      {appointment.appointmentTime}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" component="p">
                      {appointment.doctorName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" component="p">
                      {appointment.appointmentType}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          {selectedAppointment && selectedAppointment === appointment && (
            <Card
              sx={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                marginTop: '10px',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Appointment Details
                </Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <strong>Patient Name:</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {appointment.patientName}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <strong>Appointment Date:</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {appointment.appointmentDate}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <strong>Appointment Time:</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {appointment.appointmentTime}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <strong>Doctor's Name:</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {appointment.doctorName}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <strong>Appointment Type:</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {appointment.appointmentType}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          <strong>Notes:</strong>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {appointment.notes}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
              </CardContent>
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => handleDelete(index)}
                sx={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                }}
              >
                Delete
              </Button>
            </Card>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default AppointmentList;