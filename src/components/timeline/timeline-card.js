// src/components/timeline/timeline-card.js
import * as React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import Publications from '../common/publications';
import TechnologyIcon from '../common/technology-icon';
import CompanyLogo from '../common/company-logo';
import TimelineNode from './timeline-node';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const TimelineCard = ({ section }) => {
  const [ref, isVisible] = useScrollAnimation();

  const {
    company,
    backgroundColor,
    background,
    textColor,
    positions,
    description,
    descriptionHtml,
    publications,
    technologies,
    companyLogo,
    timelineColor
  } = section;

  const linkColor = textColor === '#FFFFFF' || textColor === 'white' ? 'white' : undefined;

  // Get the primary color for the timeline node (use timelineColor if specified, otherwise backgroundColor)
  const nodeColor = timelineColor || backgroundColor || '#666';

  return (
    <Box
      ref={ref}
      position="relative"
      width="100%"
      py={['2rem', '2rem', '2.5rem']}
      className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {/* Timeline node */}
      <TimelineNode color={nodeColor} isVisible={isVisible} />

      {/* Card container - all cards on right side of timeline */}
      <Box pl={['0', '0', '1.5rem']}>
        <Box
          borderRadius="xl"
          overflow="hidden"
          boxShadow={`0 4px 20px rgba(0,0,0,0.1), 0 0 30px ${nodeColor}30`}
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: 'translateY(-4px)',
            boxShadow: `0 8px 30px rgba(0,0,0,0.15), 0 0 40px ${nodeColor}40`
          }}
          style={background ? { background } : { backgroundColor }}
          color={textColor}
        >
          <Box p={['1.5rem', '2rem', '2.5rem']} fontFamily="dosis">
            {/* Header with company and logo */}
            <Flex
              justify="space-between"
              align="flex-start"
              mb="1.5rem"
              flexWrap="wrap"
              gap="1rem"
            >
              <Box flex="1" minW="200px">
                <Heading size={['xl', '2xl', '3xl']} mb="1rem">
                  {company}
                </Heading>
                <Flex flexDirection="row" alignItems="center" gap="2rem" flexWrap="wrap">
                  {positions.map((position, idx) => (
                    <Flex flexDirection="column" key={idx}>
                      <Text fontSize={['sm', 'md']} fontWeight="bold">
                        {position.title}
                      </Text>
                      <Text fontStyle="italic" fontSize={['xs', 'sm']}>
                        {position.dates}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>

              {/* Company Logo */}
              {companyLogo && (
                <Box
                  flexShrink="0"
                  display={['none', 'block']}
                >
                  <CompanyLogo logo={companyLogo} />
                </Box>
              )}
            </Flex>

            {/* Description */}
            <Box lineHeight="1.7" fontSize={['sm', 'md']}>
              {description.map((paragraph, idx) => (
                <React.Fragment key={idx}>
                  <Text>{paragraph}</Text>
                  {idx < description.length - 1 && <br />}
                </React.Fragment>
              ))}

              {descriptionHtml && (
                <>
                  <br />
                  <div
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                    style={{ lineHeight: '1.7' }}
                    className="description-html"
                  />
                  <style>{`
                    .description-html a {
                      color: ${linkColor || 'inherit'};
                      text-decoration: underline;
                      transition: opacity 0.2s ease;
                    }
                    .description-html a:hover {
                      opacity: 0.8;
                    }
                    .description-html p {
                      margin-bottom: 1rem;
                    }
                    .description-html p:last-child {
                      margin-bottom: 0;
                    }
                  `}</style>
                </>
              )}
            </Box>

            {/* Publications */}
            {publications && publications.length > 0 && (
              <Box mt="1.5rem">
                <Publications publications={publications} />
              </Box>
            )}

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <Box mt="1.5rem">
                <Text fontSize={['lg', 'xl']} fontWeight="semibold" mb="0.5rem">
                  Technologies
                </Text>
                <Flex flexWrap="wrap" gap="0.5rem" align="center">
                  {technologies.map((tech, idx) => (
                    <TechnologyIcon key={idx} technology={tech} />
                  ))}
                </Flex>
              </Box>
            )}

            {/* Mobile company logo */}
            {companyLogo && (
              <Box
                display={['block', 'none']}
                mt="1.5rem"
                textAlign="center"
              >
                <CompanyLogo logo={companyLogo} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TimelineCard;
