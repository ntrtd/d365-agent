/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressCountryRegions } from './AddressCountryRegions';
import { AddressCountryRegionsRequestBuilder } from './AddressCountryRegionsRequestBuilder';
import { AddressCitiesApi } from './AddressCitiesApi';
import { ProspectsApi } from './ProspectsApi';
import { BenefitExternalReportingsApi } from './BenefitExternalReportingsApi';
import { PurchaseDestinationAddressTransportationTimesApi } from './PurchaseDestinationAddressTransportationTimesApi';
import { AssetLocationsApi } from './AssetLocationsApi';
import { AddressCountryRegionTranslationsApi } from './AddressCountryRegionTranslationsApi';
import { PurchaseDestinationAddressDeliveryModeTransportationTimesApi } from './PurchaseDestinationAddressDeliveryModeTransportationTimesApi';
import { RecruitingRequestLocationsApi } from './RecruitingRequestLocationsApi';
import { AddressDistrictsApi } from './AddressDistrictsApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { PersonAddressesApi } from './PersonAddressesApi';
import { ItemBatchesApi } from './ItemBatchesApi';
import { AddressDistrictsV2Api } from './AddressDistrictsV2Api';
import { AddressStatesApi } from './AddressStatesApi';
import { InventOperationalSiteCurrentPostalAddressesApi } from './InventOperationalSiteCurrentPostalAddressesApi';
import { ClmIntegrationAddressCountryRegionsApi } from './ClmIntegrationAddressCountryRegionsApi';
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
export class AddressCountryRegionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressCountryRegions<DeSerializersT>, DeSerializersT>
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
  ): AddressCountryRegionsApi<DeSerializersT> {
    return new AddressCountryRegionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitExternalReporting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_EXTERNAL_REPORTING: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      BenefitExternalReportingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addressCountryRegionTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION_TRANSLATION: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_LOCATIONS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addressCounty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTY: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_ADDRESS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      PersonAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemBatches} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCHES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link states} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link clmIntegrationAddressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_ADDRESS_COUNTRY_REGION: OneToOneLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationAddressCountryRegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressCitiesApi<DeSerializersT>,
      ProspectsApi<DeSerializersT>,
      BenefitExternalReportingsApi<DeSerializersT>,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>,
      AssetLocationsApi<DeSerializersT>,
      AddressCountryRegionTranslationsApi<DeSerializersT>,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>,
      RecruitingRequestLocationsApi<DeSerializersT>,
      AddressDistrictsApi<DeSerializersT>,
      AddressCountiesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      PersonAddressesApi<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>,
      AddressDistrictsV2Api<DeSerializersT>,
      AddressStatesApi<DeSerializersT>,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>,
      ClmIntegrationAddressCountryRegionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CITIES: new OneToManyLink('Cities', this, linkedApis[0]),
      PROSPECTS: new OneToManyLink('Prospects', this, linkedApis[1]),
      BENEFIT_EXTERNAL_REPORTING: new OneToManyLink(
        'BenefitExternalReporting',
        this,
        linkedApis[2]
      ),
      PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: new OneToManyLink(
        'PurchaseDestinationAddressTransportationTimes',
        this,
        linkedApis[3]
      ),
      ASSET_LOCATION: new OneToManyLink('AssetLocation', this, linkedApis[4]),
      ADDRESS_COUNTRY_REGION_TRANSLATION: new OneToManyLink(
        'AddressCountryRegionTranslation',
        this,
        linkedApis[5]
      ),
      PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES:
        new OneToManyLink(
          'PurchaseDestinationAddressDeliveryModeTransportationTimes',
          this,
          linkedApis[6]
        ),
      RECRUITING_REQUEST_LOCATIONS: new OneToManyLink(
        'RecruitingRequestLocations',
        this,
        linkedApis[7]
      ),
      DISTRICTS: new OneToManyLink('Districts', this, linkedApis[8]),
      ADDRESS_COUNTY: new OneToManyLink('AddressCounty', this, linkedApis[9]),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[10]
      ),
      PERSON_ADDRESS: new OneToManyLink('PersonAddress', this, linkedApis[11]),
      ITEM_BATCHES: new OneToManyLink('ItemBatches', this, linkedApis[12]),
      DISTRICTS_V_2: new OneToManyLink('DistrictsV2', this, linkedApis[13]),
      STATES: new OneToManyLink('States', this, linkedApis[14]),
      OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: new OneToManyLink(
        'OperationalSiteCurrentPostalAddresses',
        this,
        linkedApis[15]
      ),
      CLM_INTEGRATION_ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'CLMIntegrationAddressCountryRegion',
        this,
        linkedApis[16]
      )
    };
    return this;
  }

  entityConstructor = AddressCountryRegions;

  requestBuilder(): AddressCountryRegionsRequestBuilder<DeSerializersT> {
    return new AddressCountryRegionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressCountryRegions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressCountryRegions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressCountryRegions<DeSerializersT>,
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
    typeof AddressCountryRegions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressCountryRegions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_OCODE: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: EnumField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    PARENT_COUNTRY_REGION: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_FORMAT: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRAZIL_CENTRAL_BANK_COUNTRY_CODE: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_ZIP_PLUS_4: EnumField<
      AddressCountryRegions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OKSM_CODE_RU: OrderableEdmTypeField<
      AddressCountryRegions<DeSerializers>,
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
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prospects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROSPECTS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ProspectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitExternalReporting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_EXTERNAL_REPORTING: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      BenefitExternalReportingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AssetLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addressCountryRegionTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION_TRANSLATION: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseDestinationAddressDeliveryModeTransportationTimes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_DESTINATION_ADDRESS_DELIVERY_MODE_TRANSPORTATION_TIMES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      PurchaseDestinationAddressDeliveryModeTransportationTimesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_LOCATIONS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addressCounty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTY: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_ADDRESS: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      PersonAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemBatches} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCHES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link districtsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISTRICTS_V_2: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressDistrictsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link states} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link operationalSiteCurrentPostalAddresses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE_CURRENT_POSTAL_ADDRESSES: OneToManyLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      InventOperationalSiteCurrentPostalAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link clmIntegrationAddressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_ADDRESS_COUNTRY_REGION: OneToOneLink<
      AddressCountryRegions<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationAddressCountryRegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressCountryRegions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isOcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OCODE: fieldBuilder.buildEdmTypeField('ISOcode', 'Edm.String', true),
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
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEnumField('TimeZone', Timezone, true),
        /**
         * Static representation of the {@link parentCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'ParentCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_FORMAT: fieldBuilder.buildEdmTypeField(
          'AddressFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link brazilCentralBankCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZIL_CENTRAL_BANK_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'BrazilCentralBankCountryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useZipPlus4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ZIP_PLUS_4: fieldBuilder.buildEnumField('UseZipPlus4', NoYes, true),
        /**
         * Static representation of the {@link oksmCodeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OKSM_CODE_RU: fieldBuilder.buildEdmTypeField(
          'OKSMCode_RU',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressCountryRegions)
      };
    }

    return this._schema;
  }
}
