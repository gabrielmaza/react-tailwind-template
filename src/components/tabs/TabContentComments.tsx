import React from "react";
import CommentCard from "../cards/CommentCard";
import Paginator from "../paginator/Paginator";

interface TabContentCommentsProps {
  data: any;
}

const TabContentComments = ({ data }: TabContentCommentsProps) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <CommentCard
            date={item.date}
            hour={item.hour}
            userName={item.userName}
            productName={item.productName}
            comment={item.comment}
          />
        </div>
      ))}
      <Paginator />
    </div>
  );
};

export default TabContentComments;
