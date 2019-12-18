import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/Header"
import Card from "../components/Card"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Cookie&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/f7f42ff28c.js" crossorigin="anonymous" />
      </Helmet>
      <div className="lay_content">
          <Header/>
          <Card title="Fondue!" type="fondue" />
          <Card title="Raclette!" type="raclette" />
      </div>
  </Layout>
)

export default IndexPage
