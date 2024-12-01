import React from 'react'

const Music = () => {
    return (
      <div id="music-view">
          <div id="music-player-container">
              <div id="ep-container">
                  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/569rSaKJjX6zHJF1boizhy?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
              <div id="ep-container">
                  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2ykvIengCRsZyj3UCzXbwE?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
              <div id="ep-container">
                  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4yQCW0xSLfDso4oxA3isOP?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
          </div>
          <div class="vids-box">
              {% for video in videos %}
                  <div class="vid">
                      <video class="video" src="{% static  video.file_path %}"></video>
                  </div>
              {% endfor %}
          </div>
          <script src="{% static 'js/Video.js' %}" />
      </div>
    )
  }


export default Music