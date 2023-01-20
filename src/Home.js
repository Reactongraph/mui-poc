import withRoot from "./container/withRoot";
// --- Post bootstrap -----
import React from "react";
import ProductCategories from "./container/homeDesign/ProductCategories";
import AppFooter from "./container/homeDesign/AppFooter";
import ProductHero from "./container/homeDesign/ProductHero";
import ProductValues from "./container/homeDesign/ProductValues";
import ProductHowItWorks from "./container/homeDesign/ProductHowItWorks";
import ProductCTA from "./container/homeDesign/ProductCTA";
import AppHeader from "./container/homeDesign/AppHeader";

const Index = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(Index);
