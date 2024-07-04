import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PokemonDetail {
    id: number;
    name: string;
    korean_name: string;
    height: number;
    weight: number;
    sprites: { front_default: string };
    types: { type: { name: string; korean_name: string } }[];
    abilities: { ability: { name: string; korean_name: string } }[];
    moves: { move: { name: string; korean_name: string } }[];
}

export default async function PokemonDetail({ params }: { params: { id: string } }) {
    const response = await fetch(`http://localhost:3000/api/pokemons/${params.id}`);
    if (!response.ok) {
        notFound();
    }

    const pokemon: PokemonDetail = await response.json();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{pokemon.korean_name || pokemon.name}</h1>
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={200} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.map((type) => type.type.korean_name || type.type.name).join(', ')}</p>
            <p>
                Abilities:{' '}
                {pokemon.abilities.map((ability) => ability.ability.korean_name || ability.ability.name).join(', ')}
            </p>
            <p>Moves: {pokemon.moves.map((move) => move.move.korean_name || move.move.name).join(', ')}</p>
            <a href="/" className="text-blue-500">
                Back to list
            </a>
        </div>
    );
}
