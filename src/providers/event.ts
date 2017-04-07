export class Event {
  constructor(
    public id: number,
    public title: string,
    public date: string,
    public start_time: string,
    public end_time: string,
    public lat: number,
    public lng: number,
    public venue_name: string,
    public hundred_word_description: string,
    public parent: boolean
  ){}
}