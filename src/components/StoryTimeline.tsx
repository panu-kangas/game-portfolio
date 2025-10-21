import { motion } from 'framer-motion'

const storyEvents = [
  {
    title: "👶 The Story Begins",
    period: "2000–2003",
    text: "I played my very first video game around the age of 6 or 7, when my older brother showed me how computers worked. I was instantly hooked. \
He introduced me to StarCraft and Warcraft III (wildly inappropriate for my age, by the way), which quickly became my favourites. A few years later, I got a GameBoy and an Xbox — big upgrade! \
I spent countless hours with games like Pokémon, Zelda, Halo and Fable. \
Gaming has been a hobby and personal passion of mine ever since."
  },
  {
    title: "🎭 A Sudden Spark for Musical Theatre",
    period: "2009–2012",
    text: "It all started in high school when a friend dragged me to see a musical he was in — I had no idea I’d walk out obsessed. \
Afterwards I enrolled in a one-year musical theatre course and then decided to apply to a proper theatre school. \
I heard that Lahti had one program that was about to be shut down — this was the final year they’d hold entrance exams. \
I took a shot, got in, and spent four years studying singing, dancing, and acting."
  },
  {
    title: "🎬 Graduation and Acting Career",
    period: "2016–2022",
    text: "After graduating in 2016, I worked mostly at Lahti City Theatre, performing in musicals like The Full Monty (Housut Pois). \
I later landed roles in Turku (Viimeinen Laiva, 2017), Helsinki (Musta Saara, 2018), and Tampere (The Hunchback of Notre Dame, 2019). \
During this time I also started my voice acting career, narrating over 100 audiobooks and voicing characters like Shadow the Hedgehog (Sonic 3, 2024) and Varl (LEGO Horizon Adventures, 2024). \
Voice acting for animated series and games is another love of mine - something I still do nearly every week."
  },
  {
    title: "🤝 Co-founder of a Theatre Group",
    period: "2016–2022",
    text: "Around the time of my graduation, I also co-founded a theatre group called Musiikkiteatteri NYT with five fellow graduates. \
We aimed to create original musical theatre about contemporary topics and did everything ourselves — writing, composing, choreographing, and performing. \
I led the group for six years, producing five professional shows. On top of the creative work, my responsibilities included budgeting, communications, HR, marketing, and creative leadership — most of which I learned on the go! \
Today, Musiikkiteatteri NYT is well known across Finland and has performed in most of the country’s major theatres."
  },
  {
    title: "🔄 Time for a New Direction",
    period: "2021–2023",
    text: "After 10 years in musical theatre — and becoming a father in 2020 — I wanted more stable working hours and fewer weekends away from home. \
I began exploring new opportunities in 2021 and eventually discovered Hive Helsinki: a fast-paced, peer-driven coding school. \
I took part in the four-week entry exam (called \"Piscine\") in the summer of 2023, got selected, and started the program later that year. \
It was the perfect moment to pause my theatre journey and jump into this new exciting adventure."
  },
  {
    title: "💻 Busy Bee at Hive",
    period: "2023–2025",
    text: "At Hive, I fell in love with coding. The logical problem-solving was a refreshing contrast to my previous, more artistic work. \
I dove deep into C and C++ projects, learning the fundamentals of programming — from memory management and optimized algorithms to multithreading, virtual machines, and Docker. \
But game development excited me the most. I completed three game-related projects at Hive, and built my own games on the side to deepen my skills. \
A new dream was born: combining my enthusiasm for creative work and coding as a game developer."
  },
  {
    title: "🚀 Start of My Brand-New IT Career",
    period: "2025",
    text: "I graduated from Hive in the summer of 2025 and started a trainee role at Nokia right after, working with C++ and Python on embedded 5G software. \
The work is definitely rewarding, and I learn something new every day! In my free time, I've had all sorts of coding projects going... like this portfolio app for instance. \
I'm also soon about to release new games too, so stay tuned! 😍"
  }
]



const StoryTimeline = () => (
  <section className="max-w-4xl mx-auto py-16 px-6">
    <h2 className="text-5xl font-bold text-green-500 text-center mb-18">
      My Story
    </h2>

    <div className="space-y-12">
      {storyEvents.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="relative bg-gray-800 border border-emerald-500 rounded-xl p-6 shadow-lg"
        >
          <span className="absolute -top-4 left-6 bg-green-500 text-black px-3 py-1 rounded-full text-m font-bold">
            {e.title}
          </span>
          <p className="mt-4 text-sm text-gray-400 italic">{e.period}</p>
          <p className="mt-2 text-m text-gray-300 leading-relaxed">{e.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

export default StoryTimeline
