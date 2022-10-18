import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack direction={["column", "row"]} mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem currentPage={1} isCurrent />
        <PaginationItem currentPage={2}/>
        <PaginationItem currentPage={3}/>
        <PaginationItem currentPage={4}/>
        <PaginationItem currentPage={5}/>
        <PaginationItem currentPage={6}/>
      </Stack>
    </Stack>
  );
}
