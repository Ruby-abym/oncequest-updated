import * as React from "react";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";

const VideoCard = (props: { youtubeUrl: string , videoDescription: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }) => {
  return (
    <>
      <div className="infobox_wrapper doctor_card">
        <div>
          <div>
            <div className="team_member">
              <div className="member_name video-memeber">
                <ReactPlayer
                  className="video-youtube-n"
                  controls
                  url={props.youtubeUrl}
                />
              </div>
            </div>
          </div>
          <div className="video-description">
            <p>{props.videoDescription}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
