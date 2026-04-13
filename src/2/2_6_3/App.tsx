import { useImmer } from 'use-immer';
import Background from './Background';
import Box from './Box';

export type Position = { x: number; y: number };

const initialPosition = {
    x: 0,
    y: 0,
};

export default function Canvas() {
    // Используем хук useImmer для упрощения работы со сложными объектами состояния.
    // Это позволяет писать "мутирующий" код внутри функции-обновителя, 
    // в то время как Immer сам создаст копии нужных уровней объекта.
    const [shape, updateShape] = useImmer({
        color: 'orange',
        position: initialPosition,
    });

    function handleMove(dx: number, dy: number) {
        updateShape(draft => {
            draft.position.x += dx;
            draft.position.y += dy;
        });
    }

    function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
        updateShape(draft => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

