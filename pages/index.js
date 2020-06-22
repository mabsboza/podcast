import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component {

  static async getInitialProps() {
    try {
      let req = await fetch('https://api.audioboom.com/channels/recommended')
      let { body: channels } = await req.json()
      return { channels }
    } catch (e) {
      return { channels: null, statusCode: 503 }
    }
  }

  render() {
    const { channels } = this.props
    return <Layout title="Podcasts">
      <ChannelGrid channels={ channels } />
    </Layout>
  }
  
}