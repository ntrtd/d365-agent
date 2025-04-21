/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStatementTransBiEntities } from './RetailStatementTransBiEntities';
import { RetailStatementTransBiEntitiesRequestBuilder } from './RetailStatementTransBiEntitiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailStatementTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailStatementTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): RetailStatementTransBiEntitiesApi<DeSerializersT> {
    return new RetailStatementTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailStatementTransBiEntities;

  requestBuilder(): RetailStatementTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailStatementTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailStatementTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailStatementTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStatementTransBiEntities<DeSerializersT>,
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
    typeof RetailStatementTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStatementTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATEMENT_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORE_EXCH_RATE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTED_AMOUNT_MST: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORE_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_SHIFT_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIFFERENCE_AMOUNT_MST: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_AMOUNT_STORE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIFFERENCE_AMOUNT_STORE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAFE_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAFE_AMOUNT_STORE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANKED_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAFE_AMOUNT_MST: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANKED_AMOUNT_STORE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATEMENT_CODE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_LATER_RETURNED_AMOUNT_CUR_RU: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_FEE_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTED_AMOUNT_STORE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BANKED_AMOUNT_MST: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANS_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTED_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CHANGE_TENDER: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_INVOICE_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_INVOICE_AMOUNT_MST: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARD_TYPE_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_TYPE_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIFFERENCE_AMOUNT: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTED_DATE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_AMOUNT_IN_MST: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADDED_TO_DRAWER: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMOVED_FROM_DRAWER: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLICATION_COUNTER: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IN_DRAWER_AT_END_OF_DAY: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REAL_EXCH_RATE: OrderableEdmTypeField<
      RetailStatementTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailStatementTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link statementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_ID: fieldBuilder.buildEdmTypeField(
          'statementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'lineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storeExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'storeExchRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countedAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'countedAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_ID: fieldBuilder.buildEdmTypeField('storeId', 'Edm.String', true),
        /**
         * Static representation of the {@link uniqueShiftId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_SHIFT_ID: fieldBuilder.buildEdmTypeField(
          'uniqueShiftId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link differenceAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFFERENCE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'differenceAmountMST',
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
         * Static representation of the {@link transAmountStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_AMOUNT_STORE: fieldBuilder.buildEdmTypeField(
          'transAmountStore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link differenceAmountStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFFERENCE_AMOUNT_STORE: fieldBuilder.buildEdmTypeField(
          'differenceAmountStore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link safeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'safeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link safeAmountStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_AMOUNT_STORE: fieldBuilder.buildEdmTypeField(
          'safeAmountStore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'bankedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link safeAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'safeAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankedAmountStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKED_AMOUNT_STORE: fieldBuilder.buildEdmTypeField(
          'bankedAmountStore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link statementCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATEMENT_CODE: fieldBuilder.buildEdmTypeField(
          'statementCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'terminalId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashLaterReturnedAmountCurRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_LATER_RETURNED_AMOUNT_CUR_RU: fieldBuilder.buildEdmTypeField(
          'CashLaterReturnedAmountCur_RU',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardFeeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_FEE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'cardFeeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countedAmountStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_AMOUNT_STORE: fieldBuilder.buildEdmTypeField(
          'countedAmountStore',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link bankedAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANKED_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'bankedAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'transAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'countedAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link changeTender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_TENDER: fieldBuilder.buildEdmTypeField(
          'changeTender',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderInvoiceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_INVOICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'orderInvoiceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderInvoiceAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_INVOICE_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'orderInvoiceAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cardTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'cardTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'tenderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link differenceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIFFERENCE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'differenceAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE: fieldBuilder.buildEdmTypeField(
          'postedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transAmountInMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_AMOUNT_IN_MST: fieldBuilder.buildEdmTypeField(
          'transAmountInMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link addedToDrawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDED_TO_DRAWER: fieldBuilder.buildEdmTypeField(
          'addedToDrawer',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link staffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_ID: fieldBuilder.buildEdmTypeField('staffId', 'Edm.String', true),
        /**
         * Static representation of the {@link removedFromDrawer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMOVED_FROM_DRAWER: fieldBuilder.buildEdmTypeField(
          'removedFromDrawer',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link replicationCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER: fieldBuilder.buildEdmTypeField(
          'replicationCounter',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link inDrawerAtEndOfDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_DRAWER_AT_END_OF_DAY: fieldBuilder.buildEdmTypeField(
          'inDrawerAtEndOfDay',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link realExchRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REAL_EXCH_RATE: fieldBuilder.buildEdmTypeField(
          'realExchRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStatementTransBiEntities)
      };
    }

    return this._schema;
  }
}
