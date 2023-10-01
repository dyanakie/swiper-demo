import { Button, Card, CardContent } from "@mui/material";

const GameCard = ({ name, thumbnail, className }) => {
  const onClick = () => {
    console.log(`${name} clicked.`);
  };

  return (
    <>
      <Card className={`relative group rounded-[10px] ${className}`}>
        <img src={thumbnail} alt={name} className="w-full h-full select-none" />
        <CardContent
          onClick={onClick}
          className="flex justify-center p-0 w-full h-full absolute top-0 group-hover:bg-[#00000089] hidden group-hover:flex hover:cursor-pointer"
        >
          <Button
            variant="contained"
            className="max-w-[196px] w-[95%] text-[10px] h-[50px] sm:h-[50px] md:h-[50px] text-[#FACB4D] md:text-[11px] font-bold bg-[#2E3A6A] hover:bg-[#2E3A6A] rounded-[4px]"
          >
            Play
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default GameCard;
