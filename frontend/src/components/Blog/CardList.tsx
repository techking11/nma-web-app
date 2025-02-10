import Card from '@/components/Blog/CardItem';
import cardList from '@/data/cardList';

export default function CardList() {
  return (
    <div className="">
      <div className="container xl:max-w-6xl grid grid-cols-12 gap-5 pt-20 mx-auto">
        {cardList.map((item, i) => (
          <Card
            key={i}
            imgSrc={item.imgSrc}
            date={item.date}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
