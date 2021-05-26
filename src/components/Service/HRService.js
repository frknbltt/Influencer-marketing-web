import React, { Component } from "react";
import HRServiceItems from "./HRServiceItems";

class HRService extends Component {
  render() {
    let ServiceData = this.props.ServiceData;
    return (
      <section className="prototype_service_info">
        <div className="container">
          <div className="row p_service_info">
            {ServiceData.HRService.map((item) => {
              return (
                <HRServiceItems
                  HRtitle={item.HRtitles}
                  HRdescription={item.HRdescription}
                  Hicon={item.Hicon}
                  rclass={item.rclass}
                  iclass={item.iclass}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default HRService;
