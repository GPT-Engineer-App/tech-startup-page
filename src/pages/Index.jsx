import { Container, VStack, HStack, Box, Text, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            TechStartup
          </Heading>
          <HStack spacing={4}>
            <Button variant="link">Home</Button>
            <Button variant="link">Features</Button>
            <Button variant="link">Pricing</Button>
            <Button variant="link">Contact</Button>
          </HStack>
        </HStack>

        {/* Hero Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="2xl" mb={4}>
            Revolutionize Your Workflow
          </Heading>
          <Text fontSize="xl" mb={6}>
            Our SaaS solution helps you streamline your processes and increase productivity.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <VStack spacing={8} py={10}>
          <Heading as="h3" size="xl">
            Features
          </Heading>
          <HStack spacing={10} justifyContent="center">
            <Box textAlign="center">
              <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" mb={4} />
              <Heading as="h4" size="md">
                Feature One
              </Heading>
              <Text>Detail about feature one.</Text>
            </Box>
            <Box textAlign="center">
              <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" mb={4} />
              <Heading as="h4" size="md">
                Feature Two
              </Heading>
              <Text>Detail about feature two.</Text>
            </Box>
            <Box textAlign="center">
              <Image src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" mb={4} />
              <Heading as="h4" size="md">
                Feature Three
              </Heading>
              <Text>Detail about feature three.</Text>
            </Box>
          </HStack>
        </VStack>

        {/* Footer Section */}
        <HStack justifyContent="space-between" alignItems="center" py={4} borderTop="1px" borderColor="gray.200">
          <Text>&copy; {new Date().getFullYear()} TechStartup. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </HStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
