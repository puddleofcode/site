import React from 'react'
import { Link } from 'gatsby'
import { Row } from 'react-bootstrap';

export default ({navigation}) => (
  <Row className="PageNavigation d-flex justify-content-between font-weight-bold">
    {navigation.prev ? <Link className="prev d-block col-md-6" to={navigation.prev.slug}> &laquo; {navigation.prev.title}</Link> : <span className="prev d-block col-md-6"/>}
    {navigation.next ? <Link className="next d-block col-md-6 text-lg-right text-right" to={navigation.next.slug}>{navigation.next.title} &raquo; </Link> : null}
    <div className="clearfix"></div>
 </Row>
)
