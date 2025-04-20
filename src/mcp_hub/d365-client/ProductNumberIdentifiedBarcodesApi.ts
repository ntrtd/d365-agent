/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductNumberIdentifiedBarcodes } from './ProductNumberIdentifiedBarcodes';
import { ProductNumberIdentifiedBarcodesRequestBuilder } from './ProductNumberIdentifiedBarcodesRequestBuilder';
import { BarcodeSetupsApi } from './BarcodeSetupsApi';
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
export class ProductNumberIdentifiedBarcodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductNumberIdentifiedBarcodes<DeSerializersT>, DeSerializersT>
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
  ): ProductNumberIdentifiedBarcodesApi<DeSerializersT> {
    return new ProductNumberIdentifiedBarcodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link barcodeSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BARCODE_SETUP: OneToOneLink<
      ProductNumberIdentifiedBarcodes<DeSerializersT>,
      DeSerializersT,
      BarcodeSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BarcodeSetupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BARCODE_SETUP: new OneToOneLink('BarcodeSetup', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProductNumberIdentifiedBarcodes;

  requestBuilder(): ProductNumberIdentifiedBarcodesRequestBuilder<DeSerializersT> {
    return new ProductNumberIdentifiedBarcodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductNumberIdentifiedBarcodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductNumberIdentifiedBarcodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductNumberIdentifiedBarcodes<DeSerializersT>,
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
    typeof ProductNumberIdentifiedBarcodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductNumberIdentifiedBarcodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_QUANTITY_UNIT_SYMBOL: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BARCODE: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_QUANTITY: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DEFAULT_SCANNED_BARCODE: EnumField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEFAULT_PRINTED_BARCODE: EnumField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_DISPLAYED_BARCODE: EnumField<
      ProductNumberIdentifiedBarcodes<DeSerializers>,
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
      ProductNumberIdentifiedBarcodes<DeSerializersT>,
      DeSerializersT,
      BarcodeSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductNumberIdentifiedBarcodes<DeSerializers>>;
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
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productQuantityUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUANTITY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ProductQuantityUnitSymbol',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'BarcodeSetupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link barcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE: fieldBuilder.buildEdmTypeField('Barcode', 'Edm.String', false),
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
         * Static representation of the {@link isDefaultScannedBarcode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SCANNED_BARCODE: fieldBuilder.buildEnumField(
          'IsDefaultScannedBarcode',
          NoYes,
          true
        ),
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
        ALL_FIELDS: new AllFields('*', ProductNumberIdentifiedBarcodes)
      };
    }

    return this._schema;
  }
}
