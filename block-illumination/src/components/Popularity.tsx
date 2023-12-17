import { ComponentType } from "react";
import New from "./New";
import Popular from "./Popular";

export type PopularityProps = {
  type: string;
  url?: string;
  title?: string;
  views: number;
};

const Popularity = (WrappedComponent: ComponentType<PopularityProps>) => {
  return (props: PopularityProps) => {
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
