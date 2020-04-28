import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RestService } from '../services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var google;

@Component({
  selector: 'app-edit-estate',
  templateUrl: './edit-estate.page.html',
  styleUrls: ['./edit-estate.page.scss'],
})
export class EditEstatePage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;

  estateData = {
    imgUrl: 'https://yuzudigital.com/condo1.jpeg',
    deedImg: 'https://yuzudigital.com/condo1.jpeg',
    landImg: 'https://yuzudigital.com/condo1.jpeg',
    positionImg: 'https://yuzudigital.com/condo1.jpeg',
    rai: '',
    ngan: '',
    wa: '',
    price: '',
    province: '',
    district: '',
    name: '',
    tel: '',
    detail: '',
    estateType: '',
    sellType: '',
    lat: 0,
    lng: 0
  };

  marker;

  constructor(
    private geolocation: Geolocation,
    private camera: Camera,
    private restApi: RestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.estateData = JSON.parse(params.estate);
      console.log(this.estateData);
      this.loadMap();

    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    console.log('load');
    const that = this;
    // หาที่อยู่ ปัจจุบัน
    this.geolocation.getCurrentPosition().then((resp) => {

      // set lat lng
      const estateLatLng = new google.maps.LatLng(this.estateData.lat, this.estateData.lng);
      // const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: estateLatLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      // this.addMarkersToMap(resp.coords.latitude, resp.coords.longitude);

      // tslint:disable-next-line:only-arrow-functions
      this.map.addListener('click', function (e) {
        console.log(e);
        console.log(e.latLng.lat() + ' ' + e.latLng.lng());
        that.estateData.lat = e.latLng.lat();
        that.estateData.lng = e.latLng.lng();
        that.addMarkersToMap(e.latLng);
      });

      this.addMarkersToMap(estateLatLng);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  addMarkersToMap(latLng) {
    // this.removeMarker();
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    marker.setMap(this.map);
  }

  onclickSave() {
    console.log(this.estateData);
    this.restApi.updateEstate(this.estateData).then(res => {
      console.log(res);
      this.router.navigate(['/my-estate']);
    });
  }

  pickImage(type) {
    // this.completePayment();
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      if (type === 'main') {
        this.estateData.imgUrl = imageData;
        console.log(this.estateData.imgUrl);
      } else if (type === 'deed') {
        this.estateData.deedImg = imageData;
        console.log(this.estateData.deedImg);
      } else if (type === 'land') {
        this.estateData.landImg = imageData;
        console.log(this.estateData.landImg);
      } else if (type === 'position') {
        this.estateData.positionImg = imageData;
        console.log(this.estateData.positionImg);
      }
    }, (err) => {
      // Handle error
    });
  }

}
