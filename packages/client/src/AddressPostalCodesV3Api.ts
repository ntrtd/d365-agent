/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressPostalCodesV3 } from './AddressPostalCodesV3';
import { AddressPostalCodesV3RequestBuilder } from './AddressPostalCodesV3RequestBuilder';
import { PurchaseDestinationAddressTransportationTimesApi } from './PurchaseDestinationAddressTransportationTimesApi';
import { AssetLocationsApi } from './AssetLocationsApi';
import { PurchaseDestinationAddressDeliveryModeTransportationTimesApi } from './PurchaseDestinationAddressDeliveryModeTransportationTimesApi';
import { AllEvenOdd } from './AllEvenOdd';
import { Timezone } from './Timezone';
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
export class AddressPostalCodesV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressPostalCodesV3<DeSerializersT>, DeSerializersT>
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
  ): AddressPostalCodesV3Api<DeSerializersT> {
    return new AddressPostalCodesV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressPostalCodesV3<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressPostalCodesV3<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressPostalCodesV3<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>,
      AssetLocationsApi<DeSerializersT>,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: new OneToManyLink(
        'PurchaseDestinationAddressTransportationTimes',
        this,
        linkedApis[0]
      ),
      ASSET_LOCATION: new OneToManyLink('AssetLocation', this, linkedApis[1]),
      PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES:
        new OneToManyLink(
          'PurchaseDestinationAddressDeliveryModeTransportationTimes',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = AddressPostalCodesV3;

  requestBuilder(): AddressPostalCodesV3RequestBuilder<DeSerializersT> {
    return new AddressPostalCodesV3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressPostalCodesV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressPostalCodesV3<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressPostalCodesV3<DeSerializersT>,
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
    typeof AddressPostalCodesV3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressPostalCodesV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ZIP_CODE: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CITY_ID: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTRICT_ID: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STREET_NUMBER_MINIMUM: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STREET_NUMBER_MAXIMUM: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STREET_NUMBER_VALIDITY: EnumField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      AllEvenOdd,
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_ZONE: EnumField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    CITY_ALIAS: OrderableEdmTypeField<
      AddressPostalCodesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressPostalCodesV3<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressPostalCodesV3<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressPostalCodesV3<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressPostalCodesV3<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'ZipCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField(
          'StateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'CountyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_ID: fieldBuilder.buildEdmTypeField('CityId', 'Edm.String', false),
        /**
         * Static representation of the {@link districtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT_ID: fieldBuilder.buildEdmTypeField(
          'DistrictId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link streetNumberMinimum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER_MINIMUM: fieldBuilder.buildEdmTypeField(
          'StreetNumberMinimum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link streetNumberMaximum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER_MAXIMUM: fieldBuilder.buildEdmTypeField(
          'StreetNumberMaximum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link streetNumberValidity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NUMBER_VALIDITY: fieldBuilder.buildEnumField(
          'StreetNumberValidity',
          AllEvenOdd,
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', false),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link cityAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_ALIAS: fieldBuilder.buildEdmTypeField(
          'CityAlias',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressPostalCodesV3)
      };
    }

    return this._schema;
  }
}
