import React from 'react';
import EventListItem from './EventListItem';
import InfiniteScroll from 'react-infinite-scroller';
export default function EventList({ events, getNextEvent, loading, moreEvents }) {
    return(
        <>
            { events.length !== 0 && (
                <InfiniteScroll pageStart = { 0 } loadMore = { getNextEvent } hasMore = { !loading && moreEvents } initialLoad = { false }>
                    { events.map(event => (
                        <EventListItem event = { event } key = { event.id }/>
                    )) }
                </InfiniteScroll>
            )}
        </>
    )
}