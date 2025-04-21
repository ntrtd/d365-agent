/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationProfiles } from './DepreciationProfiles';
import { DepreciationProfilesRequestBuilder } from './DepreciationProfilesRequestBuilder';
import { DepreciationProfileManualSchedulesApi } from './DepreciationProfileManualSchedulesApi';
import { FixedAssetGroupValueModelSetupsApi } from './FixedAssetGroupValueModelSetupsApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { AssetDepreciationCalculationBase } from './AssetDepreciationCalculationBase';
import { AssetDepreciationYear } from './AssetDepreciationYear';
import { AssetAccrual } from './AssetAccrual';
import { AssetDepreciationInterval } from './AssetDepreciationInterval';
import { AssetDepreciationMethod } from './AssetDepreciationMethod';
import { NoYes } from './NoYes';
import { AssetSpecialDepAccountingMethodJp } from './AssetSpecialDepAccountingMethodJp';
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
export class DepreciationProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DepreciationProfiles<DeSerializersT>, DeSerializersT>
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
  ): DepreciationProfilesApi<DeSerializersT> {
    return new DepreciationProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link depreciationProfileIdManualSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_PROFILE_ID_MANUAL_SCHEDULE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      DepreciationProfileManualSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_ALTERNATIVE_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_ACCELERATED_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2AcceleratedDepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_ACCELERATED_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2DepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ExtraordinaryDepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_EXTRAORDINARY_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2AlternativeDepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_ALTERNATIVE_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_ALTERNATIVE_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_ACCELERATED_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ALTERNATIVE_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ACCELERATED_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DepreciationProfileManualSchedulesApi<DeSerializersT>,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEPRECIATION_PROFILE_ID_MANUAL_SCHEDULE: new OneToManyLink(
        'DepreciationProfileIdManualSchedule',
        this,
        linkedApis[0]
      ),
      ASSET_GROUP_VALUE_MODEL_SETUP_EXTRAORDINARY_DEPRECIATION_PROFILE:
        new OneToManyLink(
          'AssetGroupValueModelSetupExtraordinaryDepreciationProfile',
          this,
          linkedApis[1]
        ),
      ASSET_GROUP_VALUE_MODEL_SETUP_DEPRECIATION_PROFILE: new OneToManyLink(
        'AssetGroupValueModelSetupDepreciationProfile',
        this,
        linkedApis[2]
      ),
      ASSET_GROUP_VALUE_MODEL_SETUP_ALTERNATIVE_DEPRECIATION_PROFILE:
        new OneToManyLink(
          'AssetGroupValueModelSetupAlternativeDepreciationProfile',
          this,
          linkedApis[3]
        ),
      ASSET_GROUP_VALUE_MODEL_SETUP_ACCELERATED_DEPRECIATION_PROFILE:
        new OneToManyLink(
          'AssetGroupValueModelSetupAcceleratedDepreciationProfile',
          this,
          linkedApis[4]
        ),
      ASSET_BOOK_V_2_ACCELERATED_DEPRECIATION_PROFILE_ASSET: new OneToManyLink(
        'AssetBookV2AcceleratedDepreciationProfileAsset',
        this,
        linkedApis[5]
      ),
      ASSET_BOOK_V_2_DEPRECIATION_PROFILE_ASSET: new OneToManyLink(
        'AssetBookV2DepreciationProfileAsset',
        this,
        linkedApis[6]
      ),
      ASSET_BOOK_V_2_EXTRAORDINARY_DEPRECIATION_PROFILE_ASSET:
        new OneToManyLink(
          'AssetBookV2ExtraordinaryDepreciationProfileAsset',
          this,
          linkedApis[7]
        ),
      ASSET_BOOK_V_2_ALTERNATIVE_DEPRECIATION_PROFILE_ASSET: new OneToManyLink(
        'AssetBookV2AlternativeDepreciationProfileAsset',
        this,
        linkedApis[8]
      ),
      ASSET_VALUE_MODEL_SETUP_EXTRAORDINARY_DEPRECIATION_PROFILE:
        new OneToManyLink(
          'AssetValueModelSetupExtraordinaryDepreciationProfile',
          this,
          linkedApis[9]
        ),
      ASSET_VALUE_MODEL_SETUP_DEPRECIATION_PROFILE: new OneToManyLink(
        'AssetValueModelSetupDepreciationProfile',
        this,
        linkedApis[10]
      ),
      ASSET_VALUE_MODEL_SETUP_ALTERNATIVE_DEPRECIATION_PROFILE:
        new OneToManyLink(
          'AssetValueModelSetupAlternativeDepreciationProfile',
          this,
          linkedApis[11]
        ),
      ASSET_VALUE_MODEL_SETUP_ACCELERATED_DEPRECIATION_PROFILE:
        new OneToManyLink(
          'AssetValueModelSetupAcceleratedDepreciationProfile',
          this,
          linkedApis[12]
        ),
      ASSET_VALUE_MODEL_ALTERNATIVE_DEPRECIATION_PROFILE: new OneToManyLink(
        'AssetValueModelAlternativeDepreciationProfile',
        this,
        linkedApis[13]
      ),
      ASSET_VALUE_MODEL_EXTRAORDINARY_DEPRECIATION_PROFILE: new OneToManyLink(
        'AssetValueModelExtraordinaryDepreciationProfile',
        this,
        linkedApis[14]
      ),
      ASSET_VALUE_MODEL_DEPRECIATION_PROFILE: new OneToManyLink(
        'AssetValueModelDepreciationProfile',
        this,
        linkedApis[15]
      ),
      ASSET_VALUE_MODEL_ACCELERATED_DEPRECIATION_PROFILE: new OneToManyLink(
        'AssetValueModelAcceleratedDepreciationProfile',
        this,
        linkedApis[16]
      )
    };
    return this;
  }

  entityConstructor = DepreciationProfiles;

  requestBuilder(): DepreciationProfilesRequestBuilder<DeSerializersT> {
    return new DepreciationProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DepreciationProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DepreciationProfiles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DepreciationProfiles<DeSerializersT>,
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
    typeof DepreciationProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DepreciationProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOW_VALUE_POOL_MIN_DEPRECIATION_AMOUNT: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOW_VALUE_POOL_PERCENT_FIRST_YEAR: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATION_BASIS: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      AssetDepreciationCalculationBase,
      true,
      true
    >;
    DEPRECIATION_YEAR: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      AssetDepreciationYear,
      true,
      true
    >;
    PERIOD_FREQUENCY: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      AssetAccrual,
      true,
      true
    >;
    INTERVAL: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      AssetDepreciationInterval,
      true,
      true
    >;
    LOW_VALUE_POOL_LOW_COST_VALUE: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    METHOD: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      AssetDepreciationMethod,
      true,
      true
    >;
    FULL_YEAR_DEPRECIATION_ON_ADDITIONAL_ACQUISITIONS: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_RATE_SCHEDULE_DESCRIPTION: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_APPLY_NUMBER_OF_PERIODS: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EQUALLY_SPLIT_DEPRECIATION_AMOUNT_95_PERCENT_OF_ACQUISITION_COST: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIAL_DEPRECIATION_ACCOUNTING_METHOD: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      AssetSpecialDepAccountingMethodJp,
      true,
      true
    >;
    FULL_DEPRECIATION: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERCENTAGE: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SPECIAL_DEPRECIATION_BASE_RATIO: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SHIFT_DEPRECIATION: EnumField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_RATE_SCHEDULE_NAME: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIAL_DEPRECIATION_RATE: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOW_VALUE_POOL_PERCENTAGE: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_YEARS_TO_EQUALLY_DIVIDE_DEPRECIATION_AMOUNTS: OrderableEdmTypeField<
      DepreciationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationProfileIdManualSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_PROFILE_ID_MANUAL_SCHEDULE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      DepreciationProfileManualSchedulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_ALTERNATIVE_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetGroupValueModelSetupAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_GROUP_VALUE_MODEL_SETUP_ACCELERATED_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2AcceleratedDepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_ACCELERATED_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2DepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2ExtraordinaryDepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_EXTRAORDINARY_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2AlternativeDepreciationProfileAsset} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_ALTERNATIVE_DEPRECIATION_PROFILE_ASSET: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_ALTERNATIVE_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelSetupAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_SETUP_ACCELERATED_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ALTERNATIVE_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetValueModelAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_VALUE_MODEL_ACCELERATED_DEPRECIATION_PROFILE: OneToManyLink<
      DepreciationProfiles<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DepreciationProfiles<DeSerializers>>;
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
         * Static representation of the {@link depreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'DepreciationProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lowValuePoolMinDepreciationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_MIN_DEPRECIATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LowValuePoolMinDepreciationAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lowValuePoolPercentFirstYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_PERCENT_FIRST_YEAR: fieldBuilder.buildEdmTypeField(
          'LowValuePoolPercentFirstYear',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculationBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASIS: fieldBuilder.buildEnumField(
          'CalculationBasis',
          AssetDepreciationCalculationBase,
          true
        ),
        /**
         * Static representation of the {@link depreciationYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_YEAR: fieldBuilder.buildEnumField(
          'DepreciationYear',
          AssetDepreciationYear,
          true
        ),
        /**
         * Static representation of the {@link periodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'PeriodFrequency',
          AssetAccrual,
          true
        ),
        /**
         * Static representation of the {@link interval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL: fieldBuilder.buildEnumField(
          'Interval',
          AssetDepreciationInterval,
          true
        ),
        /**
         * Static representation of the {@link lowValuePoolLowCostValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_LOW_COST_VALUE: fieldBuilder.buildEdmTypeField(
          'LowValuePoolLowCostValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link method} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD: fieldBuilder.buildEnumField(
          'Method',
          AssetDepreciationMethod,
          true
        ),
        /**
         * Static representation of the {@link fullYearDepreciationOnAdditionalAcquisitions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_YEAR_DEPRECIATION_ON_ADDITIONAL_ACQUISITIONS:
          fieldBuilder.buildEnumField(
            'FullYearDepreciationOnAdditionalAcquisitions',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link depreciationRateScheduleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_RATE_SCHEDULE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DepreciationRateScheduleDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationApplyNumberOfPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_APPLY_NUMBER_OF_PERIODS:
          fieldBuilder.buildEdmTypeField(
            'SpecialDepreciationApplyNumberOfPeriods',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link equallySplitDepreciationAmount95PercentOfAcquisitionCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUALLY_SPLIT_DEPRECIATION_AMOUNT_95_PERCENT_OF_ACQUISITION_COST:
          fieldBuilder.buildEnumField(
            'EquallySplitDepreciationAmount95PercentOfAcquisitionCost',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link specialDepreciationAccountingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_ACCOUNTING_METHOD: fieldBuilder.buildEnumField(
          'SpecialDepreciationAccountingMethod',
          AssetSpecialDepAccountingMethodJp,
          true
        ),
        /**
         * Static representation of the {@link fullDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_DEPRECIATION: fieldBuilder.buildEnumField(
          'FullDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'Percentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link specialDepreciationBaseRatio} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_BASE_RATIO: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationBaseRatio',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isShiftDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SHIFT_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsShiftDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link depreciationRateScheduleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_RATE_SCHEDULE_NAME: fieldBuilder.buildEdmTypeField(
          'DepreciationRateScheduleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specialDepreciationRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_DEPRECIATION_RATE: fieldBuilder.buildEdmTypeField(
          'SpecialDepreciationRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lowValuePoolPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOW_VALUE_POOL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LowValuePoolPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfYearsToEquallyDivideDepreciationAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_YEARS_TO_EQUALLY_DIVIDE_DEPRECIATION_AMOUNTS:
          fieldBuilder.buildEdmTypeField(
            'NumberOfYearsToEquallyDivideDepreciationAmounts',
            'Edm.Int32',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DepreciationProfiles)
      };
    }

    return this._schema;
  }
}
