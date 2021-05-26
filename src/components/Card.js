import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
class Ccc extends Component {
  render() {
    var { aClass } = this.props;
    return (
      <section>
        <div className="container ">
          <h2
            id="howitworks"
            className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp mobilmargin"
            data-wow-delay="0.3s"
          >
            <br />
            <br />
            <br />
            <br />
            How it Works
          </h2>
          <div className="info-card mobilpadding">
            <Card className="howitworks hovercard" style={{ width: "18rem" }}>
              <h3>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="ideal"
                  class="svg-inline--fa fa-ideal fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M125.61,165.48a49.07,49.07,0,1,0,49.06,49.06A49.08,49.08,0,0,0,125.61,165.48ZM86.15,425.84h78.94V285.32H86.15Zm151.46-211.6c0-20-10-22.53-18.74-22.53H204.82V237.5h14.05C228.62,237.5,237.61,234.69,237.61,214.24Zm201.69,46V168.93h22.75V237.5h33.69C486.5,113.08,388.61,86.19,299.67,86.19H204.84V169h14c25.6,0,41.5,17.35,41.5,45.26,0,28.81-15.52,46-41.5,46h-14V425.88h94.83c144.61,0,194.94-67.16,196.72-165.64Zm-109.75,0H273.3V169h54.43v22.73H296v10.58h30V225H296V237.5h33.51Zm74.66,0-5.16-17.67H369.31l-5.18,17.67H340.47L368,168.92h32.35l27.53,91.34ZM299.65,32H32V480H299.65c161.85,0,251-79.73,251-224.52C550.62,172,518,32,299.65,32Zm0,426.92H53.07V53.07H299.65c142.1,0,229.9,64.61,229.9,202.41C529.55,389.57,448.55,458.92,299.65,458.92Zm83.86-264.85L376,219.88H392.4l-7.52-25.81Z"
                  ></path>
                </svg>
              </h3>

              <Card.Body>
                <Card.Title>SELECT PURPOSE</Card.Title>
                <Card.Text>
                  Choose the campaign type like social media
                  collaborations,product test, get reviews, brand ambassadors
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="howitworks hovercard" style={{ width: "18rem" }}>
              <h3>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="network-wired"
                  class="svg-inline--fa fa-network-wired fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"
                  ></path>
                </svg>
              </h3>
              <Card.Body>
                <Card.Title>CONNECT</Card.Title>
                <Card.Text>
                  Get access to MicroGlobers to collaborate easily.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="howitworks hovercard" style={{ width: "18rem" }}>
              <h3>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="handshake"
                  class="svg-inline--fa fa-handshake fa-w-20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"
                  ></path>
                </svg>
              </h3>
              <Card.Body>
                <Card.Title>COLLABORATE</Card.Title>
                <Card.Text>
                  Send proposals and choose the right fit for your campaign
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="howitworks hovercard" style={{ width: "18rem" }}>
              <h3>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="poll"
                  class="svg-inline--fa fa-poll fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"
                  ></path>
                </svg>
              </h3>
              <Card.Body>
                <Card.Title>IMPACT</Card.Title>
                <Card.Text>
                  Create impact and see the results to grow your business
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}
export default Ccc;
