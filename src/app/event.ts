export class Event {
  constructor(
    public date: string,
    public start_time: string,
    public end_time: string,
    public lat: number,
    public lng: number,
    public venue_name: string,
    public hundred_word_description: string
  ){}
}