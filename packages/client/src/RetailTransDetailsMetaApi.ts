/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransDetailsMeta } from './RetailTransDetailsMeta';
import { RetailTransDetailsMetaRequestBuilder } from './RetailTransDetailsMetaRequestBuilder';
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
export class RetailTransDetailsMetaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTransDetailsMeta<DeSerializersT>, DeSerializersT>
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
  ): RetailTransDetailsMetaApi<DeSerializersT> {
    return new RetailTransDetailsMetaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransDetailsMeta;

  requestBuilder(): RetailTransDetailsMetaRequestBuilder<DeSerializersT> {
    return new RetailTransDetailsMetaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransDetailsMeta<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransDetailsMeta<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransDetailsMeta<DeSerializersT>,
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
    typeof RetailTransDetailsMeta,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransDetailsMeta,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    YEAR_OFFSET: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MONTH_GREGORIAN_ID: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_GOODS: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUM_OF_ITEM_LINES: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSACTION_AMOUNT_INCL_TAX: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_AMOUNT: OrderableEdmTypeField<
      RetailTransDetailsMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransDetailsMeta<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link yearOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OFFSET: fieldBuilder.buildEdmTypeField(
          'YearOffset',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
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
         * Static representation of the {@link monthGregorianId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH_GREGORIAN_ID: fieldBuilder.buildEdmTypeField(
          'MonthGregorianId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link terminalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_ID: fieldBuilder.buildEdmTypeField(
          'TerminalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numOfGoods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_GOODS: fieldBuilder.buildEdmTypeField(
          'NumOfGoods',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link numOfItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_ITEM_LINES: fieldBuilder.buildEdmTypeField(
          'NumOfItemLines',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link transactionAmountInclTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_AMOUNT_INCL_TAX: fieldBuilder.buildEdmTypeField(
          'TransactionAmountInclTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transactionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TransactionAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransDetailsMeta)
      };
    }

    return this._schema;
  }
}
