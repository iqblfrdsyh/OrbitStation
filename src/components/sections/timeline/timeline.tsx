"use client";

import { timelineData } from "@/data/timeline";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Timeline = () => {
    return (
        <section className="py-10 mt-48 px-5 sm:px-[60px]" id="timeline">
            <h2 className="text-center text-3xl font-bold mb-16">
                Timeline of the International Space Station
            </h2>
            <VerticalTimeline>
                {timelineData.map((event) => (
                    <VerticalTimelineElement
                        key={event.id}
                        date={event.date}
                        icon={<event.icon />}
                        iconStyle={{ background: "#fff", color: "#000" }}
                        contentStyle={{
                            background: "#fff",
                            color: "#000",
                            borderRadius: "8px",
                        }}

                        contentArrowStyle={{ borderRight: "7px solid  #f9f9f9" }}
                    >
                        <h3 className="vertical-timeline-element-title font-semibold">
                            {event.title}
                        </h3>
                        <p>{event.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Timeline;
