import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const DeloitteSection = () => {
  return (
    <div
      style={{
        gridArea: '1/1',
        position: 'relative',
        placeItems: 'center',
        backgroundColor: '#0076A8',
        display: 'grid',
        color: '#FFFFFF',
        fontFamily: 'dosis'
      }}
    >
      <Flex maxWidth="100vw" flexDirection="column" margin="4rem 1rem">
        <Flex flexDirection="column" marginBottom="2rem">
          <Heading>Deloitte AI Center of Excellence</Heading>
          <Text fontSize="md" fontWeight="bold">
            Data Scientist Intern (
            <Text fontStyle="italic" fontSize="sm" display="inline">
              June 2022 - August 2022
            </Text>
            )
            <br />
            Data Scientist (
            <Text fontStyle="italic" fontSize="sm" display="inline">
              Jan 2023 - Present
            </Text>
            )
          </Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap">
          <Flex
            flexDirection="column"
            maxWidth="60vw"
            marginRight="2rem"
            marginBottom="1rem"
            minWidth={['100%', '100%', 'initial']}
          >
            <Text>
              During my time as an intern at Deloitte, I developed a custom python package that measures the performance
              of machine learning and neural network models using a combination of metrics and visualizations to
              increase the explainability and transparency of models developed at Deloitte's AI Center of Excellence.
              Additionally, I integrated this package with two production-level projects. I also built out
              infrastructure around this project, including a GitLab CI/CD pipeline that ran unit and integration tests
              and automatic documentation generation using Sphinx.
            </Text>
            <br />
            <Text>
              In addition to managing the development process of this package, I also presented the final product to
              more than 50 people at AI Center of Excellence. I also personally presented to the Deloitte AI Design
              Council, consisting of AI leaders across the CoE. Finally, I held weekly code reviews with Master Data
              Scientists at the CoE to get feedback on the product, both from a code quality and architecture
              perspective.
            </Text>
            <br />
            As a full time Data Scientist, I work on a team that is applying state-of-the-art NLP techniques for a large
            internal client base. This product saves teams weeks of preprocessing work. Additionally, I am the lead
            maintainer of the performance metrics project developed over the internship. The package is now used across
            most projects at the CoE.
            <br />
            <Flex flexDirection="column">
              <Text fontSize="3xl">Experience</Text>
              <Flex flexDirection="row" flexWrap="wrap">
                <Flex flexDirection="column">
                  <Text fontSize="xl">Technologies</Text>
                  <Flex flexDirection="row" flexWrap="wrap">
                    <a href="https://www.python.org">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="Python Logo"
                        src={'../../images/python-logo.png'}
                      />
                    </a>
                    <a href="https://pytorch.org">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '100px',
                          maxHeight: '120px',
                          margin: '1rem'
                        }}
                        alt="PyTorch Logo"
                        src={'../../images/pytorch-logo.png'}
                      />
                    </a>
                    <a href="https://scikit-learn.org/stable/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '120px',
                          maxHeight: '100px',
                          margin: '1rem'
                        }}
                        alt="SciKit Learn Logo"
                        src={'../../images/sklearn-logo.png'}
                      />
                    </a>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex margin="auto">
            <a href="https://www2.deloitte.com/us/en/pages/deloitte-analytics/articles/advancing-human-ai-collaboration.html">
              <StaticImage
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '150px',
                  maxHeight: '150px'
                }}
                alt="Deloitte Logo"
                src={'../../images/deloitte-logo.png'}
              />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default DeloitteSection;
