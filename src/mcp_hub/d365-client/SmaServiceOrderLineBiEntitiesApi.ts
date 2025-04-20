/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SmaServiceOrderLineBiEntities } from './SmaServiceOrderLineBiEntities';
import { SmaServiceOrderLineBiEntitiesRequestBuilder } from './SmaServiceOrderLineBiEntitiesRequestBuilder';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { SmaServiceOrderStatus } from './SmaServiceOrderStatus';
import { SmaTransactionType } from './SmaTransactionType';
import { NoYes } from './NoYes';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';
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
export class SmaServiceOrderLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SmaServiceOrderLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SmaServiceOrderLineBiEntitiesApi<DeSerializersT> {
    return new SmaServiceOrderLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SmaServiceOrderLineBiEntities;

  requestBuilder(): SmaServiceOrderLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new SmaServiceOrderLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SmaServiceOrderLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SmaServiceOrderLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SmaServiceOrderLineBiEntities<DeSerializersT>,
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
    typeof SmaServiceOrderLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SmaServiceOrderLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_LINE_NUM: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_RANGE_TO: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_ACCOUNT_TYPE_EXPENSE: EnumField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ORDER_STATUS: EnumField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      SmaServiceOrderStatus,
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_SERVICE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      SmaTransactionType,
      true,
      true
    >;
    PROJ_CATEGORY_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_CALCULATED: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_TAX_ITEM_GROUP: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_RANGE_FROM: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_GROUP_EXPENSE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_ID_COST: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TIME_END_BEFORE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROJ_SALES_PRICE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TIME_SHEET_START_TIME: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_ITEM_GROUP_EXPENSE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TASK_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_EXECUTION: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_CURRENCY_CODE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TAX_GROUP: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_OBJECT_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LINE_PROPERTY_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_LINE_NUM: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SIGN_OFF: EnumField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SALES_PRICE_MODIFIED: EnumField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTIVITY_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_COST_PRICE: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TIME_SHEET_END_TIME: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SERVICE_OBJECT_RELATION_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_TRANS_TXT: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN: EnumField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      SmaServiceOrderOrigin,
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TIME_START_AFTER: OrderableEdmTypeField<
      SmaServiceOrderLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SmaServiceOrderLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link serviceOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'ServiceOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceOrderLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ServiceOrderLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dateRangeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_RANGE_TO: fieldBuilder.buildEdmTypeField(
          'DateRangeTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offsetAccountTypeExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_TYPE_EXPENSE: fieldBuilder.buildEnumField(
          'OffsetAccountTypeExpense',
          LedgerJournalAcType,
          true
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link serviceOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_STATUS: fieldBuilder.buildEnumField(
          'ServiceOrderStatus',
          SmaServiceOrderStatus,
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link descriptionService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_SERVICE: fieldBuilder.buildEdmTypeField(
          'DescriptionService',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SmaTransactionType,
          true
        ),
        /**
         * Static representation of the {@link projCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link dateCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_CALCULATED: fieldBuilder.buildEdmTypeField(
          'DateCalculated',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projTaxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjTaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateRangeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_RANGE_FROM: fieldBuilder.buildEdmTypeField(
          'DateRangeFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxGroupExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_EXPENSE: fieldBuilder.buildEdmTypeField(
          'TaxGroupExpense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyIdCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ID_COST: fieldBuilder.buildEdmTypeField(
          'CurrencyIdCost',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceTimeEndBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TIME_END_BEFORE: fieldBuilder.buildEdmTypeField(
          'ServiceTimeEndBefore',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link projSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link timeSheetStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_START_TIME: fieldBuilder.buildEdmTypeField(
          'TimeSheetStartTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link taxItemGroupExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP_EXPENSE: fieldBuilder.buildEdmTypeField(
          'TaxItemGroupExpense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link serviceTaskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TASK_ID: fieldBuilder.buildEdmTypeField(
          'ServiceTaskId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateExecution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_EXECUTION: fieldBuilder.buildEdmTypeField(
          'DateExecution',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ProjCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ServiceObjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'AgreementLineNum',
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
         * Static representation of the {@link signOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_OFF: fieldBuilder.buildEnumField('SignOff', NoYes, true),
        /**
         * Static representation of the {@link isSalesPriceModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALES_PRICE_MODIFIED: fieldBuilder.buildEnumField(
          'IsSalesPriceModified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link activityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'ActivityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link projCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'ProjCostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link worker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER: fieldBuilder.buildEdmTypeField('Worker', 'Edm.Int64', false),
        /**
         * Static representation of the {@link timeSheetEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_SHEET_END_TIME: fieldBuilder.buildEdmTypeField(
          'TimeSheetEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link serviceObjectRelationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_OBJECT_RELATION_ID: fieldBuilder.buildEdmTypeField(
          'ServiceObjectRelationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'AgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projTransTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_TXT: fieldBuilder.buildEdmTypeField(
          'ProjTransTxt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEnumField(
          'Origin',
          SmaServiceOrderOrigin,
          true
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
         * Static representation of the {@link serviceTimeStartAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TIME_START_AFTER: fieldBuilder.buildEdmTypeField(
          'ServiceTimeStartAfter',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SmaServiceOrderLineBiEntities)
      };
    }

    return this._schema;
  }
}
