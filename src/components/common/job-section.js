import * as React from 'react';
import { Text, Flex, Heading, Link } from '@chakra-ui/react';
import Publications from '../common/publications';
import TechnologyIcon from '../common/technology-icon';
import CompanyLogo from '../common/company-logo';

const JobSection = ({ section }) => {
  const {
    company,
    gridArea,
    backgroundColor,
    background,
    textColor,
    positions,
    description,
    descriptionHtml,
    publications,
    technologies,
    companyLogo
  } = section;

  const containerStyle = {
    gridArea,
    position: 'relative',
    placeItems: 'center',
    display: 'grid',
    color: textColor,
    fontFamily: 'dosis',
    ...(background ? { background } : { backgroundColor })
  };

  const linkColor = textColor === '#FFFFFF' || textColor === 'white' ? 'white' : undefined;

  return (
    <div style={containerStyle}>
      <Flex maxWidth="100vw" flexDirection="column" margin="4rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading size="3xl">{company}</Heading>
          <Flex flexDirection="row" alignItems="center" gap="2rem" margin="1rem 0" flexWrap="wrap">
            {positions.map((position, index) => (
              <Flex flexDirection="column" key={index}>
                <Text fontSize="md" fontWeight="bold">
                  {position.title}
                </Text>
                <Text fontStyle="italic">{position.dates}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex
            flexDirection="column"
            maxWidth="60vw"
            marginRight="2rem"
            marginBottom="1rem"
            minWidth={['100%', '100%', 'initial']}
          >
            {/* Plain text descriptions */}
            {description.map((paragraph, index) => (
              <React.Fragment key={index}>
                <Text>{paragraph}</Text>
                {index < description.length - 1 && <br />}
              </React.Fragment>
            ))}

            {/* HTML description with links (for complex content) */}
            {descriptionHtml && (
              <>
                <br />
                <div
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  style={{ lineHeight: '1.5' }}
                  className="description-html"
                />
                <style>{`
                  .description-html a {
                    color: ${linkColor || 'inherit'};
                    text-decoration: underline;
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

            {/* Publications */}
            {publications && publications.length > 0 && (
              <>
                <br />
                <Publications publications={publications} />
              </>
            )}

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <>
                <br />
                <Flex flexDirection="column">
                  <Text fontSize="3xl">Experience</Text>
                  <Flex flexDirection="row" flexWrap="wrap">
                    <Flex flexDirection="column">
                      <Text fontSize="xl">Technologies</Text>
                      <Flex flexDirection="row" flexWrap="wrap">
                        {technologies.map((tech, index) => (
                          <TechnologyIcon key={index} technology={tech} />
                        ))}
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>

          {/* Company Logo */}
          {companyLogo && (
            <Flex margin="auto">
              <CompanyLogo logo={companyLogo} />
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default JobSection;
