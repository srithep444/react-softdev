import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { Badge } from 'reactstrap';
import './Content.css';

const Content = (props) => {
  return (
    <div class = "Backgounds">
    <br></br>
    <h1 className = "top">&nbsp;&nbsp;Developer&nbsp;&nbsp;</h1>
    <br></br>
    <br></br>
    <div class = "bflex">
    <CardGroup style={cardStyle} >
      <Card body inverse color="primary">
        <CardImg top width="100%" src="https://www.picz.in.th/images/2018/09/26/hWNvAu.jpg" />
        <CardBody>
            <CardText>นายธิปมนัส รัตนนุพงค์</CardText>
            <CardText>รหัสนักศึกษา 5910110148</CardText>
            <a href="https://www.facebook.com/thipmanus.rattananupong">
            <Button color="info" size="lg" block >Facebook</Button>
            </a>
        </CardBody>
        </Card>
        &nbsp;
        &nbsp;
        <Card class = "bflex" body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
        <CardImg top width="100%" src="https://www.picz.in.th/images/2018/09/26/hWBIvb.jpg"  />
        <CardBody>
          <CardText>นายวรปรัชญ์ รัตนะ</CardText>
          <CardText>รหัสนักศึกษา 5910110288</CardText>
          <a href="https://www.facebook.com/pond.long">
            <Button color="info" size="lg" block >Facebook</Button>
          </a>
        </CardBody>
      </Card>
      &nbsp;
      &nbsp;
      <Card class = "bflex" body inverse color="danger">
        <CardImg top width="100%" src="https://www.picz.in.th/images/2018/09/26/hWYS5l.jpg" />
        <CardBody>
            <CardText>นายศรีเทพ วิทยาพันธ์ประชา</CardText>
            <CardText>รหัสนักศึกษา 5910110669</CardText>
            <a href="https://www.facebook.com/PeachGenZ">
            <Button color="info" size="lg" block >Facebook</Button>
            </a>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
    <br></br>
    <br></br>
    <div>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480941586&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
    </div>
  );
};

var cardStyle = {
  
  width: '65vw',
  height: '35vw',
  
}

export default Content;