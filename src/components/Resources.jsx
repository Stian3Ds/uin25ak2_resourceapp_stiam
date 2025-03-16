import dataFromSchool from '../course_file/ressurser';

export default function Resources({ category }) {

    const correctCategory = category === 'sanity' ? 'headless-cms' : category

    const dataWanted = dataFromSchool.filter(
        resource => resource.category.toLowerCase() === correctCategory.toLowerCase()
        
    )
    console.log(dataWanted)

    return (

        <>
        <h2>{category.toUpperCase()}</h2>
            <ul>
                {dataWanted.map((resource, index) => (
                <li key={index}>
                    <a href={resource.url} target="_blank">
                    {resource.title}
                    </a>
                </li>
                ))}
            </ul>

      </>

    )
}