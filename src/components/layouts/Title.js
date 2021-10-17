import React from 'react'

export default function Title(props) {
    return (
        <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="active"><a href="/about">{props.title}</a></li>
          </ul>
          <h2 className="inner-banner__title">{props.title}</h2>
        </div>
      </section>
    )
}
