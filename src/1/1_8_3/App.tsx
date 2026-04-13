export interface Story {
  id: string;
  label: string;
}

const stories: Story[] = [];
export default function Wrapper() {
  return <StoryTray stories={stories} />;
}

// Модификация входящих props (например, stories.push) нарушает "чистоту" компонента в React и переписывает массив у родителя, из-за чего пункты могут дублироваться.
// Решение: создать новый массив, расширив старый, не изменяя оригинальный массив props.
function StoryTray({ stories }: { stories: Story[] }) {
  const storiesToDisplay = [...stories, { id: 'create', label: 'Create Story' }];

  return (
    <ul>
      {storiesToDisplay.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}