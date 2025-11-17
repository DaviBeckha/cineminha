export class ReviewModel {
  constructor(
    public id: string = '',
    public contentId: string = '',
    public authorName: string = '',
    public authorAvatar: string = '',
    public rating: number = 1,
    public title: string = '',
    public comment: string = ''
  ) {}
}
