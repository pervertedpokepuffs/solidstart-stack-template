// import Card from './components/card/Card';
// import broadcastImage from './assets/broadcast.jpg';


// function App() {
//   const handleClick = (title: string) => {
//     alert(`Clicked on ${title}`);
//   };

//   return (
//     <div class="container m-auto">
//       <header>
//         <h1>attempt 1</h1>
//       </header>
      
//       <div class="grid grid-cols-4 gap-10 my-4">
//         <Card
//           flat={false}
//           rounded={true}
//           onClick={() => handleClick("BROADCAST")}
//           backgroundImage={broadcastImage} // Replace with actual image URL
//         >
//           <h2>BROADCAST</h2>
//         </Card>

//         <Card 
//         flat={false} 
//         rounded={true} 
//         onClick={() => handleClick("WEATHER API")}
//         backgroundImage={broadcastImage}
//         >
//           <h2>WEATHER API</h2>
//         </Card>

//         <Card 
//         flat={false} 
//         rounded={true} 
//         onClick={() => handleClick("DB SETTING")}
//         backgroundImage={broadcastImage}
//         >
//           <h2>DB SETTING</h2>
//         </Card>

//         <Card 
//         flat={false} 
//         rounded={true} 
//         onClick={() => handleClick("RESULT")}
//         backgroundImage={broadcastImage}
//         >
//           <h2>RESULT</h2>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default App;

import MainPage from "./pages/MainPage";

const App = () => <MainPage />;
export default App;

