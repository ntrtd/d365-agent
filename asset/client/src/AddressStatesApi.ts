/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressStates } from './AddressStates';
import { AddressStatesRequestBuilder } from './AddressStatesRequestBuilder';
import { AddressCitiesApi } from './AddressCitiesApi';
import { ProspectsApi } from './ProspectsApi';
import { PurchaseDestinationAddressTransportationTimesApi } from './PurchaseDestinationAddressTransportationTimesApi';
import { AssetLocationsApi } from './AssetLocationsApi';
import { PurchaseDestinationAddressDeliveryModeTransportationTimesApi } from './PurchaseDestinationAddressDeliveryModeTransportationTimesApi';
import { AddressDistrictsApi } from './AddressDistrictsApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { AddressDistrictsV2Api } from './AddressDistrictsV2Api';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { InventOperationalSiteCurrentPostalAddressesApi } from './InventOperationalSiteCurrentPostalAddressesApi';
import { WorkerGarnishmentRulesApi } from './WorkerGarnishmentRulesApi';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AddressStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressStates<DeSerializersT>, DeSerializersT>
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
  ): AddressStatesApi<DeSerializersT> {
    return new AddressStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addressCounty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTY: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_REGION: OneToOneLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link garnishmentTaxLevies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GARNISHMENT_TAX_LEVIES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      WorkerGarnishmentRulesApi<DeSerializersT>
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
      AddressCountiesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      AddressDistrictsV2Api<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>,
      WorkerGarnishmentRulesApi<DeSerializersT>
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
      ADDRESS_COUNTY: new OneToManyLink('AddressCounty', this, linkedApis[6]),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[7]
      ),
      DISTRICTS_V_2: new OneToManyLink('DistrictsV2', this, linkedApis[8]),
      COUNTRY_REGION: new OneToOneLink('CountryRegion', this, linkedApis[9]),
      OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: new OneToManyLink(
        'OperationalSiteCurrentPostalAddresses',
        this,
        linkedApis[10]
      ),
      GARNISHMENT_TAX_LEVIES: new OneToManyLink(
        'GarnishmentTaxLevies',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = AddressStates;

  requestBuilder(): AddressStatesRequestBuilder<DeSerializersT> {
    return new AddressStatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressStates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressStates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressStates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AddressStates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTRASTAT_CODE: OrderableEdmTypeField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    BRAZIL_STATE_CODE: OrderableEdmTypeField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_STATE_FOR_COUNTRY_REGION: EnumField<
      AddressStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addressCounty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTY: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_REGION: OneToOneLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link garnishmentTaxLevies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GARNISHMENT_TAX_LEVIES: OneToManyLink<
      AddressStates<DeSerializersT>,
      DeSerializersT,
      WorkerGarnishmentRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressStates<DeSerializers>>;
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
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link intrastatCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_CODE: fieldBuilder.buildEdmTypeField(
          'IntrastatCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link brazilStateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZIL_STATE_CODE: fieldBuilder.buildEdmTypeField(
          'BrazilStateCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultStateForCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_STATE_FOR_COUNTRY_REGION: fieldBuilder.buildEnumField(
          'DefaultStateForCountryRegion',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressStates)
      };
    }

    return this._schema;
  }
}
