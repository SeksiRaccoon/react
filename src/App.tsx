import React from 'react';
import Tabs from './TextArea/Tabs'
import TabContent from "./TextArea/TabContent"
import './App.css'

function App() {
  const tabsContent:{ title: string; content: string; id: number; }[] = [{
    title: 'Tab 1',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
    id: 1
  },{
    title: 'Tab 2',
    content: ' totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    id: 2
  },{
    title: 'Tab 3',
    content: ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    id: 3
  },{
    title: 'Tab 4',
    content: ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius',
    id: 4
  },
  ]



  return (
    <div className="App"> 
    <Tabs  tabsContent={tabsContent} ></Tabs>
    </div>
  );
}

export default App;

