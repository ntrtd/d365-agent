/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductCommonDataServiceCategoryAssignmentsV2 } from './ProductCommonDataServiceCategoryAssignmentsV2';
import { ProductCommonDataServiceCategoryAssignmentsV2RequestBuilder } from './ProductCommonDataServiceCategoryAssignmentsV2RequestBuilder';
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
export class ProductCommonDataServiceCategoryAssignmentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProductCommonDataServiceCategoryAssignmentsV2<DeSerializersT>,
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
  ): ProductCommonDataServiceCategoryAssignmentsV2Api<DeSerializersT> {
    return new ProductCommonDataServiceCategoryAssignmentsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProductCommonDataServiceCategoryAssignmentsV2;

  requestBuilder(): ProductCommonDataServiceCategoryAssignmentsV2RequestBuilder<DeSerializersT> {
    return new ProductCommonDataServiceCategoryAssignmentsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductCommonDataServiceCategoryAssignmentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductCommonDataServiceCategoryAssignmentsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductCommonDataServiceCategoryAssignmentsV2<DeSerializersT>,
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
    typeof ProductCommonDataServiceCategoryAssignmentsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductCommonDataServiceCategoryAssignmentsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductCommonDataServiceCategoryAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      ProductCommonDataServiceCategoryAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProductCommonDataServiceCategoryAssignmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ProductCommonDataServiceCategoryAssignmentsV2<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link productCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductCategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ProductCategoryHierarchyName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ProductCommonDataServiceCategoryAssignmentsV2
        )
      };
    }

    return this._schema;
  }
}
