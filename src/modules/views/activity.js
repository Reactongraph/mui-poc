import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AppAppBar from "./AppAppBar";
import AppFooter from "./AppFooter";
import ModalLayout from "../components/modalLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor :'#fff5f8'
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  favoriteButton: {
    color: theme.palette.error.main,
  },
}));

const activities = [
  {
    title: "Snorkeling",
    description: "Explore the underwater world of Adventure Island.",
    image:
      "https://img.freepik.com/free-photo/water-two-women-pacific-male_1232-4584.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=sph",
    about: `
    Activity Overview: Snorkeling involves swimming on the water's surface equipped with a snorkel mask and fins.
    Accessiblity: It's an accessible activity suitable for people of all ages and skill levels.
    Marine Exploration: Enthusiasts can observe marine life up close, from colorful fish to fascinating creatures.
    Equipment: Requires minimal gear, typically consisting of a snorkel, mask, and fins.
    Locations: Snorkeling can be enjoyed in various settings, including tropical reefs, calm coastlines, and vibrant underwater environments.
    `,
  },
  {
    title: "Zip Lining",
    description: "Feel the thrill of flying through the trees.",
    image:
      "https://adrenalineadventurenepal.com/wp-content/uploads/2021/06/zipline-india-adventure-500x500-2.jpg",
    about: `
    Description: Zip lining involves gliding along a suspended cable or wire from one platform to another.
    Setting: Typically takes place in natural landscapes like forests, canyons, or jungle canopies.
    Experience: Participants are harnessed to the cable and propelled by gravity, offering an exhilarating sensation of speed and flight.
    Scenery: Provides a unique bird's-eye view of the surroundings, showcasing stunning vistas and natural beauty.
    Variety: Courses often feature multiple zip lines of varying lengths and heights, adding excitement and challenge.
    Safety: Strict safety measures are in place, including helmets, harnesses, and trained guides, ensuring a secure experience for all participants.
    Popularity: Zip lining has gained popularity worldwide as a thrilling outdoor adventure activity suitable for people of all ages.
    `,
  },
  {
    title: "Rafting",
    description: "Ride the rapids and enjoy the adventure.",
    image:
      "https://media.istockphoto.com/id/1317053942/photo/close-up-of-reef-with-group-of-young-people-are-rafting.jpg?s=612x612&w=0&k=20&c=gfSNwIAANH6X0X8sJWv1Wdmiein5IfExjVNuP3ECt7U=",
    about: `
    Activity: Rafting, also known as white-water rafting, involves navigating a river's rapids aboard an inflatable raft.
    Teamwork: Participants work together as a team to paddle through turbulent waters, negotiate obstacles, and ride thrilling waves.
    Experience Levels: Rafting experiences vary from calm floats suitable for beginners to adrenaline-pumping rides through challenging rapids for experienced adventurers.
    Nature Immersion: Offers a unique opportunity to immerse oneself in nature, surrounded by stunning landscapes and wildlife.
    Safety: Professional guides provide instruction and ensure proper equipment such as helmets, life jackets, and paddles, prioritizing safety.
    Global Availability: Rafting destinations can be found worldwide, in various natural settings ranging from remote wilderness rivers to popular tourist destinations.
    `,
  },
  {
    title: "Hiking",
    description: "Discover the beauty of nature on foot.",
    image:
      "https://www.pcta.org/wp-content/uploads/2015/12/how-many-people-hike-the-pacific-crest-trail.jpg",
    about: `
    Activity: Hiking involves walking along trails or paths in natural environments, such as forests, mountains, or national parks.
    Physical Activity: It provides a moderate to strenuous physical workout, depending on the trail's terrain and elevation.
    Scenery: Hiking offers the opportunity to experience breathtaking scenery, including panoramic views, lush landscapes, and diverse ecosystems.
    Solitude or Socializing: Hikers can choose to enjoy solitude in nature or hike with friends and family, making it a versatile activity for individuals or groups.
    Benefits: Hiking is known to offer numerous health benefits, including improved cardiovascular fitness, stress reduction, and mental well-being.
    Equipment: Basic hiking gear includes sturdy footwear, appropriate clothing, water, snacks, navigation tools (e.g., map, compass, or GPS), and safety essentials.
    Environmental Awareness: Hikers often develop a deeper appreciation for nature and may engage in environmentally friendly practices, such as Leave No Trace principles.
    Accessibility: Trails range from easy, family-friendly paths to challenging routes suitable for experienced hikers, making hiking accessible to people of all ages and fitness levels.
    `,
  },
  {
    title: "Canoeing",
    description: "Paddle through the serene waters.",
    image: "https://www.eekwi.org/sites/default/files/2020-01/canoe.jpg",
    about: `
    Water Activity: Canoeing involves paddling a canoe, a narrow boat propelled by one or more paddlers, typically with single-bladed paddles.
    Versatility: Canoeing can be enjoyed on various bodies of water, including rivers, lakes, and calm coastal waters.
    Solo or Tandem: Canoeing can be done solo or with a partner, offering flexibility in how it's experienced.
    Nature Exploration: Provides an opportunity to explore scenic waterways, observe wildlife, and immerse oneself in nature.
    Physical Exercise: Offers a moderate physical workout, engaging muscles in the arms, shoulders, and core, while also promoting cardiovascular health.
    Skill Levels: Can range from leisurely paddles on calm waters suitable for beginners to challenging expeditions for experienced paddlers.
    Safety Equipment: Essential safety gear includes life jackets, appropriate clothing, navigation aids, and sometimes helmets for whitewater canoeing.
        `,
  },
  {
    title: "Rock Climbing",
    description: "Test your strength and agility on the climbing wall.",
    image:
      "https://www.pure-leisure.co.uk/wp-content/uploads/2018/02/Rock-Climbing-in-the-UK.jpg",
    about : `
    Vertical Ascent: Rock climbing involves ascending natural rock formations or artificial climbing walls using hands, feet, and specialized equipment.
    Physical and Mental Challenge: It provides a rigorous full-body workout while requiring problem-solving skills, concentration, and focus.
    Variety of Terrain: Climbing routes vary in difficulty, from beginner-friendly slabs to advanced overhangs and cracks, catering to climbers of all skill levels.
    Outdoor and Indoor Options: Climbers can choose between outdoor climbing on natural rock faces or indoor climbing in purpose-built gyms with artificial walls.
    Safety Equipment: Essential gear includes a climbing harness, helmet, climbing shoes, ropes, and carabiners, ensuring safety while ascending.
    Community and Camaraderie: Climbing often fosters a supportive community, with climbers encouraging and belaying each other during climbs.
    Connection with Nature: Outdoor climbing allows climbers to connect with nature, enjoying scenic views and the thrill of scaling natural rock formations.
    Skill Development: Climbing requires technique, strength, and endurance, offering opportunities for continuous skill improvement and personal growth.
    `  
  },
  {
    title: "Wildlife Safari",
    description: "Spot exotic animals in their natural habitat.",
    image: "https://www.f6s.com/content-resource/media/1176799_large.jpg",
    about : `
    Nature Exploration: Wildlife safaris offer the opportunity to explore natural habitats and observe wild animals in their native environment.
    Diverse Ecosystems: Safaris take place in various ecosystems such as savannas, forests, deserts, and wetlands, providing a diverse range of wildlife encounters.
    Vehicle or Walking Safaris: Safaris can be conducted from vehicles like jeeps or on foot, allowing participants to get close to wildlife while ensuring safety.
    Professional Guides: Experienced guides provide valuable insights into local wildlife behavior, habitats, and conservation efforts, enhancing the safari experience.
    Animal Sightings: Participants have the chance to spot iconic wildlife species such as lions, elephants, giraffes, zebras, and rhinos, among others, depending on the safari location.
    Photography Opportunities: Wildlife safaris offer exceptional photography opportunities, allowing participants to capture stunning images of wildlife in their natural surroundings.
    Cultural Immersion: Some safaris also offer opportunities to interact with local communities, providing insights into traditional lifestyles and cultural practices.
    `
  },
  {
    title: "Yoga Retreat",
    description: "Find peace and balance in the tranquil surroundings.",
    image:
      "https://www.spadreams.com/blog/wp-content/uploads/sites/3/2017/12/yoga-group-beach-1920x1240.jpg",
    about : `
    Mind-Body Practice: Yoga retreats offer a holistic approach to wellness, combining physical postures (asanas), breathing exercises (pranayama), meditation, and relaxation techniques.
    Retreat Setting: Typically held in serene and tranquil locations such as nature reserves, mountains, or coastal resorts, providing a peaceful environment for introspection and rejuvenation.
    Expert Instruction: Led by experienced yoga teachers or gurus, retreats offer guidance and instruction suitable for practitioners of all levels, from beginners to advanced yogis.
    Daily Schedule: Retreats often follow a structured daily schedule, including multiple yoga sessions, meditation, healthy meals, and free time for relaxation or exploration of the surrounding area.
    Detox and Cleanse: Some yoga retreats incorporate detoxifying practices such as fasting, juicing, or Ayurvedic treatments to cleanse the body and promote overall well-being.
    Community and Connection: Participants form bonds with like-minded individuals, creating a supportive and nurturing community focused on personal growth and self-discovery.
    `  
  },
];

const AdventureActivities = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  return (
    <React.Fragment>
      <AppAppBar />
      <div className={classes.root}>
        <h1>GET READY FOR ADVENTURE</h1>
        <Grid container spacing={4}>
          {activities.map((activity, index) => (
            <>
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea
                    onClick={() => {
                      setItem(activity);
                      setOpen(true);
                    }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={activity.image}
                      title={activity.title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {activity.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {activity.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <IconButton
                    aria-label="add to favorites"
                    className={classes.favoriteButton}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Card>
              </Grid>
              {open ? (
                <ModalLayout
                  open={open}
                  handleClose={() => {
                    setOpen(false);
                  }}
                  data={item}
                />
              ) : (
                ""
              )}
            </>
          ))}
        </Grid>
      </div>
      <AppFooter />
    </React.Fragment>
  );
};

export default AdventureActivities;
