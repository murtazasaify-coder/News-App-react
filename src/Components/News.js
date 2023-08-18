import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles=[
    {
      "source": { "id": "il-sole-24-ore", "name": "Il Sole 24 Ore" },
      "author": null,
      "title": "Ultime notizie. Ucraina: bombe russe su Dnipropetrovsk, un morto e 7 feriti. Da guerra danni all'ambiente per 52 miliardi di euro",
      "description": "L'Ucraina sta lavorando per ottenere un invito al G20 che si terrà in India a settembre, afferma Kiev spiegando di voler essere al vertice per affrontare le sfide seguite alla cessazione da parte della Russia dell'accordo sul grano. Oggi e domani in Ghana ver…",
      "url": "https://www.ilsole24ore.com/art/ultime-notizie-ucraina-bombe-russe-dnipropetrovsk-morto-e-7-feriti-guerra-danni-ambiente-52-miliardi-euro-AFe5HDa",
      "urlToImage": "https://i2.res.24o.it/images2010/2023/08/AFe5HDa/images/a6aeebec-3cbe-11ee-a1c2-335ae281a5fd-fotohome0.jpg",
      "publishedAt": "2023-08-17T05:29:16Z",
      "content": "Il bilancio delle vittime in seguito agli incendi che hanno quasi distrutto una città dell'isola di Maui alle Hawaii è arrivato a 110 morti.\r\nL'Agenzia per l'emergenza di Maui difende la scelta di no… [+494 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Sonia Sarkar",
      "title": "Will a Uniform Civil Code end Indian ‘secularism’?",
      "description": "PM Modi says common laws will help women, but many fear the proposal is an election weapon to target minorities.",
      "url": "http://www.aljazeera.com/features/2023/8/17/will-a-uniform-civil-code-end-indian-secularism",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/story_33_final-1692240309.jpg?resize=1620%2C1080&quality=80",
      "publishedAt": "2023-08-17T05:06:21Z",
      "content": "Ten months before India votes for its next government, Prime Minister Narendra Modis ruling Bharatiya Janata Party (BJP) has reignited a long-simmering campaign to create a single law governing civil… [+16664 chars]"
    },
    {
      "source": { "id": "espn", "name": "ESPN" },
      "author": "Stephen Holder",
      "title": "Jonathan Taylor away from Colts for excused personal matter - ESPN",
      "description": "RB Jonathan Taylor left Indianapolis training camp again Wednesday after a personal matter arose, according to the Colts, who noted that his absence is excused.",
      "url": "https://www.espn.com/nfl/story/_/id/38205073/jonathan-taylor-away-colts-excused-personal-matter",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0816%2Fr1211512_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-16T22:20:00Z",
      "content": "WESTFIELD, Ind. -- Jonathan Taylor has departed Indianapolis Colts training camp once again.\r\nThe team, in a statement Wednesday, said Taylor has left camp to attend to a personal matter with permiss… [+1166 chars]"
    },
    {
      "source": { "id": "la-repubblica", "name": "La Repubblica" },
      "author": "La Repubblica",
      "title": "Guerra Ucraina - Russia, le news di oggi: diplomazia di Kiev al lavoro per partecipare a G20 India",
      "description": "Le news in diretta dalla guerra tra Ucraina e Russia",
      "url": "https://www.repubblica.it/esteri/2023/08/17/diretta/guerra_ucraina_russia_news_oggi-411347309/",
      "urlToImage": "https://www.repstatic.it/video/photo/2023/08/16/909651/909651-thumb-full-720-1608_kiev.jpg",
      "publishedAt": "2023-08-16T22:01:00Z",
      "content": "Il ministero degli Esteri dell'Ucraina è al lavoro per partecipare al vertice del G20 in programma per il mese prossimo in India. Lo ha fatto sapere il viceministro Mykola Tochytskyi citato dalla tes… [+704 chars]"
    }
   ]


  constructor(){
    super();
    this.state={
      articles:this.articles,
      loading:false

    }
  }


  render() {
    return (
      <div>
        <div className="container my-5">
            <h2>News-Monkey Top Headlines</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                  <NewsItem title="News Item" description="desc" url="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0816%2Fr1211512_1296x729_16%2D9.jpg" newsId="todo"/>
                </div>
                <div className="col-md-4">
                  <NewsItem title="News Item" description="desc"/>
                </div>
                <div className="col-md-4">
                  <NewsItem title="News Item" description="desc"/>
                </div>
             </div>
        </div>
      </div>
    )
  }
}

export default News
