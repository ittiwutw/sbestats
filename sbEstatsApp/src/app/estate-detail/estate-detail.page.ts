import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.page.html',
  styleUrls: ['./estate-detail.page.scss'],
})
export class EstateDetailPage implements OnInit {

  @ViewChild('map', { static: false }) mapContainer: ElementRef;
  map: any;

  estate: any;
  constructor(
    private geolocation: Geolocation,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {

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

}
