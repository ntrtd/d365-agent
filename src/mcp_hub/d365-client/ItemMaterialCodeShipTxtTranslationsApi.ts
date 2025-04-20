/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemMaterialCodeShipTxtTranslations } from './ItemMaterialCodeShipTxtTranslations';
import { ItemMaterialCodeShipTxtTranslationsRequestBuilder } from './ItemMaterialCodeShipTxtTranslationsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ItemMaterialCodeShipTxtTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ItemMaterialCodeShipTxtTranslations<DeSerializersT>,
      DeSerializersT
    >
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
  ): ItemMaterialCodeShipTxtTranslationsApi<DeSerializersT> {
    return new ItemMaterialCodeShipTxtTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemMaterialCodeShipTxtTranslations;

  requestBuilder(): ItemMaterialCodeShipTxtTranslationsRequestBuilder<DeSerializersT> {
    return new ItemMaterialCodeShipTxtTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ItemMaterialCodeShipTxtTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemMaterialCodeShipTxtTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemMaterialCodeShipTxtTranslations<DeSerializersT>,
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
    typeof ItemMaterialCodeShipTxtTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemMaterialCodeShipTxtTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemMaterialCodeShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ItemMaterialCodeShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      ItemMaterialCodeShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MATERIAL_CODE: OrderableEdmTypeField<
      ItemMaterialCodeShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_PRINT_TEXT: OrderableEdmTypeField<
      ItemMaterialCodeShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItemMaterialCodeShipTxtTranslations<DeSerializers>>;
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'Material',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link materialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_CODE: fieldBuilder.buildEdmTypeField(
          'MaterialCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingPrintText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_PRINT_TEXT: fieldBuilder.buildEdmTypeField(
          'ShippingPrintText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemMaterialCodeShipTxtTranslations)
      };
    }

    return this._schema;
  }
}
