import { getImageUrl } from "./util";

interface ProfileProps {
  name: string;
  imageId: string;
  profession: string;
  awardsCount: number;
  awardsList: string;
  discovered: string;
}

// Извлечен переиспользуемый компонент Profile, который принимает параметры через props.
// Это избавляет от дублирования кода в Gallery.
function Profile({
  name,
  imageId,
  profession,
  awardsCount,
  awardsList,
  discovered
}: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b> 
          {profession}
        </li>
        <li>
          <b>Awards: {awardsCount} </b> 
          ({awardsList})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name="Maria Skłodowska-Curie"
        imageId="Maria"
        profession="physicist and chemist"
        awardsCount={4}
        awardsList="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        discovered="polonium (chemical element)"
      />
      <Profile 
        name="Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        profession="geochemist"
        awardsCount={2}
        awardsList="Miyake Prize for geochemistry, Tanaka Prize"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
