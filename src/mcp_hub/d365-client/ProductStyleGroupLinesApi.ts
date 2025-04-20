/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStyleGroupLines } from './ProductStyleGroupLines';
import { ProductStyleGroupLinesRequestBuilder } from './ProductStyleGroupLinesRequestBuilder';
import { ProductStyleGroupLineTranslationsApi } from './ProductStyleGroupLineTranslationsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductStyleGroupsApi } from './ProductStyleGroupsApi';
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
export class ProductStyleGroupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStyleGroupLines<DeSerializersT>, DeSerializersT>
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
  ): ProductStyleGroupLinesApi<DeSerializersT> {
    return new ProductStyleGroupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link productStyleGroupLineTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINE_TRANSLATIONS: OneToManyLink<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLineTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyleGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP: OneToOneLink<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductStyleGroupLineTranslationsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductStyleGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_STYLE_GROUP_LINE_TRANSLATIONS: new OneToManyLink(
        'ProductStyleGroupLineTranslations',
        this,
        linkedApis[0]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[1]),
      PRODUCT_STYLE_GROUP: new OneToOneLink(
        'ProductStyleGroup',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = ProductStyleGroupLines;

  requestBuilder(): ProductStyleGroupLinesRequestBuilder<DeSerializersT> {
    return new ProductStyleGroupLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStyleGroupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductStyleGroupLines<DeSerializersT>,
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
    typeof ProductStyleGroupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductStyleGroupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_STYLE_GROUP_ID: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPLENISHMENT_WEIGHT: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STYLE_NAME: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STYLE_DESCRIPTION: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BARCODE_NUMBER: OrderableEdmTypeField<
      ProductStyleGroupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productStyleGroupLineTranslations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP_LINE_TRANSLATIONS: OneToManyLink<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupLineTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyleGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE_GROUP: OneToOneLink<
      ProductStyleGroupLines<DeSerializersT>,
      DeSerializersT,
      ProductStyleGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductStyleGroupLines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productStyleGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleGroupId',
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
         * Static representation of the {@link replenishmentWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLENISHMENT_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReplenishmentWeight',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link styleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_NAME: fieldBuilder.buildEdmTypeField(
          'StyleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link styleDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STYLE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StyleDescription',
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
        ALL_FIELDS: new AllFields('*', ProductStyleGroupLines)
      };
    }

    return this._schema;
  }
}
