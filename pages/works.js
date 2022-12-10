import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSocialPay from '../public/images/works/socialpay.jpg'
import thumbMongolChatDonate from '../public/images/works/mongol-chat-donate.jpg'
import thumbKraft from '../public/images/works/kraft.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="mongolchat"
            title="Mongol Chat Donate"
            thumbnail={thumbMongolChatDonate}
          >
            A donation alert system, similar to StreamLabs, for streamers
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="kraft" title="Kraft.mn" thumbnail={thumbKraft}>
            An online learning platform, focusing on hard skills, in Mongolian.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="socialpay"
            title="Social Pay"
            thumbnail={thumbSocialPay}
          >
            A landing page for one of the most popular payment apps in Mongolia
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
