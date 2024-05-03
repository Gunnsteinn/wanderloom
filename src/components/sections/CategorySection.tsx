import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Feature {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
  highlighted: boolean;
  height?: number; // New height prop
}

const CategoryCard: React.FC<Feature> = ({
  iconUrl,
  title,
  description,
  highlighted,
  height = 180, // Default height
}) => {
  return (
    <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        sx={{
          height: height,
          backgroundImage: `url(${iconUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        title="Icon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* {highlighted && (
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      )} */}
    </Card>
  );
};

const CategorySection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 0,
      iconUrl: "/images/pngwing.com.png",
      title: "Tailored Technological Solutions",
      description:
        "We provide customizable technology solutions to optimize your operations and elevate your business performance.",
      highlighted: true,
      height: 250,
    },
    {
      id: 1,
      iconUrl: "/images/travelling-van.png",
      title: "Seamless Supplier Integration",
      description:
        "Effortlessly integrate with your network of suppliers to streamline inventory management and ensure timely updates.",
      highlighted: true,
      height: 250,
    },
    {
      id: 2,
      iconUrl: "/images/travel-transp.png",
      title: "Strategic SEO Positioning",
      description:
        "Boost your online visibility and attract more customers with our strategic SEO solutions tailored for the travel industry.",
      highlighted: true,
      height: 250,
    },
  ];

  return (
    <section>
      <p className="text-title font-bold text-[2.5rem] text-center mb-12">
        We Offer Best Services
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
        {features.map((feature) => (
          <CategoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            highlighted={feature.highlighted}
            height={feature.height} // Pass height prop
            id={0}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
