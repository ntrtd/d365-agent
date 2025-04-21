/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetParameters } from './AssetParameters';
import { AssetParametersRequestBuilder } from './AssetParametersRequestBuilder';
import { AssetParametersProposalJournalNamesApi } from './AssetParametersProposalJournalNamesApi';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { FixedAssetPostingProfilesApi } from './FixedAssetPostingProfilesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { AssetSaleBasisIn } from './AssetSaleBasisIn';
import { AssetDepreciationCatchUpIntervalJp } from './AssetDepreciationCatchUpIntervalJp';
import { AssetAssemblingReservation } from './AssetAssemblingReservation';
import { AssetAccountingStandardJp } from './AssetAccountingStandardJp';
import { AssetAcceleratedDepCalcMethodJp } from './AssetAcceleratedDepCalcMethodJp';
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
export class AssetParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetParameters<DeSerializersT>, DeSerializersT>
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
  ): AssetParametersApi<DeSerializersT> {
    return new AssetParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetParameterProposalJournalNameParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME_PARAMETERS: OneToManyLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      AssetParametersProposalJournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParmeterDefaultValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARMETER_DEFAULT_VALUE_MODEL: OneToOneLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_POSTING_PROFILE: OneToOneLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetParametersProposalJournalNamesApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>,
      FixedAssetPostingProfilesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME_PARAMETERS: new OneToManyLink(
        'AssetParameterProposalJournalNameParameters',
        this,
        linkedApis[0]
      ),
      ASSET_PARMETER_DEFAULT_VALUE_MODEL: new OneToOneLink(
        'AssetParmeterDefaultValueModel',
        this,
        linkedApis[1]
      ),
      FIXED_ASSET_POSTING_PROFILE: new OneToOneLink(
        'FixedAssetPostingProfile',
        this,
        linkedApis[2]
      ),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AssetParameters;

  requestBuilder(): AssetParametersRequestBuilder<DeSerializersT> {
    return new AssetParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AssetParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AssetParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AUTO_NUMBER_ASSETS: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_JOURNAL_ID: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCT_CASH_DISCOUNT: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_BOOKS_IN_ACQUISITION_PROPOSAL_JOURNAL: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_SPECIAL_DEPRECIATION_BALANCE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_SALE_BASIS: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      AssetSaleBasisIn,
      true,
      true
    >;
    ACCELERATED_DEPRECIATION_RATE_THRESHOLD: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WRITE_UP_ADJUSTMENT: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_ID: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVISION_FOR_RESERVE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BAR_CODE_EQUALS_FIXED_ASSET_NUMBER: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSET_GROUP_DEPRECIATION_THRESHOLD: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATE_PRORATED_DEPRECIATION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_ACQUISITION_VALUE_TO_AVAIL_FULL_DEPRECIATION: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_INCOME_TAX_ACT_DEPRECIATION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESTRICT_ASSET_ACQUISITION_POSTING_TO_USER_GROUP_ID: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATE_DEPRECIATION_ADJUSTMENTS_WITH_DISPOSAL: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACQUISITION_ADJUSTMENT: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTRA_ORDINARY_DEPRECIATION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVALUATION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_VALUE_MODEL_ID: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACQUISITION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_THRESHOLD_PERCENTAGE: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DEPRECIATION_POLICY_ENABLED: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MIN_WORKING_DAYS_FOR_NON_SEASONAL_INDUSTRIES: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ARE_DEPRECIATION_METHODS_ENABLED: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPITALIZATION_THRESHOLD: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPOSAL_SALE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ICMS_CREDIT_INSTALLMENTS: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSFER_FROM_RESERVE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEROGATORY_DECREASE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION_CATCH_UP_INTERVAL: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      AssetDepreciationCatchUpIntervalJp,
      true,
      true
    >;
    INVENTORY_ASSEMBLE_AND_DISASSEMBLE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_THE_DEPRECIATION_METHOD_TO_BE_MANUALLY_CHANGED: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_DEPRECIATION_AMOUNT: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_DEPRECIATION_AMOUNT_REPORTING_CURRENCY: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_LOCATION_TRANSFER: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_FOR_ASSET_CREATION_DURING_LINE_ENTRY: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_REASONS_FOR_ASSET_CHANGES: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISPOSAL_SCRAP: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_COMPANIES_ACT_DEPRECIATION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ASSEMBLING_RESERVATION_TYPE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      AssetAssemblingReservation,
      true,
      true
    >;
    ACCOUNTING_STANDARD: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      AssetAccountingStandardJp,
      true,
      true
    >;
    DEPRECIATION_ADJUSTMENT: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IMPAIRMENT_WARNING_PERIOD: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_MAXIMUM_PERCENTAGE_FOR_REDUCING_BALANCE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WRITE_DOWN_ADJUSTMENT: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_CATCH_UP_METHOD: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCELERATED_DEPRECIATION_CALCULATION_METHOD: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      AssetAcceleratedDepCalcMethodJp,
      true,
      true
    >;
    MAX_BOOKS_IN_DEPRECIATION_PROPOSAL_JOURNAL: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_MULTIPLE_ACQUISITIONS: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_BOOKS_IN_SUM_DEPRECIATION_PROPOSAL_JOURNAL: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_FOR_UNTRANSFERRED_RESERVES_DISPLAY_VALUE: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCELERATED_DEPRECIATION_RATE_FACTOR: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATE_ASSET_DURING_RECEIPT_OR_INVOICE_POSTING: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSIDER_CAPITALIZATION_THRESHOLD: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MIN_WORKING_DAYS_FOR_SEASONAL_INDUSTRIES: OrderableEdmTypeField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_ACQUISITION_FROM_PURCHASING: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEPRECIATION: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEROGATORY_INCREASE: EnumField<
      AssetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetParameterProposalJournalNameParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME_PARAMETERS: OneToManyLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      AssetParametersProposalJournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParmeterDefaultValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARMETER_DEFAULT_VALUE_MODEL: OneToOneLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fixedAssetPostingProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIXED_ASSET_POSTING_PROFILE: OneToOneLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      FixedAssetPostingProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AssetParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetParameters<DeSerializers>>;
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
         * Static representation of the {@link autoNumberAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_NUMBER_ASSETS: fieldBuilder.buildEnumField(
          'AutoNumberAssets',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryJournalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'InventoryJournalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductCashDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCT_CASH_DISCOUNT: fieldBuilder.buildEnumField(
          'DeductCashDiscount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxBooksInAcquisitionProposalJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_BOOKS_IN_ACQUISITION_PROPOSAL_JOURNAL:
          fieldBuilder.buildEdmTypeField(
            'MaxBooksInAcquisitionProposalJournal',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link useSpecialDepreciationBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SPECIAL_DEPRECIATION_BALANCE: fieldBuilder.buildEnumField(
          'UseSpecialDepreciationBalance',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assetSaleBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_SALE_BASIS: fieldBuilder.buildEnumField(
          'AssetSaleBasis',
          AssetSaleBasisIn,
          true
        ),
        /**
         * Static representation of the {@link acceleratedDepreciationRateThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_RATE_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepreciationRateThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link writeUpAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_UP_ADJUSTMENT: fieldBuilder.buildEnumField(
          'WriteUpAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'PostingProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provisionForReserve} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVISION_FOR_RESERVE: fieldBuilder.buildEnumField(
          'ProvisionForReserve',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link barCodeEqualsFixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_EQUALS_FIXED_ASSET_NUMBER: fieldBuilder.buildEnumField(
          'BarCodeEqualsFixedAssetNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assetGroupDepreciationThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_GROUP_DEPRECIATION_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'AssetGroupDepreciationThreshold',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculateProratedDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATE_PRORATED_DEPRECIATION: fieldBuilder.buildEnumField(
          'CalculateProratedDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxAcquisitionValueToAvailFullDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ACQUISITION_VALUE_TO_AVAIL_FULL_DEPRECIATION:
          fieldBuilder.buildEdmTypeField(
            'MaxAcquisitionValueToAvailFullDepreciation',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link isIncomeTaxActDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INCOME_TAX_ACT_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsIncomeTaxActDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link restrictAssetAcquisitionPostingToUserGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_ASSET_ACQUISITION_POSTING_TO_USER_GROUP_ID:
          fieldBuilder.buildEdmTypeField(
            'RestrictAssetAcquisitionPostingToUserGroupId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link createDepreciationAdjustmentsWithDisposal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_DEPRECIATION_ADJUSTMENTS_WITH_DISPOSAL:
          fieldBuilder.buildEnumField(
            'CreateDepreciationAdjustmentsWithDisposal',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link acquisitionAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION_ADJUSTMENT: fieldBuilder.buildEnumField(
          'AcquisitionAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link extraOrdinaryDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTRA_ORDINARY_DEPRECIATION: fieldBuilder.buildEnumField(
          'ExtraOrdinaryDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revaluation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION: fieldBuilder.buildEnumField('Revaluation', NoYes, true),
        /**
         * Static representation of the {@link defaultValueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'DefaultValueModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link acquisition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUISITION: fieldBuilder.buildEnumField('Acquisition', NoYes, true),
        /**
         * Static representation of the {@link depreciationThresholdPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_THRESHOLD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'DepreciationThresholdPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDepreciationPolicyEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEPRECIATION_POLICY_ENABLED: fieldBuilder.buildEnumField(
          'IsDepreciationPolicyEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minWorkingDaysForNonSeasonalIndustries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_WORKING_DAYS_FOR_NON_SEASONAL_INDUSTRIES:
          fieldBuilder.buildEdmTypeField(
            'MinWorkingDaysForNonSeasonalIndustries',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link areDepreciationMethodsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_DEPRECIATION_METHODS_ENABLED: fieldBuilder.buildEnumField(
          'AreDepreciationMethodsEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link capitalizationThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPITALIZATION_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'CapitalizationThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link disposalSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_SALE: fieldBuilder.buildEnumField('DisposalSale', NoYes, true),
        /**
         * Static representation of the {@link icmsCreditInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ICMS_CREDIT_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'ICMSCreditInstallments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transferFromReserve} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_FROM_RESERVE: fieldBuilder.buildEnumField(
          'TransferFromReserve',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link derogatoryDecrease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEROGATORY_DECREASE: fieldBuilder.buildEnumField(
          'DerogatoryDecrease',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link depreciationCatchUpInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_CATCH_UP_INTERVAL: fieldBuilder.buildEnumField(
          'DepreciationCatchUpInterval',
          AssetDepreciationCatchUpIntervalJp,
          true
        ),
        /**
         * Static representation of the {@link inventoryAssembleAndDisassemble} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ASSEMBLE_AND_DISASSEMBLE: fieldBuilder.buildEnumField(
          'InventoryAssembleAndDisassemble',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTheDepreciationMethodToBeManuallyChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_THE_DEPRECIATION_METHOD_TO_BE_MANUALLY_CHANGED:
          fieldBuilder.buildEnumField(
            'AllowTheDepreciationMethodToBeManuallyChanged',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link minimumDepreciationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_DEPRECIATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MinimumDepreciationAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumDepreciationAmountReportingCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_DEPRECIATION_AMOUNT_REPORTING_CURRENCY:
          fieldBuilder.buildEdmTypeField(
            'MinimumDepreciationAmountReportingCurrency',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link allowLocationTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_LOCATION_TRANSFER: fieldBuilder.buildEnumField(
          'AllowLocationTransfer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link checkForAssetCreationDuringLineEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_FOR_ASSET_CREATION_DURING_LINE_ENTRY: fieldBuilder.buildEnumField(
          'CheckForAssetCreationDuringLineEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requireReasonsForAssetChanges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_REASONS_FOR_ASSET_CHANGES: fieldBuilder.buildEnumField(
          'RequireReasonsForAssetChanges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link disposalScrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_SCRAP: fieldBuilder.buildEnumField(
          'DisposalScrap',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCompaniesActDepreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPANIES_ACT_DEPRECIATION: fieldBuilder.buildEnumField(
          'IsCompaniesActDepreciation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link assemblingReservationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEMBLING_RESERVATION_TYPE: fieldBuilder.buildEnumField(
          'AssemblingReservationType',
          AssetAssemblingReservation,
          true
        ),
        /**
         * Static representation of the {@link accountingStandard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_STANDARD: fieldBuilder.buildEnumField(
          'AccountingStandard',
          AssetAccountingStandardJp,
          true
        ),
        /**
         * Static representation of the {@link depreciationAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_ADJUSTMENT: fieldBuilder.buildEnumField(
          'DepreciationAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link impairmentWarningPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPAIRMENT_WARNING_PERIOD: fieldBuilder.buildEdmTypeField(
          'ImpairmentWarningPeriod',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link checkMaximumPercentageForReducingBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_MAXIMUM_PERCENTAGE_FOR_REDUCING_BALANCE:
          fieldBuilder.buildEnumField(
            'CheckMaximumPercentageForReducingBalance',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link writeDownAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_DOWN_ADJUSTMENT: fieldBuilder.buildEnumField(
          'WriteDownAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useCatchUpMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_CATCH_UP_METHOD: fieldBuilder.buildEnumField(
          'UseCatchUpMethod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link acceleratedDepreciationCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_CALCULATION_METHOD:
          fieldBuilder.buildEnumField(
            'AcceleratedDepreciationCalculationMethod',
            AssetAcceleratedDepCalcMethodJp,
            true
          ),
        /**
         * Static representation of the {@link maxBooksInDepreciationProposalJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_BOOKS_IN_DEPRECIATION_PROPOSAL_JOURNAL:
          fieldBuilder.buildEdmTypeField(
            'MaxBooksInDepreciationProposalJournal',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link allowMultipleAcquisitions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MULTIPLE_ACQUISITIONS: fieldBuilder.buildEnumField(
          'AllowMultipleAcquisitions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxBooksInSumDepreciationProposalJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_BOOKS_IN_SUM_DEPRECIATION_PROPOSAL_JOURNAL:
          fieldBuilder.buildEdmTypeField(
            'MaxBooksInSumDepreciationProposalJournal',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link accountForUntransferredReservesDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_FOR_UNTRANSFERRED_RESERVES_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'AccountForUntransferredReservesDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link acceleratedDepreciationRateFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCELERATED_DEPRECIATION_RATE_FACTOR: fieldBuilder.buildEdmTypeField(
          'AcceleratedDepreciationRateFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link createAssetDuringReceiptOrInvoicePosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATE_ASSET_DURING_RECEIPT_OR_INVOICE_POSTING:
          fieldBuilder.buildEnumField(
            'CreateAssetDuringReceiptOrInvoicePosting',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link considerCapitalizationThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIDER_CAPITALIZATION_THRESHOLD: fieldBuilder.buildEnumField(
          'ConsiderCapitalizationThreshold',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link minWorkingDaysForSeasonalIndustries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_WORKING_DAYS_FOR_SEASONAL_INDUSTRIES:
          fieldBuilder.buildEdmTypeField(
            'MinWorkingDaysForSeasonalIndustries',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link allowAcquisitionFromPurchasing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_ACQUISITION_FROM_PURCHASING: fieldBuilder.buildEnumField(
          'AllowAcquisitionFromPurchasing',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link depreciation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION: fieldBuilder.buildEnumField('Depreciation', NoYes, true),
        /**
         * Static representation of the {@link derogatoryIncrease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEROGATORY_INCREASE: fieldBuilder.buildEnumField(
          'DerogatoryIncrease',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetParameters)
      };
    }

    return this._schema;
  }
}
