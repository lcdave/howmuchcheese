import React from "react"

import Layout from "../components/layout"
import Counter from "../components/counter";
import Header from "../components/header";


const Fondue = () => (
  <Layout>
      <div className="lay_content">
          <Header showHeaderBack/>
        <Counter type="Fondue"/>
      </div>
  </Layout>
)

export default Fondue
