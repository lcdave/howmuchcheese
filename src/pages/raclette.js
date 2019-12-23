import React from "react"

import Layout from "../components/layout"
import Counter from "../components/Counter";
import {Helmet} from "react-helmet";
import Header from "../components/Header";

const Raclette = () => (
  <Layout>
      <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Cookie&display=swap" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/f7f42ff28c.js" crossorigin="anonymous" />
      </Helmet>
      <div className="lay_content">
          <Header showHeaderBack/>
        <Counter type="Raclette" />
      </div>
  </Layout>
)

export default Raclette
