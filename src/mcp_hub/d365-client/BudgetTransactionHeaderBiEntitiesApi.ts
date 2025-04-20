/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetTransactionHeaderBiEntities } from './BudgetTransactionHeaderBiEntities';
import { BudgetTransactionHeaderBiEntitiesRequestBuilder } from './BudgetTransactionHeaderBiEntitiesRequestBuilder';
import { BudgetTransactionWorkflowStatus } from './BudgetTransactionWorkflowStatus';
import { BudgetTransactionStatus } from './BudgetTransactionStatus';
import { BudgetTransactionType } from './BudgetTransactionType';
import { NoYes } from './NoYes';
import { HeadingSub } from './HeadingSub';
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
export class BudgetTransactionHeaderBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetTransactionHeaderBiEntities<DeSerializersT>, DeSerializersT>
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
  ): BudgetTransactionHeaderBiEntitiesApi<DeSerializersT> {
    return new BudgetTransactionHeaderBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetTransactionHeaderBiEntities;

  requestBuilder(): BudgetTransactionHeaderBiEntitiesRequestBuilder<DeSerializersT> {
    return new BudgetTransactionHeaderBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetTransactionHeaderBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetTransactionHeaderBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetTransactionHeaderBiEntities<DeSerializersT>,
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
    typeof BudgetTransactionHeaderBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetTransactionHeaderBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIMARY_LEDGER: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WORKFLOW_STATUS: EnumField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetTransactionWorkflowStatus,
      true,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetTransactionStatus,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_SOURCE_NUMBER: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUDGET_TRANSACTION_TYPE: EnumField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      BudgetTransactionType,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_MODEL_ID: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ONE_TIME_AMENDMENT: EnumField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUDGET_TRANSACTION_CODE: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUDGET_SUB_MODEL_ID: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_MODEL_TYPE: EnumField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      HeadingSub,
      true,
      true
    >;
    REASON_TABLE_REF: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUDGET_MODEL_DATA_AREA_ID: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      BudgetTransactionHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BudgetTransactionHeaderBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link primaryLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_LEDGER: fieldBuilder.buildEdmTypeField(
          'PrimaryLedger',
          'Edm.Int64',
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
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          BudgetTransactionStatus,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transferSourceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_SOURCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransferSourceNumber',
          'Edm.String',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link budgetTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'BudgetTransactionType',
          BudgetTransactionType,
          true
        ),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
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
         * Static representation of the {@link isOneTimeAmendment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ONE_TIME_AMENDMENT: fieldBuilder.buildEnumField(
          'IsOneTimeAmendment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link budgetTransactionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TRANSACTION_CODE: fieldBuilder.buildEdmTypeField(
          'BudgetTransactionCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link budgetSubModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_SUB_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'BudgetSubModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetModelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MODEL_TYPE: fieldBuilder.buildEnumField(
          'BudgetModelType',
          HeadingSub,
          true
        ),
        /**
         * Static representation of the {@link reasonTableRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_TABLE_REF: fieldBuilder.buildEdmTypeField(
          'ReasonTableRef',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link budgetModelDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MODEL_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'BudgetModelDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetTransactionHeaderBiEntities)
      };
    }

    return this._schema;
  }
}
