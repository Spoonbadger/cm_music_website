import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/fonts.css'


const NavbarMusic = () => {
  const location = useLocation()
  console.log('location.pathname check:', location.pathname)
  const navigate = useNavigate()


  return (
    <Navbar className='navbar-main' collapseOnSelect expand='lg' fixed='sticky' bg='dark' data-bs-theme="light">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <img onClick={() => navigate('/') } className='navbar-logo' src="/images/e13ec4ad-6e33-4063-85e9-9d4ef641cb0a.JPG"></img>
        <Nav className='ms-auto'>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/" state={{ from: location.pathname }}>Home</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/music" state={{ from: location.pathname }}>Music</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/bio" state={{ from: location.pathname }}>Bio</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/links" state={{ from: location.pathname }}>Links</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/contact" state={{ from: location.pathname }}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link href="#" as="span">
            <Link className="nav-link spotify-icon-small icon-small" to="https://open.spotify.com/track/0rD7r6tH03uVqbheAqn0yQ?si=a0de3070b0e14f3f"><img src="/images/icons/spotify/Spotify_Primary_Logo_RGB_Green.png'"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link youtube-icon-small icon-small" to="https://www.youtube.com/watch?v=vjMrdpKwVcM&list=OLAK5uy_mZhTEwD5AMuMXK7Z-Sp8McrRuC_gdXCsk"><img src="/images/icons/youtube/youtube_social_icon_red.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link insta-icon-small icon-small" to="https://www.instagram.com/craigmorleymusic/"><img src="/images/icons/insta/Instagram_Glyph_Gradient.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link insta-icon-small icon-small" to="https://www.instagram.com/craigmorleymusic/"><img src="/images/icons/insta/Instagram_Glyph_Gradient.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link tiktok-icon-small icon-small" to="https://www.tiktok.com/@craigmorleymusic"><img src="/images/icons/tiktok/TikTok_Icon_Black_Circle.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link facebook-icon-small icon-small" to="https://www.facebook.com/craigmorleymusic/"><img src="/images/icons/facebook/Facebook_Logo_Primary.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link apple-icon-small icon-small" to="https://apple.co/3XMxnug"><img src="/images/icons/apple/apple icon.svg"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link amazon-icon-small icon-small" to="https://music.amazon.com/albums/B0CYW2PGXW"><img src="/images/icons/amazon/Stacked_Amazon_Music_CharcoalOnCyan_Circle_RGB.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link tidal-icon-small icon-small" to="/images/icons/tidal/tidal-round-black-icon.webp"><img src="/images/icons/tidal/tidal-round-black-icon.webp"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link tidal-icon-small icon-small" to="/images/icons/tidal/tidal-round-black-icon.webp"><img src="/images/icons/tidal/tidal-round-black-icon.webp"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link bandcamp-icon-small icon-small" to="https://craigmorley.bandcamp.com"><img src="/images/icons/bandcamp/bandcamp-button-bc-circle-aqua-512.png"></img></Link>
        </Nav.Link>
        <Nav.Link href="#" as="span">
            <Link className="nav-link soundcloud-icon-small icon-small" to="https://soundcloud.com/craigmorleymusic"><img src="/images/icons/soundcloud/419679-1x1_SoundCloudLogo_cloudmark-f5912b-original-1645807040.jpg"></img></Link>
        </Nav.Link>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMusic