import { Box, Skeleton } from "@mui/material";

export default function BoxLoading() {
  return (
    <div>
      <Box sx={{ overflow: "hidden" }}>
        <Skeleton variant="rectangular" width={400} height={200} />
      </Box>
    </div>
  );
}
