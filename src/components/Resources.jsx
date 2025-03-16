import React from "react"
import resourcesData from '../course_file/ressurser'

export default function Resources({ category }) {

    const filteredResources = resourcesData.filter(
        (resource) => resource.category === category
    )

    return (
        <section>
            <h1>Ressurser for {category} </h1>
            {filteredResources.map((resource, index) => (
                <article key={index} >
                    <h2>{resource.category}</h2>
                    <p>{resource.text}</p>
                    <ul>
                        {resource.sources.map((source, i) => (
                            <li key={i}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer"> {source.title}</a>

                            </li>
                        ) ) }
                    </ul>

                </article>
            )  )  }
        </section>
    )
}