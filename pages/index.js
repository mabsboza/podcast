
import 'isomorphic-fetch'

export default class  extends
 React.Component {

  static async getInitialProps() {
    const res = await fetch('https://api.audioboom.com/channels/recommended')
    const { body: channels } = await res.json()
    return { channels }
  }
  render() {
    const { channels } = this.props
    return (
      <div>
        <header>Podcast</header>
        { channels.map((channel) => (
          <div className="channel">
            <img src={ channel.urls.logo_image.original } alt="podcast_image" />
            <h2>{ channel.title }</h2>
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
