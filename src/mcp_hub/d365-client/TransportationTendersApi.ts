/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationTenders } from './TransportationTenders';
import { TransportationTendersRequestBuilder } from './TransportationTendersRequestBuilder';
import { TransportationTenderHistoriesApi } from './TransportationTenderHistoriesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { TmsTenderStatus } from './TmsTenderStatus';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TransportationTendersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransportationTenders<DeSerializersT>, DeSerializersT>
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
  ): TransportationTendersApi<DeSerializersT> {
    return new TransportationTendersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link tmsTransportationTenderHistory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TMS_TRANSPORTATION_TENDER_HISTORY: OneToManyLink<
      TransportationTenders<DeSerializersT>,
      DeSerializersT,
      TransportationTenderHistoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TransportationTenderHistoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TMS_TRANSPORTATION_TENDER_HISTORY: new OneToManyLink(
        'TMSTransportationTenderHistory',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TransportationTenders;

  requestBuilder(): TransportationTendersRequestBuilder<DeSerializersT> {
    return new TransportationTendersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransportationTenders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransportationTenders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationTenders<DeSerializersT>,
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
    typeof TransportationTenders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationTenders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TENDER_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICKUP_ADDRESS_STATE_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_RATE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DROP_OFF_ADDRESS_LATITUDE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONFIRMED_RATE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKUP_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_TIME_ZONE: EnumField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DROP_OFF_ADDRESS_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DROP_OFF_ADDRESS: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DISTANCE_MILES: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DROP_OFF_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_POST_BOX: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIRMED_PICKUP_DATE_TIME: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_CARRIER_SERVICE_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED_GROSS_WEIGHT: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKUP_ADDRESS_CITY: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DROP_OFF_ADDRESS_PRIVATE: EnumField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DROP_OFF_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_LOAD_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_PICKUP_ADDRESS: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_ROUTE_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_TIME_ZONE: EnumField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DROP_OFF_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_ROUTE_SEGMENT_SEQUENCE_NUMBER: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PICKUP_ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_PICKUP_DATE_TIME: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DROP_OFF_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_EQUIPMENT_CODE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_POST_BOX: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_STREET: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_STATUS: EnumField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      TmsTenderStatus,
      true,
      true
    >;
    REFERENCE_ROUTE_SEGMENT_LOAD_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_LATITUDE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PICKUP_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DROP_OFF_ADDRESS_STATE_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_STREET: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PICKUP_ADDRESS_PRIVATE: EnumField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKUP_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DROP_OFF_ADDRESS_CITY: OrderableEdmTypeField<
      TransportationTenders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tmsTransportationTenderHistory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TMS_TRANSPORTATION_TENDER_HISTORY: OneToManyLink<
      TransportationTenders<DeSerializersT>,
      DeSerializersT,
      TransportationTenderHistoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransportationTenders<DeSerializers>>;
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
         * Static representation of the {@link tenderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_ID: fieldBuilder.buildEdmTypeField(
          'TenderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DropOffAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_RATE: fieldBuilder.buildEdmTypeField(
          'RequestedRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DropOffAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link confirmedRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_RATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'PickupAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DropOffAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DropOffAddressBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedDropOffAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DROP_OFF_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDropOffAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationDistanceMiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DISTANCE_MILES: fieldBuilder.buildEdmTypeField(
          'TransportationDistanceMiles',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DropOffAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confirmedPickupDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_PICKUP_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ConfirmedPickupDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierServiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_SERVICE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierServiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DropOffAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dropOffAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'PickupAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PickupAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculatedGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'CalculatedGrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'PickupAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDropOffAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DROP_OFF_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDropOffAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DropOffAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceLoadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_LOAD_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceLoadId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DropOffAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedPickupAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_PICKUP_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedPickupAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'PickupAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'PickupAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DropOffAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceRouteSegmentSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_ROUTE_SEGMENT_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceRouteSegmentSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PickupAddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedPickupDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PICKUP_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RequestedPickupDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DropOffAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationEquipmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_EQUIPMENT_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationEquipmentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'PickupAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_STATUS: fieldBuilder.buildEnumField(
          'TenderStatus',
          TmsTenderStatus,
          true
        ),
        /**
         * Static representation of the {@link referenceRouteSegmentLoadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_ROUTE_SEGMENT_LOAD_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceRouteSegmentLoadId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'PickupAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'PickupAddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'PickupAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link pickupAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'PickupAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dropOffAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'PickupAddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PickupAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'PickupAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DropOffAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPickupAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PICKUP_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsPickupAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickupAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'PickupAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dropOffAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_OFF_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DropOffAddressCity',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationTenders)
      };
    }

    return this._schema;
  }
}
