/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueModelSetups } from './ValueModelSetups';
import { ValueModelSetupsRequestBuilder } from './ValueModelSetupsRequestBuilder';
import { FixedAssetPostingProfilesApi } from './FixedAssetPostingProfilesApi';
import { FixedAssetGroupValueModelSetupsApi } from './FixedAssetGroupValueModelSetupsApi';
import { FixedAssetBooksV2Api } from './FixedAssetBooksV2Api';
import { AssetParametersApi } from './AssetParametersApi';
import { FixedAssetPostingProfileDisposalsApi } from './FixedAssetPostingProfileDisposalsApi';
import { DepreciationProfilesApi } from './DepreciationProfilesApi';
import { AssetJournalV2Api } from './AssetJournalV2Api';
import { FixedAssetGroupBookSpecialDepreciationAllowancesApi } from './FixedAssetGroupBookSpecialDepreciationAllowancesApi';
import { FixedAssetValueModelsApi } from './FixedAssetValueModelsApi';
import { AssetJournalLinesApi } from './AssetJournalLinesApi';
import { FixedAssetValueModelSetupDerivedValueModelsApi } from './FixedAssetValueModelSetupDerivedValueModelsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import { RoundOffType } from './RoundOffType';
import { AssetAcquisitionOnFirstDayCheckTypeJp } from './AssetAcquisitionOnFirstDayCheckTypeJp';
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
export class ValueModelSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValueModelSetups<DeSerializersT>, DeSerializersT>
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
  ): ValueModelSetupsApi<DeSerializersT> {
    return new ValueModelSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_POSTING_PROFILE: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetGroupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_GROUP_VALUE_MODEL: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SetupId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SETUP_ID: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link valueModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODELS: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      AssetParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetPostingProfileDisposal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_POSTING_PROFILE_DISPOSAL: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfileDisposalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCELERATED_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalBook} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_BOOK: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      AssetJournalV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetGroupSetupBonus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_GROUP_SETUP_BONUS: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelSetupId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_SETUP_ID: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_JOURNAL_LINE: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedValueModelDerivedValueModelSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_VALUE_MODEL_DERIVED_VALUE_MODEL_SETUP: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelDerivedValueModelSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_DERIVED_VALUE_MODEL_SETUP: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FixedAssetPostingProfilesApi<DeSerializersT>,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>,
      FixedAssetBooksV2Api<DeSerializersT>,
      AssetParametersApi<DeSerializersT>,
      FixedAssetPostingProfileDisposalsApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      DepreciationProfilesApi<DeSerializersT>,
      AssetJournalV2Api<DeSerializersT>,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>,
      FixedAssetValueModelsApi<DeSerializersT>,
      AssetJournalLinesApi<DeSerializersT>,
      FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT>,
      FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VALUE_MODEL_ASSET_POSTING_PROFILE: new OneToManyLink(
        'ValueModelAssetPostingProfile',
        this,
        linkedApis[0]
      ),
      VALUE_MODEL_ASSET_GROUP_VALUE_MODEL: new OneToManyLink(
        'ValueModelAssetGroupValueModel',
        this,
        linkedApis[1]
      ),
      ASSET_BOOK_V_2_SETUP_ID: new OneToManyLink(
        'AssetBookV2SetupId',
        this,
        linkedApis[2]
      ),
      VALUE_MODELS: new OneToOneLink('ValueModels', this, linkedApis[3]),
      VALUE_MODEL_ASSET_POSTING_PROFILE_DISPOSAL: new OneToManyLink(
        'ValueModelAssetPostingProfileDisposal',
        this,
        linkedApis[4]
      ),
      ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetExtraordinaryDepreciationProfile',
        this,
        linkedApis[5]
      ),
      ASSET_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetDepreciationProfile',
        this,
        linkedApis[6]
      ),
      ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetAlternativeDepreciationProfile',
        this,
        linkedApis[7]
      ),
      ASSET_ACCELERATED_DEPRECIATION_PROFILE: new OneToOneLink(
        'AssetAcceleratedDepreciationProfile',
        this,
        linkedApis[8]
      ),
      ASSET_JOURNAL_BOOK: new OneToManyLink(
        'AssetJournalBook',
        this,
        linkedApis[9]
      ),
      VALUE_MODEL_ASSET_GROUP_SETUP_BONUS: new OneToManyLink(
        'ValueModelAssetGroupSetupBonus',
        this,
        linkedApis[10]
      ),
      VALUE_MODEL_SETUP_ID: new OneToManyLink(
        'ValueModelSetupId',
        this,
        linkedApis[11]
      ),
      VALUE_MODEL_ASSET_JOURNAL_LINE: new OneToManyLink(
        'ValueModelAssetJournalLine',
        this,
        linkedApis[12]
      ),
      DERIVED_VALUE_MODEL_DERIVED_VALUE_MODEL_SETUP: new OneToManyLink(
        'DerivedValueModelDerivedValueModelSetup',
        this,
        linkedApis[13]
      ),
      VALUE_MODEL_DERIVED_VALUE_MODEL_SETUP: new OneToManyLink(
        'ValueModelDerivedValueModelSetup',
        this,
        linkedApis[14]
      )
    };
    return this;
  }

  entityConstructor = ValueModelSetups;

  requestBuilder(): ValueModelSetupsRequestBuilder<DeSerializersT> {
    return new ValueModelSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValueModelSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ValueModelSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ValueModelSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ValueModelSetups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValueModelSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUND_OFF_DEPRECIATION: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_LAYER: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    IS_ALLOW_DEPRECIATION_ADJ_SAME_DATE: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OVERRIDE_FIXED_ASSET_CALENDAR_DAYS: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALTERNATIVE_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEROGATORY_CALCULATION: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_METHOD: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    EXPECTED_SCRAP_PERCENTAGE: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUND_OFF_DEPRECIATION_REPORTING_CURRENCY: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_NET_BOOK_VALUE_HIGHER_THAN_ACQUISITION_COSTS: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REFERENCED_VALUE_MODEL_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEAVE_NET_BOOK_VALUE_AT: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEPRECIATION_REQUIRED_IN_DISPOSAL: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTRAORDINARY_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCELERATED_DEPRECIATION_PROFILE_ID: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POSITIVE_DEPRECIATION: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTION_FOR_ACQUISITION_ON_JANUARY_1_ST: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      AssetAcquisitionOnFirstDayCheckTypeJp,
      true,
      true
    >;
    ASSET_WORKING_DAYS: OrderableEdmTypeField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATE_DEPRECIATION_ADJUSTMENTS_WITH_BASIS_ADJUSTMENTS: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEROGATORY_TAX_MODEL: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATE_DEPRECIATION: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_NEGATIVE_NET_BOOK_VALUE: EnumField<
      ValueModelSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_POSTING_PROFILE: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetGroupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_GROUP_VALUE_MODEL: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetBookV2SetupId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_BOOK_V_2_SETUP_ID: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetBooksV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link valueModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODELS: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      AssetParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetPostingProfileDisposal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_POSTING_PROFILE_DISPOSAL: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfileDisposalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetExtraordinaryDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_EXTRAORDINARY_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAlternativeDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ALTERNATIVE_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetAcceleratedDepreciationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_ACCELERATED_DEPRECIATION_PROFILE: OneToOneLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      DepreciationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetJournalBook} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_JOURNAL_BOOK: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      AssetJournalV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetGroupSetupBonus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_GROUP_SETUP_BONUS: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetGroupBookSpecialDepreciationAllowancesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelSetupId} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_SETUP_ID: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelAssetJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_ASSET_JOURNAL_LINE: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      AssetJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedValueModelDerivedValueModelSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_VALUE_MODEL_DERIVED_VALUE_MODEL_SETUP: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valueModelDerivedValueModelSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_DERIVED_VALUE_MODEL_SETUP: OneToManyLink<
      ValueModelSetups<DeSerializersT>,
      DeSerializersT,
      FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ValueModelSetups<DeSerializers>>;
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
         * Static representation of the {@link valueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ValueModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roundOffDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_DEPRECIATION: fieldBuilder.buildEdmTypeField(
          'RoundOffDepreciation',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingLayer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LAYER: fieldBuilder.buildEnumField(
          'PostingLayer',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link isAllowDepreciationAdjSameDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_DEPRECIATION_ADJ_SAME_DATE: fieldBuilder.buildEnumField(
          'IsAllowDepreciationAdjSameDate',
          NoYes,
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
         * Static representation of the {@link isOverrideFixedAssetCalendarDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVERRIDE_FIXED_ASSET_CALENDAR_DAYS: fieldBuilder.buildEnumField(
          'IsOverrideFixedAssetCalendarDays',
          NoYes,
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
         * Static representation of the {@link derogatoryCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEROGATORY_CALCULATION: fieldBuilder.buildEdmTypeField(
          'DerogatoryCalculation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD: fieldBuilder.buildEnumField(
          'RoundingMethod',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link expectedScrapPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_SCRAP_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ExpectedScrapPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link roundOffDepreciationReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_OFF_DEPRECIATION_REPORTING_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'RoundOffDepreciationReportingCurrency',
            'Edm.Decimal',
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
         * Static representation of the {@link allowNetBookValueHigherThanAcquisitionCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NET_BOOK_VALUE_HIGHER_THAN_ACQUISITION_COSTS:
          fieldBuilder.buildEnumField(
            'AllowNetBookValueHigherThanAcquisitionCosts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link referencedValueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCED_VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ReferencedValueModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leaveNetBookValueAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_NET_BOOK_VALUE_AT: fieldBuilder.buildEdmTypeField(
          'LeaveNetBookValueAt',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDepreciationRequiredInDisposal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPRECIATION_REQUIRED_IN_DISPOSAL: fieldBuilder.buildEnumField(
          'IsDepreciationRequiredInDisposal',
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
         * Static representation of the {@link acceleratedDepreciationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepreciationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPositiveDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSITIVE_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsPositiveDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link actionForAcquisitionOnJanuary1St} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_FOR_ACQUISITION_ON_JANUARY_1_ST: fieldBuilder.buildEnumField(
          'ActionForAcquisitionOnJanuary1st',
          AssetAcquisitionOnFirstDayCheckTypeJp,
          true
        ),
        /**
         * Static representation of the {@link assetWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_WORKING_DAYS: fieldBuilder.buildEdmTypeField(
          'AssetWorkingDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link createDepreciationAdjustmentsWithBasisAdjustments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DEPRECIATION_ADJUSTMENTS_WITH_BASIS_ADJUSTMENTS:
          fieldBuilder.buildEnumField(
            'CreateDepreciationAdjustmentsWithBasisAdjustments',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link derogatoryTaxModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEROGATORY_TAX_MODEL: fieldBuilder.buildEnumField(
          'DerogatoryTaxModel',
          NoYes,
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
         * Static representation of the {@link allowNegativeNetBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NEGATIVE_NET_BOOK_VALUE: fieldBuilder.buildEnumField(
          'AllowNegativeNetBookValue',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValueModelSetups)
      };
    }

    return this._schema;
  }
}
