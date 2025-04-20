/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductRatings } from './ProductRatings';
import { ProductRatingsRequestBuilder } from './ProductRatingsRequestBuilder';
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
export class ProductRatingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductRatings<DeSerializersT>, DeSerializersT>
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
  ): ProductRatingsApi<DeSerializersT> {
    return new ProductRatingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductRatings;

  requestBuilder(): ProductRatingsRequestBuilder<DeSerializersT> {
    return new ProductRatingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductRatings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductRatings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductRatings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductRatings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductRatings, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHANNEL_ID: OrderableEdmTypeField<
      ProductRatings<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      ProductRatings<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MASTER_PRODUCT_ID: OrderableEdmTypeField<
      ProductRatings<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RATING: OrderableEdmTypeField<
      ProductRatings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_RATINGS: OrderableEdmTypeField<
      ProductRatings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ProductRatings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link channelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_ID: fieldBuilder.buildEdmTypeField(
          'ChannelId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link masterProductId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'MasterProductId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEdmTypeField('Rating', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link totalRatings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_RATINGS: fieldBuilder.buildEdmTypeField(
          'TotalRatings',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductRatings)
      };
    }

    return this._schema;
  }
}
