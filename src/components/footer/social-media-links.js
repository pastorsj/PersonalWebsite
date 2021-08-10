import * as React from 'react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaNewspaper } from 'react-icons/fa';

const SocialMediaLinks = () => (
  <ButtonGroup variant="ghost" color="gray.600">
    <IconButton
      as="a"
      title="Resume"
      href="https://personal-sjp-docs.s3.amazonaws.com/Resume.pdf"
      aria-label="Resume"
      icon={<FaNewspaper fontSize="20px" />}
    />
    <IconButton
      as="a"
      title="LinkedIn"
      href="https://www.linkedin.com/in/sam-pastoriza-b68b78100/"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      title="GitHub"
      href="https://github.com/pastorsj"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
  </ButtonGroup>
);

export default SocialMediaLinks;
