/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingGoodsDescriptionTables } from './ShippingGoodsDescriptionTables';
import { ShippingGoodsDescriptionTablesRequestBuilder } from './ShippingGoodsDescriptionTablesRequestBuilder';
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
export class ShippingGoodsDescriptionTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShippingGoodsDescriptionTables<DeSerializersT>, DeSerializersT>
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
  ): ShippingGoodsDescriptionTablesApi<DeSerializersT> {
    return new ShippingGoodsDescriptionTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingGoodsDescriptionTables;

  requestBuilder(): ShippingGoodsDescriptionTablesRequestBuilder<DeSerializersT> {
    return new ShippingGoodsDescriptionTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShippingGoodsDescriptionTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShippingGoodsDescriptionTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingGoodsDescriptionTables<DeSerializersT>,
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
    typeof ShippingGoodsDescriptionTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingGoodsDescriptionTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingGoodsDescriptionTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOODS_DESCRIPTION: OrderableEdmTypeField<
      ShippingGoodsDescriptionTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DETAILED_GOODS_DESCRIPTION: OrderableEdmTypeField<
      ShippingGoodsDescriptionTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShippingGoodsDescriptionTables<DeSerializers>>;
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
         * Static representation of the {@link goodsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GoodsDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link detailedGoodsDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILED_GOODS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DetailedGoodsDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingGoodsDescriptionTables)
      };
    }

    return this._schema;
  }
}
