import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Mongol Chat Donate">
    <Container>
      <Title>
        Mongol Chat Donate <Badge>2019-2020</Badge>
      </Title>
      <P>
        Mongol Chat Donate is a web service that allows streamers and content
        creators to receive real-time donation notification. It is quite similar
        to StreamLabs in terms of its function.
      </P>
      <P>Mongol Chat Donate primarily serves the following functions</P>
      <UnorderedList my={4}>
        <ListItem>Customizable donation alerts for streamers</ListItem>
        <ListItem>Shows a donation goal bar and top 5-10 donators</ListItem>
        <ListItem>A dashboard to perform these functions</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Symfony4, ZeroMQ</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://donate.mongolchat.com">
            https://donate.mongolchat.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/mongolchat-03.jpg" alt="mongolchat" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/mongolchat-01.jpg" alt="mongolchat" />
        <WorkImage src="/images/works/mongolchat-02.jpg" alt="mongolchat" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
