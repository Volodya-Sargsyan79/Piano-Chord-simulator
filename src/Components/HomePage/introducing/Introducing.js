import React from "react";
import './Introducing.scss'

export default ()=>{
    return(
        <div className={'intro'} style={{padding:'5vh 0'}}>
            <div>
                <h3>Welcome to the best Music Maker Tool!</h3>
                <p>
                    This website is dedicated specifically for musicians, who are willing to
                    find some catchy and interesting chord progressions. Apart from generating chord progressions,
                    this website can help you improve musical compositions and suggest you some sweet chord sequences to make music.
                </p>
            </div>
            <div>
                <h3>Instructions</h3>
                <p>1. Just press the Generate Chord Progression button and you will get the random chord sequence that is called chord progression.</p>
                <p>2. Enjoy</p>
            </div>
            <div>
                <h3>Options</h3>
                <p>-To change the key press the right button and pick between different options.
                    -You can also change Arpeggio and Drum Settings. Furthermore,
                    you can enable/disable randomization for BPM, Arpeggio, Drums and Key if you want to fix currently selected option.</p>
            </div>
            <div>
                <h3>Explanation</h3>
                <p>There is nothing complicated except Roman Numerals below the chord namings.
                    Actually, they are called Scale Degrees. Scale Degree refers to the position
                    of a particular note on a scale relative to the tonic, the first and main note
                    of the scale from which each octave is assumed to begin. Degrees are useful for
                    indicating the size of intervals and chords, and whether they are major or minor.
                    The other confusing thing is arrangement options. AAAA, ABCD, ABBB,
                    AB are not specific conventions. Those are just namings made up by me.
                    Try them out and listen to how they sound.</p>
                <p>If you're willing to understand more music theory - check out our Theory For Music website.</p>
                <p>Pro Tip: Bookmark this page right now :)</p>
                <p>Disclaimer: I strive to make this tool as suitable as possible,
                    so be sure to leave the feedback and share the ideas via email.</p>
            </div>
        </div>
    )
}