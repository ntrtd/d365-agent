/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLocations } from './AssetLocations';
import { AssetLocationsRequestBuilder } from './AssetLocationsRequestBuilder';
import { FixedAssetsApi } from './FixedAssetsApi';
import { AddressCitiesApi } from './AddressCitiesApi';
import { AddressStatesApi } from './AddressStatesApi';
import { AddressPostalCodesV3Api } from './AddressPostalCodesV3Api';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
import { AddressCountiesApi } from './AddressCountiesApi';
import { FixedAssetsV2Api } from './FixedAssetsV2Api';
import { FixedAssetGroupsApi } from './FixedAssetGroupsApi';
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
export class AssetLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetLocations<DeSerializersT>, DeSerializersT>
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
  ): AssetLocationsApi<DeSerializersT> {
    return new AssetLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link locationFixedAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION_FIXED_ASSET: OneToManyLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link states} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATES: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressPostalCodeV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_POSTAL_CODE_V_3: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressPostalCodesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link counties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTIES: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFixedAssetV2LocationAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_V_2_LOCATION_ASSET: OneToManyLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      FixedAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocationAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION_ASSET_GROUP: OneToManyLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetsApi<DeSerializersT>,
      AddressCitiesApi<DeSerializersT>,
      AddressStatesApi<DeSerializersT>,
      AddressPostalCodesV3Api<DeSerializersT>,
      AddressCountryRegionsApi<DeSerializersT>,
      AddressCountiesApi<DeSerializersT>,
      FixedAssetsV2Api<DeSerializersT>,
      FixedAssetGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOCATION_FIXED_ASSET: new OneToManyLink(
        'LocationFixedAsset',
        this,
        linkedApis[0]
      ),
      CITIES: new OneToOneLink('Cities', this, linkedApis[1]),
      STATES: new OneToOneLink('States', this, linkedApis[2]),
      ADDRESS_POSTAL_CODE_V_3: new OneToOneLink(
        'AddressPostalCodeV3',
        this,
        linkedApis[3]
      ),
      ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'AddressCountryRegion',
        this,
        linkedApis[4]
      ),
      COUNTIES: new OneToOneLink('Counties', this, linkedApis[5]),
      ASSET_FIXED_ASSET_V_2_LOCATION_ASSET: new OneToManyLink(
        'AssetFixedAssetV2LocationAsset',
        this,
        linkedApis[6]
      ),
      ASSET_LOCATION_ASSET_GROUP: new OneToManyLink(
        'AssetLocationAssetGroup',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = AssetLocations;

  requestBuilder(): AssetLocationsRequestBuilder<DeSerializersT> {
    return new AssetLocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetLocations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetLocations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AssetLocations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AssetLocations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADDRESS_STREET_IN_KANA: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_TO: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_COUNTY: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STREET: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_CITY_IN_KANA: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_STATE: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_VALID_FROM: OrderableEdmTypeField<
      AssetLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link locationFixedAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION_FIXED_ASSET: OneToManyLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      FixedAssetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CITIES: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressCitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link states} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STATES: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressPostalCodeV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_POSTAL_CODE_V_3: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressPostalCodesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link counties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTIES: OneToOneLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      AddressCountiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetFixedAssetV2LocationAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_FIXED_ASSET_V_2_LOCATION_ASSET: OneToManyLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      FixedAssetsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetLocationAssetGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_LOCATION_ASSET_GROUP: OneToManyLink<
      AssetLocations<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetLocations<DeSerializers>>;
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
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link addressStreetInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressStreetInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'AddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_TO: fieldBuilder.buildEdmTypeField(
          'AddressValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressCounty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTY: fieldBuilder.buildEdmTypeField(
          'AddressCounty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'AddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link addressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'AddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'AddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressCityInKana} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_CITY_IN_KANA: fieldBuilder.buildEdmTypeField(
          'AddressCityInKana',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_STATE: fieldBuilder.buildEdmTypeField(
          'AddressState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'AddressValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLocations)
      };
    }

    return this._schema;
  }
}
