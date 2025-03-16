// Importerer komponenten PageTitle, sammen med alle ressursene fra JS filen. Dette blir lagret i dataFromSchool
import PageTitle from './PageTitle';
import dataFromSchool from '../course_file/ressurser';

// har med props category og title, category blir brukt til filtrering/finne sanity objektet. Siden de har forskjellige 
// kategorinavn, men samme objekt, blir det gjort på måten under. 
export default function Resources({ category, title }) {

    const correctCategory = category === 'sanity' ? 'headless-cms' : category

    // filtrering blir lagret i dataWanted
    const dataWanted = dataFromSchool.filter(
        resource => resource.category.toLowerCase() === correctCategory.toLowerCase()
        
    )
    console.log(dataWanted)

    return (

        // lister riktige linker, med URL og tittel
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