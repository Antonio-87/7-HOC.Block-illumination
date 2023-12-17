import { ComponentType } from "react";
import New from "./New";
import { ArticleProps } from "./Article";
import { VideoProps } from "./Video";
import Popular from "./Popular";

const Popularity = (
  WrappedComponent: ComponentType<ArticleProps | VideoProps>
) => {
  return (props: ArticleProps | VideoProps) => {
    if (props.views < 100)
      return (
        <>
          <New>
            <WrappedComponent {...props} />
          </New>
        </>
      );
    if (props.views > 1000)
      return (
        <>
          <Popular>
            <WrappedComponent {...props} />
          </Popular>
        </>
      );
  };
};

export default Popularity;
