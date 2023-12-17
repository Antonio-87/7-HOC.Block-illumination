import Article from "./Article";
import Popularity, { PopularityProps } from "./Popularity";
import Video from "./Video";

type ListProps = {
  list: PopularityProps[];
};

const List = (props: ListProps) => {
  const PopularityVideo = Popularity(Video);
  const PopularityArticle = Popularity(Article);
  return props.list.map((item, index) => {
    switch (item.type) {
      case "video":
        return <PopularityVideo key={index} {...item} />;

      case "article":
        return <PopularityArticle key={index} {...item} />;
    }
  });
};

export default List;
