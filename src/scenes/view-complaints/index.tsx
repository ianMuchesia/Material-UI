import {
  Box,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import SingleProduct from "../../components/SingleProduct";
import { GridView, List } from "@mui/icons-material";
import ComplaintTable from "../../@core/tables/ComplaintTable";

const ViewComplaints = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const [layout, setLayout] = useState("list");

  const handleLayout = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setLayout(newAlignment);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="COMPLAINTS" subtitle="See your list of complaints." />
<Divider/>
      <ToggleButtonGroup
        value={layout}
        exclusive
        onChange={handleLayout}
        aria-label="text alignment"
        sx={{margin:`1rem 0rem`}}
      >
             <ToggleButton value="list" aria-label="centered">
          <List />
        </ToggleButton>
        <ToggleButton value="grid" aria-label="left aligned">
          <GridView />
        </ToggleButton>
   
      </ToggleButtonGroup>
      {layout === "grid" ? (
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(3, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SingleProduct key={index} />
        ))}
      </Box>
    ) : (
      <ComplaintTable />
    )}
    </Box>
  );
};

export default ViewComplaints;
