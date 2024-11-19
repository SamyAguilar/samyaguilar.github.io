import './App.css';
import Item from './components/item/item';

function App() {
    return (
        <section className='app'>
            <Item isPlay={true} /> {/* Pass isPlay prop */}
        </section>
    );
}

export default App;