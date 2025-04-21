/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseExecutoryCostScheduleLineBiEntities } from './AssetLeaseExecutoryCostScheduleLineBiEntities';
import { AssetLeaseExecutoryCostScheduleLineBiEntitiesRequestBuilder } from './AssetLeaseExecutoryCostScheduleLineBiEntitiesRequestBuilder';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { AssetLeaseAcType } from './AssetLeaseAcType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AssetLeaseExecutoryCostScheduleLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializersT>,
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
  ): AssetLeaseExecutoryCostScheduleLineBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseExecutoryCostScheduleLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseExecutoryCostScheduleLineBiEntities;

  requestBuilder(): AssetLeaseExecutoryCostScheduleLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseExecutoryCostScheduleLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializersT>,
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
    typeof AssetLeaseExecutoryCostScheduleLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseExecutoryCostScheduleLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXECUTORY_COST_SCHEDULE: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OFFSET_ACCOUNT_TYPE: EnumField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    PAYMENT_DATE: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_AC_TYPE: EnumField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseAcType,
      true,
      true
    >;
    OFFSET_LEDGER_DIMENSION: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    REVERSED: EnumField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LATEST_JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_POSTED: EnumField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_LINE_DATE: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRESENT_VALUE: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_AMOUNT: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_CREATED: EnumField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPENSE_TYPE: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXECUTORY_COST_CONTRACT: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetLeaseExecutoryCostScheduleLineBiEntities<DeSerializers>
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
         * Static representation of the {@link executoryCostSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTORY_COST_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'ExecutoryCostSchedule',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link offsetAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'OffsetAccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link paymentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_DATE: fieldBuilder.buildEdmTypeField(
          'PaymentDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link leaseAcType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_AC_TYPE: fieldBuilder.buildEnumField(
          'LeaseACType',
          AssetLeaseAcType,
          true
        ),
        /**
         * Static representation of the {@link offsetLedgerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_LEDGER_DIMENSION: fieldBuilder.buildEdmTypeField(
          'OffsetLedgerDimension',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link reversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED: fieldBuilder.buildEnumField('Reversed', NoYes, true),
        /**
         * Static representation of the {@link finTag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIN_TAG: fieldBuilder.buildEdmTypeField('FinTag', 'Edm.Int64', false),
        /**
         * Static representation of the {@link latestJournalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATEST_JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'LatestJournalNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_POSTED: fieldBuilder.buildEnumField(
          'JournalPosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleLineDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduleLineDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link presentValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRESENT_VALUE: fieldBuilder.buildEdmTypeField(
          'PresentValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaymentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalCreated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_CREATED: fieldBuilder.buildEnumField(
          'JournalCreated',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
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
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExpenseType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link executoryCostContract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTORY_COST_CONTRACT: fieldBuilder.buildEdmTypeField(
          'ExecutoryCostContract',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetLeaseExecutoryCostScheduleLineBiEntities
        )
      };
    }

    return this._schema;
  }
}
