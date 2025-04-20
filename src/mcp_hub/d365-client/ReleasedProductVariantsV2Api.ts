/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductVariantsV2 } from './ReleasedProductVariantsV2';
import { ReleasedProductVariantsV2RequestBuilder } from './ReleasedProductVariantsV2RequestBuilder';
import { InventoryCountingJournalLinesApi } from './InventoryCountingJournalLinesApi';
import { ReleasedProductMastersApi } from './ReleasedProductMastersApi';
import { ReleasedProductMastersV2Api } from './ReleasedProductMastersV2Api';
import { ProductMastersApi } from './ProductMastersApi';
import { ProductLifecycleStatesApi } from './ProductLifecycleStatesApi';
import { ProductVariantsV2Api } from './ProductVariantsV2Api';
import { ReleasedProductVariantExternalCodesV2Api } from './ReleasedProductVariantExternalCodesV2Api';
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
export class ReleasedProductVariantsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReleasedProductVariantsV2<DeSerializersT>, DeSerializersT>
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
  ): ReleasedProductVariantsV2Api<DeSerializersT> {
    return new ReleasedProductVariantsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_LINES: OneToManyLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT_V_2: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: OneToManyLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InventoryCountingJournalLinesApi<DeSerializersT>,
      ReleasedProductMastersApi<DeSerializersT>,
      ReleasedProductMastersV2Api<DeSerializersT>,
      ProductMastersApi<DeSerializersT>,
      ProductLifecycleStatesApi<DeSerializersT>,
      ProductVariantsV2Api<DeSerializersT>,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_COUNTING_JOURNAL_LINES: new OneToManyLink(
        'InventoryCountingJournalLines',
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
      PRODUCT_VARIANT_V_2: new OneToOneLink(
        'ProductVariantV2',
        this,
        linkedApis[5]
      ),
      RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: new OneToManyLink(
        'ReleasedProductVariantExternalCodesV2',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = ReleasedProductVariantsV2;

  requestBuilder(): ReleasedProductVariantsV2RequestBuilder<DeSerializersT> {
    return new ReleasedProductVariantsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductVariantsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductVariantsV2<DeSerializersT>,
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
    typeof ReleasedProductVariantsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductVariantsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MASTER_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_LIFECYCLE_STATE_ID: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VARIANT_NUMBER: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      ReleasedProductVariantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryCountingJournalLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_LINES: OneToManyLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductMasterV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_MASTER_V_2: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductMastersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_MASTER: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ProductMastersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productLifecycleState} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_LIFECYCLE_STATE: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ProductLifecycleStatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVariantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VARIANT_V_2: OneToOneLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductVariantExternalCodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_VARIANT_EXTERNAL_CODES_V_2: OneToManyLink<
      ReleasedProductVariantsV2<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantExternalCodesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleasedProductVariantsV2<DeSerializers>>;
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link salesSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesSalesTaxItemGroupCode',
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
         * Static representation of the {@link purchaseSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseSalesTaxItemGroupCode',
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
        ALL_FIELDS: new AllFields('*', ReleasedProductVariantsV2)
      };
    }

    return this._schema;
  }
}
