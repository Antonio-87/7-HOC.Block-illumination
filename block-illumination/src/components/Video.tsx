export type VideoProps = {
  type: string;
  url: string;
  views: number;
};

const Video = (props: VideoProps) => {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
};

export default Video;
