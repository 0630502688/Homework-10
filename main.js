const root = ReactDOM.createRoot(document.querySelector('#root'));

function Container () {
        return (
            <div class="Container">
    <button class="btn btn-inc">+</button>
    <h3 class="number">0</h3>
    <button class="btn btn-dec">-</button>
    <button class="btn btn-clr">0</button>
    <button class="btn btn-clr">X</button>
  </div>
        )
    }
    

function App(){
    return (
        <div className="Container1">
            <h1 className="Sum">Sum = 0</h1>
            <button> Add Counter</button>
            <Container />
        </div>

    );
}



root.render(<App />)

// จ่ายค่าดูมาสะดีๆ555555555555555555555555555555555555555555555555555555555555555555555555555555555