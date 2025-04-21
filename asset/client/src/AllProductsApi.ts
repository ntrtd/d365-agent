/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllProducts } from './AllProducts';
import { AllProductsRequestBuilder } from './AllProductsRequestBuilder';
import { ProductSpecificUnitOfMeasureConversionsApi } from './ProductSpecificUnitOfMeasureConversionsApi';
import { ProductMasterSizesApi } from './ProductMasterSizesApi';
import { ProductMasterConfigurationsApi } from './ProductMasterConfigurationsApi';
import { ProductMasterColorsApi } from './ProductMasterColorsApi';
import { ProductMasterStylesApi } from './ProductMasterStylesApi';
import { ProductUnitOfMeasureConversionsApi } from './ProductUnitOfMeasureConversionsApi';
import { ProductMasterVersionsApi } from './ProductMasterVersionsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { DvReleasedProductsApi } from './DvReleasedProductsApi';
import { ProductCategoryAssignmentsApi } from './ProductCategoryAssignmentsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AllProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AllProducts<DeSerializersT>, DeSerializersT>
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
  ): AllProductsApi<DeSerializersT> {
    return new AllProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductSpecificUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterSizes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_SIZES: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterColors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLORS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLES: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToOneLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_ASSIGNMENTS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductCategoryAssignmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductSpecificUnitOfMeasureConversionsApi<DeSerializersT>,
      ProductMasterSizesApi<DeSerializersT>,
      ProductMasterConfigurationsApi<DeSerializersT>,
      ProductMasterColorsApi<DeSerializersT>,
      ProductMasterStylesApi<DeSerializersT>,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>,
      ProductMasterVersionsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      DvReleasedProductsApi<DeSerializersT>,
      ProductCategoryAssignmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_SPECIFIC_UNIT_OF_MEASURE_CONVERSIONS: new OneToManyLink(
        'ProductSpecificUnitOfMeasureConversions',
        this,
        linkedApis[0]
      ),
      PRODUCT_MASTER_SIZES: new OneToManyLink(
        'ProductMasterSizes',
        this,
        linkedApis[1]
      ),
      PRODUCT_MASTER_CONFIGURATIONS: new OneToManyLink(
        'ProductMasterConfigurations',
        this,
        linkedApis[2]
      ),
      PRODUCT_MASTER_COLORS: new OneToManyLink(
        'ProductMasterColors',
        this,
        linkedApis[3]
      ),
      PRODUCT_MASTER_STYLES: new OneToManyLink(
        'ProductMasterStyles',
        this,
        linkedApis[4]
      ),
      PRODUCT_UNIT_OF_MEASURE_CONVERSIONS: new OneToManyLink(
        'ProductUnitOfMeasureConversions',
        this,
        linkedApis[5]
      ),
      PRODUCT_MASTER_VERSIONS: new OneToManyLink(
        'ProductMasterVersions',
        this,
        linkedApis[6]
      ),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[7]
      ),
      DV_RELEASED_PRODUCTS: new OneToOneLink(
        'DVReleasedProducts',
        this,
        linkedApis[8]
      ),
      PRODUCT_CATEGORY_ASSIGNMENTS: new OneToManyLink(
        'ProductCategoryAssignments',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = AllProducts;

  requestBuilder(): AllProductsRequestBuilder<DeSerializersT> {
    return new AllProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AllProducts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AllProducts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AllProducts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AllProducts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      AllProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      AllProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      AllProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      AllProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSpecificUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SPECIFIC_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductSpecificUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterSizes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_SIZES: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterColors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLORS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLES: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productUnitOfMeasureConversions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE_CONVERSIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureConversionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSIONS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dvReleasedProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DV_RELEASED_PRODUCTS: OneToOneLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      DvReleasedProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productCategoryAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CATEGORY_ASSIGNMENTS: OneToManyLink<
      AllProducts<DeSerializersT>,
      DeSerializersT,
      ProductCategoryAssignmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllProducts<DeSerializers>>;
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
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllProducts)
      };
    }

    return this._schema;
  }
}
