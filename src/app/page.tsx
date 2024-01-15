
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation'
import { authConfig } from './api/auth/[...nextauth]/route';

export default async function Home() {

  const session = await getServerSession(authConfig);


  

  return (
    <main className="flex min-h-screen flex-col ">
      <Button>Heelo</Button>
      
    </main>
  )
}
