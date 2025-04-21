/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillAllocItemStandaloneSellingPrices } from './SubBillAllocItemStandaloneSellingPrices';
import { SubBillAllocItemStandaloneSellingPricesRequestBuilder } from './SubBillAllocItemStandaloneSellingPricesRequestBuilder';
import { InventPostingItemCode } from './InventPostingItemCode';
import { NoYes } from './NoYes';
import { SubBillAllocStandaloneSellingPriceOrigin } from './SubBillAllocStandaloneSellingPriceOrigin';
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
export class SubBillAllocItemStandaloneSellingPricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillAllocItemStandaloneSellingPrices<DeSerializersT>,
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
  ): SubBillAllocItemStandaloneSellingPricesApi<DeSerializersT> {
    return new SubBillAllocItemStandaloneSellingPricesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillAllocItemStandaloneSellingPrices;

  requestBuilder(): SubBillAllocItemStandaloneSellingPricesRequestBuilder<DeSerializersT> {
    return new SubBillAllocItemStandaloneSellingPricesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillAllocItemStandaloneSellingPrices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillAllocItemStandaloneSellingPrices<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillAllocItemStandaloneSellingPrices<DeSerializersT>,
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
    typeof SubBillAllocItemStandaloneSellingPrices,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillAllocItemStandaloneSellingPrices,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_CODE: EnumField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      InventPostingItemCode,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVENUE_SPLIT: EnumField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_ITEM: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STANDALONE_SELLING_PRICE: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDALONE_SELLING_PRICE_ORIGIN: EnumField<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>,
      DeSerializersT,
      SubBillAllocStandaloneSellingPriceOrigin,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SubBillAllocItemStandaloneSellingPrices<DeSerializers>
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEnumField(
          'ItemCode',
          InventPostingItemCode,
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
         * Static representation of the {@link revenueSplit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_SPLIT: fieldBuilder.buildEnumField('RevenueSplit', NoYes, true),
        /**
         * Static representation of the {@link parentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ITEM: fieldBuilder.buildEdmTypeField(
          'ParentItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link standaloneSellingPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDALONE_SELLING_PRICE: fieldBuilder.buildEdmTypeField(
          'StandaloneSellingPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standaloneSellingPriceOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDALONE_SELLING_PRICE_ORIGIN: fieldBuilder.buildEnumField(
          'StandaloneSellingPriceOrigin',
          SubBillAllocStandaloneSellingPriceOrigin,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillAllocItemStandaloneSellingPrices)
      };
    }

    return this._schema;
  }
}
