/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseAssetScheduleLineBiEntities } from './AssetLeaseAssetScheduleLineBiEntities';
import { AssetLeaseAssetScheduleLineBiEntitiesRequestBuilder } from './AssetLeaseAssetScheduleLineBiEntitiesRequestBuilder';
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
export class AssetLeaseAssetScheduleLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializersT>,
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
  ): AssetLeaseAssetScheduleLineBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseAssetScheduleLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseAssetScheduleLineBiEntities;

  requestBuilder(): AssetLeaseAssetScheduleLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseAssetScheduleLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseAssetScheduleLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseAssetScheduleLineBiEntities<DeSerializersT>,
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
    typeof AssetLeaseAssetScheduleLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseAssetScheduleLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMORTIZATION_EXPENSE_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMORTIZATION_EXPENSE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BEGINNING_NET_BOOK_VALUE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_INTEREST_EXPENSE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCUMULATED_AMORTIZATION_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BEGINNING_NET_BOOK_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMORTIZATION_EXPENSE_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVERSED: EnumField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIN_TAG: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LATEST_JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_POSTED: EnumField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_LINE_DATE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NET_BOOK_VALUE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BEGINNING_NET_BOOK_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCUMULATED_AMORTIZATION: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_CREATED: EnumField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NET_BOOK_REPORTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCUMULATED_AMORTIZATION_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_BOOK_ACCOUNTING_AMOUNT: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SL_EXPENSE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERIOD: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERIOD_END_DATE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSET_SCHEDULE: OrderableEdmTypeField<
      AssetLeaseAssetScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AssetLeaseAssetScheduleLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amortizationExpenseAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMORTIZATION_EXPENSE_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AmortizationExpenseAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amortizationExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMORTIZATION_EXPENSE: fieldBuilder.buildEdmTypeField(
          'AmortizationExpense',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link beginningNetBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_NET_BOOK_VALUE: fieldBuilder.buildEdmTypeField(
          'BeginningNetBookValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodInterestExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INTEREST_EXPENSE: fieldBuilder.buildEdmTypeField(
          'PeriodInterestExpense',
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
         * Static representation of the {@link accumulatedAmortizationReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_AMORTIZATION_REPORTING_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'AccumulatedAmortizationReportingAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link beginningNetBookAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_NET_BOOK_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BeginningNetBookAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amortizationExpenseReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMORTIZATION_EXPENSE_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AmortizationExpenseReportingAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link netBookValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_VALUE: fieldBuilder.buildEdmTypeField(
          'NetBookValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link beginningNetBookReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_NET_BOOK_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'BeginningNetBookReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accumulatedAmortization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_AMORTIZATION: fieldBuilder.buildEdmTypeField(
          'AccumulatedAmortization',
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
         * Static representation of the {@link netBookReportingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_REPORTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetBookReportingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accumulatedAmortizationAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCUMULATED_AMORTIZATION_ACCOUNTING_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'AccumulatedAmortizationAccountingAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link netBookAccountingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_BOOK_ACCOUNTING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetBookAccountingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link slExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SL_EXPENSE: fieldBuilder.buildEdmTypeField(
          'SLExpense',
          'Edm.Decimal',
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
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
        /**
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEdmTypeField('Period', 'Edm.Int32', false),
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
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.Int32',
          false
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
         * Static representation of the {@link periodEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_END_DATE: fieldBuilder.buildEdmTypeField(
          'PeriodEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assetSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_SCHEDULE: fieldBuilder.buildEdmTypeField(
          'AssetSchedule',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetLeaseAssetScheduleLineBiEntities)
      };
    }

    return this._schema;
  }
}
