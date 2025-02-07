import Box from '@mui/material/Box';
import Card from '@/components/FeatureArticles/CardItem';
import Button from '@/components/Buttons/Button';
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
      <Box className="mt-10 mb-20 flex justify-center items-center">
        <Button content="Load More" />
      </Box>
    </div>
  );
}
