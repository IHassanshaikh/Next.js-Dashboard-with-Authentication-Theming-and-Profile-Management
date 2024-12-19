import * as React from "react";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Box } from "@mui/material";


const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  const CustomLoadingOverlay = () => (
  <GridOverlay>
    <Box sx={{ width: "100%", position: "absolute", top: 0 }}>
      <LinearProgress />
    </Box>
  </GridOverlay>
);

  return (
    <>
      <h1>Data</h1>
      <p>
        The bestest of data available here at your finger tips in table form.
        This could be a whole section of data that is available for users to
        deep dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          slots={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          loading={!data}
          pagination
          pageSizeOptions={[10, 20, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;