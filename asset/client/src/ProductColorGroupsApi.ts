/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductColorGroups } from './ProductColorGroups';
import { ProductColorGroupsRequestBuilder } from './ProductColorGroupsRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { ProductColorGroupLinesApi } from './ProductColorGroupLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductColorGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductColorGroups<DeSerializersT>, DeSerializersT>
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
  ): ProductColorGroupsApi<DeSerializersT> {
    return new ProductColorGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      ProductColorGroups<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productColorGroupLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP_LINES: OneToManyLink<
      ProductColorGroups<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      ProductColorGroupLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTS: new OneToManyLink('Products', this, linkedApis[0]),
      PRODUCT_COLOR_GROUP_LINES: new OneToManyLink(
        'ProductColorGroupLines',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductColorGroups;

  requestBuilder(): ProductColorGroupsRequestBuilder<DeSerializersT> {
    return new ProductColorGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductColorGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductColorGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductColorGroups<DeSerializersT>,
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
    typeof ProductColorGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductColorGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_ID: OrderableEdmTypeField<
      ProductColorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DESCRIPTION: OrderableEdmTypeField<
      ProductColorGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      ProductColorGroups<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productColorGroupLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP_LINES: OneToManyLink<
      ProductColorGroups<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductColorGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GroupDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductColorGroups)
      };
    }

    return this._schema;
  }
}
