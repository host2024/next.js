'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Pokemon } from '@/types/pokemon';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await fetch('/api/pokemons');
            const data = await response.json();
            setPokemons(data);
        };

        fetchPokemons();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">포켓몬 목록</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id} className="border p-4 rounded border-white">
                        <a href={`/${pokemon.id}`}>
                            <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                            <p>{pokemon.korean_name || pokemon.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
