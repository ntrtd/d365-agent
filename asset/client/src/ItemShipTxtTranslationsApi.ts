/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemShipTxtTranslations } from './ItemShipTxtTranslations';
import { ItemShipTxtTranslationsRequestBuilder } from './ItemShipTxtTranslationsRequestBuilder';
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
export class ItemShipTxtTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemShipTxtTranslations<DeSerializersT>, DeSerializersT>
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
  ): ItemShipTxtTranslationsApi<DeSerializersT> {
    return new ItemShipTxtTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemShipTxtTranslations;

  requestBuilder(): ItemShipTxtTranslationsRequestBuilder<DeSerializersT> {
    return new ItemShipTxtTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemShipTxtTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemShipTxtTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemShipTxtTranslations<DeSerializersT>,
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
    typeof ItemShipTxtTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemShipTxtTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ItemShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      ItemShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHIPPING_PRINT_TEXT: OrderableEdmTypeField<
      ItemShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REG_CODE: OrderableEdmTypeField<
      ItemShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ItemShipTxtTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItemShipTxtTranslations<DeSerializers>>;
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
         * Static representation of the {@link shippingPrintText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_PRINT_TEXT: fieldBuilder.buildEdmTypeField(
          'ShippingPrintText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REG_CODE: fieldBuilder.buildEdmTypeField('RegCode', 'Edm.String', true),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemShipTxtTranslations)
      };
    }

    return this._schema;
  }
}
