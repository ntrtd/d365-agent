/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetGroupValueModelSetups } from './FixedAssetGroupValueModelSetups';
import { FixedAssetGroupValueModelSetupsRequestBuilder } from './FixedAssetGroupValueModelSetupsRequestBuilder';
import { DepreciationProfilesApi } from './DepreciationProfilesApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { AssetDepreciationConvention } from './AssetDepreciationConvention';
import { AssetAccrualFiscal } from './AssetAccrualFiscal';
import { AssetLimitForAccumulatedDepTypeJp } from './AssetLimitForAccumulatedDepTypeJp';
import { AssetSpecialDepAllocationConventionJp } from './AssetSpecialDepAllocationConventionJp';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FixedAssetGroupValueModelSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FixedAssetGroupValueModelSetups<DeSerializersT>, DeSerializersT>
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
  ): FixedAssetGroupValueModelSetupsApi<DeSerializersT> {
    return new FixedAssetGroupValueModelSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCELERATED_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupValueModelSetupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_VALUE_MODEL: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetExtraordinaryDepreciationProfile',
        this,
        linkedApis[0]
      ),
      ASSET_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetDepreciationProfile',
        this,
        linkedApis[1]
      ),
      ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetAlternativeDepreciationProfile',
        this,
        linkedApis[2]
      ),
      ASSET_ACCELERATED_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetAcceleratedDepreciationProfile',
        this,
        linkedApis[3]
      ),
      ASSET_GROUP_VALUE_MODEL_SETUP_VALUE_MODEL: new OneToOneLink(
        'AssetGroupValueModelSetupValueModel',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = FixedAssetGroupValueModelSetups;

  requestBuilder(): FixedAssetGroupValueModelSetupsRequestBuilder<DeSerializersT> {
    return new FixedAssetGroupValueModelSetupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetGroupValueModelSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetGroupValueModelSetups<DeSerializersT>,
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
    typeof FixedAssetGroupValueModelSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetGroupValueModelSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_ASSET_GROUP_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_GROUP_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LIFE_YEARS: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEPRECIATION_CONVENTION: EnumField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      AssetDepreciationConvention,
      true,
      true
    >;
    DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_UNIT: EnumField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      AssetAccrualFiscal,
      true,
      true
    >;
    ALTERNATIVE_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_PERIODS: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOWABLE_LIMIT_FOR_ACCUMULATED_DEPRECIATION: EnumField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      AssetLimitForAccumulatedDepTypeJp,
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ALLOCATION_START_CONVENTION: EnumField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      AssetSpecialDepAllocationConventionJp,
      true,
      true
    >;
    IS_ASSET_GROUP_DEPRECIATION: EnumField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTRAORDINARY_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LIFE_MONTHS: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEPRECIATION_PERIODS: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCELERATED_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATE_DEPRECIATION: EnumField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SERVICE_LIFE: OrderableEdmTypeField<
      FixedAssetGroupValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCELERATED_DEPRECIATION_PROFILE: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetGroupValueModelSetupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_VALUE_MODEL: OneToOneLink<
      FixedAssetGroupValueModelSetups<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedAssetGroupValueModelSetups<DeSerializers>>;
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
         * Static representation of the {@link fixedAssetGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'FixedAssetGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ValueModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link depreciationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'DepreciationGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceLifeYears} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_YEARS: fieldBuilder.buildEdmTypeField(
          'ServiceLifeYears',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link depreciationConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_CONVENTION: fieldBuilder.buildEnumField(
          'DepreciationConvention',
          AssetDepreciationConvention,
          true
        ),
        /**
         * Static representation of the {@link depreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'DepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationAllocationUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_UNIT: fieldBuilder.buildEnumField(
          'SpecialDepreciationAllocationUnit',
          AssetAccrualFiscal,
          true
        ),
        /**
         * Static representation of the {@link alternativeDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'AlternativeDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationAllocationPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_PERIODS: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationAllocationPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowableLimitForAccumulatedDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWABLE_LIMIT_FOR_ACCUMULATED_DEPRECIATION:
          fieldBuilder.buildEnumField(
            'AllowableLimitForAccumulatedDepreciation',
            AssetLimitForAccumulatedDepTypeJp,
            true
          ),
        /**
         * Static representation of the {@link specialDepreciationAllocationStartConvention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ALLOCATION_START_CONVENTION:
          fieldBuilder.buildEnumField(
            'SpecialDepreciationAllocationStartConvention',
            AssetSpecialDepAllocationConventionJp,
            true
          ),
        /**
         * Static representation of the {@link isAssetGroupDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ASSET_GROUP_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsAssetGroupDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link extraordinaryDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRAORDINARY_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ExtraordinaryDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceLifeMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_MONTHS: fieldBuilder.buildEdmTypeField(
          'ServiceLifeMonths',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link depreciationPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PERIODS: fieldBuilder.buildEdmTypeField(
          'DepreciationPeriods',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link acceleratedDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculateDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_DEPRECIATION: fieldBuilder.buildEnumField(
          'CalculateDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link serviceLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE: fieldBuilder.buildEdmTypeField(
          'ServiceLife',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedAssetGroupValueModelSetups)
      };
    }

    return this._schema;
  }
}
