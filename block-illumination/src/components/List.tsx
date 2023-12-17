import Article, { ArticleProps } from "./Article";
import Video, { VideoProps } from "./Video";

type ListProps = {
  list: (VideoProps | ArticleProps)[];
};

const List = (props: ListProps) => {
  return props.list.map((item) => {
    switch (item.type) {
      case "video":
        return <Video {...(item as VideoProps)} />;

      case "article":
        return <Article {...(item as ArticleProps)} />;
    }
  });
};

export default List;
