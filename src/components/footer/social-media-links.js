import * as React from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa';

const SocialMediaLinks = () => (
  <HStack>
    <IconButton
      variant="ghost"
      as="a"
      title="Resume"
      href="https://personal-sjp-docs.s3.amazonaws.com/Resume.pdf"
      aria-label="Resume"
    >
      <FaNewspaper fontSize="20px" />
    </IconButton>
    <IconButton
      variant="ghost"
      as="a"
      title="LinkedIn"
      href="https://www.linkedin.com/in/sam-pastoriza/"
      aria-label="LinkedIn"
    >
      <FaLinkedin fontSize="20px" />
    </IconButton>
    <IconButton variant="ghost" as="a" title="GitHub" href="https://github.com/pastorsj" aria-label="GitHub">
      <FaGithub fontSize="20px" />
    </IconButton>
  </HStack>
);

export default SocialMediaLinks;
