import React from "react"
import Layout from "../components/layout/Layout"


import "./index.css"
export default () => (
  <div className="App">
  <Layout>
    <div className="text-center">
      <h1 style={{ marginTop: "15rem", marginBottom: "15rem" }}>
        <span>That page doesn't exist!</span>
      </h1>
      <p> Are you lost? It's ok, we've all been there. </p>
    </div>
  </Layout>
  </div>
)
