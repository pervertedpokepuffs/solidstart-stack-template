import Card from './components/card/Card';

function App() {
  const handleClick = (title: string) => {
    alert(`Clicked on ${title}`);
  };

  return (
    <div class="container m-auto">
      <header>
        <h1>attempt 1</h1>
      </header>
      
      <div class="grid grid-cols-4 gap-10 my-4">
        <Card
          flat={false}
          rounded={true}
          onClick={() => handleClick("BROADCAST")}
          backgroundImage="/assets/broadcast.jpg" // Replace with actual image URL
        >
          <h2>BROADCAST</h2>
        </Card>

        <Card flat={false} rounded={true} onClick={() => handleClick("WEATHER API")}>
          <h2>WEATHER API</h2>
        </Card>

        <Card flat={false} rounded={true} onClick={() => handleClick("DB SETTING")}>
          <h2>DB SETTING</h2>
        </Card>

        <Card flat={false} rounded={true} onClick={() => handleClick("RESULT")}>
          <h2>RESULT</h2>
        </Card>
      </div>
    </div>
  );
}

export default App;
