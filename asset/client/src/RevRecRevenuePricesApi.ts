/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RevRecRevenuePrices } from './RevRecRevenuePrices';
import { RevRecRevenuePricesRequestBuilder } from './RevRecRevenuePricesRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
import { RevRecAmountPercentList } from './RevRecAmountPercentList';
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
export class RevRecRevenuePricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RevRecRevenuePrices<DeSerializersT>, DeSerializersT>
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
  ): RevRecRevenuePricesApi<DeSerializersT> {
    return new RevRecRevenuePricesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RevRecRevenuePrices;

  requestBuilder(): RevRecRevenuePricesRequestBuilder<DeSerializersT> {
    return new RevRecRevenuePricesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RevRecRevenuePrices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RevRecRevenuePrices<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RevRecRevenuePrices<DeSerializersT>,
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
    typeof RevRecRevenuePrices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RevRecRevenuePrices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_CODE: EnumField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    AMOUNT_PERCENT_LIST: EnumField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      RevRecAmountPercentList,
      true,
      true
    >;
    ALLOCATION_PRICE: OrderableEdmTypeField<
      RevRecRevenuePrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RevRecRevenuePrices<DeSerializers>>;
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
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEnumField('ItemCode', TableGroupAll, true),
        /**
         * Static representation of the {@link amountPercentList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERCENT_LIST: fieldBuilder.buildEnumField(
          'AmountPercentList',
          RevRecAmountPercentList,
          true
        ),
        /**
         * Static representation of the {@link allocationPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PRICE: fieldBuilder.buildEdmTypeField(
          'AllocationPrice',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RevRecRevenuePrices)
      };
    }

    return this._schema;
  }
}
