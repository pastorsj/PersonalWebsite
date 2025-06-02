import * as React from 'react';
import { Text, Flex, Heading, Link } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import Publications from '../common/publications';

const publications = [
  {
    title: 'Retrieval Augmented Anomaly Detection (RAAD): Nimble Model Adjustment Without Retraining',
    link: 'https://arxiv.org/abs/2502.19534',
    conference: 'ISDFS 2025',
    conferenceLink: 'https://isdfs.org',
    published_date: 'Feb 26, 2025',
    presented_date: 'Apr 24, 2025',
    presentation_link: 'https://isdfs.org/wp-content/uploads/2025/04/043.jpg'
  }
];

const DeloitteFullTimeSection = () => {
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
          <Heading size="3xl">Deloitte (AI Center of Excellence)</Heading>
          <Flex flexDirection="row" alignItems="center" gap="2rem" margin="1rem 0">
            <Flex flexDirection="column">
              <Text fontSize="md" fontWeight="bold">
                Associate Data Scientist
              </Text>
              <Text fontStyle="italic">Jan 2023 - Jun 2025</Text>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="md" fontWeight="bold">
                Data Scientist
              </Text>
              <Text fontStyle="italic">Jun 2025 - Present</Text>
            </Flex>
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
            <Text>
              As a Data Scientist at Deloitte, I have worked with many teams and clients in the cybersecurity area,
              applying AI to various problems, from anomaly detection in the form of zero-day threats to automatically
              building out libraries of cyber-specific regulations for individual clients using Generative AI. In
              addition to this work, I have presented to thousands of technical and non-technical professionals at
              Deloitte on topics ranging from the Data Science/AI lifecycle to advanced Generative AI use cases in cyber
              and healthcare.
            </Text>
            <br />
            <Text>
              One of my main responsibilities was researching, developing, deploying, and iterating upon the zero-day
              threat model created and published by Deloitte{' '}
              <Link color="white" href="https://arxiv.org/pdf/2205.02298" target="_blank">
                [1]
              </Link>{' '}
              <Link color="white" href="https://arxiv.org/pdf/2211.00441" target="_blank">
                [2]
              </Link>{' '}
              <Link color="white" href="https://arxiv.org/pdf/2305.15488" target="_blank">
                [3]
              </Link>
              . I led the deployment of this model to six different clients across the commercial and government
              sectors, ranging from transportation and manufacturing to big-tech industries. This involved major
              refactors of the code to improve throughput while maintaining consistency in the results produced by the
              pipeline. A major refactor utilized{' '}
              <Link
                color="white"
                style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                href="https://developer.nvidia.com/morpheus-cybersecurity"
                target="_blank"
              >
                NVIDIA's Morpheus
              </Link>{' '}
              technology and a deep understanding of their{' '}
              <Link
                color="white"
                style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                href="https://developer.nvidia.com/rapids"
                target="_blank"
              >
                RAPIDS
              </Link>{' '}
              and{' '}
              <Link
                color="white"
                style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                href="https://developer.nvidia.com/cuda-toolkit"
                target="_blank"
              >
                CUDA
              </Link>{' '}
              framework. I became a subject matter expert in the firm and assisted several teams with similar refactors.
              This framework allowed us to improve the pipeline's throughput from{' '}
              <b>1 million network flows per minute to 15 million network flows per minute</b>. Using Morpheus allowed
              our team to switch to a streaming-first paradigm, which further improves the throughput of the larger
              pipeline (outside of the model itself) by removing the need to store data temporarily. This new
              architecture and paradigm led to a cost reduction of <b>80%</b>, as GPUs were utilized far more
              efficiently.
            </Text>
            <br />
            <Text>
              In addition to maintaining the ZDT model, I led the development of several NLP and Generative AI projects.
              Each of these projects involved the entire data science lifecycle, from understanding client requirements,
              researching and performing a literature review, developing minimum viable products, iterating, and
              deploying full-stack applications that{' '}
              <b>always included a human in the loop to maximize trust and safety</b> in the final product. I utilized
              technologies such as LangChain and PyTorch to build out an AI pipeline that created a custom library of
              cybersecurity regulations sourced from Excel spreadsheets and standard regulation documents such as NIST
              CSF and GDPR. This involved Generative AI technologies such as OpenAI and Anthropic's LLMs to condense and
              summarize regulations to custom text classifiers to allow teams working with the document to review and
              correct issues as needed. This reduced the time to delivery by up to <b>50%</b> according to stakeholders
              using it in production. Additionally, I am refining a Generative agent using LangGraph that sources
              multiple types of data including meeting notes and internal documents to create a condensed set of
              flowcharts that describe processes across a company.
            </Text>
            <br />
            <Publications publications={publications} />
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
                    <a href="https://scikit-learn.org/stable/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '80px',
                          maxHeight: '60px',
                          margin: '1.5rem 1rem 1rem 1rem'
                        }}
                        alt="SciKit-Learn Logo"
                        src={'../../images/sklearn-logo.png'}
                      />
                    </a>
                    <a href="https://developer.nvidia.com/morpheus-cybersecurity">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '80px',
                          maxHeight: '60px',
                          margin: '1.5rem 1rem 1rem 1rem'
                        }}
                        alt="NVIDIA (Morpheus) Logo"
                        src={'../../images/nvidia-logo.png'}
                      />
                    </a>
                    <a href="https://rapids.ai">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '90px',
                          maxHeight: '60px',
                          margin: '2rem 1rem 1rem 1rem'
                        }}
                        alt="RAPIDS (NVIDIA) Logo"
                        src={'../../images/rapids-logo.png'}
                      />
                    </a>
                    <a href="https://www.langchain.com">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '60px',
                          margin: '1.5rem 1rem 1rem 1rem'
                        }}
                        alt="LangChain Logo"
                        src={'../../images/langchain-logo.png'}
                      />
                    </a>
                    <a href="https://www.anthropic.com">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '60px',
                          margin: '1rem'
                        }}
                        alt="Anthropic Logo"
                        src={'../../images/anthropic-logo.png'}
                      />
                    </a>
                    <a href="https://aws.amazon.com/bedrock/">
                      <StaticImage
                        style={{
                          width: 'auto',
                          height: 'auto',
                          maxWidth: '60px',
                          maxHeight: '60px',
                          margin: '1rem'
                        }}
                        alt="AWS Bedrock Logo"
                        src={'../../images/bedrock-logo.png'}
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

export default DeloitteFullTimeSection;
