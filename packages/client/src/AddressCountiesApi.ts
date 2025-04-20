/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressCounties } from './AddressCounties';
import { AddressCountiesRequestBuilder } from './AddressCountiesRequestBuilder';
import { AddressCitiesApi } from './AddressCitiesApi';
import { ProspectsApi } from './ProspectsApi';
import { PurchaseDestinationAddressTransportationTimesApi } from './PurchaseDestinationAddressTransportationTimesApi';
import { AssetLocationsApi } from './AssetLocationsApi';
import { PurchaseDestinationAddressDeliveryModeTransportationTimesApi } from './PurchaseDestinationAddressDeliveryModeTransportationTimesApi';
import { AddressDistrictsApi } from './AddressDistrictsApi';
import { AddressStatesApi } from './AddressStatesApi';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { AddressDistrictsV2Api } from './AddressDistrictsV2Api';
import { InventOperationalSiteCurrentPostalAddressesApi } from './InventOperationalSiteCurrentPostalAddressesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AddressCountiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressCounties<DeSerializersT>, DeSerializersT>
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
  ): AddressCountiesApi<DeSerializersT> {
    return new AddressCountiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_STATE: OneToOneLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressCitiesApi<DeSerializersT>,
      ProspectsApi<DeSerializersT>,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>,
      AssetLocationsApi<DeSerializersT>,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>,
      AddressDistrictsApi<DeSerializersT>,
      AddressStatesApi<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      AddressDistrictsV2Api<DeSerializersT>,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CITIES: new OneToManyLink('Cities', this, linkedApis[0]),
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[1]),
      PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: new OneToManyLink(
        'PurchaseDestinationAddressTransportationTimes',
        this,
        linkedApis[2]
      ),
      ASSET_LOCATION: new OneToManyLink('AssetLocation', this, linkedApis[3]),
      PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES:
        new OneToManyLink(
          'PurchaseDestinationAddressDeliveryModeTransportationTimes',
          this,
          linkedApis[4]
        ),
      DISTRICTS: new OneToManyLink('Districts', this, linkedApis[5]),
      ADDRESS_STATE: new OneToOneLink('AddressState', this, linkedApis[6]),
      ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'AddressCountryRegion',
        this,
        linkedApis[7]
      ),
      DISTRICTS_V_2: new OneToManyLink('DistrictsV2', this, linkedApis[8]),
      OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: new OneToManyLink(
        'OperationalSiteCurrentPostalAddresses',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = AddressCounties;

  requestBuilder(): AddressCountiesRequestBuilder<DeSerializersT> {
    return new AddressCountiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressCounties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressCounties<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressCounties<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressCounties, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressCounties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressCounties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      AddressCounties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTY_ID: OrderableEdmTypeField<
      AddressCounties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AddressCounties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ES_COUNTRY_CODE: OrderableEdmTypeField<
      AddressCounties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IT_COUNTY_CODE: OrderableEdmTypeField<
      AddressCounties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_STATE: OneToOneLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      AddressCounties<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressCounties<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link esCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ES_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'ESCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itCountyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IT_COUNTY_CODE: fieldBuilder.buildEdmTypeField(
          'ITCountyCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressCounties)
      };
    }

    return this._schema;
  }
}
