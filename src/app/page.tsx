
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';

export default async function Home() {

  const session = await auth()

  console.log(session?.user) 


  return (
    <main className="flex min-h-screen flex-col ">
      <Button>Heelo</Button>
      
    </main>
  )
}
