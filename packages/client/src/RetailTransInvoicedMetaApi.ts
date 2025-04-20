/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransInvoicedMeta } from './RetailTransInvoicedMeta';
import { RetailTransInvoicedMetaRequestBuilder } from './RetailTransInvoicedMetaRequestBuilder';
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
export class RetailTransInvoicedMetaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTransInvoicedMeta<DeSerializersT>, DeSerializersT>
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
  ): RetailTransInvoicedMetaApi<DeSerializersT> {
    return new RetailTransInvoicedMetaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransInvoicedMeta;

  requestBuilder(): RetailTransInvoicedMetaRequestBuilder<DeSerializersT> {
    return new RetailTransInvoicedMetaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransInvoicedMeta<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransInvoicedMeta<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransInvoicedMeta<DeSerializersT>,
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
    typeof RetailTransInvoicedMeta,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransInvoicedMeta,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    YEAR_OFFSET: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MONTH_GREGORIAN_ID: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICED_AMOUNT: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_TAX_AMOUNT: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_INVOICES: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COGS: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_GOODS: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_ITEM_LINES: OrderableEdmTypeField<
      RetailTransInvoicedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransInvoicedMeta<DeSerializers>>;
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
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeId',
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
         * Static representation of the {@link retailChannelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'RetailChannelId',
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
         * Static representation of the {@link monthGregorianId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH_GREGORIAN_ID: fieldBuilder.buildEdmTypeField(
          'MonthGregorianId',
          'Edm.Int64',
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
         * Static representation of the {@link invoicedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoicedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoicedTaxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoicedTaxAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numOfInvoices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_INVOICES: fieldBuilder.buildEdmTypeField(
          'NumOfInvoices',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link cogs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COGS: fieldBuilder.buildEdmTypeField('COGS', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link numOfGoods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_GOODS: fieldBuilder.buildEdmTypeField(
          'NumOfGoods',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numOfItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_ITEM_LINES: fieldBuilder.buildEdmTypeField(
          'NumOfItemLines',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransInvoicedMeta)
      };
    }

    return this._schema;
  }
}
