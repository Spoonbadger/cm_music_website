import React from 'react'


const Links = () => {
    return (
      <div id="links-view">
        <div class="page-title">
        </div>
          // Links should slide in (animation) and grow from the top left, then the two EPs should appear on the botton half of the screen.
        <nav class="navbar navbar-expand-lg" style="margin-top: 1%;">
          <ul class="navbar-nav links-nav" style="display: flex; justify-content: center;">
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://open.spotify.com/track/0rD7r6tH03uVqbheAqn0yQ?si=a0de3070b0e14f3f" target="_blank" rel="noopener noreferrer">
                  <img src="{% static 'images/icons/spotify/Spotify_Primary_Logo_RGB_Green.png' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://www.youtube.com/watch?v=vjMrdpKwVcM&list=OLAK5uy_mZhTEwD5AMuMXK7Z-Sp8McrRuC_gdXCsk" target="_blank" rel="noopener noreferrer">
                  <img src="{% static 'images/icons/youtube/youtube_social_icon_red.png'%}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://www.instagram.com/craigmorleymusic/" target="_blank" rel="noopener noreferrer">
                  <img src="{% static 'images/icons/insta/Instagram_Glyph_Gradient.png' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://www.tiktok.com/@craigmorleymusic" target="_blank" rel="noopener noreferrer">
                  <img src="{% static 'images/icons/tiktok/TikTok_Icon_Black_Circle.png' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://www.facebook.com/craigmorleymusic/" target="_blank" rel="noopener noreferrer">
                  <img src="{% static 'images/icons/facebook/Facebook_Logo_Primary.png' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://apple.co/3XMxnug" rel="noopener noreferrer">
                  <img src="{% static '/images/icons/apple/apple icon.svg' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://music.amazon.com/albums/B0CYW2PGXW" target="_blank" rel="noopener noreferrer">
                  <img src="{% static '/images/icons/amazon/Stacked_Amazon_Music_CharcoalOnCyan_Circle_RGB.png' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="" target="_blank" rel="noopener noreferrer">
                  <img src="{% static '/images/icons/tidal/tidal-round-black-icon.webp' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://craigmorley.bandcamp.com" target="_blank" rel="noopener noreferrer">
                  <img src="{% static '/images/icons/bandcamp/bandcamp-button-bc-circle-aqua-512.png' %}"></img>
                </a>
              </li>
              <li class="nav-item-i">
                <a class="nav-link icon-big" href="https://soundcloud.com/craigmorleymusic" target="_blank" rel="noopener noreferrer">
                  <img src="{% static '/images/icons/soundcloud/419679-1x1_SoundCloudLogo_cloudmark-f5912b-original-1645807040.jpg' %}"></img>
                </a>
              </li>      
          </ul>
        </nav>
        <div class="row" style="display: flex; justify-content: center; margin-bottom: 285px;">
          <li class="nav-item-i">
            <a class="nav-link icon-big spotify-link-appear" style="max-height: 100px;" href="https://soundcloud.com/craigmorleymusic" target="_blank" rel="noopener noreferrer">
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0rD7r6tH03uVqbheAqn0yQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </a>
          </li>
          <li class="nav-item-i">
            <a class="nav-link icon-big spotify-link-appear" style="max-height: 100px;" href="https://soundcloud.com/craigmorleymusic" target="_blank" rel="noopener noreferrer">
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/06ttrEYa2kyESdEHyM9YrF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </a>
          </li>
        </div>
      </div>
    )
  }

export default Links