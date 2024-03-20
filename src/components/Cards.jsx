// import React from "react";
import Card from "./Card";

function Cards() {
  const data = [
    { header: "Up Next: News", title: "Insights and behind the scenes" },
    { header: "Get In Touch", title: "Let's get to it, together. " },
  ];
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          title={data[0].title}
          header={data[0].header}
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover="true"
          title={data[1].title}
          header={data[1].header}
        />
      </div>
    </div>
  );
}

export default Cards;
