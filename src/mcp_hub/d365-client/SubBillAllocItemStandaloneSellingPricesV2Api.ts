/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillAllocItemStandaloneSellingPricesV2 } from './SubBillAllocItemStandaloneSellingPricesV2';
import { SubBillAllocItemStandaloneSellingPricesV2RequestBuilder } from './SubBillAllocItemStandaloneSellingPricesV2RequestBuilder';
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
export class SubBillAllocItemStandaloneSellingPricesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializersT>,
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
  ): SubBillAllocItemStandaloneSellingPricesV2Api<DeSerializersT> {
    return new SubBillAllocItemStandaloneSellingPricesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillAllocItemStandaloneSellingPricesV2;

  requestBuilder(): SubBillAllocItemStandaloneSellingPricesV2RequestBuilder<DeSerializersT> {
    return new SubBillAllocItemStandaloneSellingPricesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillAllocItemStandaloneSellingPricesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillAllocItemStandaloneSellingPricesV2<DeSerializersT>,
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
    typeof SubBillAllocItemStandaloneSellingPricesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillAllocItemStandaloneSellingPricesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_CODE: EnumField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      InventPostingItemCode,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVENUE_SPLIT: EnumField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARENT_ITEM: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_VARIANT_ID: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_VARIANT: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STANDALONE_SELLING_PRICE: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDALONE_SELLING_PRICE_ORIGIN: EnumField<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>,
      DeSerializersT,
      SubBillAllocStandaloneSellingPriceOrigin,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SubBillAllocItemStandaloneSellingPricesV2<DeSerializers>
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
         * Static representation of the {@link retailVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'RetailVariantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_VARIANT: fieldBuilder.buildEdmTypeField(
          'ParentVariant',
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
        ALL_FIELDS: new AllFields(
          '*',
          SubBillAllocItemStandaloneSellingPricesV2
        )
      };
    }

    return this._schema;
  }
}
