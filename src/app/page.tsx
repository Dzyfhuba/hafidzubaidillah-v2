import Skills from "@/components/home/skills"
import supabase from "@/lib/supabase"

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600

const Home = async () => {
  const skills = await supabase.from('skills').select('*')

  return (
    <>
      <Skills skills={skills.data} />
    </>
  )
}

export default Home