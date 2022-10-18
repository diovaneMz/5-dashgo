import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diovane Marcelino Azevedo</Text>
          <Text color="gray.300" fontSize="small">
            diovanemarcelinoazevedo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diovane Marcelino Azevedo"
        src="https://github.com/diovaneMz.png"
      ></Avatar>
    </Flex>
  );
}
