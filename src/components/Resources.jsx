import React from "react"
import dataFromSchool from '../course_file/ressurser';

export default function Resources({ category }) {

    const dataWanted = dataFromSchool.filter(
        (resource) => resource.category === category.toLowerCase()
        
    )
    console.log(dataWanted)

    return (

        <section>
        <h1>{category}</h1>
        {dataWanted.length ? (
          dataWanted.map((resource, index) => (
            <article key={index}>
              <h2>{resource.title}</h2>
              <p>
                <a href={resource.url} target="_blank" > {resource.title}
                </a>
              </p>
            </article>
          ))
        ) : (
          <p>{category}</p>
        )}
      </section>

    )
}