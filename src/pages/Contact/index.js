import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
import { Badge } from 'reactstrap';
import './Content.css';

const Content = (props) => {
  return (
    <div class = "Backgound">
    <center><h1><Badge color="secondary">ผู้พัฒนา</Badge></h1></center>
    <CardGroup>
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
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
        <CardImg top width="100%" src="https://www.picz.in.th/images/2018/09/26/hWBIvb.jpg"  />
        <CardBody>
          <CardText>นายวรปรัชญ์ รัตนะ</CardText>
          <CardText>รหัสนักศึกษา 5910110288</CardText>
          <a href="https://www.facebook.com/pond.long">
            <Button color="info" size="lg" block >Facebook</Button>
          </a>
        </CardBody>
      </Card>
      <Card body inverse color="danger">
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
  );
};

export default Content;