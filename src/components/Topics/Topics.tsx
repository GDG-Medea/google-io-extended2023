import TopicCard from "./TopicCard";
import { topics } from "./topicsObjct";
const Topics = () => {
  return (
    <div className="m-12 max-tablet:m-auto max-tablet:mt-12 flex flex-wrap gap-12 justify-center">
      {topics.map((topic, i) => (
        <TopicCard key={i} topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
