import { Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { ModalController } from '@ionic/angular';
import { MoviePage } from '../movie/movie.page';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  images = [];
  action = [];
  tendances = [];

  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage,
    public modalController: ModalController,
    public navCtrl: NavController,
    public platform: Platform
  ) {
    this.getImagesDatabase();
   }

getImagesDatabase() {
  // Id de 0 à 9
  this.afDB.list('Images/', ref => ref.orderByChild("id").startAt(0).endAt(9)).snapshotChanges(['child_added'])
  .subscribe(action => {
    action.forEach(image => {
      this.getImagesStorage(image);
    })
  });
  // Id de 10 à 19
    this.afDB.list('Images/', ref => ref.orderByChild("id").startAt(10).endAt(19)).snapshotChanges(['child_added'])
    .subscribe(tendances => {
      tendances.forEach(image => {
        this.getImagesStorage(image);
      })
    });
}


getImagesStorage(image: any) {
  const imgRef = image.payload.exportVal().ref
  this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    //console.log(imgUrl);
    this.images.push({
      id: image.payload.exportVal().id,
      name: image.payload.exportVal().name,
      url: imgUrl
    });
  });
}
  filterImages (searchTerm) {
    return this.images.filter (image => {
      return image.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  // You
  async openMovie0() {
    const modal0 = await this.modalController.create({
      component: MoviePage,
      componentProps : {
        'name0' : 'You',
        'recommandation0' : '90%',
        'year0' : '2019',
        'age0' : '16+',
        'nbsaison0' : '2 saisons',
        'description0' : 'Une première rencontre se transforme rapidement en cauchemar quand Joe, un libraire, développe une obsession malsaine pour Beck, une charmante étudiante.',
        'distribution0' : 'Penn Badgley, Elizabeth Lail, Victoria Pedretti',
        'createur0' : 'Greg Berlanti, Sera Gamble',
        'ep1_0' : '1. Pilote',
        'tpsep1_0' : '48m',
        'resep1_0' : 'Une première rencontre se transforme rapidement en cauchemar quand Joe, un libraire, développe une obsession malsaine pour Beck, une charmante étudiante.',
        'ep2_0' : '2. Le dernier chic Type de New York',
        'tpsep2_0' : '45m',
        'resep2_0' : 'Après avoir fait l\'objet d\'avances indésirables, Beck se rend à la grande soirée de Peach en compagnie de Joe, qui tente de régler ses affaires avec Benji.',
        'ref0' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fyou.jpg?alt=media&token=5a7d7ace-c9f4-40b9-adcf-b16852f6c6e8',
        'imgep1_0' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fyou-ep1.jpg?alt=media&token=a0fde4fc-1602-41d9-8ced-a9f481685b7d',
        'imgep2_0' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fyou-ep2.jpg?alt=media&token=86266712-f849-40cd-88b7-d5ad0eb9fdb2',
        'you' : 'movie-you'
      }
    });
    
    return await modal0.present();
  }

  // Altered Carbon
  async openMovie1() {
    const modal1 = await this.modalController.create({
      component: MoviePage,
      componentProps : {
        'name1' : 'Altered Carbon',
        'recommandation1' : '97%',
        'year1' : '2018',
        'age1' : '16+',
        'nbsaison1' : '1 saison',
        'description1' : 'Sur la touche pendant 250 ans, il revient dans un nouveau corps pour enquêter sur un meurtre ahurissant. S\'il résout l\'affaire, il retrouvera la liberté.',
        'distribution1' : 'Joel Kinnaman, James Purefoy, Martha Higareda',
        'createur1' : 'Laeta Kalogridis',
        'ep1_1' : '1. La griffe du passé',
        'tpsep1_1' : '59m',
        'resep1_1' : 'Se réveillant dans un nouveau corps 250 ans après sa mort, Takeshi Kovacs découvre qu\'on l\'a ressuscité pour aider un magnat de l\'industrie à résoudre son propre meurtre.',
        'ep2_1' : '2. Crime passionnel',
        'tpsep2_1' : '57m',
        'resep2_1' : 'Alors que Kovacs est sur les traces de l\'homme qui a envoyé à Bancroft des menaces de mort, le lieutenant Ortega contourne les règles pour le surveiller.',
        'ref1' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Faltered-carbon.jpg?alt=media&token=fc2e5dce-be86-44ff-accb-eb9e47cf7ab8',
        'imgep1_1' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fac-ep1.jpg?alt=media&token=7885664c-84e5-4356-9764-5708daf2786c',
        'imgep2_1' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Facep2.jpg?alt=media&token=6c676bea-95da-4f0f-b08a-1ee0d78a6167',
        'alteredcarbon' : 'movie-alteredcarbon'
      }
    });
        return await modal1.present();
  }

  // 13 Reasons Why
  async openMovie2() {
    const modal2 = await this.modalController.create({
      component: MoviePage,
      componentProps : {
        'name2' : '13 Reasons Why',
        'recommandation2' : '96%',
        'year2' : '2019',
        'age2' : '16+',
        'nbsaison2' : '3 saisons',
        'description2' : 'Secrets, mensonges ou vengeance... Tout le petit monde de Liberty High a quelque chose à cacher. Mais la vérité finira par éclater au grand jour.',
        'distribution2' : 'Dylan Minnette, Katherine Langford, Alisha Boe',
        'createur2' : 'Brian Yorkey',
        'ep1_2' : '1. Cassette 1, face A',
        'tpsep1_2' : '54m',
        'resep1_2' : 'Tandis que le lycée est endeuillé par la disparition d\'Hannah Baker, son ami Clay reçoit des cassettes enregistrées par la jeune femme avant qu\'elle ne se suicide.',
        'ep2_2' : '2. Cassette 1, face B',
        'tpsep2_2' : '51m',
        'resep2_2' : 'Hannah sympathise avec Jessica et Alex, deux nouveaux comme elle. Justin ne se présente pas en classe, et la mère d\'Hannah fait une troublante découverte.',
        'ref2' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2F13-reasons-why.jpg?alt=media&token=11116385-2f5f-4c2f-9729-e34d8bba085a',
        'imgep1_2' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2F13reasonswhyep1.jpg?alt=media&token=1e9af74c-a719-4f85-bd1d-03ae6eec47dd',
        'imgep2_2' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Facep2.jpg?alt=media&token=6c676bea-95da-4f0f-b08a-1ee0d78a6167',
        'reasonswhy' : 'movie-reasonswhy'
      }
    });
        return await modal2.present();
  }

  // The Witcher
  async openMovie3() {
    const modal3 = await this.modalController.create({
      component: MoviePage,
      componentProps : {
        'name3' : 'The Witcher',
        'recommandation3' : '99%',
        'year3' : '2019',
        'age3' : '16+',
        'nbsaison3' : '1 saison',
        'description3' : 'Une population hostile et un mage rusé accueillent Geralt dans la ville de Blaviken. Ciri voit son royaume en proie à la panique lorsque Nilfgaard s\'en prend à Cintra.',
        'distribution3' : 'Henry Cavill, Anya Chalotra, Freya Allan',
        'createur3' : 'Laurence Schmidt Hissrich',
        'ep1_3' : '1. Le début de la fin',
        'tpsep1_3' : '1h1m',
        'resep1_3' : 'Une population hostile et un mage rusé accueillent Geralt dans la ville de Blaviken. Ciri voit son royaume en proie à la panique lorsque Nilfgaard s\'en prend à Cintra.',
        'ep2_3' : '2. Quatre marks',
        'tpsep2_3' : '1h',
        'resep2_3' : 'Malmenée et humiliée, Yennefer trouve par hasard le moyen de s\'en sortir. L\'enfer attend Geralt alors qu\'il chasse un diable. Ciri trouve refuge dans un groupe.',
        'ref3' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fthewitcher.jpg?alt=media&token=febc6b76-0545-46a8-a585-e6318366424a',
        'imgep1_3' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fthewitcherep1.jpg?alt=media&token=7f872734-4f1b-4cc7-b9fc-e176a48b11ea',
        'imgep2_3' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fthewitcherep2.jpg?alt=media&token=b6858bd7-4797-484e-b8ca-b185506e2012',
        'thewitcher' : 'movie-thewitcher'
      }
    });
        return await modal3.present();
  }

  // The Punisher
    async openMovie4() {
      const modal4 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name4' : 'The Punisher',
          'recommandation4' : '89%',
          'year4' : '2019',
          'age4' : '16+',
          'nbsaison4' : '2 saisons',
          'description4' : 'Un ancien Marine déterminé à punir les criminels qui ont assassiné sa femme et ses enfants se retrouve plongé au cœur d\'un complot militaire.',
          'distribution4' : 'Jon Bernthal, Ben Barnes, Amber Rose Revah',
          'createur4' : 'Steve Lightfoot',
          'ep1_4' : '1. 3 heures du matin',
          'tpsep1_4' : '51m',
          'resep1_4' : 'L\'ancien marine Frank Castle édicte ses propres lois et se fait justice lui-même tout en s\'efforçant d\'accepter les traumatismes du passé.',
          'ep2_4' : '2. Deux hommes morts',
          'tpsep2_4' : '57m',
          'resep2_4' : 'Un mystérieux appel force la main de Frank. Dinah Madani cherche des suspects. Curtis fait passer un message.',
          'ref4' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fthe-punisher.jpg?alt=media&token=6496ae77-b569-4f56-89e8-8d184ff65428',
          'imgep1_4' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fthepunisherep1.jpg?alt=media&token=4a9e14f6-5618-483e-8866-5b0abd7009a8',
          'imgep2_4' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fthepunisherep2.jpg?alt=media&token=d6c29630-b0cc-4f8f-bb77-6984c940c839',
          'thepunisher' : 'movie-thepunisher'
        }
      });
          return await modal4.present();
    }

    // Stanger Things
    async openMovie5() {
      const modal5 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name5' : 'Stranger Things',
          'recommandation5' : '75%',
          'year5' : '2019',
          'age5' : '16+',
          'nbsaison5' : '3 saisons',
          'description5' : 'Tandis qu\'il rentre chez lui, le jeune Will est témoin d\'une scène terrifiante. Non loin de là, un sinistre secret hante les sous-sols d\'un laboratoire du gouvernement.',
          'distribution5' : 'Winoma Ryder, David Harbour, Finn Wolfhard',
          'createur5' : 'Les frères Duffer',
          'ep1_5' : '1. La disparition de Will Byers',
          'tpsep1_5' : '48m',
          'resep1_5' : 'Tandis qu\'il rentre chez lui, le jeune Will est témoin d\'une scène terrifiante. Non loin de là, un sinistre secret hante les sous-sols d\'un laboratoire du gouvernement.',
          'ep2_5' : '2. Le barjot de Maple Street',
          'tpsep2_5' : '55m',
          'resep2_5' : 'Lucas, Mike et Dustin tentent de communiquer avec la fille qu\'ils ont découverte dans les bois. Hopper interroge Joyce à propos d\'un étrange appel téléphonique.',
          'ref5' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fstrangerthings.jpg?alt=media&token=847b2cb4-5c00-4468-ab48-44da621cbf82',
          'imgep1_5' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fstep1.jpg?alt=media&token=e51fe111-10f4-4e68-b4bb-d7e9f0c4d6ba',
          'imgep2_5' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fstep2.jpg?alt=media&token=345c3e54-a0c9-4e89-b73c-9b4c40800007',
          'strangerthings' : 'movie-strangerthings'
        }
      });
          return await modal5.present();
    }

    // Narcos
    async openMovie6() {
      const modal6 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name6' : 'Narcos',
          'recommandation6' : '95%',
          'year6' : '2017',
          'age6' : '16+',
          'nbsaison6' : '3 saisons',
          'description6' : 'Cette série de gangsters inspirée de l\'histoire du célèbre narcotrafiquant de Medellín raconte la guerre sanglante des cartels en Colombie.',
          'distribution6' : 'Wagner Moura, Pedro Pascal, Boyd Holdbrook',
          'createur6' : 'Chris Brancato, Carlo Bernard, Doug Miro',
          'ep1_6' : '1. Descenco',
          'tpsep1_6' : '57m',
          'resep1_6' : 'Un fabricant de coke chilien propose sa came au contrebandier colombien Pablo Escobar. Steve Murphy, agent de la DEA, rejoint la brigade antidrogue de Bogotá.',
          'ep2_6' : '2. L\'épée de Simón Bolívar',
          'tpsep2_6' : '46min',
          'resep2_6' : 'Le groupe communiste radical M-19 s\'attaque aux narcos, tandis que Javier Peña, nouveau partenaire de Murphy, lui explique le fonctionnement de la police colombienne.',
          'ref6' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fnarcos.jpg?alt=media&token=719399dc-cf88-4c33-a583-fa5a19d5f189',
          'imgep1_6' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fnarcosep1.jpg?alt=media&token=0406173c-883d-4b72-898e-d6516d8ec7ff',
          'imgep2_6' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fnarcosep2.jpg?alt=media&token=bec2d4a7-f4bf-4692-b1cc-d4da654f5726',
          'narcos' : 'narcos'
        }
      });
          return await modal6.present();
    }

    // Messiah
    async openMovie7() {
      const modal = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name7' : 'Messiah',
          'recommandation7' : '95%',
          'year7' : '2020',
          'age7' : '16+',
          'nbsaison7' : '1 saison',
          'description7' : 'Bouleversée, Eva interroge Al-Masih, dont l\'incroyable aura sème le trouble dans l\'esprit de la jeune femme. L\'ouverture d\'un procès devient un véritable enjeu polétique.',
          'distribution7' : 'Michelle Monaghan, Mehdi Dehbi, John Ortiz',
          'createur7' : 'Michael Petroni',
          'ep1_7' : '1. Celui qui a des oreilles',
          'tpsep1_7' : '48m',
          'resep1_7' : 'Convaincue qu\'il a miraculeusement délivré les ruines de Damas, une foule suit un homme, qu\'elle appelle Al-Masih, dans le désert, éveillant les soupçons de la CIA.',
          'ep2_7' : '2. Révolte',
          'tpsep2_7' : '42m',
          'resep2_7' : 'La tension monte en Israël, tandis que la CIA cherche des réponses. Des images d\'Al-Masih font sensation sur Internet. Au texas, un pasteur désespéré échafaude un plan.',
          'ref7' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fmessiah.jpg?alt=media&token=4387e72a-8638-47e0-89ec-246cd51fb05e',
          'imgep1_7' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fmessiahep1.jpg?alt=media&token=f34bde09-b9be-42ec-8312-ac3b598bc430',
          'imgep2_7' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fmessiahep2.jpg?alt=media&token=4e27203c-81ca-435c-8f92-41b113c2693d',
          'messiah': 'messiah'
        }
      });
      
  
      return await modal.present();
    }

    // Lucifer
    async openMovie8() {
      const modal8 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name8' : 'Lucifer',
          'recommandation8' :'97%',
          'year8' : '2019',
          'age8' : '13+',
          'nbsaison8': '4 saisons',
          'description8' : 'Lassé d’être le Seigneur des Enfers, le diable s’installe à Los Angeles où il ouvre un nightclub et se lie avec une policière de la brigade criminelle.',
          'distribution8' : 'Tom Ellis,Lauren German,Kevin Alejandro',
          'createur8' : 'Tom Kapinos',
          'ep1_8' : '1. Au commencement...',
          'tpsep1_8' : '44m',
          'resep1_8' : 'Quand une de ses vieilles connaissances connaît une fin violente, le charmant Lucifer s\'engage à la venger et noue une alliance inattendue.',
          'ep2_8' : '2. Lucifer, à la niche',
          'tpsep2_8' : '43m',
          'resep2_8' : 'Son retour en enfer approche, mais Lucifer prend le temps d\'enquêter sur la mort d\'un jeune homme causée par un paparazzi trop zélé.',
          'ref8' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Flucifer.jpg?alt=media&token=ea955882-07d7-477f-a6f6-0d7d973dbf50',
          'imgep1_8' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fluciferep1.jpg?alt=media&token=a00f172b-2802-4096-9fcd-3f1250726b7a',
          'imgep2_8' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fluciferep2.jpg?alt=media&token=a88fa7c6-9b04-4136-8cd5-03cc0d802cbb',
          'lucifer' : 'lucifer'
        }
      });
          return await modal8.present();
    }

    // Locke and Key
    async openMovie9() {
      const modal9 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name9' : 'Locke & Key',
          'recommandation9' :'98%',
          'year9' : '2020',
          'age9' : '13+',
          'nbsaison9': '1 saison',
          'description9' : 'Après le meurtre de leur père, trois enfants emménagent avec leur mère dans une maison de famille où ils découvrent des clés magiques aux pouvoirs extraordinaires.',
          'distribution9' : 'Darby Stanchfield,Connor Jessup,Emilia Jones',
          'createur9' : 'Joe Hill',
          'ep1_9' : '1. Bienvenue à Matheson',
          'tpsep1_9' : '56m',
          'resep1_9' : 'Après voir emménagé à Key House, Bode fait une nouvelle connaissance... et une étrange découverte. Tyler et Kinsey tentent de trouver leur place dans leur nouveau lycée.',
          'ep2_9' : '2. Le piège',
          'tpsep2_9' : '50m',
          'resep2_9' : 'Tandis que Nina en apprend davantage sur le passé de Rendell, Kinsey vient en aide au gang Savini, Tyler a des fréquentations douteuses, et Bode trouve une nouvelle clé.',
          'ref9' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Flockeandkey.jpg?alt=media&token=0c12b3d4-4469-499d-bc60-8d1d0e498aba',
          'imgep1_9' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Flockeandkeyep1.jpg?alt=media&token=dec0dd43-0a6b-4a30-8b74-98ba9fb53668',
          'imgep2_9' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Flockeandkeyep2.jpg?alt=media&token=d274a4be-cdb2-4e8a-97d9-7a293b60fb1b',
          'lockandkey' : 'lockandkey' 
        }
      });
          return await modal9.present();
    }

    // Insatiable
    async openMovie10() {
      const modal10 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name10' : 'Insatiable',
          'recommandation10' : '96%',
          'year10' : '2019',
          'age10' : '16+',
          'nbsaison10' : '2 saisons',
          'description10' : 'Pour assouvir sa soif de vengeance, une ado brimée se lance dans les concours de beauté. L\'avocat déshonoré qui la coache réalise trop tard dans quoi il s\'est embarqué.',
          'distribution10' : 'Dallas Roberts, Debby Ryan, Alyssa Milano',
          'createur10' : 'Lauren Gussis',
          'ep1_10' : '1. Pilote',
          'tpsep1_10' : '42m',
          'resep1_10' : 'Longtemps moquée à cause de son poids, Patty est convoquée au tribunal lorsqu\'un SDF porte plainte contre elle. Bob, son avocat, voit en elle une chance de se racheter.',
          'ep2_10' : '2. Être mince c\'est magique',
          'tpsep2_10' : '40min',
          'resep2_10' : 'Après un incendie suspect dans un motel, Patty se demande si elle est fautive. Avec Nonnie à ses côtés, elle essaie de percer le mystère le jour de la rentrée.',
          'ref10' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Finsatiable.jpg?alt=media&token=f2a8ef3c-76f7-4686-ba14-1eb429ae9dbd',
          'imgep1_10' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Finsatiableep1.jpg?alt=media&token=d7f2ca6d-361a-413b-9a2d-7e8617d8a12d',
          'imgep2_10' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Finsatiableep2.jpg?alt=media&token=070eb2ef-1dd1-483b-b83c-0bd38ce160c0',
          'insatiable' : 'movie-insatiable'
        }
      });
          return await modal10.present();
    }

    // Elite
    async openMovie11() {
      const modal11 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name11' : 'Élite',
          'recommandation11' :'97%',
          'year11' : '2019',
          'age11' : '16+',
          'nbsaison11': '2 saisons',
          'description11' : 'Lorsque trois ados issus de la classe ouvrière accèdent à une école élitiste d\'Espagne, le fossé qui les sépare des élèves fortunés conduit à la pire des tragédies.',
          'distribution11' : 'Danna Paola,Itzan Escamilla,Miguel Bernardeau',
          'createur11' : 'Darío Madrona,Carlos Montero',
          'ep1_11' : '1. Bienvenue',
          'tpsep1_11' : '55m',
          'resep1_11' : 'Après l\'effondrement d\'un lycée, un constructeur tente de redorer son image en proposant de payer les études de trois jeunes victimes dans une prestigieuse école privée.',
          'ep2_11' : '2. Désir ',
          'tpsep2_11' : '49m',
          'resep2_11' : 'Marina et Samuel se rapprochent en travaillant ensemble sur un projet, Guzmán tente de séduire Nadia, et Christian reste sous le choc après une révélation.',
          'ref11' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Felite.jpg?alt=media&token=75aa74fc-7cc8-4e83-8bef-0dee96dda7e7',
          'imgep1_11' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Feliteep1.jpg?alt=media&token=8cf255bc-0f3d-4ab3-a827-2ff0d3f74fc8',
          'imgep2_11' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Feliteep2.jpg?alt=media&token=df620dc5-1dea-4aaf-9f08-c64bd2b46d08',
          'elite' : 'movie-elite'
        }
      });
          return await modal11.present();
    }

    // Dynastie
    async openMovie12() {
      const modal12 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name12' : 'Dynastie',
          'recommandation12' :'98%',
          'year12' : '2019',
          'age12' : '13+',
          'nbsaison12': '2 saisons',
          'description12' : 'Dans ce reboot actualisé du soap culte, les Carrington et les Colby se disputent le contrôle de leurs fortunes, mais aussi de leurs enfants !',
          'distribution12' : 'Elizabeth Gillies,Nathalie Kelley,Grant Show',
          'createur12' : ' Josh Schwartz, Stephanie Savage,Sallie Patrick',
          'ep1_12' : '1. Quelle élégance',
          'tpsep1_12' : '43m',
          'resep1_12' : 'Lorsque ses ambitions professionnelles au sein de l\'empire familial prennent un tour inattendu, Fallon, furieuse, s\'intéresse de près au plus grand rival de son père.',
          'ep2_12' : '2. Dire, enterrer et passer à autre chose ',
          'tpsep2_12' : '42m',
          'resep2_12' : 'Tous les regards se tournent vers les Carrington après l\'accident de Windbriar, forçant Blake à réunir la famille. Fallon aide Cristal à cacher sa liaison.',
          'ref12' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdynastie.jpg?alt=media&token=68ad9923-80ae-4af9-ac3b-605b1d0c6dc9',
          'imgep1_12' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdynastiep1.jpg?alt=media&token=f7c98975-88b4-4814-806c-3a1c50b3407c',
          'imgep2_12' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdynastiep2.jpg?alt=media&token=4206d20c-ed11-4871-8cdd-f1a190f4c85c',
          'dynastie' : 'movie-dynastie'
        }
      });
          return await modal12.present();
    }

    // Dracula
    async openMovie13() {
      const modal13 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name13' : 'Dracula',
          'recommandation13' :'80%',
          'year13' : '2020',
          'age13' : '16+',
          'nbsaison13': '1 saison',
          'description13' : 'Dans cette adaptation de la légende du comte Dracula, de nouvelles histoires étoffent les crimes sanglants du vampire... et mettent sa vulnérabilité en lumière.',
          'distribution13' : 'Claes Bang,Dolly Wells,John Heffernan',
          'createur13' : ' Steven Moffat,Mark Gatiss',
          'ep1_13' : '1. Les règles de la bête',
          'tpsep1_13' : '89m',
          'resep1_13' : 'Une nonne atypique aide un avocat tourmenté à recoller les morceaux du puzzle de son voyage d\'affaires tragique au château du comte Dracula.',
          'ep2_13' : '2. Vaisseau sanguin',
          'tpsep2_13' : '88m',
          'resep2_13' : 'Un bateau en partance pour l\'Angleterre subit un terrible sort orchestré par un sombre passager. Mais Dracula ne tarde pas à rencontrer un obstacle sur son chemin.',
          'ref13' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdracula.jpg?alt=media&token=dfbca461-c473-415b-8d8f-2936a49241d6',
          'imgep1_13' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdraculaep1.jpg?alt=media&token=c6e13c5d-d21b-4a64-ad15-09bd86f3427a',
          'imgep2_13' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdraculaep2.jpg?alt=media&token=8c8b8b4d-ab14-422c-84c0-7df70c4121cf',
          'dracula' : 'movie-dracula'
        }
      });
          return await modal13.present();
    }

    // Daybreak
    async openMovie14() {
      const modal14 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name14' : 'Daybreak',
          'recommandation14' :'69%',
          'year14' : '2019',
          'age14' : '16+',
          'nbsaison14': '1 saison',
          'description14' : 'Menant une existence de rêve dans un Los Angeles post-apocalyptique, un lycéen cherche la fille de ses rêves tout en déjouant des Goules abruties et des gangs sans pitié.',
          'distribution14' : 'Colin Ford;Alyvia Alyn Lind,Sophie Simnett',
          'createur14' : 'Brad Peyton,Aron Eli Coleite',
          'ep1_14' : '1. Josh face à l\'Apocalypse ',
          'tpsep1_14' : '45m',
          'resep1_14' : 'Certes, Los Angeles est devenue une décharge post-apocalyptique, mais ça pourrait être pire ! Pour cet élève très moyen, la vie est plutôt plus belle qu\'avant.',
          'ep2_14' : '2. Foutage de gueule',
          'tpsep2_14' : '48m',
          'resep2_14' : 'Après avoir trouvé refuge dans un centre commercial, Josh, Angelica et Wesley affrontent le "propriétaire" des lieux et tombent sur une sorcière qu\'ils connaissent bien.',
          'ref14' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdaybreak.jpg?alt=media&token=dd035094-f54e-4f04-8f5d-170f3547db3f',
          'imgep1_14' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdaybreakep1.jpg?alt=media&token=d289b549-f31e-4501-8075-11cd09990393',
          'imgep2_14' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdaybreakep2.jpg?alt=media&token=fcfd0835-2c60-4d47-ba6a-906d3fbfe92f',
          'daybreak' : 'movie-daybreak'
        }
      });
          return await modal14.present();
    }

    // Dark
    async openMovie15() {
      const modal15 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name15' : 'Dark',
          'recommandation15' :'89%',
          'year15' : '2019',
          'age15' : '16+',
          'nbsaison15': '2 saisons',
          'description15' : 'Quatre familles affolées par la disparition d\'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.',
          'distribution15' : 'Louis Hofmann, Oliver Masucci, Jördis Triebel',
          'createur15' : 'Baran bo Odar, Jantje Friese',
          'ep1_15' : '1. Secrets',
          'tpsep1_15' : '51m',
          'resep1_15' : 'En 2019, la disparition d\'un garçon fait naître la peur parmi les habitants de Winden, une petite ville allemande à l\'histoire étrange et tragique.',
          'ep2_15' : '2. Mensonges ',
          'tpsep2_15' : '44m',
          'resep2_15' : 'Suite à une découverte sinistre qui laisse la police dans l\'incompréhension, Ulrich demande un mandat pour fouiller la centrale. Un inconnu arrive à l\'hôtel.',
          'ref15' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdark.jpg?alt=media&token=32fa9f8a-60e3-4397-8596-8ad82c9ac3ba',
          'imgep1_15' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdarkep1.jpg?alt=media&token=0c9ee0c9-bb52-4a9a-b484-8e79bda8139b',
          'imgep2_15' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fdarkep2.jpg?alt=media&token=8efadecb-28f7-4d4a-83e9-d313b5e774fc',
          'dark' : 'movie-dark'
        }
      });
          return await modal15.present();
    }

    // Breaking bad
    async openMovie16() {
      const modal16 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name16' : 'Breaking Bad',
          'recommandation16' :'93%',
          'year16' : '2013',
          'age16' : '16+',
          'nbsaison16': '5 saisons',
          'description16' : 'Un professeur de chimie atteint d\'un cancer s\'associe à un ancien élève pour fabriquer et vendre de la méthamphétamine afin d\'assurer l\'avenir financier de sa famille.',
          'distribution16' : 'Bryan Cranston,Aaron Paul,Anna Gunn',
          'createur16' : 'Vince Gilligan',
          'ep1_16' : '1. Chute libre ',
          'tpsep1_16' : '58m',
          'resep1_16' : 'Atteint d\'un cancer en phase terminale, un prof de chimie se lance dans la fabrication et la vente de méthamphétamines pour assurer l\'avenir financier de sa famille.',
          'ep2_16' : '2. Le Choix ',
          'tpsep2_16' : '48m',
          'resep2_16' : 'Alors qu\'ils viennent de rater un deal, Walt et Jesse doivent se débarrasser de deux corps, tandis que Skyler soupçonne son mari de mijoter quelque chose.',
          'ref16' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fbreakingbad.jpg?alt=media&token=5388ca52-4608-44f9-a26b-50ec100fe33c',
          'imgep1_16' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fbreakingbadep1.jpg?alt=media&token=6c8e49c1-aec5-4c60-8065-ea3d8ad007ba',
          'imgep2_16' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fbreakingbadep2.jpg?alt=media&token=32bf02a8-ca01-46c3-8d0f-bce32154ce80',
          'breakingbad' : 'movie-breakingbad'
        }
      });
          return await modal16.present();
    }


    // Black Lightning
    async openMovie17() {
      const modal17 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name17' : 'Black Lightning',
          'recommandation17' :'57%',
          'year17' : '2019',
          'age17' : '13+',
          'nbsaison17': '2 saisons',
          'description17' : 'Jefferson Pierce, proviseur de lycée et super-héros à la retraite, redevient le légendaire Black Lightning pour combattre ceux qui menacent sa famille.',
          'distribution17' : 'Cress Williams,James Remar,Marvin \'Krondon\' Jones III',
          'createur17' : 'Mara Brock Akil,Salim Akil',
          'ep1_17' : '1. La résurrection ',
          'tpsep1_17' : '43m',
          'resep1_17' : 'Quand ses filles sont menacées par un gang, le proviseur du lycée de Garfield, Jefferson Pierce, est contraint d\'utiliser les super-pouvoirs auxquels il avait renoncé.',
          'ep2_17' : '2. LaWanda : Le Livre de l\'espérance ',
          'tpsep2_17' : '43m',
          'resep2_17' : 'La querelle de Jefferson et Lala s\'envenime quand une ancienne étudiante a besoin d\'aide pour sauver sa fille du gang. Anissa se demande d\'où lui vient sa nouvelle force.',
          'ref17' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fblacklightning.jpg?alt=media&token=eacac2f8-cb01-49c7-871a-9e93d9223d20',
          'imgep1_17' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fblacklightningep1.jpg?alt=media&token=77fc5635-0b34-43ca-9a48-d03e33751b1e',
          'imgep2_17' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fblep2.jpg?alt=media&token=6dbf92c3-e14e-4806-be64-cc7c4f4225aa',
          'blacklightning' : 'movie-blacklightning'
        }
      });
          return await modal17.present();
    }

    // Better Call Saul
    async openMovie18() {
      const modal18 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name18' : 'Better Call Saul',
          'recommandation18' :'73 %',
          'year18' : '2018',
          'age18' : '16+',
          'nbsaison11': '4 Saisons',
          'description18' : 'Ce spin-off de "Breaking Bad" nommé aux Emmys suit la vie de Jimmy McGill avant qu\'il ne prenne le pseudonyme de Saul Goodman et devienne l\'avocat véreux de Walter White.',
          'distribution18' : 'Bob Odenkirk,Jonathan Banks,Rhea Seehorn',
          'createur18' : 'Vince Gilligan,Peter Gould',
          'ep1_18' : '1. Uno',
          'tpsep1_18' : '53m',
          'resep1_18' : 'Jimmy McGill cherche à joindre les deux bouts et à faire oublier son passé, mais les mauvaises habitudes ont la vie dure, surtout quand se présente une occasion en or.',
          'ep2_18' : '2. Mijo',
          'tpsep2_18' : '46m',
          'resep2_18' : 'Lors d\'un violent affrontement avec de dangereux criminels, Jimmy risque la mort et va peut-être devoir la vie à son talent de persuasion.',
          'ref18' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fbcs.jpg?alt=media&token=ad9422fa-11a2-4bfb-8ce4-033d5bb02188',
          'imgep1_18' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fbcsep1.jpg?alt=media&token=b4a1a4cd-e14f-4a36-a525-833548a1971b',
          'imgep2_18' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Fbcsep2.jpg?alt=media&token=1ae11e5a-6de8-47d7-a75f-12343cfbae8d',
          'bcs' : 'movie-bcs'
        }
      });
          return await modal18.present();
    }
    // Arrow
    async openMovie19() {
      const modal19 = await this.modalController.create({
        component: MoviePage,
        componentProps : {
          'name19' : 'Arrow',
          'recommandation19' :'96%',
          'year19' : '2019',
          'age19' : '16+',
          'nbsaison19': '8 saisons',
          'description19' : 'Adaptée du comic book "Green Arrow", la série raconte le destin d\'un multimillionnaire insouciant devenu superhéros, déterminé à débarrasser la ville de ses criminels.',
          'distribution19' : 'Stephen Amell,Katie Cassidy,David Ramsey',
          'createur19' : 'Andrew Kreisberg,Greg Berlanti,Marc Guggenheim',
          'ep1_19' : '1. Le retour du naufragé',
          'tpsep1_19' : '40m',
          'resep1_19' : 'Disparu en mer cinq ans plus tôt, Oliver, alors jeune playboy riche et insouciant, revient profondément changé par son séjour sur une île lointaine du Pacifique.',
          'ep2_19' : '2. La promesse',
          'tpsep2_19' : '40m',
          'resep2_19' : 'La nouvelle cible d\'Oliver, Martin Somers, est aussi poursuivie en justice par Laurel. Mais le criminel fait appel aux Triades et Laurel se retrouve en danger.',
          'ref19' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Farrow.jpg?alt=media&token=e91a2490-ab59-44cf-961d-cc30e346cbff',
          'imgep1_19' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Farrowep1.jpg?alt=media&token=81bc8531-6ba1-49af-be92-b170bdad6ed7',
          'imgep2_19' : 'https://firebasestorage.googleapis.com/v0/b/duckflix-d1f80.appspot.com/o/Images%2Fmodal%2Farrowep2.jpg?alt=media&token=b7b09384-f9dd-41db-a6c6-0a08c5b3b45c',
          'arrow' : 'movie-arrow'
        }
      });
    return await modal19.present();
  }
}

