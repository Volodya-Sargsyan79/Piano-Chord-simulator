import React from "react";
import './WorkFiles.scss'

export default ()=>{
    return(
        <div className={'work_files_all'}>
           <div className={'work_files'}>
               <div className={'work_files_div'}>
                   <i className="fa fa-heart"></i>
                   <p>Save</p>
               </div>
               <div>
                   <i className="fa fa-download"></i>
                   <p>MIDI</p>
               </div>
               <div>
                   <i className="fa fa-music"></i>
                   <p>MP3</p>
               </div>
               <div>
                   <i className="fa fa-share-alt"></i>
                   <p>Share</p>
               </div>
               <div>
                   <i className="fa fa-print"></i>
                   <p>Print</p>
               </div>
           </div>
        </div>
    )
}