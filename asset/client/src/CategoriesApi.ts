/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Categories } from './Categories';
import { CategoriesRequestBuilder } from './CategoriesRequestBuilder';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
import { SharedCategoriesApi } from './SharedCategoriesApi';
import { NoYes } from './NoYes';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Categories<DeSerializersT>, DeSerializersT>
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
  ): CategoriesApi<DeSerializersT> {
    return new CategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToOneLink<
      Categories<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sharedCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHARED_CATEGORY: OneToOneLink<
      Categories<DeSerializersT>,
      DeSerializersT,
      SharedCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringProductCategoryDetailsApi<DeSerializersT>,
      SharedCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToOneLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[0]
      ),
      SHARED_CATEGORY: new OneToOneLink('SharedCategory', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Categories;

  requestBuilder(): CategoriesRequestBuilder<DeSerializersT> {
    return new CategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Categories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Categories<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Categories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Categories, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Categories, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHARED_CATEGORY_ID: OrderableEdmTypeField<
      Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_IN_EXPENSE: EnumField<
      Categories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_IN_PROJECT: EnumField<
      Categories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CATEGORY_NAME: OrderableEdmTypeField<
      Categories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_IN_PRODUCTION: EnumField<
      Categories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToOneLink<
      Categories<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sharedCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHARED_CATEGORY: OneToOneLink<
      Categories<DeSerializersT>,
      DeSerializersT,
      SharedCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Categories<DeSerializers>>;
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
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sharedCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SharedCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useInExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_EXPENSE: fieldBuilder.buildEnumField(
          'UseInExpense',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useInProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_PROJECT: fieldBuilder.buildEnumField(
          'UseInProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useInProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_IN_PRODUCTION: fieldBuilder.buildEnumField(
          'UseInProduction',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Categories)
      };
    }

    return this._schema;
  }
}
