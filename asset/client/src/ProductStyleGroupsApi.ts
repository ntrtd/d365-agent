/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStyleGroups } from './ProductStyleGroups';
import { ProductStyleGroupsRequestBuilder } from './ProductStyleGroupsRequestBuilder';
import { ProductStyleGroupLinesApi } from './ProductStyleGroupLinesApi';
import { ProductsV2Api } from './ProductsV2Api';
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
export class ProductStyleGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStyleGroups<DeSerializersT>, DeSerializersT>
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
  ): ProductStyleGroupsApi<DeSerializersT> {
    return new ProductStyleGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productStyleGroupLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINES: OneToManyLink<
      ProductStyleGroups<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      ProductStyleGroups<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductStyleGroupLinesApi<DeSerializersT>,
      ProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_STYLE_GROUP_LINES: new OneToManyLink(
        'ProductStyleGroupLines',
        this,
        linkedApis[0]
      ),
      PRODUCTS: new OneToManyLink('Products', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProductStyleGroups;

  requestBuilder(): ProductStyleGroupsRequestBuilder<DeSerializersT> {
    return new ProductStyleGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStyleGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductStyleGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductStyleGroups<DeSerializersT>,
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
    typeof ProductStyleGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductStyleGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_ID: OrderableEdmTypeField<
      ProductStyleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DESCRIPTION: OrderableEdmTypeField<
      ProductStyleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productStyleGroupLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINES: OneToManyLink<
      ProductStyleGroups<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link products} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTS: OneToManyLink<
      ProductStyleGroups<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductStyleGroups<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', ProductStyleGroups)
      };
    }

    return this._schema;
  }
}
