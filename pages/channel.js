
import 'isomorphic-fetch'

export default class  extends React.Component {

  static async getInitialProps({ query }) {
    const idChannel = query.id
    const res = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
    const { body: {channel } } = await res.json()

    const resAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    const dataAudios = await resAudio.json()
    let audioclips = dataAudios.body.audio_clips

    return { channel, audioclips }
  }

  render() {
    const { channel, audioclips } = this.props

    return (
      <div>
        <header>PODCAST</header>
        <h1>{channel.title}</h1>
        { audioclips.map((clip) => (
            <div className="channel">
              <h2>{ clip.title }</h2>
            </div>
          )) }
        <style jsx>{`
        header {
          color: #ffff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }
        .channels {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
        .channel img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          width: 100%;
        }
        h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      `}
      </style>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}
      </style>
    </div>
    )
  }
}