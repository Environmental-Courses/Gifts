import { Card, CardContent } from "@/components/ui/card";

const letters = [
  {
    id: 1,
    title: "Why I Love Your Voice",
    date: "Today",
    content: "There's something magical about the way your voice sounds when i first heard it . It's soft, a little raspy, and completely adorable. It makes my heart skip a beat every single time, even through a phone screen thousands of miles away, makes me lose all my words too :)."
  },
  {
    id: 2,
    title: "Your Personality",
    date: "Yesterday",
    content: "Your personality is like a warm hug on a cold day. You light up my world with your laughter, your kindness, and your unwavering support. I love how you can make me smile even when I'm feeling down."
  },
  {
    id: 3,
    title: "Our Future Together",
    date: "Always",
    content: "I dream about the day when we won't have to say goodnight through a screen. When I can hold your hand, kiss your forehead, and wake up next to you every morning. Until then, know that you're always in my thoughts and forever in my heart."
  }
];

const LoveLetters = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Letters to My Heart
          </h2>
          <p className="text-xl text-muted-foreground">
            Words can't fully capture how much you mean to me, but I'll keep trying.
          </p>
        </div>
        
        <div className="space-y-8">
          {letters.map((letter, index) => (
            <Card 
              key={letter.id}
              className="bg-card/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-romantic transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">{letter.title}</h3>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {letter.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {letter.content}
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="text-primary font-medium">With all my love 💕</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetters;