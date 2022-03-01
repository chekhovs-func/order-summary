import '../styles/card.scss';
import { ReactComponent as Hero } from '../assets/illustration-hero.svg';
import { ReactComponent as Icon } from '../assets/icon-music.svg';

export default function Card() {
  return (
    <section className='c-card'>
      <Hero className='c-hero' />
      <article className='c-content-wrapper'>
        <h1 className='c-heading'>Order Summary</h1>
        <p className='c-body'>
          You can now listen to millions of songs, audiobooks, and podcasts on any device
          anywhere you like!
        </p>
        <article className='c-price-wrapper'>
          <Icon className='c-icon' />
          <aside className='c-price-text-container'>
            <h1 className='c-price-dark'>Annual Plan</h1>
            <h1 className='c-price-light'>$59.99/year</h1>
          </aside>
          <h1 className='c-price-edit'>Change</h1>
        </article>
        <button className='c-button'>Proceed to Payment</button>
        <h1 className='c-cancel'>Cancel Order</h1>
      </article>
    </section>
  );
}
