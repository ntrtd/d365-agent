/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductVariants } from './ReleasedProductVariants';
import { ReleasedProductVariantsRequestBuilder } from './ReleasedProductVariantsRequestBuilder';
import { ReleasedProductVariantExternalCodesApi } from './ReleasedProductVariantExternalCodesApi';
import { ReleasedProductMastersApi } from './ReleasedProductMastersApi';
import { ReleasedProductMastersV2Api } from './ReleasedProductMastersV2Api';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { ProductVariantsApi } from './ProductVariantsApi';
import { ProductTranslationsApi } from './ProductTranslationsApi';
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
export class ReleasedProductVariantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReleasedProductVariants<DeSerializersT>, DeSerializersT>
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
  ): ReleasedProductVariantsApi<DeSerializersT> {
    return new ReleasedProductVariantsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: OneToManyLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductVariantExternalCodesApi<DeSerializersT>,
      ReleasedProductMastersApi<DeSerializersT>,
      ReleasedProductMastersV2Api<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductLifecycleStatesApi<DeSerializersT>,
      ProductVariantsApi<DeSerializersT>,
      ProductTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: new OneToManyLink(
        'ReleasedProductVariantExternalCodes',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCT_MASTER: new OneToOneLink(
        'ReleasedProductMaster',
        this,
        linkedApis[1]
      ),
      RELEASED_PRODUCT_MASTER_V_2: new OneToOneLink(
        'ReleasedProductMasterV2',
        this,
        linkedApis[2]
      ),
      PRODUCT_MASTER: new OneToOneLink('ProductMaster', this, linkedApis[3]),
      PRODUCT_LIFECYCLE_STATE: new OneToOneLink(
        'ProductLifecycleState',
        this,
        linkedApis[4]
      ),
      PRODUCT_VARIANT: new OneToOneLink('ProductVariant', this, linkedApis[5]),
      PRODUCT_TRANSLATION: new OneToManyLink(
        'ProductTranslation',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductVariants;

  requestBuilder(): ReleasedProductVariantsRequestBuilder<DeSerializersT> {
    return new ReleasedProductVariantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductVariants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductVariants<DeSerializersT>,
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
    typeof ReleasedProductVariants,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductVariants,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ReleasedProductVariants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES: OneToManyLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT: OneToOneLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productTranslation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_TRANSLATION: OneToManyLink<
      ReleasedProductVariants<DeSerializersT>,
      DeSerializersT,
      ProductTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleasedProductVariants<DeSerializers>>;
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
         * Static representation of the {@link productMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductMasterNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productLifecycleStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LIFECYCLE_STATE_ID: fieldBuilder.buildEdmTypeField(
          'ProductLifecycleStateId',
          'Edm.String',
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
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVariantNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductVariantNumber',
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
        ALL_FIELDS: new AllFields('*', ReleasedProductVariants)
      };
    }

    return this._schema;
  }
}
