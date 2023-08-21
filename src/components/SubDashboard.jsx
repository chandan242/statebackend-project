import React,{useState} from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { DynamicTable } from './table';
import { Link } from 'react-router-dom';
import BarChart from './barChart';

const SubDashboard = () => {

  const [activeTab, setActiveTab] = useState('harshBreaking'); // Default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'harshBreaking':
        return (
          <div>
            <p style={{textAlign:"center"}}>Table for Harsh Breaking</p>
            <table id="customers">
              <tr>
                <th>Sr.No.</th>
                <th>IMEI</th>
                <th>Vehicle Reg No</th>
                <th>Owner Mobile No</th>
                <th>Alert Count</th>
                <th>Send Sms</th>
              </tr>
              <tr>
                <td>1</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>2</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>3</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>4</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>5</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>6</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>7</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>8</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>9</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>10</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
            </table>
          </div>
        );
      case 'Harsh Acceleration':
        return (
          <div>
            <p style={{textAlign:"center"}}>Table for Harsh Acceleration</p>
            <table id="customers">
              <tr>
                <th>Sr.No.</th>
                <th>IMEI</th>
                <th>Vehicle Reg No</th>
                <th>Owner Mobile No</th>
                <th>Alert Count</th>
                <th>Send Sms</th>
              </tr>
              <tr>
                <td>1</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>2</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>3</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>4</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>5</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>6</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>7</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>8</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>9</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>10</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
            </table>
          </div>
        );
      case 'Rash Turing':
        return (
          <div>
            <p style={{textAlign:"center"}}>Table for Rash Turing</p>
            <table id="customers">
              <tr>
                <th>Sr.No.</th>
                <th>IMEI</th>
                <th>Vehicle Reg No</th>
                <th>Owner Mobile No</th>
                <th>Alert Count</th>
                <th>Send Sms</th>
              </tr>
              <tr>
                <td>1</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>2</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>3</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>4</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>5</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>6</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>7</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>8</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>9</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>10</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
            </table>
          </div>
        );
      case 'Device Tempered':
        return (
          <div>
            <p style={{textAlign:"center"}}>Table for Device Tempered</p>
            <table id="customers">
              <tr>
                <th>Sr.No.</th>
                <th>IMEI</th>
                <th>Vehicle Reg No</th>
                <th>Owner Mobile No</th>
                <th>Alert Count</th>
                <th>Send Sms</th>
              </tr>
              <tr>
                <td>1</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>632</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>2</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>75</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>3</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>963</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>4</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>6396</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>5</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>867</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>6</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>545</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>7</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>757</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>8</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>324</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>9</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>63</td>
                <td>Send</td>
              </tr>
              <tr>
                <td>10</td>
                <td>174748857</td>
                <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                <td>7678745534</td>
                <td>533</td>
                <td>Send</td>
              </tr>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='sub-dash-container'>
      <div className='sub-dash-container-left'>
        <div className='sub-dash-left-item multi-card-container'>
          <div className='card-widget' style={{backgroundColor:"skyBlue"}}>
            <p>427</p>
            <p>Harsh Braking</p>
            <div>
              <p>More Info</p>
              <FaArrowAltCircleRight/>
            </div>
          </div>
          <div className='card-widget' style={{backgroundColor:"#42f55d"}}>
            <p>427</p>
            <p>Harsh Acceleration</p>
            <div>
              <p>More Info</p>
              <FaArrowAltCircleRight/>
            </div>
          </div>
          <div className='card-widget' style={{backgroundColor:"#ebeb6e"}}>
            <p>427</p>
            <p>Rash Turing</p>
            <div>
              <p>More Info</p>
              <FaArrowAltCircleRight/>
            </div>
          </div>
          <div className='card-widget' style={{backgroundColor:"#f7434c"}}>
            <p>427</p>
            <p>Device Tempered</p>
            <div>
              <p>More Info</p>
              <FaArrowAltCircleRight/>
            </div>
          </div>
        </div>

        <div className='sub-dash-right-item'>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
            <p>Harsh Breaking Alert Count During One Week</p>
            <GiHamburgerMenu/>
          </div>
            <div>
              <BarChart/>
            </div>
          <div>

          </div>
        </div>
      </div>
      <div className='sub-dash-container-right'>
        <div className='tab-menu'>
          <div
            className={`tab-item ${activeTab === 'harshBreaking' ? 'active' : ''}`}
            onClick={() => handleTabChange('harshBreaking')}
          >
            Harsh Breaking
          </div>
          <div
            className={`tab-item ${activeTab === 'Harsh Acceleration' ? 'active' : ''}`}
            onClick={() => handleTabChange('Harsh Acceleration')}
          >
            Harsh Acceleration
          </div>
          <div
            className={`tab-item ${activeTab === 'Rash Turing' ? 'active' : ''}`}
            onClick={() => handleTabChange('Rash Turing')}
          >
            Rash Turing
          </div>
          <div
            className={`tab-item ${activeTab === 'Device Tempered' ? 'active' : ''}`}
            onClick={() => handleTabChange('Device Tempered')}
          >
            Device Tempered
          </div>
        </div>
        {renderTabContent()}
      </div>
    </div>
  )
}

export default SubDashboard