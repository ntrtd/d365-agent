/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressCities } from './AddressCities';
import { AddressCitiesRequestBuilder } from './AddressCitiesRequestBuilder';
import { AddressStatesApi } from './AddressStatesApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { PurchaseDestinationAddressTransportationTimesApi } from './PurchaseDestinationAddressTransportationTimesApi';
import { AssetLocationsApi } from './AssetLocationsApi';
import { PurchaseDestinationAddressDeliveryModeTransportationTimesApi } from './PurchaseDestinationAddressDeliveryModeTransportationTimesApi';
import { AddressDistrictsApi } from './AddressDistrictsApi';
import { AddressDistrictsV2Api } from './AddressDistrictsV2Api';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AddressCitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressCities<DeSerializersT>, DeSerializersT>
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
  ): AddressCitiesApi<DeSerializersT> {
    return new AddressCitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link state} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATE: OneToOneLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link county} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTY: OneToOneLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_REGION: OneToOneLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressStatesApi<DeSerializersT>,
      AddressCountiesApi<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>,
      AssetLocationsApi<DeSerializersT>,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>,
      AddressDistrictsApi<DeSerializersT>,
      AddressDistrictsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      STATE: new OneToOneLink('State', this, linkedApis[0]),
      COUNTY: new OneToOneLink('County', this, linkedApis[1]),
      COUNTRY_REGION: new OneToOneLink('CountryRegion', this, linkedApis[2]),
      PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: new OneToManyLink(
        'PurchaseDestinationAddressTransportationTimes',
        this,
        linkedApis[3]
      ),
      ASSET_LOCATION: new OneToManyLink('AssetLocation', this, linkedApis[4]),
      PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES:
        new OneToManyLink(
          'PurchaseDestinationAddressDeliveryModeTransportationTimes',
          this,
          linkedApis[5]
        ),
      DISTRICTS: new OneToManyLink('Districts', this, linkedApis[6]),
      DISTRICTS_V_2: new OneToManyLink('DistrictsV2', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = AddressCities;

  requestBuilder(): AddressCitiesRequestBuilder<DeSerializersT> {
    return new AddressCitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressCities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressCities<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressCities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressCities, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AddressCities, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CITY_KEY: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_IN_KANA: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITALY_MUNICIPALITY_CODE: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZIL_CITY_CODE: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITALY_CITY_CODE: OrderableEdmTypeField<
      AddressCities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link state} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATE: OneToOneLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link county} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTY: OneToOneLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_REGION: OneToOneLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressCities<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressCities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cityKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_KEY: fieldBuilder.buildEdmTypeField(
          'CityKey',
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
          true
        ),
        /**
         * Static representation of the {@link countyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'CountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField('StateId', 'Edm.String', true),
        /**
         * Static representation of the {@link cityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'CityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link italyMunicipalityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITALY_MUNICIPALITY_CODE: fieldBuilder.buildEdmTypeField(
          'ItalyMunicipalityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilCityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZIL_CITY_CODE: fieldBuilder.buildEdmTypeField(
          'BrazilCityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link italyCityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITALY_CITY_CODE: fieldBuilder.buildEdmTypeField(
          'ItalyCityCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressCities)
      };
    }

    return this._schema;
  }
}
