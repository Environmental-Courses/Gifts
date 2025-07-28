import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    id: 1,
    date: "March 2025",
    title: "We First Met",
    description: "The day our paths crossed and my life changed forever. Who knew a simple hello would lead to this beautiful journey?",
    icon: "💫"
  },
  {
    id: 2,
    date: "April 2025",
    title: "We saw eachothers facesl",
    description: "Seeing your face for the first time made my heart flutter. It was even more beautiful than i imagined.",
    icon: "📱"
  },
  {
    id: 3,
    date: "May 2025",
    title: "Said 'I Love You and more'",
    description: "Three little words that changed everything. The moment we both knew this was something special.",
    icon: "💖"
  },
  {
    id: 4,
    date: "June 2025",
    title: "Making Plans",
    description: "I kinda closed the tickets  for us to meet in person.",
    icon: "✈️"
  },
  {
    id: 5,
    date: "Today",
    title: "Still Going Strong",
    description: "Every day with you is a new adventure. Distance is just a number when im with you .",
    icon: "💕"
  }
];

const Timeline = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Love Story Timeline
          </h2>
          <p className="text-xl text-muted-foreground">
            Every relationship has its milestones. Here are ours.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-romantic"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow animate-glow"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-romantic transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{event.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                          <span className="text-sm text-primary font-medium">{event.date}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;