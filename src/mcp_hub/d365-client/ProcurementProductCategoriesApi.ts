/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcurementProductCategories } from './ProcurementProductCategories';
import { ProcurementProductCategoriesRequestBuilder } from './ProcurementProductCategoriesRequestBuilder';
import { ProductCategoryHierarchiesApi } from './ProductCategoryHierarchiesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProcurementProductCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProcurementProductCategories<DeSerializersT>, DeSerializersT>
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
  ): ProcurementProductCategoriesApi<DeSerializersT> {
    return new ProcurementProductCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentProcurementProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PROCUREMENT_PRODUCT_CATEGORY: OneToOneLink<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT,
      ProcurementProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childProcurementProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PROCUREMENT_PRODUCT_CATEGORY: OneToManyLink<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT,
      ProcurementProductCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductCategoryHierarchiesApi<DeSerializersT>,
      ProcurementProductCategoriesApi<DeSerializersT>,
      ProcurementProductCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_CATEGORY_HIERARCHY: new OneToOneLink(
        'ProductCategoryHierarchy',
        this,
        linkedApis[0]
      ),
      PARENT_PROCUREMENT_PRODUCT_CATEGORY: new OneToOneLink(
        'ParentProcurementProductCategory',
        this,
        linkedApis[1]
      ),
      CHILD_PROCUREMENT_PRODUCT_CATEGORY: new OneToManyLink(
        'ChildProcurementProductCategory',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProcurementProductCategories;

  requestBuilder(): ProcurementProductCategoriesRequestBuilder<DeSerializersT> {
    return new ProcurementProductCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcurementProductCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcurementProductCategories<DeSerializersT>,
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
    typeof ProcurementProductCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcurementProductCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_NAME: OrderableEdmTypeField<
      ProcurementProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_HIERARCHY_NAME: OrderableEdmTypeField<
      ProcurementProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARENT_CATEGORY_NAME: OrderableEdmTypeField<
      ProcurementProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY_CODE: OrderableEdmTypeField<
      ProcurementProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_HIERARCHY_NAME: OrderableEdmTypeField<
      ProcurementProductCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productCategoryHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_HIERARCHY: OneToOneLink<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT,
      ProductCategoryHierarchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentProcurementProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PROCUREMENT_PRODUCT_CATEGORY: OneToOneLink<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT,
      ProcurementProductCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childProcurementProductCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PROCUREMENT_PRODUCT_CATEGORY: OneToManyLink<
      ProcurementProductCategories<DeSerializersT>,
      DeSerializersT,
      ProcurementProductCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcurementProductCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryHierarchyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parentCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link categoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'CategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'ParentHierarchyName',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcurementProductCategories)
      };
    }

    return this._schema;
  }
}
