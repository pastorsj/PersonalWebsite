import * as React from 'react';
import { Stack, Text, Heading, Link } from '@chakra-ui/react';

const Publications = ({ publications }) => (
  <Stack>
    <Heading size="3xl">Publications</Heading>
    {publications.map((publication) => (
      <Stack>
        <Text fontSize="lg" fontWeight="bold">
          <Link color="white" href={publication.link} target="_blank">
            {publication.title}
          </Link>
        </Text>
        <Text fontSize="md">
          Accepted at{' '}
          <Link color="white" href={publication.conferenceLink}>
            {publication.conference}
          </Link>
          , <i style={{ fontStyle: 'italic' }}>{publication.published_date}</i>
        </Text>
        {publication.presented_date && (
          <Text fontSize="sm">
            Presented on <i style={{ fontStyle: 'italic' }}>{publication.presented_date}</i>
            {publication.presentation_link && (
              <>
                {' | '}
                <Link color="white" href={publication.presentation_link} target="_blank">
                  Presentation
                </Link>
              </>
            )}
          </Text>
        )}
      </Stack>
    ))}
  </Stack>
);

export default Publications;
