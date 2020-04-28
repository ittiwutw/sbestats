import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
declare var google;
@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.page.html',
  styleUrls: ['./estate-detail.page.scss'],
})
export class EstateDetailPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;

  slideProdOpts = {
    slidesPerView: 1.25,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 400,
    autoplay: false
  };

  estate: any;
  isAddedCart = false;

  constructor(
    private geolocation: Geolocation,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    public modalController: ModalController
  ) {

  }

  async presentModal(urlImgVal1, urlImgVal2, urlImgVal3, urlImgVal4) {
    console.log(urlImgVal1 + " " + urlImgVal2 + " " + urlImgVal3 + " " + urlImgVal4);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        urlImg1: urlImgVal1,
        urlImg2: urlImgVal2,
        urlImg3: urlImgVal3,
        urlImg4: urlImgVal4

      }
    });
    return await modal.present();
  }

  ngOnInit() {

  }

  onClickChat() {
    this.router.navigate(['/chat']);
  }

  ionViewDidEnter() {
    this.activatedRoute.params.subscribe(params => {
      this.estate = JSON.parse(params.estate);
      console.log(this.estate);
      this.loadMap();

    });
  }

  loadMap() {
    // const latLng = new google.maps.LatLng(this.estate.lat, this.estate.lng);
    // const mapOptions = {
    //   center: latLng,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // const marker = new google.maps.Marker(latLng);
    // marker.setMap(this.map);


    // หาที่อยู่ ปัจจุบัน
    this.geolocation.getCurrentPosition().then((resp) => {

      // set lat lng
      const latLng = new google.maps.LatLng(this.estate.lat, this.estate.lng);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      this.addMarkersToMap();

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  displayGoogleMap() {
    const latLng = new google.maps.LatLng(this.estate.lat, this.estate.lng);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  addMarkersToMap() {
    const position = { lat: parseFloat(this.estate.lat), lng: parseFloat(this.estate.lng) };
    console.log(position);
    // const position = new google.maps.LatLng(this.estate.lat, this.estate.lng);
    const marker = new google.maps.Marker({ position, map: this.map, title: this.estate.name });
    marker.setMap(this.map);
  }

  addToCart() {
    this.storage.get('cart').then(cart => {
      let newCart = [];
      if (cart) {
        newCart = cart;
      }

      newCart.push(this.estate);

      this.storage.set('cart', newCart).then(saved => {
        this.isAddedCart = true;
      });

    });
  }

  onClickTaxCal() {
    this.router.navigate(['/tax-calculator', {
      price: this.estate.price
    }]);
  }

}
