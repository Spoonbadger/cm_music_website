import React, { useRef, useState } from 'react'


const Bio = () => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)


    const playPause = () => {
        const audio = audioRef.current

        if (isPlaying) {
          audio.pause()
          console.log("Button clicked off.")
        }
        else {
            audio.play()
            console.log("Button clicked on.")
        }
        setIsPlaying(!isPlaying)
    }

  return (
    <div>

        <div style="margin-left: 10%; margin-top: 10px">
            <button id="ASong" className="as-text" onClick={playPause}>
                <audio id="audiofile" ref={audioRef} src="{% static '/music/firewingClipped.mp3' %}" preload="auto"></audio>
                { isPlaying ? '[ MUSIC OFF ]' : '[ Music ON ]' }
            </button>
        </div>

        <div className="page-title">The Cragged Isles</div>
        <div id="bio-box" className="bio-box">
            <p>
                Half a world away, plucking out threads from enigmatic days. Music is birthed from experience. 
                An English-American, contemporary composer and musician.
            </p>
            <p>
                From the vibrant streets of Los Angeles to the serene countryside of the Peak District and the North of England, 
                reflecting on eight transformative years in Seattle, Craig Morley weaves a rich tapestry of sound that bridges continents and experiences. 
                In 2024, he released two evocative EPs: "By Acting Together We Really Act" in April and "Firewing" in September, each a testament to his ongoing exploration of music as a profound narrative form.
            </p>
            <p>
                Creativity from this space allowing him to express these years, the joy, the pain, the brilliance, the struggle. Fractally dispersing inwardly, there is something here that reflects our desired state, for we may not be as we as we would like to be, yet there are examples of current realities, of what in the world just happened; of hope, of calm, of peace, of death by bananas. 
            </p>
            <p>
                Eight years in Seattle and keeping hold of his head, Craig Morley has traversed experiences, overcoming all to unleash the splish and splatters, the narrative of cinematic storytelling. Ready to unearth the spirit of calling, to look into the abyss until the light illuminates. Now it has illuminated.
            </p>
            <p>
                No more pop music for this composer with a rock ‘n’ roll background of UK tours and American shows, there’s an urgency in the strings, force in the musical flow, banging in all the instruments (literally), telling the tale, the story, the horror, the joy. Grit. His compositions are more than mere melodies; they are journeys — each track a chapter in a larger story of struggle, joy, and revelation.
            </p>
            <p>
                Craig Morley's music is a dynamic interplay of instrumnetal vigor and contemplative storytelling, embodying the raw and unfiltered essence of his experiences. No longer confined to a singular place or label, finding the freedom he has always desired, his work reflects a broader spectrum of life and artistry, unfurling like the intricate patterns of a journey hard-traveled.
            </p>
            <p>
                By acting together, we really act. 
            </p>
        </div>


        <div id="images-bio" className="images-bio">

            <div className="bio-images">
                <img className="bio-images" src="/static/images/photos/IMG_8578 copy.jpeg"></img>
            </div>
            <div class="bio-images">
                <img className="bio-images" src="/static/images/photos/IMG_2339.jpeg"></img>
            </div>
            <div class="bio-images">
                <img className="bio-images" src="/static/images/photos/green photo craig copy.jpg"></img>
            </div>
            <div class="bio-images">
                <img className="bio-images" src="/static/images/photos/IMG_5168 copy.jpeg"></img>
            </div>

        </div>


    </div>
    )
}

ReactDOM.render(<Bio />, document.getElementById('app'));

export default Bio