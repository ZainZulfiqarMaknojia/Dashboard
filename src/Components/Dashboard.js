import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import WidgetText from "./WidgetText";
import WidgetBar from "./WidgetBar";
import WidgetDoughnut from "./WidgetDoughnut";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./dashboard.css";
import { commentsData } from "./index";
import WidgetComment from "./WidgetComment";
import WidgetOnBoarding from "./WidgetOnBoarding";
import WidgetCarousel from './WidgetCarousel';
import WidgetCounter from './WidgetCounter';
import WidgetFlipNumbers from './WidgetFlipNumbers';
import WidgetCalender from './WidgetCalender';
import WidgetSocialMedia from './WidgetSocialMedia';
const config = {
  apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
  spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
};
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      dropdownOptions: [],
      selectedValue: null,
      organicSource: null,
      directSource: null,
      referralSource: null,
      socialSource: null,
      emailSource: null,
      pageView: null,
      users: null,
      newUsers: null,
      sessions: null,
      numberOfsessions: null,
      pps: null,
      avg_session: null,
      bounce_rate: null,
      sourceArr: [],
      userArr: [],
      comments: commentsData,
    };
  }
  getData = (arg) => {
    const arr = this.state.items;
    const arrlen = arr.length;
    let organicSource = 0;
    let directSource = 0;
    let referralSource = 0;
    let socialSource = 0;
    let emailSource = 0;
    let pageView = 0;
    let users = 0;
    let newUsers = 0;
    let sessions = 0;
    let numberOfsessions = 0;
    let pps = 0;
    let avg_session = 0;
    let bounce_rate = 0;
    let selectedValue;
    let sourceArr = [];
    let userArr = [];
    for (let i = 0; i < arrlen; i++) {
      if (arg === arr[i]["month"]) {
        organicSource = arr[i].organic_source;
        directSource = arr[i].direct_source;
        referralSource = arr[i].referral_source;
        socialSource = arr[i].social_source;
        emailSource = arr[i].email_source;
        pageView = arr[i].page_views;
        users = arr[i].users;
        newUsers = arr[i].new_users;
        sessions = arr[i].sessions;
        numberOfsessions = arr[i].number_of_sessions_per_users;
        pps = arr[i].page_per_session;
        avg_session = arr[i].avg_session_time;
        bounce_rate = arr[i].bounce_rate;
        sourceArr.push(
          {
            label: "Organic Source",
            value: arr[i].organic_source,
          },
          {
            label: "Direct Source",
            value: arr[i].direct_source,
          },
          {
            label: "Refferal Source",
            value: arr[i].referral_source,
          }
        );
        userArr.push(
          {
            label: "Jan 2018",
            value: arr[i].users,
          },
          {
            label: "Feb 2018",
            value: arr[i].users,
          },
          {
            label: "Mar 2018",
            value: arr[i].users,
          }
        );
      }
    }
    selectedValue = arg;
    this.setState(
      {
        organicSource: organicSource,
        directSource: directSource,
        referralSource: referralSource,
        socialSource: socialSource,
        emailSource: emailSource,
        pageView: pageView,
        users: users,
        newUsers: newUsers,
        sessions: sessions,
        numberOfsessions: numberOfsessions,
        pps: pps,
        avg_session: avg_session,
        bounce_rate: bounce_rate,
        sourceArr: sourceArr,
        userArr: userArr,
      },
      () => {
        console.log(this.state.organicSource);
      }
    );
  };
  updateDashbaord = (event) => {
    this.getData(event.value);
    this.setState(
      {
        selectedValue: event.value,
      },
      () => {
        console.log(this.state.users);
      }
    );
  };
  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let batchRowValues = data.valueRanges[0].values;

        const rows = [];

        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }

        let dropdownOptions = [];
        for (let i = 0; i < rows.length; i++) {
          dropdownOptions.push(rows[i].month);
        }

        dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
        this.setState(
          {
            items: rows,
            dropdownOptions: dropdownOptions,
            selectedValue: "Jan 2018",
          },
          () => this.getData("Jan 2018")
        );
      });
  }
  setComment = (newComment) => {
    this.setState({ comments: newComment });
  };

  render() {
    //const chartData = [];

    // Create a JSON object to store the chart configurations
    console.log(commentsData);
    return (
      <div>
        <Container>
          <Row className="TopHeader">
            <Col className="col1">
              <h1>Welcome to DashBoard</h1>
            </Col>
            <Col>
              <Dropdown
                options={this.state.dropdownOptions}
                onChange={this.updateDashbaord}
                value={this.state.selectedValue}
                placeholder="Select an option"
                className="drop"
              />
            </Col>
          </Row>
        </Container>
        <Container className="Maindashboard">
          <Row className="WidgetText">
            <Col>
              <WidgetText
                title="Referal Source"
                value={this.state.referralSource}
              />
            </Col>
            <Col>
              <WidgetText
                title="Organic Source"
                value={this.state.organicSource}
              />
            </Col>
            <Col>
              <WidgetText
                title="Direct Source"
                value={this.state.directSource}
              />
            </Col>
          </Row>
          <Row className="WidgetBar">
            <Col>
              <WidgetBar title="Comparison" data={this.state.sourceArr} />
            </Col>
          </Row>
          <Row className="WidgetDoughnut">
            <Col>
              <WidgetDoughnut title="User" data={this.state.userArr} />
            </Col>
          </Row>
          <Row className="WidgetComment">
            <Col>
              <WidgetComment
                comments={this.state.comments}
                setComment={this.setComment}
              />
            </Col>
          </Row>
          <WidgetOnBoarding />
          <Row className="WidgetCarousel">
            <Col>
              <WidgetCarousel />
            </Col>
          </Row>
          <Row className = "WidgetCounter">
            <Col>
            <WidgetCounter title="Referal Source"
                value={this.state.referralSource}/>
            </Col>
            <Col>
            <WidgetCounter title="Organic Source"
                value={this.state.organicSource}/>
            </Col>
            <Col>
            <WidgetCounter title="Direct Source"
                value={this.state.directSource}/>
            </Col>
          </Row>
          <Row className ="WidgetCalender">
            <Col>
              <WidgetCalender />
            </Col>
          </Row>
          <Row className ="WidgetSocialMedia">
            <Col>
              <WidgetSocialMedia title = "twitter"/>
            </Col>
            <Col>
              <WidgetSocialMedia title = "facebook"/>
            </Col>
            <Col>
              <WidgetSocialMedia title = "instagram"/>
            </Col>
            <Col>
              <WidgetSocialMedia title = "youtube"/>
            </Col>
          </Row>
        </Container>



      </div>
    );
  }
}
export default Dashboard;

