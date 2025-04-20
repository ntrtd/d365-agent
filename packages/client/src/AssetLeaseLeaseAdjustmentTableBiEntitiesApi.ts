/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseLeaseAdjustmentTableBiEntities } from './AssetLeaseLeaseAdjustmentTableBiEntities';
import { AssetLeaseLeaseAdjustmentTableBiEntitiesRequestBuilder } from './AssetLeaseLeaseAdjustmentTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { NoYesCombo } from './NoYesCombo';
import { AssetLeaseAnnuityType } from './AssetLeaseAnnuityType';
import { AssetLeaseCompoundingInterval } from './AssetLeaseCompoundingInterval';
import { AssetLeaseWorkflowStatus } from './AssetLeaseWorkflowStatus';
import { AssetLeaseLeaseAdjustmentStatus } from './AssetLeaseLeaseAdjustmentStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetLeaseLeaseAdjustmentTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): AssetLeaseLeaseAdjustmentTableBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseLeaseAdjustmentTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseLeaseAdjustmentTableBiEntities;

  requestBuilder(): AssetLeaseLeaseAdjustmentTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseLeaseAdjustmentTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializersT>,
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
    typeof AssetLeaseLeaseAdjustmentTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseLeaseAdjustmentTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_COUNTER: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_DECREASES: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MONTHS_OF_USEFUL_LIFE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSFER_OWNERSHIP: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    RESIDUAL_VALUE_GUARANTEE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_RATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAIR_VALUE_OF_ASSET: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BORROWING_RATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_DATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MONTHS_BTW_REVALUATION: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INDEX_RATE_PERCENT: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ANNUITY_TYPE: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseAnnuityType,
      true,
      true
    >;
    RATE_INCREASE_CAP: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INDEX_TYPE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_DESCRIPTION: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTEREST_RATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PREPAYMENTS: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BREAKDOWN_PAYMENT_AMOUNT: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INITIAL_DIRECT_COST: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISMANTLING_COSTS: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOG: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MANUALLY_REVALUE: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVALUATION_DATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPOUNDING_INTERVAL: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseCompoundingInterval,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_INCENTIVES: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseWorkflowStatus,
      true,
      true
    >;
    ADJUSTMENT_STATUS: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseLeaseAdjustmentStatus,
      true,
      true
    >;
    LEASE_GROUP: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED_RENT_CARRYOVER: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WIZARD_TAB_INDEX: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_ASSET: EnumField<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetLeaseLeaseAdjustmentTableBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField(
          'LeaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leaseCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_COUNTER: fieldBuilder.buildEdmTypeField(
          'LeaseCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowDecreases} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_DECREASES: fieldBuilder.buildEnumField(
          'AllowDecreases',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link monthsOfUsefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_OF_USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'MonthsOfUsefulLife',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transferOwnership} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_OWNERSHIP: fieldBuilder.buildEnumField(
          'TransferOwnership',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link residualValueGuarantee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESIDUAL_VALUE_GUARANTEE: fieldBuilder.buildEdmTypeField(
          'ResidualValueGuarantee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link indexRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE: fieldBuilder.buildEdmTypeField(
          'IndexRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fairValueOfAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAIR_VALUE_OF_ASSET: fieldBuilder.buildEdmTypeField(
          'FairValueOfAsset',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link borrowingRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BORROWING_RATE: fieldBuilder.buildEdmTypeField(
          'BorrowingRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DATE: fieldBuilder.buildEdmTypeField(
          'PostingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link monthsBtwRevaluation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_BTW_REVALUATION: fieldBuilder.buildEdmTypeField(
          'MonthsBtwRevaluation',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link indexRatePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_RATE_PERCENT: fieldBuilder.buildEdmTypeField(
          'IndexRatePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link annuityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUITY_TYPE: fieldBuilder.buildEnumField(
          'AnnuityType',
          AssetLeaseAnnuityType,
          true
        ),
        /**
         * Static representation of the {@link rateIncreaseCap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_INCREASE_CAP: fieldBuilder.buildEdmTypeField(
          'RateIncreaseCap',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link indexType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEX_TYPE: fieldBuilder.buildEdmTypeField(
          'IndexType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link leaseDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LeaseDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link interestRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_RATE: fieldBuilder.buildEdmTypeField(
          'InterestRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link prepayments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPAYMENTS: fieldBuilder.buildEdmTypeField(
          'Prepayments',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link breakdownPaymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BREAKDOWN_PAYMENT_AMOUNT: fieldBuilder.buildEnumField(
          'BreakdownPaymentAmount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link initialDirectCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_DIRECT_COST: fieldBuilder.buildEdmTypeField(
          'InitialDirectCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dismantlingCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISMANTLING_COSTS: fieldBuilder.buildEdmTypeField(
          'DismantlingCosts',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link log} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOG: fieldBuilder.buildEdmTypeField('Log', 'Edm.String', true),
        /**
         * Static representation of the {@link manuallyRevalue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUALLY_REVALUE: fieldBuilder.buildEnumField(
          'ManuallyRevalue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link revaluationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVALUATION_DATE: fieldBuilder.buildEdmTypeField(
          'RevaluationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link compoundingInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPOUNDING_INTERVAL: fieldBuilder.buildEnumField(
          'CompoundingInterval',
          AssetLeaseCompoundingInterval,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link leaseIncentives} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_INCENTIVES: fieldBuilder.buildEdmTypeField(
          'LeaseIncentives',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          AssetLeaseWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link adjustmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_STATUS: fieldBuilder.buildEnumField(
          'AdjustmentStatus',
          AssetLeaseLeaseAdjustmentStatus,
          true
        ),
        /**
         * Static representation of the {@link leaseGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_GROUP: fieldBuilder.buildEdmTypeField(
          'LeaseGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferredRentCarryover} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED_RENT_CARRYOVER: fieldBuilder.buildEdmTypeField(
          'DeferredRentCarryover',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link wizardTabIndex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIZARD_TAB_INDEX: fieldBuilder.buildEdmTypeField(
          'WizardTabIndex',
          'Edm.Int32',
          false
        ),
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
         * Static representation of the {@link uniqueAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_ASSET: fieldBuilder.buildEnumField(
          'UniqueAsset',
          NoYesCombo,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLeaseLeaseAdjustmentTableBiEntities)
      };
    }

    return this._schema;
  }
}
