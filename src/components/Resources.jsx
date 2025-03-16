import PageTitle from './PageTitle';
import dataFromSchool from '../course_file/ressurser';

export default function Resources({ category, title }) {

    const correctCategory = category === 'sanity' ? 'headless-cms' : category

    const dataWanted = dataFromSchool.filter(
        resource => resource.category.toLowerCase() === correctCategory.toLowerCase()
        
    )
    console.log(dataWanted)

    return (

        <>
        <PageTitle title={title} />
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