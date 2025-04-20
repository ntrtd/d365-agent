/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetRegisterEntryHeaders } from './BudgetRegisterEntryHeaders';
import { BudgetRegisterEntryHeadersRequestBuilder } from './BudgetRegisterEntryHeadersRequestBuilder';
import { BudgetRegisterEntryLinesApi } from './BudgetRegisterEntryLinesApi';
import { BudgetRegisterEntriesApi } from './BudgetRegisterEntriesApi';
import { BudgetModelsApi } from './BudgetModelsApi';
import { LedgersApi } from './LedgersApi';
import { BudgetCodesApi } from './BudgetCodesApi';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { NoYes } from './NoYes';
import { BudgetTransactionType } from './BudgetTransactionType';
import { BudgetTransactionStatus } from './BudgetTransactionStatus';
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
export class BudgetRegisterEntryHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetRegisterEntryHeaders<DeSerializersT>, DeSerializersT>
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
  ): BudgetRegisterEntryHeadersApi<DeSerializersT> {
    return new BudgetRegisterEntryHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryLineEntryHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_LINE_ENTRY_HEADER: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryBudgetRegisterEntryHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_BUDGET_REGISTER_ENTRY_HEADER: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODELS: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_LEDGER: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CODES: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetRegisterEntryLinesApi<DeSerializersT>,
      BudgetRegisterEntriesApi<DeSerializersT>,
      BudgetModelsApi<DeSerializersT>,
      LedgersApi<DeSerializersT>,
      BudgetCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_REGISTER_ENTRY_LINE_ENTRY_HEADER: new OneToOneLink(
        'BudgetRegisterEntryLineEntryHeader',
        this,
        linkedApis[0]
      ),
      BUDGET_REGISTER_ENTRY_BUDGET_REGISTER_ENTRY_HEADER: new OneToOneLink(
        'BudgetRegisterEntryBudgetRegisterEntryHeader',
        this,
        linkedApis[1]
      ),
      BUDGET_MODELS: new OneToOneLink('BudgetModels', this, linkedApis[2]),
      PRIMARY_LEDGER: new OneToOneLink('PrimaryLedger', this, linkedApis[3]),
      BUDGET_CODES: new OneToOneLink('BudgetCodes', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = BudgetRegisterEntryHeaders;

  requestBuilder(): BudgetRegisterEntryHeadersRequestBuilder<DeSerializersT> {
    return new BudgetRegisterEntryHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetRegisterEntryHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetRegisterEntryHeaders<DeSerializersT>,
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
    typeof BudgetRegisterEntryHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetRegisterEntryHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTRY_NUMBER: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      BudgetTransactionWorkflowStatus,
      true,
      true
    >;
    DEFAULT_DATE: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ONE_TIME_REVISION: EnumField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_TYPE: EnumField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      BudgetTransactionType,
      true,
      true
    >;
    SOURCE_DOCUMENT: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_BUDGET_TOTAL: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BUDGET_MODEL_ID: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CODE: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      BudgetTransactionStatus,
      true,
      true
    >;
    EXPENSE_BUDGET_TOTAL: OrderableEdmTypeField<
      BudgetRegisterEntryHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryLineEntryHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_LINE_ENTRY_HEADER: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntryLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetRegisterEntryBudgetRegisterEntryHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_REGISTER_ENTRY_BUDGET_REGISTER_ENTRY_HEADER: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetRegisterEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetModels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MODELS: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link primaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRIMARY_LEDGER: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CODES: OneToOneLink<
      BudgetRegisterEntryHeaders<DeSerializersT>,
      DeSerializersT,
      BudgetCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetRegisterEntryHeaders<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_NUMBER: fieldBuilder.buildEdmTypeField(
          'EntryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workflowStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_STATUS: fieldBuilder.buildEnumField(
          'WorkflowStatus',
          BudgetTransactionWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link defaultDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link oneTimeRevision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONE_TIME_REVISION: fieldBuilder.buildEnumField(
          'OneTimeRevision',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TYPE: fieldBuilder.buildEnumField(
          'BudgetType',
          BudgetTransactionType,
          true
        ),
        /**
         * Static representation of the {@link sourceDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'SourceDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueBudgetTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_BUDGET_TOTAL: fieldBuilder.buildEdmTypeField(
          'RevenueBudgetTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link budgetModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'BudgetModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CODE: fieldBuilder.buildEdmTypeField(
          'BudgetCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BudgetTransactionStatus,
          true
        ),
        /**
         * Static representation of the {@link expenseBudgetTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_BUDGET_TOTAL: fieldBuilder.buildEdmTypeField(
          'ExpenseBudgetTotal',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetRegisterEntryHeaders)
      };
    }

    return this._schema;
  }
}
