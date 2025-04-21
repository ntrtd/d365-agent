/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductColorGroupLines } from './ProductColorGroupLines';
import { ProductColorGroupLinesRequestBuilder } from './ProductColorGroupLinesRequestBuilder';
import { ProductColorGroupLineTranslationsApi } from './ProductColorGroupLineTranslationsApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductColorGroupsApi } from './ProductColorGroupsApi';
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
export class ProductColorGroupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductColorGroupLines<DeSerializersT>, DeSerializersT>
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
  ): ProductColorGroupLinesApi<DeSerializersT> {
    return new ProductColorGroupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productColorGroupLineTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP_LINE_TRANSLATIONS: OneToManyLink<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupLineTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP: OneToOneLink<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductColorGroupLineTranslationsApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductColorGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_COLOR_GROUP_LINE_TRANSLATIONS: new OneToManyLink(
        'ProductColorGroupLineTranslations',
        this,
        linkedApis[0]
      ),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[1]),
      PRODUCT_COLOR_GROUP: new OneToOneLink(
        'ProductColorGroup',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductColorGroupLines;

  requestBuilder(): ProductColorGroupLinesRequestBuilder<DeSerializersT> {
    return new ProductColorGroupLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductColorGroupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductColorGroupLines<DeSerializersT>,
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
    typeof ProductColorGroupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductColorGroupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_COLOR_GROUP_ID: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COLOR_NAME: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BARCODE_NUMBER: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLOR_DESCRIPTION: OrderableEdmTypeField<
      ProductColorGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productColorGroupLineTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP_LINE_TRANSLATIONS: OneToManyLink<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupLineTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR_GROUP: OneToOneLink<
      ProductColorGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductColorGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductColorGroupLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productColorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorGroupId',
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
         * Static representation of the {@link colorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR_NAME: fieldBuilder.buildEdmTypeField(
          'ColorName',
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
        /**
         * Static representation of the {@link colorDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLOR_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ColorDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductColorGroupLines)
      };
    }

    return this._schema;
  }
}
