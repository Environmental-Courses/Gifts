import { Card, CardContent } from "@/components/ui/card";
import coupleImage from "@/assets/couple-silhouette.jpg";
import coffeeImage from "@/assets/coffee-memory.jpg";
import distance from "@/assets/couplesimg1.jpeg";
import lateNightVideo from "@/assets/heart-vmake.mp4";
import text from "@/assets/text.png";

const memories = [
  {
    id: 1,
    image: coupleImage,
    title: "Our First Voice Call",
    date: "June 2024",
    description: "The moment I knew you were special. Your voice lit up my entire screen and my heart."
  },
  {
    id: 2,
    image: distance,
    title: "Miles Apart, Close at Heart",
    date: "Every Day",
    description: "Even though we're miles apart, I still feel close to you. It's strange how someone can be physically distant but still constantly on your mind. ."
  },
  {
    id: 3,
    image: text,
    title: "Late Night Conversations",
    date: "Too many to count",
    description: "Talking until the sun comes up, sharing dreams, fears, and everything in between."
  },
  {
    id: 4,
    image: coffeeImage,
    title: "Our Love",
    date: "Growing every day",
    description: "Every song tells our story. Each melody carries a piece of my heart to you."
  }
];

const MemoryGallery = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment with you is a treasure. Here are some of my favorite memories we've created together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {memories.map((memory, index) => (
            <Card 
              key={memory.id} 
              className="group hover:shadow-romantic transition-all duration-300 overflow-hidden border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
              {memory.id === 4 ? (
  <video
    src={lateNightVideo}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-64  object-cover  group-hover:scale-105 transition-transform duration-300"
  />
) : (
  <img 
    src={memory.image} 
    alt={memory.title}
    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
  />
)}
                <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{memory.title}</h3>
                  <span className="text-sm text-primary font-medium">{memory.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{memory.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;