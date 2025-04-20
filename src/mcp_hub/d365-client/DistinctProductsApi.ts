/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DistinctProducts } from './DistinctProducts';
import { DistinctProductsRequestBuilder } from './DistinctProductsRequestBuilder';
import { ReleasedDistinctProductsApi } from './ReleasedDistinctProductsApi';
import { ReleasedDistinctProductsV2Api } from './ReleasedDistinctProductsV2Api';
import { ProductTranslationsApi } from './ProductTranslationsApi';
import { EcoResProductType } from './EcoResProductType';
import { EcoResProductServiceType } from './EcoResProductServiceType';
import { WarrantyDurationTimeUnit } from './WarrantyDurationTimeUnit';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DistinctProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DistinctProducts<DeSerializersT>, DeSerializersT>
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
  ): DistinctProductsApi<DeSerializersT> {
    return new DistinctProductsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedDistinctProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT: OneToManyLink<
      DistinctProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedDistinctProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT_V_2: OneToManyLink<
      DistinctProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      DistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedDistinctProductsApi<DeSerializersT>,
      ReleasedDistinctProductsV2Api<DeSerializersT>,
      ProductTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_DISTINCT_PRODUCT: new OneToManyLink(
        'ReleasedDistinctProduct',
        this,
        linkedApis[0]
      ),
      RELEASED_DISTINCT_PRODUCT_V_2: new OneToManyLink(
        'ReleasedDistinctProductV2',
        this,
        linkedApis[1]
      ),
      PRODUCT_TRANSLATION: new OneToManyLink(
        'ProductTranslation',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = DistinctProducts;

  requestBuilder(): DistinctProductsRequestBuilder<DeSerializersT> {
    return new DistinctProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DistinctProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DistinctProducts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DistinctProducts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DistinctProducts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DistinctProducts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NMFC_CODE: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TYPE: EnumField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductType,
      true,
      true
    >;
    WARRANTY_DURATION_TIME: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STCC_CODE: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_TYPE: EnumField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      EcoResProductServiceType,
      true,
      true
    >;
    WARRANTY_DURATION_TIME_UNIT: EnumField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      WarrantyDurationTimeUnit,
      true,
      true
    >;
    IS_CATCH_WEIGHT_PRODUCT: EnumField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACKING_DIMENSION_GROUP_NAME: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HARMONIZED_SYSTEM_CODE: OrderableEdmTypeField<
      DistinctProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedDistinctProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT: OneToManyLink<
      DistinctProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedDistinctProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_DISTINCT_PRODUCT_V_2: OneToManyLink<
      DistinctProducts<DeSerializersT>,
      DeSerializersT,
      ReleasedDistinctProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      DistinctProducts<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DistinctProducts<DeSerializers>>;
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
         * Static representation of the {@link warrantyDurationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME: fieldBuilder.buildEdmTypeField(
          'WarrantyDurationTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link storageDimensionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_DIMENSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'StorageDimensionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_TYPE: fieldBuilder.buildEnumField(
          'ServiceType',
          EcoResProductServiceType,
          true
        ),
        /**
         * Static representation of the {@link warrantyDurationTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DURATION_TIME_UNIT: fieldBuilder.buildEnumField(
          'WarrantyDurationTimeUnit',
          WarrantyDurationTimeUnit,
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
         * Static representation of the {@link retailProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'RetailProductCategoryName',
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
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
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
        ALL_FIELDS: new AllFields('*', DistinctProducts)
      };
    }

    return this._schema;
  }
}
