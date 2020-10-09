import React from "react";
import JoyRide from "react-joyride";
const rule = [
  {
    content: <p>Let's have our website tour!</p>,
    placement: "center",
    target: "body",
    title: "Dashboard",
  },
  {
    content: <p>This is designed by dropdown widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".drop",
    title: "DropDown",
    placement: "left",
  },
  {
    content: <p>This is designed by text widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetText",
    title: "WidgetText",
    placement: "right",
  },
  {
    content: <p>This is designed by fusion char bar widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetBar",
    title: "WidgetBar",
    placement: "left",
  },
  {
    content: <p>This is designed by fusion char doughnut widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetDoughnut",
    title: "WidgetDoughnut",
    placement: "left",
  },
  {
    content: <p> This is designed by simple comment widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetComment",
    title: "WidgetComment",
    placement: "top",
  }
  ,
  {
    content: <p> This is designed by react carousel widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetCarousel",
    title: "Widget Carousel",
    placement: "top",
  },
  {
    content: <p> This is designed by react counter widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetCounter",
    title: "Widget Counter",
    placement: "top",
  },
  {
    content: <p> This is designed by react calender widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetCalender",
    title: "Widget Calender",
    placement: "top",
  },
  {
    content: <p> This is designed by font-awesome widget.</p>,
    floaterProps: {
      disableAnimation: true,
    },
    spotlightPadding: 2,
    target: ".WidgetSocialMedia",
    title: "Widget Social Media",
    placement: "top",
  },
  
  
];
const WidgetOnBoarding = () => {
  return (
    <JoyRide
      continuous={true}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
      steps={rule}
      locale={{
        last: "End tour",
      }}
    />
  );
};

export default WidgetOnBoarding;
