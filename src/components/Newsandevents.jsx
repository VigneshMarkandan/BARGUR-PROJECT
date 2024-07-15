import React, { useEffect, useRef } from 'react';
import '../assets/newsevents.css';

const eventsData = [
  {
    category: 'Upcoming Events',
    events: [
      { date: { month: 'Jun', day: '18', year: '2024' }, description: 'PGPBM Admission 2024 - 26', details: 'MBA Program (PGPBM) at Chennai' },
      { date: { month: 'Jul', day: '15', year: '2024' }, description: 'Orientation Program', details: 'Welcome Event for New Students' },
      { date: { month: 'Aug', day: '16', year: '2024' }, description: 'Guest Lecture', details: 'Lecture by Industry Expert' },
    ],
  },
  {
    category: 'Latest News',
    events: [
      { date: { month: 'Jul', day: '13', year: '2024' }, description: 'Inauguration of the MDP', details: 'EEC Office has conducted the...' },
      { date: { month: 'Aug', day: '14', year: '2024' }, description: 'Workshop on AI', details: 'Hands-on Workshop on AI' },
      { date: { month: 'Sep', day: '15', year: '2024' }, description: 'Research Symposium', details: 'Annual Research Symposium' },
    ],
  },
  {
    category: 'Achievements',
    events: [
      { date: { month: 'Jul', day: '12', year: '2024' }, description: 'Ranked 12th', details: 'Ranked 12th in business ...' },
      { date: { month: 'Aug', day: '13', year: '2024' }, description: 'Top 10 Business Schools', details: 'Ranked among the Top 10 Business Schools' },
      { date: { month: 'Sep', day: '14', year: '2024' }, description: 'Best Faculty Award', details: 'Awarded Best Faculty in Business Management' },
    ],
  },
];

const NewsAndEvents = () => {
  const scrollRefs = useRef([]);

  useEffect(() => {
    const scrollIntervals = scrollRefs.current.map((scrollRef) => {
      return setInterval(() => {
        if (scrollRef) {
          if (scrollRef.scrollTop + scrollRef.clientHeight >= scrollRef.scrollHeight) {
            scrollRef.scrollTop = 0;
          } else {
            scrollRef.scrollTop += 1; // Adjust this value for speed of scrolling
          }
        }
      }, 45); // Adjust this value for smoothness of scrolling
    });

    return () => {
      scrollIntervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className='newevents'>
      <section className='cards'>
        {eventsData.map((section, index) => (
          <main key={index} className={`category-${index}`}>
            <h2>{section.category}</h2>
            <div className='events-list' ref={el => scrollRefs.current[index] = el}>
              {section.events.map((event, idx) => (
                <div key={idx} className='event-item'>
                  <div className='calendar'>
                    <div className='month'>{event.date.month} {event.date.day}</div>
                    <div className='year'>{event.date.year}</div>
                  </div>
                  <div className='event-details'>
                    <p>{event.description}</p>
                    <div>{event.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ))}
      </section>
    </div>
  );
};

export default NewsAndEvents;
