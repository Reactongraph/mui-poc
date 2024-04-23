import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, CardActionArea, CardMedia} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppFooter from "./AppFooter";
import AppAppBar from "./AppAppBar";
import ServiceModalPage from "../components/serviceModal";


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
  text :{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }
}));

const Service = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [hoteldata, setHotelData] = useState({});


  const hotels = [
    {
      id: 1,
      name: "The Royal At Atlantis",
      image: "https://static-new.lhw.com/HotelImages/Final/LW6077/lw6077_80888404_790x490.jpg",
      otherimage :[
         "https://static-new.lhw.com/HotelImages/Final/LW6077/lw6077_80888404_790x490.jpg",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/df/b7/fe/atlantis-royal-towers.jpg?w=700&h=-1&s=1",
         "https://d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1018643/1018643-1-hotel_carousel_large.jpg?version=42",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCSRw1weBcPmeF0qdDWaQcBiQvy0dgI2pkwqSZ1l-mg&s",
         "https://www.britishairways.com/badp/static/external/BS-X70-0000181/11_BS-X70-0000181-HTLROY-H1907.jpeg"

      ],
      ranking: 5,
      staff : 100,
      fees: "$100",
    },
    {
      id: 2,
      name: "Warwick Paradise Island - Bahamas",
      image: "https://phgcdn.com/images/uploads/MCDIH/search/hero3.jpg",
      otherimage :[
         "https://phgcdn.com/images/uploads/MCDIH/search/hero3.jpg",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/147871201.jpg?k=762cd7b1f5dba30c4fea7556ceba3abf314bb94393850c1e6749718825acc708&o=&hp=1",
         "https://image-tc.galaxy.tf/wijpeg-2jhgyc7m7fdjlm9qak1crls8f/bahamas-pool-overview-side_square.jpg?crop=320%2C0%2C1281%2C1281&width=800",
         "https://file.videopolis.com/F/1/4a1b637b-aec3-4e92-a193-ff0fb9f54d33/101347.13002.nassau.warwick-paradise-island-bahamas.hero-8eagGbRa-49353-1280x720.jpeg",
         "https://image-tc.galaxy.tf/wijpeg-940c896nenohi4m1hu1ka8k1z/homepage_og-image.jpg"
      ],
      ranking: 4,
      staff : 200,
      fees: "$150",
    },
    {
      id: 3,
      name: "The Royal Hotel",
      image: "https://www.travelandleisure.com/thmb/15GHW660cxZdQ4xFXo4MtO2Ehuk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urraca-private-island-eco-resort-panama-AFFORDPI0522-bea2a73084e041c38fb3baa40efd7b7b.jpg",
      otherimage :[
             "https://www.travelandleisure.com/thmb/15GHW660cxZdQ4xFXo4MtO2Ehuk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urraca-private-island-eco-resort-panama-AFFORDPI0522-bea2a73084e041c38fb3baa40efd7b7b.jpg",
             "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
         "https://t4.ftcdn.net/jpg/01/88/93/17/360_F_188931734_lghk3pjsHPlO6E2jJsaAABAVpJKi8cWj.jpg",
         "https://t4.ftcdn.net/jpg/02/96/37/09/360_F_296370988_zS6WBJOr4BM4qK8SxYeSr0RBmWCOQvGF.jpg",
         "https://i.pinimg.com/736x/38/b7/64/38b764d21c6e9c6d8b2984a254b93882.jpg"

      ],
      ranking: 5,
      staff : 150,
      fees: "$200",
    },
    {
      id: 4,
      name: "Hotel Riu Palace Paradise Island",
      image: "https://www.awaygowe.com/wp-content/uploads/2023/02/tropical-island-gili-lankanfushi.jpg",
      otherimage :[
          "https://www.awaygowe.com/wp-content/uploads/2023/02/tropical-island-gili-lankanfushi.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgOnIPSyA4EQlLX7bWAQG5RHaWUitWwXFKxYdInuRMw&s",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPE_R7QQ5WIRBnK6KxhmY14R49Q2x9gQf5h1N2Ex9Syr01Eo7Dxm29DyFW4NwVnF3dDs&usqp=CAU",
         "https://www.prevuemeetings.com/wp-content/uploads/2016/11/Hotel-RIU-Palace-Cabo-San-Lucas.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgWQ5p-hP_OG866c44v9CTaZVVoZwUj4yINPjmOs9Qg&s"

      ],
      ranking: 3,
      staff : 350,
      fees: "$450",
    },
    {
      id: 5,
      name: "COMO Laucala Island",
      image: "https://www.copenhagenisland.com/-/media/island/1-facade-og-lobby/copenhagen-island-facade-night.jpg?rev=969f3fc59531409a83e8cdf991d76623&cw=3840&ch=2160&cx=0.5&cy=0.5",
      otherimage :[
           "https://www.copenhagenisland.com/-/media/island/1-facade-og-lobby/copenhagen-island-facade-night.jpg?rev=969f3fc59531409a83e8cdf991d76623&cw=3840&ch=2160&cx=0.5&cy=0.5",
           "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/631df05701926.jpg/1920x1080/fit/80/a81102e9308b467b105d5dce88bbb7f2.jpg",
         "https://de87ve0y4m3tc.cloudfront.net/comohotels.com-2459770069/cms/cache/v2/6332ea6d585d4.jpg/1772x1180/fit/80/a43bfa2963145a4336003e15f16722f0.jpg",
         "https://www.qantas.com/content/travelinsider/en/explore/south-pacific/fiji/como-laulcala-island-fiji-resort-review/_jcr_content/parsysContent/contentFragment/par14/adaptiveimage.img.480.medium.jpg/1656561161417.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1aiMvnLMGnQE5MgPlJL0gw1WQqFtBPqig5yQVUL3J7tpcBzgIRl-757EKTT5cVpDVwM&usqp=CAU"
      ],
      ranking: 5,
      staff : 400,
      fees: "$700",
    },
    {
      id: 6,
      name: "Sivananda Ashram Yoga Retreat Bahamas",
      image: "https://www.kayak.co.in/rimg/himg/9f/5d/b7/expediav2-303203-1521147701-390793.jpg?width=968&height=607&crop=true",
      otherimage :[
             "https://www.kayak.co.in/rimg/himg/9f/5d/b7/expediav2-303203-1521147701-390793.jpg?width=968&height=607&crop=true",
             "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/73/09/94/perfect-spot.jpg?w=700&h=-1&s=1",
         "https://i.pinimg.com/736x/b6/ee/86/b6ee86946b33a401ce7859d74734c0a8.jpg",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/35/e7/a1/sivananda-ashram-yoga.jpg?w=700&h=-1&s=1",
         "https://media-cdn.tripadvisor.com/media/photo-s/03/ef/6b/d3/sivananda-ashram-yoga.jpg"

      ],
      ranking: 4,
      staff : 200,
      fees: "$250",
    },
    {
      id: 7,
      name: "The Coral At Atlantis",
      image: "https://static.myconnect.ae/-/media/yasconnect/project/yasisland/tabswithslider/hotels/whoauhwhex354099-desktop.png?w=2000",
      otherimage :[
       "https://static.myconnect.ae/-/media/yasconnect/project/yasisland/tabswithslider/hotels/whoauhwhex354099-desktop.png?w=2000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRntXgk4aj10J7uXr9wLTAsGWe1KMqSmXYn2XVoWkGNkg&s",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINx3ZwNwc6Org9WYYKmMt9BVFPZFlJdoH71mRVXr-hA&s",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/52/c7/97/leap-of-faith.jpg?w=700&h=-1&s=1",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2MD9EJQFwLwOKLVC5-lcyoNKZsy08XBx6-QBbXDNIA&s"

      ],
      ranking: 4,
      staff : 200,
      fees: "$100",
    },
    {
      id: 8,
      name: "Comfort Suites Paradise Island",
      image: "https://gos3.ibcdn.com/e8a87d2e377b11eba6dc0242ac110002.jpeg",
      otherimage :[
          "https://gos3.ibcdn.com/e8a87d2e377b11eba6dc0242ac110002.jpeg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazbuDtSVoujHFYqqi1yPrliwaT1g2XhaI-xvjqwwieg&s",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/87/75/c7/lobby.jpg?w=700&h=-1&s=1",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/319886087.jpg?k=bb7f71e4ad07f2853a34a79f65ff88ffc7376822bef327602af5993472650355&o=&hp=1",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/47904546.jpg?k=45ff8d043c956a67d1ea2104f0a98cfc2a9acebe9f7130c2ff62f332723602f4&o=&hp=1"

      ],
      ranking: 3,
      staff : 400,
      fees: "$250",
    },
    {
      id: 9,
      name: "The Ocean Club, A Four Seasons Resort, Bahamas",
      image: "https://bribieislandhotel.com.au/wp-content/uploads/2021/12/21.12.17-Bribie-Island-Hotel-Spaces-Web-31-1290x650.jpg",
      otherimage :[
          "https://bribieislandhotel.com.au/wp-content/uploads/2021/12/21.12.17-Bribie-Island-Hotel-Spaces-Web-31-1290x650.jpg",
          "https://www.kayak.co.in/rimg/himg/0a/f1/46/leonardo-3559427-161277759-676149.jpg?width=1366&height=768&crop=true",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2Ue8bFw5aGKSUR0FuM38i8NHcnkivOWNtU_a9M3IJaSNTovO9rnHANw_Rr3WkCrhXE4&usqp=CAU",
         "https://media-cdn.tripadvisor.com/media/photo-s/2a/aa/8f/82/aerial-resort-view.jpg",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamjShfCW-dSywTfMyn5e7PWcwEmKcanT7eDCbGU7Ufg&s"

      ],
      ranking: 5,
      staff : 300,
      fees: "$400",
    },
    {
      id: 10,
      name: "The Reef at Atlantis",
      image: "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/143/2024/02/01113325/Pullman-Facade-Evening-1-1-1.jpg",
      otherimage :[
         "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/143/2024/02/01113325/Pullman-Facade-Evening-1-1-1.jpg",
         "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113674029.jpg?k=f1e25369ad1bc16d59532c42e51a70bfe0231ca6973b79d27bbad5f7b73deb91&o=&hp=1",
         "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/74/26/98/newly-renovated-topaz.jpg?w=700&h=-1&s=1",
         "https://a0.muscache.com/im/pictures/miso/Hosting-8461253/original/f10f0747-eaea-4920-8631-8d063d998642.jpeg?im_w=720",
         "https://il.bestattravel.co.uk/Images/Cropped/CAR-Bahamas-ParadiseIsland-TheReefAtlantis-404495-AquaventureRiverRide-3-ReefAtlantis(1).jpg"

      ],
      ranking: 5,
      staff : 400,
      fees: "$350",
    },
  ];

  return (
    <>
      <AppAppBar />
      <div className={classes.root}>
      <Grid container spacing={4}>
          {hotels.map((item, index) => (
            <>
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea
                      onClick={() => {
                        setHotelData(item);
                        setOpen(true);
                      }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={item.image}
                      title={item.name}   
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.text}
                      >
                         <span>Rating : {item.ranking}</span>
                         <span>Price : {item.fees}</span>     
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {open ? (
                <ServiceModalPage
                  open={open}
                  handleClose={() => {
                    setOpen(false);
                  }}
                  data={hoteldata}
                />
              ) : (
                ""
              )}

              </Grid>
            </>
          ))}
        </Grid>
      </div>
      <AppFooter />
    </>
  );
};

export default Service;
