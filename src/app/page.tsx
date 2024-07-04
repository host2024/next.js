import PokemonList from './components/PokemonList';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <PokemonList />
        </div>
    );
}
