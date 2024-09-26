import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Users } from "lucide-react";

interface Speaker {
  name: string;
  role?: string;
}

interface Track {
  track: string;
  location?: string;
  time?: string;
}

interface Event {
  time: string;
  event: string;
  location?: string;
  speaker?: string;
  chair?: string;
  title?: string;
  coChair?: string;
  details?: string[];
  tracks?: Track[];
  topic?: string;
}

interface Day {
  day: string;
  date: string;
  events: Event[];
}

interface ConferenceSchedule {
  conference: string;
  location?: string;
  schedule: Day[];
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h4 className="text-lg font-bold text-green">{event.event}</h4>
        <Badge variant="secondary">{event.time}</Badge>
      </CardHeader>
      <CardContent>
        {event.location && (
          <p className="flex items-center text-xl text-muted-foreground mb-2">
            <MapPin className="text-3xl mr-2 h-4 w-4" /> {event.location}
          </p>
        )}
        {event.topic && (
          <p className="text-xl font-medium mb-2">Topic: {event.topic}</p>
        )}
        {event.speaker && (
          <p className="flex items-center text-sm mb-1">
            <User className="mr-2 h-4 w-4" /> Speaker: {event.speaker}
          </p>
        )}
        {event.chair && (
          <p className="flex items-center text-sm mb-1">
            <Users className="mr-2 h-4 w-4" /> Chair: {event.chair}
          </p>
        )}
        {event.coChair && (
          <p className="flex items-center text-sm mb-1">
            <Users className="mr-2 h-4 w-4" /> Co-Chair: {event.coChair}
          </p>
        )}
        {event.details && (
          <div className="mt-2">
            <h5 className="font-semibold mb-1">Details:</h5>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {event.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
        {event.tracks && (
          <div className="mt-2">
            <h5 className="font-semibold mb-1">Tracks:</h5>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {event.tracks.map((track, index) => (
                <li key={index}>
                  {track.track} - {track.location}
                  {track.time && ` (${track.time})`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ConferenceSchedule: React.FC<{ schedule: ConferenceSchedule }> = ({
  schedule,
}) => {
  const [activeDay, setActiveDay] = useState(schedule.schedule[0].day);

  return (
    <div className="bg-background p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-ochre mb-6">
        {schedule.conference}
      </h2>
      {schedule.location && (
        <p className="text-center text-muted-foreground mb-6">
          {schedule.location}
        </p>
      )}
      <Tabs defaultValue={activeDay} onValueChange={setActiveDay}>
        <TabsList className="grid w-full grid-cols-2">
          {schedule.schedule.map((day) => (
            <TabsTrigger key={day.day} value={day.day} className="text-green">
              {day.day}
            </TabsTrigger>
          ))}
        </TabsList>
        {schedule.schedule.map((day) => (
          <TabsContent key={day.day} value={day.day}>
            <h3 className="text-3xl font-semibold mb-4">{day.date}</h3>
            <div className="space-y-4 text-3xl">
              {day.events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ConferenceSchedule;
