import React, { useState } from 'react'
import InnerNav from '../../components/InnerNav'
import './IWantToHire.css'
import NotificationBar from '../../components/NotificationBar'
import { TablerCalendarMonth,MingcuteDownFill,MdiAlarmClock,IonLocationOutline,TdesignVerify,Fa6SolidMoneyCheckDollar,MynauiDangerHexagon,GuidanceTickets,FluentPersonSearch32Regular,StreamlineGraphBarIncrease,ClarityNewLine,SystemUiconsBoxOpen } from '../../Icons'
import Chart from "react-apexcharts";

const IWantToHire = () => {

  const [chart1, setChart1] = useState({

    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "current-year",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "previous-year",
        data: [35, 55, 27, 10, 70, 30, 60, 99]
      }
    ]
  });
  const [chart2, setChart2] = useState({
    
    options: {
      colors:[],
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2021, 2022, 2023, 2024 ]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50,]
      },
     
    ]
  })
  

  return (
    <div className='content'>
      <InnerNav name="Home" />
      <div className='IWantToHire'>
        <div className='IWantToHireLeft'>
          <div className='IWantToHireLeft1'>Today<MingcuteDownFill /></div>
          <div className='IWantToHireLeft2'>
            <div className='card card1'>
              <TablerCalendarMonth className="cardIcon" />
              <div className='cardText1'>Todays<br />Jobs</div>
              <div className='cardText2'>1008</div>
            </div>
            <div className='card card2'>
              <MynauiDangerHexagon className="cardIcon" />
              <div className='cardText1'>Escalated<br />Jobs</div>
              <div className='cardText2'>23</div>
            </div>
            <div className='card card3'>
              <StreamlineGraphBarIncrease className="cardIcon" />
              <div className='cardText1'>Prioritize<br />Jobs</div>
              <div className='cardText2'>34</div>
            </div>
            <div className='card card4'>
              <ClarityNewLine className="cardIcon" />
              <div className='cardText1'>New<br />Jobs</div>
              <div className='cardText2'>450</div>
            </div>
            <div className='card card5'>
              <SystemUiconsBoxOpen className="cardIcon" />
              <div className='cardText1'>Open<br />Jobs</div>
              <div className='cardText2'>87</div>
            </div>
            <div className='card card6'>
              <GuidanceTickets className="cardIcon" />
              <div className='cardText1'>Open<br />Ticket</div>
              <div className='cardText2'>500</div>
            </div>
            <div className='card card7'>
              <TdesignVerify className="cardIcon" />
              <div className='cardText1'>Engineer<br />Approval</div>
              <div className='cardText2'>300</div>
            </div>
            <div className='card card8'>
              <Fa6SolidMoneyCheckDollar className="cardIcon" />
              <div className='cardText1'>payment<br />Request</div>
              <div className='cardText2'>21</div>
            </div>
          </div>
          <div className='IWantToHireLeft3'>
            <div className='IWantToHireLeft3Card'>
              <h4>Projects</h4>
              <Chart
                options={chart1.options}
                series={chart1.series}
                type="line"
                width="100%"
                height="95%"
              />
            </div>
            <div className='IWantToHireLeft3Card'>
              <h4>Revenue</h4>
              <Chart
                options={chart2.options}
                series={chart2.series}
                type="bar"
                width="100%"
                height="100%"
              />
            </div>
            <div className='IWantToHireLeft3Card'>
              <div className='IWantToHireLeft3CardHeading'>Task Pending</div>
              <div className='IWantToHireLeft3CardInner'>
                <div className='IWantToHireLeft3CardInnerLeft'>
                <img src={require("../../assets/hcl.jpeg")} className='IWantToHireLeft3CardInnerImage' />
               <h4> HCL Technologies</h4> 
                </div>
                <div className='IWantToHireLeft3CardInnerRight'>
                  <div className='IWantToHireLeft3CardInnerRightInner' ><MdiAlarmClock className="clock"/>1day</div>
                  <div className='IWantToHireLeft3CardInnerRightInner'><IonLocationOutline className="clock"/> Newyork USA</div>
                  <div className='IWantToHireLeft3CardInnerRightInner pending'>pending</div>
                </div>
              </div>
              <div className='IWantToHireLeft3CardInner'>
                <div className='IWantToHireLeft3CardInnerLeft'>
                <img src={require("../../assets/infosys.png")} className='IWantToHireLeft3CardInnerImage' />
                <h4>Infosys</h4>
                </div>
                <div className='IWantToHireLeft3CardInnerRight'>
                  <div className='IWantToHireLeft3CardInnerRightInner'><MdiAlarmClock className="clock" /> 2day</div>
                  <div className='IWantToHireLeft3CardInnerRightInner'><IonLocationOutline className="clock"/> Newyork USA</div>
                  <div className='IWantToHireLeft3CardInnerRightInner pending'> pending</div>
                </div>
              </div>
            </div>
          </div>
          <div className='IWantToHireLeft4'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Customer Data</th>
                  <th>Job Id</th>
                  <th>Job Type</th>
                  <th>Job Title</th>
                  <th>Work Location</th>
                  <th>Create On</th>
                  <th>Starts On</th>
                  <th>Ends On</th>
                  <th>Project Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>HCL Technologies</td>
                    <td>TOM-WIR765</td>
                    <td>Dispatch Service</td>
                    <td>Cloud Engineer</td>
                    <td>Austin, TX</td>
                    <td>17-March-2024</td>
                    <td>18-March-24, 09:00am</td>
                    <td>18-March-24, 01:00pm</td>
                    <td>Field Techy</td>
                    <td>Unallocated</td>
                  </tr>
                  <tr>
                  <td>Infosys</td>
                    <td>MUT-WIU431</td>
                    <td>Dispatch Service</td>
                    <td>Cloud Engineer</td>
                    <td>Austin, TX</td>
                    <td>17-March-2024</td>
                    <td>18-March-24, 09:00am</td>
                    <td>18-March-24, 01:00pm</td>
                    <td>Field Techy</td>
                    <td>Unallocated</td>
                  </tr>
                  <tr>
                  <td>Capgemini</td>
                    <td>TOM-WIR642</td>
                    <td>Dispatch Service</td>
                    <td>Cloud Engineer</td>
                    <td>Austin, TX</td>
                    <td>17-March-2024</td>
                    <td>18-March-24, 09:00am</td>
                    <td>18-March-24, 01:00pm</td>
                    <td>Field Techy</td>
                    <td>Unallocated</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='IWantToHireRight'>
          <div className='IWantToHireRightHeading'>Notification</div>
          <NotificationBar />
         
        </div>
      </div>
    </div>
  )
}

export default IWantToHire
