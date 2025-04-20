/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSizeGroupLines } from './ProductSizeGroupLines';
import { ProductSizeGroupLinesRequestBuilder } from './ProductSizeGroupLinesRequestBuilder';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductSizeGroupsApi } from './ProductSizeGroupsApi';
import { ProductSizeGroupLineTranslationsApi } from './ProductSizeGroupLineTranslationsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductSizeGroupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSizeGroupLines<DeSerializersT>, DeSerializersT>
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
  ): ProductSizeGroupLinesApi<DeSerializersT> {
    return new ProductSizeGroupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ProductSizeGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSizeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP: OneToOneLink<
      ProductSizeGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSizeGroupLineTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP_LINE_TRANSLATIONS: OneToManyLink<
      ProductSizeGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupLineTranslationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductSizesApi<DeSerializersT>,
      ProductSizeGroupsApi<DeSerializersT>,
      ProductSizeGroupLineTranslationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[0]),
      PRODUCT_SIZE_GROUP: new OneToOneLink(
        'ProductSizeGroup',
        this,
        linkedApis[1]
      ),
      PRODUCT_SIZE_GROUP_LINE_TRANSLATIONS: new OneToManyLink(
        'ProductSizeGroupLineTranslations',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductSizeGroupLines;

  requestBuilder(): ProductSizeGroupLinesRequestBuilder<DeSerializersT> {
    return new ProductSizeGroupLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSizeGroupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductSizeGroupLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSizeGroupLines<DeSerializersT>,
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
    typeof ProductSizeGroupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSizeGroupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_SIZE_GROUP_ID: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIZE_NAME: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SIZE_DESCRIPTION: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BARCODE_NUMBER: OrderableEdmTypeField<
      ProductSizeGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      ProductSizeGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSizeGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP: OneToOneLink<
      ProductSizeGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSizeGroupLineTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE_GROUP_LINE_TRANSLATIONS: OneToManyLink<
      ProductSizeGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductSizeGroupLineTranslationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSizeGroupLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productSizeGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeGroupId',
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
         * Static representation of the {@link sizeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_NAME: fieldBuilder.buildEdmTypeField(
          'SizeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sizeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SizeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link replenishmentWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWeight',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link barcodeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BARCODE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BarcodeNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductSizeGroupLines)
      };
    }

    return this._schema;
  }
}
