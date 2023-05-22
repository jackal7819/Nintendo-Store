import Card from './components/Card';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import './scss/app.scss'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <main className='content'>
                <div className='container'>
                    <div className='content__top'>
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className='content__title'>Nintendo Switch games</h2>
                    <div className='content__items'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
