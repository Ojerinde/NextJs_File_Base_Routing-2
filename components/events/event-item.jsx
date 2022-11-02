import Link from "next/link";
import Button from "../ui/button";

import classes from "./event-item.module.css";

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const farmattedAddress = location.replace(", ", "\n");

  const exporeLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{farmattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exporeLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};
export default EventItem;
