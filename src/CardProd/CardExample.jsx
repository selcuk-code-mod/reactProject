import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import CardProps from "../CardProps/Props";

function CardExample() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="text-center col-lg-6 col-xxl-4">
            <CardProps
              icon={<FontAwesomeIcon icon={faFolderOpen} />}
              title={"Fresh new layout"}
              text={
                "With Bootstrap 5, we've created a fresh new layout for this template!"
              }
            />
          </div>
          <div className="text-center col-lg-6 col-xxl-4 pt-5 pt-lg-0">
            <CardProps
              icon={<FontAwesomeIcon icon={faCloudArrowDown} />}
              title={"Free to download"}
              text={
                "As always, Start Bootstrap has a powerful collection of free templates."
              }
            />
          </div>
          <div className="text-center col-lg-6 col-xxl-4 pt-5">
            <CardProps
              icon={<FontAwesomeIcon icon={faAddressCard} />}
              title={"Jumbotron hero header"}
              text={
                "The heroic part of this template is the jumbotron hero header!"
              }
            />
          </div>
          <div className="text-center col-lg-6 col-xxl-4 pt-5">
            <CardProps
              icon={<FontAwesomeIcon icon={faBootstrap} />}
              title={"Feature boxes"}
              text={
                "We've created some custom feature boxes using Bootstrap icons!"
              }
            />
          </div>

          <div className="text-center col-lg-6 col-xxl-4 pt-5">
            <CardProps
              icon={<FontAwesomeIcon icon={faCode} />}
              title={"Simple clean code"}
              text={
                "We keep our dependencies up to date and squash bugs as they come!"
              }
            />
          </div>

          <div className="text-center col-lg-6 col-xxl-4 pt-5">
            <CardProps
              icon={<FontAwesomeIcon icon={faCircleCheck} />}
              title={"A name you trust"}
              text={
                "Start Bootstrap has been in free Bootstrap templates since 2013!"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExample;
