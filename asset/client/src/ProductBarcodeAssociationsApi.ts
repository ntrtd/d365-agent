/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductBarcodeAssociations } from './ProductBarcodeAssociations';
import { ProductBarcodeAssociationsRequestBuilder } from './ProductBarcodeAssociationsRequestBuilder';
import { BarcodeSetupsApi } from './BarcodeSetupsApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductSizesApi } from './ProductSizesApi';
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
export class ProductBarcodeAssociationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductBarcodeAssociations<DeSerializersT>, DeSerializersT>
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
  ): ProductBarcodeAssociationsApi<DeSerializersT> {
    return new ProductBarcodeAssociationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link barcodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BARCODE_SETUP: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      BarcodeSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BarcodeSetupsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductSizesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BARCODE_SETUP: new OneToOneLink('BarcodeSetup', this, linkedApis[0]),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[1]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[2]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[3]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[4]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = ProductBarcodeAssociations;

  requestBuilder(): ProductBarcodeAssociationsRequestBuilder<DeSerializersT> {
    return new ProductBarcodeAssociationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductBarcodeAssociations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductBarcodeAssociations<DeSerializersT>,
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
    typeof ProductBarcodeAssociations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductBarcodeAssociations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSOCIATION_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_QUANTITY: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_SCANNED_BARCODE: EnumField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_PRINTED_BARCODE: EnumField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_DISPLAYED_BARCODE: EnumField<
      ProductBarcodeAssociations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link barcodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BARCODE_SETUP: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      BarcodeSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ProductBarcodeAssociations<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductBarcodeAssociations<DeSerializers>>;
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
         * Static representation of the {@link associationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATION_ID: fieldBuilder.buildEdmTypeField(
          'AssociationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProductQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductQuantityUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'BarcodeSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultScannedBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SCANNED_BARCODE: fieldBuilder.buildEnumField(
          'IsDefaultScannedBarcode',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', true),
        /**
         * Static representation of the {@link isDefaultPrintedBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PRINTED_BARCODE: fieldBuilder.buildEnumField(
          'IsDefaultPrintedBarcode',
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
         * Static representation of the {@link isDefaultDisplayedBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_DISPLAYED_BARCODE: fieldBuilder.buildEnumField(
          'IsDefaultDisplayedBarcode',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductBarcodeAssociations)
      };
    }

    return this._schema;
  }
}
