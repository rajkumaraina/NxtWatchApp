import {Component, React} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {
  MainContainer,
  VideoContainer,
  Container,
  LoadingContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryButton,
} from './styledComponents'

import Header from '../Header'

import MenuItems from '../MenuItems'

import NxtWatchContext from '../../context/nxtwatchContext'

const ApiView = {
  loading: 'Loading',
  success: 'Success',
  failure: 'Failure',
}

class Video extends Component {
  state = {
    view: ApiView.loading,
    videoItem: [],
  }

  componentDidMount = () => {
    this.getVideo()
  }

  getVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const newData = data.video_details
      const updatedData = {
        id: newData.id,
        description: newData.description,
        videoUrl: newData.video_url,
        channel: {
          name: newData.channel.name,
          profileImageUrl: newData.channel.profile_image_url,
          subscriberCount: newData.channel.subscriber_count,
        },
        publishedAt: newData.published_at,
        thumbnailUrl: newData.thumbnail_url,
        viewCount: newData.view_count,
        title: newData.title,
      }
      this.setState({videoItem: updatedData, view: ApiView.success})
    } else {
      this.setState({view: ApiView.failure})
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backgroundColor = isDarkTheme ? '#606060' : '#e2e8f0'
          const color = isDarkTheme ? '#ffffff' : '#000000'
          const renderSuccessView = () => {
            const {videoItem} = this.state
            const {
              id,
              channel,
              title,
              publishedAt,
              thumbnailUrl,
              viewCount,
              description,
              videoUrl,
            } = videoItem
            const {name, profileImageUrl, subscriberCount} = channel
            return (
              <VideoContainer isDarkTheme={isDarkTheme}>
                <ReactPlayer
                  width="100%"
                  height="380px"
                  url={videoUrl}
                  controls
                />
                <h1>jii</h1>
              </VideoContainer>
            )
          }

          const renderLoadingView = () => (
            <LoadingContainer>
              <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color={color} height="50" width="50" />
              </div>
            </LoadingContainer>
          )

          const renderFailureView = () => (
            <FailureContainer>
              <FailureImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHeading color={color}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailurePara color={color}>
                We are having some trouble to complete your request.
              </FailurePara>
              <FailurePara color={color}>Please try again.</FailurePara>
              <FailureRetryButton type="button">Retry</FailureRetryButton>
            </FailureContainer>
          )

          const renderView = () => {
            const {view} = this.state
            switch (view) {
              case ApiView.loading:
                return renderLoadingView()
              case ApiView.success:
                return renderSuccessView()
              case ApiView.failure:
                return renderFailureView()
              default:
                return null
            }
          }
          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              <Header />
              <Container>
                <MenuItems />
                {renderView()}
              </Container>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Video
