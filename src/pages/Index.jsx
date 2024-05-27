import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} borderBottom="1px" borderColor="gray.200" alignItems="center">
        <Heading as="h1" size="lg">JobFinder</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Job Listings */}
      <VStack spacing={8} py={8} align="stretch">
        <Heading as="h2" size="md">Job Listings</Heading>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="sm">Software Engineer</Heading>
          <Text>Company: TechCorp</Text>
          <Text>Location: San Francisco, CA</Text>
          <Text>Description: We are looking for a skilled software engineer to join our team.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="sm">Product Manager</Heading>
          <Text>Company: InnovateX</Text>
          <Text>Location: New York, NY</Text>
          <Text>Description: Seeking an experienced product manager to lead our product team.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="sm">UX Designer</Heading>
          <Text>Company: DesignPro</Text>
          <Text>Location: Austin, TX</Text>
          <Text>Description: A creative UX designer needed to improve our user interfaces.</Text>
        </Box>
      </VStack>

      {/* Footer */}
      <Flex as="footer" py={4} borderTop="1px" borderColor="gray.200" alignItems="center" justifyContent="space-between">
        <Text>Contact us: info@jobfinder.com</Text>
        <HStack spacing={4}>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;