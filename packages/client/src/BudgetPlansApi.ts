/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlans } from './BudgetPlans';
import { BudgetPlansRequestBuilder } from './BudgetPlansRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { BudgetPlanWorkflowStatus } from './BudgetPlanWorkflowStatus';
import { BudgetClass } from './BudgetClass';
import { BudgetPlanStatus } from './BudgetPlanStatus';
import { NoYes } from './NoYes';
import { BudgetPlanEstimateType } from './BudgetPlanEstimateType';
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
export class BudgetPlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetPlans<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlansApi<DeSerializersT> {
    return new BudgetPlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      BudgetPlans<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_DIMENSION_COMBINATION: new OneToOneLink(
        'LedgerDimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BudgetPlans;

  requestBuilder(): BudgetPlansRequestBuilder<DeSerializersT> {
    return new BudgetPlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetPlans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetPlans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetPlans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BudgetPlans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCENARIO: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_REFERENCE_ID: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      BudgetPlanWorkflowStatus,
      true,
      true
    >;
    SOURCE_DATA_AREA_ID: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_BUDGET_PLAN: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CLASS: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      BudgetClass,
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      BudgetPlanStatus,
      true,
      true
    >;
    STAGE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_UNIT_PRICE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPOSED_ASSET: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBILITY_CENTER_PARTY_NUMBER: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSET_ID: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HISTORICAL: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESTIMATE_TYPE: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      BudgetPlanEstimateType,
      true,
      true
    >;
    IS_NEW_REQUEST: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSACTION_CURRENCY_CODE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGETING_ORGANIZATION_NAME: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_RECURRING: EnumField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERSONNEL_NAME: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY_AMOUNT: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPOSED_PROJECT: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RANK: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LEDGER_ACCOUNT_ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USER_GROUP: OrderableEdmTypeField<
      BudgetPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerDimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_DIMENSION_COMBINATION: OneToOneLink<
      BudgetPlans<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetPlans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO: fieldBuilder.buildEdmTypeField(
          'Scenario',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineReferenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_REFERENCE_ID: fieldBuilder.buildEdmTypeField(
          'LineReferenceId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          BudgetPlanWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link sourceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SourceDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentBudgetPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_BUDGET_PLAN: fieldBuilder.buildEdmTypeField(
          'ParentBudgetPlan',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT: fieldBuilder.buildEdmTypeField('Layout', 'Edm.String', true),
        /**
         * Static representation of the {@link budgetClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CLASS: fieldBuilder.buildEnumField(
          'BudgetClass',
          BudgetClass,
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          BudgetPlanStatus,
          true
        ),
        /**
         * Static representation of the {@link stage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGE: fieldBuilder.buildEdmTypeField('Stage', 'Edm.String', true),
        /**
         * Static representation of the {@link preparerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPARER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreparerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionUnitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'TransactionUnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proposedAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_ASSET: fieldBuilder.buildEdmTypeField(
          'ProposedAsset',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link responsibilityCenterPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBILITY_CENTER_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResponsibilityCenterPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_ID: fieldBuilder.buildEdmTypeField('AssetId', 'Edm.String', true),
        /**
         * Static representation of the {@link isHistorical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HISTORICAL: fieldBuilder.buildEnumField('IsHistorical', NoYes, true),
        /**
         * Static representation of the {@link estimateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE_TYPE: fieldBuilder.buildEnumField(
          'EstimateType',
          BudgetPlanEstimateType,
          true
        ),
        /**
         * Static representation of the {@link isNewRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEW_REQUEST: fieldBuilder.buildEnumField(
          'IsNewRequest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ledgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetingOrganizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGETING_ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetingOrganizationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRecurring} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RECURRING: fieldBuilder.buildEnumField('IsRecurring', NoYes, true),
        /**
         * Static representation of the {@link personnelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NAME: fieldBuilder.buildEdmTypeField(
          'PersonnelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrencyAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionCurrencyAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proposedProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_PROJECT: fieldBuilder.buildEdmTypeField(
          'ProposedProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', true),
        /**
         * Static representation of the {@link rank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANK: fieldBuilder.buildEdmTypeField('Rank', 'Edm.Int32', false),
        /**
         * Static representation of the {@link ledgerAccountAccountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountAccountStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link userGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP: fieldBuilder.buildEdmTypeField(
          'UserGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlans)
      };
    }

    return this._schema;
  }
}
