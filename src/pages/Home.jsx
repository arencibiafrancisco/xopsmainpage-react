import XOpsSection from "../componenets/XOpsSection";
import Themes from "../componenets/Themes";
import SpeakersSection from "../componenets/SpeakersSection";
import EventSchedule from "../componenets/EventSchedule";
import Ubication from "../componenets/Ubication";
import Collaborators from "../componenets/Collaborators"; 


const Home = () => {
  return (
    <>

      <XOpsSection />
      <Themes />
      <EventSchedule />
      <Ubication />
      <Collaborators />
      <SpeakersSection />

    </>
  );
};

export default Home;
