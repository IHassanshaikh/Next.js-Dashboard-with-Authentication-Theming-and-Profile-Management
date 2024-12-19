import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleShowRevenueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowRevenue(event.target.checked);

  const handleShowProfitChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowProfit(event.target.checked);

  const handleShowOrdersChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowOrders(event.target.checked);

  const handleShowCustomersChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setShowCustomers(event.target.checked);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const settings = { showRevenue, showProfit, showOrders, showCustomers };
    localStorage.setItem("dashboardSettings", JSON.stringify(settings));
    setSuccessMessage("Settings saved successfully!");
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Settings
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Dashboard Features
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showRevenue}
                          onChange={handleShowRevenueChange}
                        />
                      }
                      label="Revenue"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showProfit}
                          onChange={handleShowProfitChange}
                        />
                      }
                      label="Profit"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showOrders}
                          onChange={handleShowOrdersChange}
                        />
                      }
                      label="Orders"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showCustomers}
                          onChange={handleShowCustomersChange}
                        />
                      }
                      label="Customers"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Save Settings
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
      <Snackbar
        open={!!successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage("")}
      >
        <Alert onClose={() => setSuccessMessage("")} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Settings;
