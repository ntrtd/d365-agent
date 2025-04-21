/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { CreditCardTransactionsApi } from './CreditCardTransactionsApi';
import { NoYes } from './NoYes';
import { TrvAirlineServiceClassEnum } from './TrvAirlineServiceClassEnum';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';

/**
 * This class represents the entity "CreditCardTransactions" of service "d365_metadata".
 */
export class CreditCardTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditCardTransactionsType<T>
{
  /**
   * Technical entity name for CreditCardTransactions.
   */
  static override _entityName = 'CreditCardTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditCardTransactions entity.
   */
  static _keys = ['dataAreaId', 'CCTransUniqueID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cc Trans Unique Id.
   */
  declare ccTransUniqueId: DeserializedType<T, 'Edm.String'>;
  /**
   * Arrival Date.
   */
  declare arrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Regular Mileage Charges.
   */
  declare regularMileageCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination City.
   * @nullable
   */
  declare destinationCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Travel Date.
   */
  declare travelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Category Code.
   * @nullable
   */
  declare categoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Credit Card Currency.
   */
  declare amountCreditCardCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Method.
   * @nullable
   */
  declare paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Location.
   * @nullable
   */
  declare returnLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Domestic Indicator.
   * @nullable
   */
  declare domesticIndicator?: NoYes | null;
  /**
   * Ticket Issue Date.
   */
  declare ticketIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Exch Code Local Currency.
   * @nullable
   */
  declare exchCodeLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Monthly Rental Rate.
   */
  declare monthlyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Renter Name.
   * @nullable
   */
  declare renterName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Departure Date.
   */
  declare departureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Room Nights.
   */
  declare totalRoomNights: DeserializedType<T, 'Edm.Int32'>;
  /**
   * City Of Origin.
   * @nullable
   */
  declare cityOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trip Leg Number.
   */
  declare tripLegNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Town.
   * @nullable
   */
  declare town?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Daily Rental Rate.
   */
  declare dailyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Issuing Carrier.
   * @nullable
   */
  declare issuingCarrier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No Show Indicator.
   * @nullable
   */
  declare noShowIndicator?: NoYes | null;
  /**
   * Number Of Legs.
   */
  declare numberOfLegs: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Flight Number.
   * @nullable
   */
  declare flightNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Out Date.
   */
  declare checkOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Original Ticket Number.
   * @nullable
   */
  declare originalTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Out Location.
   * @nullable
   */
  declare checkOutLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Date.
   */
  declare returnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Type.
   * @nullable
   */
  declare costType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Type.
   * @nullable
   */
  declare cardType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Class.
   * @nullable
   */
  declare serviceClass?: TrvAirlineServiceClassEnum | null;
  /**
   * Business Name.
   * @nullable
   */
  declare businessName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guest Number.
   */
  declare guestNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Days Rented.
   */
  declare daysRented: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Merchant Category Code.
   * @nullable
   */
  declare merchantCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference.
   * @nullable
   */
  declare reference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Guest Name.
   * @nullable
   */
  declare guestName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation Number.
   * @nullable
   */
  declare reservationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Travel Agency Invoice Number.
   * @nullable
   */
  declare travelAgencyInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Amount.
   */
  declare feeAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Room Rent.
   */
  declare totalRoomRent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Travel No.
   * @nullable
   */
  declare travelNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Number Niks.
   * @nullable
   */
  declare cardNumberNiks?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Carrier Code.
   * @nullable
   */
  declare carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hashed Cc Number.
   * @nullable
   */
  declare hashedCcNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Folio Number.
   * @nullable
   */
  declare folioNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Travel Agency Code.
   * @nullable
   */
  declare travelAgencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vehicle Class.
   * @nullable
   */
  declare vehicleClass?: TrvCarRentalVehicleClassEnum | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Weekly Rental Rate.
   */
  declare weeklyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Car Rental Check Out Date.
   */
  declare carRentalCheckOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Travel Agency Name.
   * @nullable
   */
  declare travelAgencyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Local Currency.
   */
  declare amountLocalCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exch Code Credit Card Currency.
   * @nullable
   */
  declare exchCodeCreditCardCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Passenger Name.
   * @nullable
   */
  declare passengerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Number.
   * @nullable
   */
  declare cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transferred.
   * @nullable
   */
  declare transferred?: NoYes | null;
  /**
   * Check In Date.
   */
  declare checkInDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Stop Over City.
   * @nullable
   */
  declare stopOverCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Ticket Number.
   * @nullable
   */
  declare exchangeTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Codes Description.
   * @nullable
   */
  declare categoryCodesDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fare Amount.
   */
  declare fareAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Departure Tax.
   */
  declare departureTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Miles.
   */
  declare totalMiles: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CreditCardTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface CreditCardTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ccTransUniqueId: DeserializedType<T, 'Edm.String'>;
  arrivalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  regularMileageCharges: DeserializedType<T, 'Edm.Decimal'>;
  destinationCity?: DeserializedType<T, 'Edm.String'> | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  travelDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  categoryCode?: DeserializedType<T, 'Edm.String'> | null;
  amountCreditCardCurrency: DeserializedType<T, 'Edm.Decimal'>;
  paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
  returnLocation?: DeserializedType<T, 'Edm.String'> | null;
  domesticIndicator?: NoYes | null;
  ticketIssueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exchCodeLocalCurrency?: DeserializedType<T, 'Edm.String'> | null;
  monthlyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  renterName?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  departureDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalRoomNights: DeserializedType<T, 'Edm.Int32'>;
  cityOfOrigin?: DeserializedType<T, 'Edm.String'> | null;
  tripLegNumber: DeserializedType<T, 'Edm.Int32'>;
  posted?: NoYes | null;
  town?: DeserializedType<T, 'Edm.String'> | null;
  dailyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  issuingCarrier?: DeserializedType<T, 'Edm.String'> | null;
  noShowIndicator?: NoYes | null;
  numberOfLegs: DeserializedType<T, 'Edm.Int32'>;
  flightNumber?: DeserializedType<T, 'Edm.String'> | null;
  checkOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  originalTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  checkOutLocation?: DeserializedType<T, 'Edm.String'> | null;
  returnDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costType?: DeserializedType<T, 'Edm.String'> | null;
  cardType?: DeserializedType<T, 'Edm.String'> | null;
  serviceClass?: TrvAirlineServiceClassEnum | null;
  businessName?: DeserializedType<T, 'Edm.String'> | null;
  guestNumber: DeserializedType<T, 'Edm.Int32'>;
  daysRented: DeserializedType<T, 'Edm.Decimal'>;
  merchantCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  reference?: DeserializedType<T, 'Edm.String'> | null;
  guestName?: DeserializedType<T, 'Edm.String'> | null;
  reservationNumber?: DeserializedType<T, 'Edm.String'> | null;
  travelAgencyInvoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  feeAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  totalRoomRent: DeserializedType<T, 'Edm.Decimal'>;
  travelNo?: DeserializedType<T, 'Edm.String'> | null;
  cardNumberNiks?: DeserializedType<T, 'Edm.String'> | null;
  carrierCode?: DeserializedType<T, 'Edm.String'> | null;
  hashedCcNumber?: DeserializedType<T, 'Edm.String'> | null;
  folioNumber?: DeserializedType<T, 'Edm.String'> | null;
  travelAgencyCode?: DeserializedType<T, 'Edm.String'> | null;
  vehicleClass?: TrvCarRentalVehicleClassEnum | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  weeklyRentalRate: DeserializedType<T, 'Edm.Decimal'>;
  carRentalCheckOutDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  travelAgencyName?: DeserializedType<T, 'Edm.String'> | null;
  amountLocalCurrency: DeserializedType<T, 'Edm.Decimal'>;
  exchCodeCreditCardCurrency?: DeserializedType<T, 'Edm.String'> | null;
  passengerName?: DeserializedType<T, 'Edm.String'> | null;
  cardNumber?: DeserializedType<T, 'Edm.String'> | null;
  transferred?: NoYes | null;
  checkInDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  stopOverCity?: DeserializedType<T, 'Edm.String'> | null;
  exchangeTicketNumber?: DeserializedType<T, 'Edm.String'> | null;
  categoryCodesDescription?: DeserializedType<T, 'Edm.String'> | null;
  fareAmount: DeserializedType<T, 'Edm.Decimal'>;
  departureTax: DeserializedType<T, 'Edm.Decimal'>;
  totalMiles: DeserializedType<T, 'Edm.Decimal'>;
}
