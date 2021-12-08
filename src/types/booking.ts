export interface IBooking {
  _id: string;
  pickup: string;
  pickupPlaceId: string;
  dropOff: string;
  dropOffPlaceId: string;
  Date: string;
  atDate: string;
  atIso: number;
  Time: string;
  vehicleClass: string;
  bookingName: string;
  stop: number;
  rides: string;
  status: string;
  pickupAirportCheck: boolean;
  dropOffAirportCheck: boolean;
  avgPay: number;
  duration: string;
  mi: number;
  matrixMinute: number;
  priceList: IPriceList[];
  totalPrice: number;
  createdAt: string;
  uuid: string;
}
interface IPriceList {
  title: string;
  pay: number;
}
