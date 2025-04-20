/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductMasters } from './ProductMasters';
import { ProductMastersRequestBuilder } from './ProductMastersRequestBuilder';
import { ReleasedProductMastersApi } from './ReleasedProductMastersApi';
import { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
import { ProductMasterSizesApi } from './ProductMasterSizesApi';
import { ReleasedProductMastersV2Api } from './ReleasedProductMastersV2Api';
import { ProductMasterConfigurationsApi } from './ProductMasterConfigurationsApi';
import { ProductMasterColorsApi } from './ProductMasterColorsApi';
import { ProductMasterStylesApi } from './ProductMasterStylesApi';
import { ProductMasterVersionsApi } from './ProductMasterVersionsApi';
import { ProductVariantsV2Api } from './ProductVariantsV2Api';
import { ProductVariantsApi } from './ProductVariantsApi';
import { ProductNumberIdentifiedReleasedProductVariantsApi } from './ProductNumberIdentifiedReleasedProductVariantsApi';
import { ProductTranslationsApi } from './ProductTranslationsApi';
import { ProductNumberIdentifiedProductVariantsApi } from './ProductNumberIdentifiedProductVariantsApi';
import { ReleasedProductVariantsV2Api } from './ReleasedProductVariantsV2Api';
import { EcoResProductType } from './EcoResProductType';
import { NoYes } from './NoYes';
import { EcoResVariantConfigurationTechnologyType } from './EcoResVariantConfigurationTechnologyType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductMastersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductMasters<DeSerializersT>, DeSerializersT>
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
  ): ProductMastersApi<DeSerializersT> {
    return new ProductMastersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterSizes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_SIZES: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATIONS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterColors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLORS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLES: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSIONS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productVariantsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANTS_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductMastersApi<DeSerializersT>,
      ReleasedProductVariantsApi<DeSerializersT>,
      ProductMasterSizesApi<DeSerializersT>,
      ReleasedProductMastersV2Api<DeSerializersT>,
      ProductMasterConfigurationsApi<DeSerializersT>,
      ProductMasterColorsApi<DeSerializersT>,
      ProductMasterStylesApi<DeSerializersT>,
      ProductMasterVersionsApi<DeSerializersT>,
      ProductVariantsV2Api<DeSerializersT>,
      ProductVariantsApi<DeSerializersT>,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>,
      ProductTranslationsApi<DeSerializersT>,
      ProductNumberIdentifiedProductVariantsApi<DeSerializersT>,
      ReleasedProductVariantsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_MASTER: new OneToManyLink(
        'ReleasedProductMaster',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCT_VARIANT: new OneToManyLink(
        'ReleasedProductVariant',
        this,
        linkedApis[1]
      ),
      PRODUCT_MASTER_SIZES: new OneToManyLink(
        'ProductMasterSizes',
        this,
        linkedApis[2]
      ),
      RELEASED_PRODUCT_MASTER_V_2: new OneToManyLink(
        'ReleasedProductMasterV2',
        this,
        linkedApis[3]
      ),
      PRODUCT_MASTER_CONFIGURATIONS: new OneToManyLink(
        'ProductMasterConfigurations',
        this,
        linkedApis[4]
      ),
      PRODUCT_MASTER_COLORS: new OneToManyLink(
        'ProductMasterColors',
        this,
        linkedApis[5]
      ),
      PRODUCT_MASTER_STYLES: new OneToManyLink(
        'ProductMasterStyles',
        this,
        linkedApis[6]
      ),
      PRODUCT_MASTER_VERSIONS: new OneToManyLink(
        'ProductMasterVersions',
        this,
        linkedApis[7]
      ),
      PRODUCT_VARIANT_V_2: new OneToManyLink(
        'ProductVariantV2',
        this,
        linkedApis[8]
      ),
      PRODUCT_VARIANT: new OneToManyLink('ProductVariant', this, linkedApis[9]),
      RELEASED_PRODUCT_VARIANTS: new OneToManyLink(
        'ReleasedProductVariants',
        this,
        linkedApis[10]
      ),
      PRODUCT_TRANSLATION: new OneToManyLink(
        'ProductTranslation',
        this,
        linkedApis[11]
      ),
      PRODUCT_VARIANTS_V_2: new OneToManyLink(
        'ProductVariantsV2',
        this,
        linkedApis[12]
      ),
      RELEASED_PRODUCT_VARIANT_V_2: new OneToManyLink(
        'ReleasedProductVariantV2',
        this,
        linkedApis[13]
      )
    };
    return this;
  }

  entityConstructor = ProductMasters;

  requestBuilder(): ProductMastersRequestBuilder<DeSerializersT> {
    return new ProductMastersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductMasters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductMasters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductMasters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductMasters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductMasters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NMFC_CODE: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    PRODUCT_STYLE_GROUP_ID: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STCC_CODE: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ARE_IDENTICAL_CONFIGURATIONS_ALLOWED: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_AUTOMATIC_VARIANT_GENERATION_ENABLED: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SIZE_GROUP_ID: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_CONFIGURATION_TECHNOLOGY: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      EcoResVariantConfigurationTechnologyType,
      true,
      true
    >;
    PRODUCT_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT_KIT: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CATCH_WEIGHT_PRODUCT: EnumField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_GROUP_ID: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARMONIZED_SYSTEM_CODE: OrderableEdmTypeField<
      ProductMasters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterSizes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_SIZES: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_CONFIGURATIONS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterColors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_COLORS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterStyles} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_STYLES: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productMasterVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER_VERSIONS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductMasterVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANTS: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedReleasedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productVariantsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANTS_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_V_2: OneToManyLink<
      ProductMasters<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductMasters<DeSerializers>>;
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
         * Static representation of the {@link nmfcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NMFC_CODE: fieldBuilder.buildEdmTypeField(
          'NMFCCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          EcoResProductType,
          true
        ),
        /**
         * Static representation of the {@link productStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stccCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STCC_CODE: fieldBuilder.buildEdmTypeField(
          'STCCCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductVariantUnitConversionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_VARIANT_UNIT_CONVERSION_ENABLED: fieldBuilder.buildEnumField(
          'IsProductVariantUnitConversionEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link areIdenticalConfigurationsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_IDENTICAL_CONFIGURATIONS_ALLOWED: fieldBuilder.buildEnumField(
          'AreIdenticalConfigurationsAllowed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAutomaticVariantGenerationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTOMATIC_VARIANT_GENERATION_ENABLED: fieldBuilder.buildEnumField(
          'IsAutomaticVariantGenerationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productSizeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantConfigurationTechnology} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_CONFIGURATION_TECHNOLOGY: fieldBuilder.buildEnumField(
          'VariantConfigurationTechnology',
          EcoResVariantConfigurationTechnologyType,
          true
        ),
        /**
         * Static representation of the {@link productDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'ProductDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductKit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT_KIT: fieldBuilder.buildEnumField(
          'IsProductKit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isCatchWeightProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATCH_WEIGHT_PRODUCT: fieldBuilder.buildEnumField(
          'IsCatchWeightProduct',
          NoYes,
          true
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
         * Static representation of the {@link productColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'RetailProductCategoryName',
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
        /**
         * Static representation of the {@link trackingDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TrackingDimensionGroupName',
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
         * Static representation of the {@link harmonizedSystemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARMONIZED_SYSTEM_CODE: fieldBuilder.buildEdmTypeField(
          'HarmonizedSystemCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductMasters)
      };
    }

    return this._schema;
  }
}
