/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreditCardTransactions } from './CreditCardTransactions';
import { CreditCardTransactionsRequestBuilder } from './CreditCardTransactionsRequestBuilder';
import { NoYes } from './NoYes';
import { TrvAirlineServiceClassEnum } from './TrvAirlineServiceClassEnum';
import { TrvCarRentalVehicleClassEnum } from './TrvCarRentalVehicleClassEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CreditCardTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CreditCardTransactions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CreditCardTransactionsApi<DeSerializersT> {
    return new CreditCardTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CreditCardTransactions;

  requestBuilder(): CreditCardTransactionsRequestBuilder<DeSerializersT> {
    return new CreditCardTransactionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CreditCardTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CreditCardTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CreditCardTransactions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CreditCardTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CreditCardTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CC_TRANS_UNIQUE_ID: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARRIVAL_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGULAR_MILEAGE_CHARGES: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_CITY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRAVEL_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CATEGORY_CODE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CREDIT_CARD_CURRENCY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_METHOD: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_LOCATION: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOMESTIC_INDICATOR: EnumField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TICKET_ISSUE_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCH_CODE_LOCAL_CURRENCY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTHLY_RENTAL_RATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RENTER_NAME: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTURE_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_ROOM_NIGHTS: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CITY_OF_ORIGIN: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIP_LEG_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSTED: EnumField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOWN: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAILY_RENTAL_RATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ISSUING_CARRIER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NO_SHOW_INDICATOR: EnumField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_LEGS: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FLIGHT_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_OUT_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORIGINAL_TICKET_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_OUT_LOCATION: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_TYPE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_TYPE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CLASS: EnumField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      TrvAirlineServiceClassEnum,
      true,
      true
    >;
    BUSINESS_NAME: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUEST_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DAYS_RENTED: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MERCHANT_CATEGORY_CODE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUEST_NAME: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAVEL_AGENCY_INVOICE_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_AMOUNT: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_TAX_AMOUNT: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_ROOM_RENT: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRAVEL_NO: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NUMBER_NIKS: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_CODE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HASHED_CC_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOLIO_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAVEL_AGENCY_CODE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEHICLE_CLASS: EnumField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      TrvCarRentalVehicleClassEnum,
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEEKLY_RENTAL_RATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CAR_RENTAL_CHECK_OUT_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRAVEL_AGENCY_NAME: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_LOCAL_CURRENCY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_CODE_CREDIT_CARD_CURRENCY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSENGER_NAME: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFERRED: EnumField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_IN_DATE: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STOP_OVER_CITY: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCHANGE_TICKET_NUMBER: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_CODES_DESCRIPTION: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FARE_AMOUNT: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEPARTURE_TAX: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_MILES: OrderableEdmTypeField<
      CreditCardTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CreditCardTransactions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ccTransUniqueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CC_TRANS_UNIQUE_ID: fieldBuilder.buildEdmTypeField(
          'CCTransUniqueID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link arrivalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARRIVAL_DATE: fieldBuilder.buildEdmTypeField(
          'ArrivalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link regularMileageCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULAR_MILEAGE_CHARGES: fieldBuilder.buildEdmTypeField(
          'RegularMileageCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link destinationCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_CITY: fieldBuilder.buildEdmTypeField(
          'DestinationCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link travelDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_DATE: fieldBuilder.buildEdmTypeField(
          'TravelDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link categoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'CategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCreditCardCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT_CARD_CURRENCY: fieldBuilder.buildEdmTypeField(
          'Amount_CreditCardCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'PaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_LOCATION: fieldBuilder.buildEdmTypeField(
          'ReturnLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link domesticIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOMESTIC_INDICATOR: fieldBuilder.buildEnumField(
          'DomesticIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ticketIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TICKET_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'TicketIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchCodeLocalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_CODE_LOCAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExchCode_LocalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link monthlyRentalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHLY_RENTAL_RATE: fieldBuilder.buildEdmTypeField(
          'MonthlyRentalRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link renterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTER_NAME: fieldBuilder.buildEdmTypeField(
          'RenterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link departureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTURE_DATE: fieldBuilder.buildEdmTypeField(
          'DepartureDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link totalRoomNights} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROOM_NIGHTS: fieldBuilder.buildEdmTypeField(
          'TotalRoomNights',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cityOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'CityOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tripLegNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIP_LEG_NUMBER: fieldBuilder.buildEdmTypeField(
          'TripLegNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link town} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOWN: fieldBuilder.buildEdmTypeField('Town', 'Edm.String', true),
        /**
         * Static representation of the {@link dailyRentalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAILY_RENTAL_RATE: fieldBuilder.buildEdmTypeField(
          'DailyRentalRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link issuingCarrier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_CARRIER: fieldBuilder.buildEdmTypeField(
          'IssuingCarrier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link noShowIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_SHOW_INDICATOR: fieldBuilder.buildEnumField(
          'NoShowIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfLegs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_LEGS: fieldBuilder.buildEdmTypeField(
          'NumberOfLegs',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link flightNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLIGHT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FlightNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkOutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_OUT_DATE: fieldBuilder.buildEdmTypeField(
          'CheckOutDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link originalTicketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'OriginalTicketNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkOutLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_OUT_LOCATION: fieldBuilder.buildEdmTypeField(
          'CheckOutLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'ReturnDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEdmTypeField(
          'CostType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE: fieldBuilder.buildEdmTypeField(
          'CardType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CLASS: fieldBuilder.buildEnumField(
          'ServiceClass',
          TrvAirlineServiceClassEnum,
          true
        ),
        /**
         * Static representation of the {@link businessName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guestNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUEST_NUMBER: fieldBuilder.buildEdmTypeField(
          'GuestNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link daysRented} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_RENTED: fieldBuilder.buildEdmTypeField(
          'DaysRented',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link merchantCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'MerchantCategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE: fieldBuilder.buildEdmTypeField(
          'Reference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link guestName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUEST_NAME: fieldBuilder.buildEdmTypeField(
          'GuestName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReservationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link travelAgencyInvoiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_AGENCY_INVOICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TravelAgencyInvoiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FeeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TotalTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalRoomRent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ROOM_RENT: fieldBuilder.buildEdmTypeField(
          'TotalRoomRent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link travelNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_NO: fieldBuilder.buildEdmTypeField(
          'TravelNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardNumberNiks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER_NIKS: fieldBuilder.buildEdmTypeField(
          'CardNumberNIKS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hashedCcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HASHED_CC_NUMBER: fieldBuilder.buildEdmTypeField(
          'HashedCCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link folioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'FolioNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link travelAgencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_AGENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TravelAgencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vehicleClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_CLASS: fieldBuilder.buildEnumField(
          'VehicleClass',
          TrvCarRentalVehicleClassEnum,
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link weeklyRentalRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEKLY_RENTAL_RATE: fieldBuilder.buildEdmTypeField(
          'WeeklyRentalRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link carRentalCheckOutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAR_RENTAL_CHECK_OUT_DATE: fieldBuilder.buildEdmTypeField(
          'CarRentalCheckOutDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link travelAgencyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_AGENCY_NAME: fieldBuilder.buildEdmTypeField(
          'TravelAgencyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountLocalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_LOCAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'Amount_LocalCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchCodeCreditCardCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_CODE_CREDIT_CARD_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExchCode_CreditCardCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passengerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSENGER_NAME: fieldBuilder.buildEdmTypeField(
          'PassengerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERRED: fieldBuilder.buildEnumField('Transferred', NoYes, true),
        /**
         * Static representation of the {@link checkInDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_IN_DATE: fieldBuilder.buildEdmTypeField(
          'CheckInDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link stopOverCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOP_OVER_CITY: fieldBuilder.buildEdmTypeField(
          'StopOverCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exchangeTicketNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_TICKET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExchangeTicketNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryCodesDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_CODES_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CategoryCodesDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fareAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FARE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FareAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link departureTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTURE_TAX: fieldBuilder.buildEdmTypeField(
          'DepartureTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalMiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_MILES: fieldBuilder.buildEdmTypeField(
          'TotalMiles',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CreditCardTransactions)
      };
    }

    return this._schema;
  }
}
