/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BarcodeSetups } from './BarcodeSetups';
import { BarcodeSetupsRequestBuilder } from './BarcodeSetupsRequestBuilder';
import { ProductNumberIdentifiedBarcodesApi } from './ProductNumberIdentifiedBarcodesApi';
import { ProductBarcodeAssociationsApi } from './ProductBarcodeAssociationsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductBarcodesV3Api } from './ProductBarcodesV3Api';
import { BarcodeType } from './BarcodeType';
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
export class BarcodeSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BarcodeSetups<DeSerializersT>, DeSerializersT>
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
  ): BarcodeSetupsApi<DeSerializersT> {
    return new BarcodeSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedBarcodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_2: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ProductBarcodeAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_3: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductNumberIdentifiedBarcodesApi<DeSerializersT>,
      ProductBarcodeAssociationsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductBarcodesV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_BARCODES: new OneToManyLink(
        'ProductBarcodes',
        this,
        linkedApis[0]
      ),
      PRODUCT_BARCODES_V_2: new OneToManyLink(
        'ProductBarcodesV2',
        this,
        linkedApis[1]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[2]
      ),
      PRODUCT_BARCODES_V_3: new OneToManyLink(
        'ProductBarcodesV3',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = BarcodeSetups;

  requestBuilder(): BarcodeSetupsRequestBuilder<DeSerializersT> {
    return new BarcodeSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BarcodeSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BarcodeSetups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BarcodeSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BarcodeSetups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BarcodeSetups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BARCODE_SETUP_ID: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FONT_SIZE: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BARCODE_MASK_ID: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_DESCRIPTION: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BARCODE_TYPE: EnumField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      BarcodeType,
      true,
      true
    >;
    MAXIMUM_BARCODE_LENGTH: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MINIMUM_BARCODE_LENGTH: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FONT_NAME: OrderableEdmTypeField<
      BarcodeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ProductNumberIdentifiedBarcodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_2: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ProductBarcodeAssociationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productBarcodesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_BARCODES_V_3: OneToManyLink<
      BarcodeSetups<DeSerializersT>,
      DeSerializersT,
      ProductBarcodesV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BarcodeSetups<DeSerializers>>;
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
         * Static representation of the {@link barcodeSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'BarcodeSetupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fontSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_SIZE: fieldBuilder.buildEdmTypeField(
          'FontSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link barcodeMaskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_MASK_ID: fieldBuilder.buildEdmTypeField(
          'BarcodeMaskId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BarcodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link barcodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_TYPE: fieldBuilder.buildEnumField(
          'BarcodeType',
          BarcodeType,
          true
        ),
        /**
         * Static representation of the {@link maximumBarcodeLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_BARCODE_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaximumBarcodeLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link minimumBarcodeLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_BARCODE_LENGTH: fieldBuilder.buildEdmTypeField(
          'MinimumBarcodeLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fontName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT_NAME: fieldBuilder.buildEdmTypeField(
          'FontName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BarcodeSetups)
      };
    }

    return this._schema;
  }
}
