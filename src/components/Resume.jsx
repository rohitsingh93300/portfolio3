import React from 'react'
import Navbar from './Navbar'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { timelineElements } from './Data';

import { timeline } from './Data';



const Resume = () => {
 
  return (
    <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
      <Navbar />
      <div>
        <h1 className='text-white font-bold text-3xl mb-2'>Resume</h1>
        <hr className='border-2 text-yellow-500 w-10 mb-10' />
        <VerticalTimeline >
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid  rgb(33, 150, 243)' }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
    </div>
  )
}

export default Resume
