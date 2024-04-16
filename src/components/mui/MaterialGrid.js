import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function MaterialGrid() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={12}>
        <Button variant="contained" fullWidth>
          1
        </Button>
      </Grid>
      <Grid xs={2} md={12}>
        <Button variant="contained" fullWidth>
          2
        </Button>
      </Grid>
      <Grid xs={3} md={12}>
        <Button variant="contained" fullWidth>
          3
        </Button>
      </Grid>
      <Grid xs={12} md={12}>
        <Button variant="contained" fullWidth>
          4
        </Button>
      </Grid>
    </Grid>
  );
}
