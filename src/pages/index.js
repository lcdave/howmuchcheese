import React from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Card from "../components/Card"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="lay_content">
          <Header showSubheader="1" />
          <Card title="Fondue!" type="fondue" />
          <Card title="Raclette!" type="raclette" />
      </div>
  </Layout>
)

export default IndexPage
