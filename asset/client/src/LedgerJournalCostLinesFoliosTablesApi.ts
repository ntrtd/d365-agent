/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerJournalCostLinesFoliosTables } from './LedgerJournalCostLinesFoliosTables';
import { LedgerJournalCostLinesFoliosTablesRequestBuilder } from './LedgerJournalCostLinesFoliosTablesRequestBuilder';
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
export class LedgerJournalCostLinesFoliosTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LedgerJournalCostLinesFoliosTables<DeSerializersT>,
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
  ): LedgerJournalCostLinesFoliosTablesApi<DeSerializersT> {
    return new LedgerJournalCostLinesFoliosTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerJournalCostLinesFoliosTables;

  requestBuilder(): LedgerJournalCostLinesFoliosTablesRequestBuilder<DeSerializersT> {
    return new LedgerJournalCostLinesFoliosTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerJournalCostLinesFoliosTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerJournalCostLinesFoliosTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerJournalCostLinesFoliosTables<DeSerializersT>,
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
    typeof LedgerJournalCostLinesFoliosTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerJournalCostLinesFoliosTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerJournalCostLinesFoliosTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      LedgerJournalCostLinesFoliosTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalCostLinesFoliosTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_FOLIO_ID: OrderableEdmTypeField<
      LedgerJournalCostLinesFoliosTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_TRANSACTION_LINE_NUMBER: OrderableEdmTypeField<
      LedgerJournalCostLinesFoliosTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LedgerJournalCostLinesFoliosTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LedgerJournalCostLinesFoliosTables<DeSerializers>>;
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
         * Static representation of the {@link shipFolioId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FOLIO_ID: fieldBuilder.buildEdmTypeField(
          'ShipFolioId',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', LedgerJournalCostLinesFoliosTables)
      };
    }

    return this._schema;
  }
}
