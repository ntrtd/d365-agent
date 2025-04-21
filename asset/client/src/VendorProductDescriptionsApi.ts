/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorProductDescriptions } from './VendorProductDescriptions';
import { VendorProductDescriptionsRequestBuilder } from './VendorProductDescriptionsRequestBuilder';
import { VendorsV2Api } from './VendorsV2Api';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { Abc } from './Abc';
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
export class VendorProductDescriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorProductDescriptions<DeSerializersT>, DeSerializersT>
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
  ): VendorProductDescriptionsApi<DeSerializersT> {
    return new VendorProductDescriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      VendorProductDescriptions<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      VendorProductDescriptions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VendorsV2Api<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[0]),
      RELEASED_PRODUCT: new OneToOneLink('ReleasedProduct', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = VendorProductDescriptions;

  requestBuilder(): VendorProductDescriptionsRequestBuilder<DeSerializersT> {
    return new VendorProductDescriptionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorProductDescriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorProductDescriptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorProductDescriptions<DeSerializersT>,
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
    typeof VendorProductDescriptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorProductDescriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DESCRIPTION_VENDOR_GROUP_ID: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ABC_CODE: EnumField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      Abc,
      true,
      true
    >;
    VENDOR_PRODUCT_NUMBER: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ABC_CODE_NOTE: OrderableEdmTypeField<
      VendorProductDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      VendorProductDescriptions<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT: OneToOneLink<
      VendorProductDescriptions<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorProductDescriptions<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
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
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDescriptionVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductDescriptionVendorGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorAbcCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ABC_CODE: fieldBuilder.buildEnumField(
          'VendorABCCode',
          Abc,
          true
        ),
        /**
         * Static representation of the {@link vendorProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorProductDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'VendorProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAbcCodeNote} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ABC_CODE_NOTE: fieldBuilder.buildEdmTypeField(
          'VendorABCCodeNote',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorProductDescriptions)
      };
    }

    return this._schema;
  }
}
