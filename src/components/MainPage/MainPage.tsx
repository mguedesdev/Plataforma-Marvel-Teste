import { CardsContainer, CardContainer } from "./MainPageStyles";
import { useState } from "react";
import Card from "../Card/Card";
import { CardItem } from "../../types/cardItem";

interface cardItem {
  data: CardItem[];
  start: number;
}

function MainPage( { data, start } : cardItem) {
  const [selectedCardId, setSelectedCardId] = useState(0);

  const handleSelectCard = (id: number) => {
    setSelectedCardId(id);
  }

  const getDisplayedItems = (items: CardItem[]) => {
    const endIndex = start + 3;
    const duplicatedItems = items.concat(items);
    const displayedItems = duplicatedItems.slice(start, endIndex);
    if (endIndex > items.length) {
      return displayedItems.slice(0, 3);
    }
    return displayedItems;
  }

  const displayedItems = getDisplayedItems(data);
  
  return (
    <CardsContainer>
      {displayedItems.map((item, index) => {        
        return (
          <CardContainer>
            <Card
              animate={true} 
              key={item.id}
              item={item}
              index={index}
              selectedCardId={selectedCardId}
              setSelectedCard={handleSelectCard}
            />
          </CardContainer>
        );
      })}
    </CardsContainer>
  )
}

export default MainPage