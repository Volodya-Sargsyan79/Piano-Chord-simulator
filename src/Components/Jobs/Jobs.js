import React from "react";
import './Jobs.scss'

export default ()=>{
    return(
        <div className={'jobs_all'}>
           <h2>
               Jobs
           </h2>
            <h4>Do what you love and make money on it!</h4>
            <div className={'job_types d-flex'}>
                <div className={'col-lg-6 job_tasks'}>
                    <div className={'task_titles'}>
                        <i className="fa fa-music"></i>
                        <h6>Instagram Content Maker</h6>
                    </div>

                    <div className={'task_txt'}>
                        <p>Requirements:</p>
                        <p>-Solid knowledge of the video-editing software (preferably FCPX or Adobe Premiere Pro).</p>
                        <p>-Solid knowledge of the music production techniques and 1+ years experience in one of the DAWs (Logic Pro X, Ableton, FL Studio).</p>
                        <p>-Serum knowledge</p>
                    </div>
                    <div className={'task_txt'}>
                        <p>Tasks:</p>
                        <p>
                            -Production of the video content (short tutorials for producers) for the Instagram account.
                        </p>
                        <p>
                            -Production of the music producer memes for the Instagram account.
                        </p>
                    </div>

                </div>
                <div className={'col-lg-6 job_tasks'}>

                    <div className={'task_titles'}>
                        <i className="fa fa-instagram"></i>
                        <h6>Music Producer</h6>
                    </div>

                    <div className={'task_txt'}>
                        <p>Requirements:</p>
                        <p>-Playing piano is a must.</p>
                        <p>-Ability to produce unique music pieces.</p>
                        <p>-Ability to produce unique presets in different synthesizers.</p>
                        <p>-Ability to recreate presets/sounds by ear in different synthesizers.</p>
                        <p>-Solid knowledge of the music production techniques and 2+ years experience in one of the DAWs (Logic Pro X, Ableton, FL Studio).</p>
                        <p>-Serum knowledge</p>
                    </div>
                    <div className={'task_txt'}>
                        <p>
                            Tasks:
                        </p>
                        <p>
                            -Production of the MIDI packs (melodies, drums).
                        </p>
                        <p>
                            -Production of the Sound Packs.
                        </p>
                        <p>
                            -Production of the Sample Packs.
                        </p>
                        <p>
                            -Production of the Serum Presets.
                        </p>
                    </div>
                </div>
            </div>
            <p className={'job_apply'}>*To apply for any position - email us at team@chordchord.com with the cover letter and portfolio.</p>
        </div>
    )
}