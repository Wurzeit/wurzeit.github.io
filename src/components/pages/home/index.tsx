import type { FC } from 'react'
import { Footer } from 'components/pages/home/footer'

export const HomePagePresenter: FC = () => {
  return (
    <>
      <p>Hi! I'm a student studying programming:)</p>
      <p>Bio</p>
      <p>2004 Born in Fukuoka(福岡), Japan.</p>
      <p>2019 Entered in Notional Institute of Technology, Kurume Collage.</p>
      <p>Love</p>
      <p>Walk, Drawing, Coffee, Training</p>
      <p>Interest</p>
      <p>Operating systems, Compilers, Machine learning</p>
      <p>Available programming languages</p>
      <p>Rust, Scala, Typescript</p>
      <p>On the web</p>
      <p>
        <a href="https://github.com/wurzeit">Github</a>
      </p>
      <Footer />
    </>
  )
}
