import * as React from "react";
import CommentsBlock from "simple-react-comments";

const WidgetComment = ({ comments, setComment }) => {
  return (
    <div className="graphWidget">
      <div className="widgetTitle">Comments</div>
      <CommentsBlock
        comments={comments}
        className={"commentWidget"}
        signinUrl={"/signin"}
        isLoggedIn
        reactRouter={false} // set to true if you are using react-router
        onSubmit={(text) => {
          if (text.length > 0) {
            setComment([
              ...comments,
              {
                authorUrl: "#",
                avatarUrl: "#avatarUrl",
                createdAt: new Date(),
                fullName: "Name",
                text,
              },
            ]);
            console.log("submit:", text);
          }
        }}
      />
    </div>
  );
};

export default WidgetComment;
