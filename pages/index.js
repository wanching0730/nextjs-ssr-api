import React from "react";

function HomePage({name}) {
  return <h3>{'Welcome ' + name}</h3>
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/name')
  const result = await res.json()

  return {
    props: {
      name: result.name,
    },
  }
}

export default HomePage
