import { Stack, LinearProgress } from "@mui/material";

export default function ProgreesLoader(params) {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={params.spacing}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}
