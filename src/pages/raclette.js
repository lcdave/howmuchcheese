import React from "react"

import Layout from "../components/layout"
import Counter from "../components/counter";
import Header from "../components/header";

const Raclette = () => (
  <Layout>
      <div className="lay_content">
          <Header showHeaderBack/>
        <Counter type="Raclette" />
      </div>
  </Layout>
)

export default Raclette
