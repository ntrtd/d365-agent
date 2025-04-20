/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransDiscountedMeta } from './RetailTransDiscountedMeta';
import { RetailTransDiscountedMetaRequestBuilder } from './RetailTransDiscountedMetaRequestBuilder';
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
export class RetailTransDiscountedMetaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransDiscountedMeta<DeSerializersT>, DeSerializersT>
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
  ): RetailTransDiscountedMetaApi<DeSerializersT> {
    return new RetailTransDiscountedMetaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransDiscountedMeta;

  requestBuilder(): RetailTransDiscountedMetaRequestBuilder<DeSerializersT> {
    return new RetailTransDiscountedMetaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransDiscountedMeta<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransDiscountedMeta<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransDiscountedMeta<DeSerializersT>,
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
    typeof RetailTransDiscountedMeta,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransDiscountedMeta,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DISCOUNT_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    YEAR_OFFSET: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETAIL_CHANNEL_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MONTH_GREGORIAN_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYEE_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCOUNT_REC_ID: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUM_OF_TRANSACTIONS: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NUM_OF_GOODS: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DISCOUNT_NAME: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUM_OF_ITEM_LINES: OrderableEdmTypeField<
      RetailTransDiscountedMeta<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransDiscountedMeta<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link discountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'DiscountId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link discountRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_REC_ID: fieldBuilder.buildEdmTypeField(
          'DiscountRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link numOfTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUM_OF_TRANSACTIONS: fieldBuilder.buildEdmTypeField(
          'NumOfTransactions',
          'Edm.Int64',
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
         * Static representation of the {@link discountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'DiscountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountAmount',
          'Edm.Decimal',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransDiscountedMeta)
      };
    }

    return this._schema;
  }
}
