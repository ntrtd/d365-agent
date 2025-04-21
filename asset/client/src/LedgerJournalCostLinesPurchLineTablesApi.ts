/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalCostLinesPurchLineTables } from './LedgerJournalCostLinesPurchLineTables';
import { LedgerJournalCostLinesPurchLineTablesRequestBuilder } from './LedgerJournalCostLinesPurchLineTablesRequestBuilder';
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
export class LedgerJournalCostLinesPurchLineTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LedgerJournalCostLinesPurchLineTables<DeSerializersT>,
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
  ): LedgerJournalCostLinesPurchLineTablesApi<DeSerializersT> {
    return new LedgerJournalCostLinesPurchLineTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerJournalCostLinesPurchLineTables;

  requestBuilder(): LedgerJournalCostLinesPurchLineTablesRequestBuilder<DeSerializersT> {
    return new LedgerJournalCostLinesPurchLineTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalCostLinesPurchLineTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerJournalCostLinesPurchLineTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalCostLinesPurchLineTables<DeSerializersT>,
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
    typeof LedgerJournalCostLinesPurchLineTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalCostLinesPurchLineTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_ORDER_ID: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COST_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LedgerJournalCostLinesPurchLineTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LedgerJournalCostLinesPurchLineTables<DeSerializers>>;
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
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link costTransactionLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TRANSACTION_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CostTransactionLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerJournalCostLinesPurchLineTables)
      };
    }

    return this._schema;
  }
}
