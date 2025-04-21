/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpecialCategoryMembers } from './SpecialCategoryMembers';
import { SpecialCategoryMembersRequestBuilder } from './SpecialCategoryMembersRequestBuilder';
import { ProductCategoriesApi } from './ProductCategoriesApi';
import { ProductVariantsApi } from './ProductVariantsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SpecialCategoryMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SpecialCategoryMembers<DeSerializersT>, DeSerializersT>
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
  ): SpecialCategoryMembersApi<DeSerializersT> {
    return new SpecialCategoryMembersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY: OneToOneLink<
      SpecialCategoryMembers<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      SpecialCategoryMembers<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductCategoriesApi<DeSerializersT>,
      ProductVariantsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_CATEGORY: new OneToOneLink(
        'ProductCategory',
        this,
        linkedApis[0]
      ),
      PRODUCT_VARIANT: new OneToOneLink('ProductVariant', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SpecialCategoryMembers;

  requestBuilder(): SpecialCategoryMembersRequestBuilder<DeSerializersT> {
    return new SpecialCategoryMembersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SpecialCategoryMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SpecialCategoryMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SpecialCategoryMembers<DeSerializersT>,
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
    typeof SpecialCategoryMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SpecialCategoryMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEADER_PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_PRODUCT_CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      SpecialCategoryMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY: OneToOneLink<
      SpecialCategoryMembers<DeSerializersT>,
      DeSerializersT,
      ProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      SpecialCategoryMembers<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SpecialCategoryMembers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link headerProductCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'HeaderProductCategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link headerProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'HeaderProductCategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineProductCategoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRODUCT_CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'LineProductCategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'LineProductCategoryName',
          'Edm.String',
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
         * Static representation of the {@link productVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariantNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SpecialCategoryMembers)
      };
    }

    return this._schema;
  }
}
