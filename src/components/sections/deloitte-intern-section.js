import * as React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const DeloitteInternSection = () => {
  return (
    <div
      style={{
        gridArea: '3/1',
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
            Data Scientist Intern
          </Text>
          <Text fontStyle="italic">June 2022 - August 2022</Text>
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
                          maxWidth: '60px',
                          maxHeight: '60px',
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
                          maxWidth: '60px',
                          maxHeight: '80px',
                          margin: '1rem'
                        }}
                        alt="PyTorch Logo"
                        src={'../../images/pytorch-logo.png'}
                      />
                    </a>
                    <a href="https://www.tensorflow.org/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '60px',
                          margin: '1rem'
                        }}
                        alt="Tensorflow Logo"
                        src={'../../images/tensorflow-logo.png'}
                      />
                    </a>
                    <a href="https://scikit-learn.org/stable/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '80px',
                          maxHeight: '60px',
                          margin: '2rem 1rem 1rem 1rem'
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
                  maxWidth: '170px',
                  maxHeight: '170px'
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

export default DeloitteInternSection;
