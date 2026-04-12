import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

// Вычисляем размер изображения ('s' для маленьких, 'b' для больших)
// на основе значения пропса size (меньше 90 — маленькое).
function Avatar({ person, size }: { person: Person; size: number }) {
  const imageSize = size < 90 ? "s" : "b";
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "GregorioYZara",
      }}
    />
  );
}
