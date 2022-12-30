import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const EventItem = ({ event }) => (
  <View style={styles.eventItem}>
    <Text style={styles.eventName}>{event.name}</Text>
    <Text style={styles.eventDate}>{event.date}</Text>
    <Text style={styles.eventHost}>{event.host}</Text>
    <Text style={styles.eventLocation}>{event.location}</Text>

  </View>
);

function EventList({ events }) {
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <EventItem event={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.eventList}
    />
  );
}

const EventListScreen = () => {
  const [events, setEvents] = useState([
    { id: '1', name: 'Party 1', date: 'Jan 1, 2021' },
    { id: '2', name: 'Party 2', date: 'Jan 15, 2021' },
    { id: '3', name: 'Party 3', date: 'Feb 1, 2021' },
    { id: '4', name: 'Party 4', date: 'Feb 15, 2021' },
  ]);

  return (
    <View style={styles.container}>
      <EventList events={events} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  eventList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventItem: {
    padding: 160,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#f8d26b',
    borderRadius: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  eventDate: {
    fontSize: 14,
    color: '#000000',
  },
});

export default EventListScreen;
