/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemBasePriceActives } from './ItemBasePriceActives';
import { ItemBasePriceActivesRequestBuilder } from './ItemBasePriceActivesRequestBuilder';
import { GupBasePriceType } from './GupBasePriceType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ItemBasePriceActivesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemBasePriceActives<DeSerializersT>, DeSerializersT>
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
  ): ItemBasePriceActivesApi<DeSerializersT> {
    return new ItemBasePriceActivesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemBasePriceActives;

  requestBuilder(): ItemBasePriceActivesRequestBuilder<DeSerializersT> {
    return new ItemBasePriceActivesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemBasePriceActives<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItemBasePriceActives<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemBasePriceActives<DeSerializersT>,
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
    typeof ItemBasePriceActives,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemBasePriceActives,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_DIM_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_TYPE: EnumField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      GupBasePriceType,
      true,
      true
    >;
    ACTIVATION_DATE: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE_CREATED_DATE_TIME: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_DIMENSION_10: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIMENSION_11: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_12: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_7: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_8: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_2: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_1: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_4: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_9: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_COLOR_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_ALLOCATE_MARKUP: EnumField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_SIZE_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    W_MS_LOCATION_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_3: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARKUP_QTY: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_DIMENSION_6: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_VERSION_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_OWNER_ID_RU: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_DIMENSION_5: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STYLE_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATED: EnumField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHA_1_HASH_HEX: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_QTY: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_STATUS_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_GTD_ID_RU: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DISPLAY_NAME: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SERIAL_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_BATCH_ID: OrderableEdmTypeField<
      ItemBasePriceActives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItemBasePriceActives<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link inventDimId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIM_ID: fieldBuilder.buildEdmTypeField(
          'InventDimId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_TYPE: fieldBuilder.buildEnumField(
          'PriceType',
          GupBasePriceType,
          true
        ),
        /**
         * Static representation of the {@link activationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_DATE: fieldBuilder.buildEdmTypeField(
          'ActivationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link priceCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PriceCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventDimension10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_10: fieldBuilder.buildEdmTypeField(
          'InventDimension10',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimension11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_11: fieldBuilder.buildEdmTypeField(
          'InventDimension11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link versionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_ID: fieldBuilder.buildEdmTypeField(
          'VersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_12: fieldBuilder.buildEdmTypeField(
          'InventDimension12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_7: fieldBuilder.buildEdmTypeField(
          'InventDimension7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_8: fieldBuilder.buildEdmTypeField(
          'InventDimension8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP: fieldBuilder.buildEdmTypeField('Markup', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_2: fieldBuilder.buildEdmTypeField(
          'InventDimension2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_1: fieldBuilder.buildEdmTypeField(
          'InventDimension1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_4: fieldBuilder.buildEdmTypeField(
          'InventDimension4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_9: fieldBuilder.buildEdmTypeField(
          'InventDimension9',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link inventColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'InventColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceAllocateMarkup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_ALLOCATE_MARKUP: fieldBuilder.buildEnumField(
          'PriceAllocateMarkup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'InventSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wMsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        W_MS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'wMSLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_3: fieldBuilder.buildEdmTypeField(
          'InventDimension3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link markupQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_QTY: fieldBuilder.buildEdmTypeField(
          'MarkupQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventDimension6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_6: fieldBuilder.buildEdmTypeField(
          'InventDimension6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'InventVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventOwnerIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_OWNER_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventOwnerId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventDimension5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DIMENSION_5: fieldBuilder.buildEdmTypeField(
          'InventDimension5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'InventStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_ID: fieldBuilder.buildEdmTypeField('UnitId', 'Edm.String', true),
        /**
         * Static representation of the {@link licensePlateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_ID: fieldBuilder.buildEdmTypeField(
          'LicensePlateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED: fieldBuilder.buildEnumField('Calculated', NoYes, true),
        /**
         * Static representation of the {@link sha1HashHex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHA_1_HASH_HEX: fieldBuilder.buildEdmTypeField(
          'SHA1HashHex',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_QTY: fieldBuilder.buildEdmTypeField(
          'PriceQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventGtdIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_GTD_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventGtdId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDisplayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DISPLAY_NAME: fieldBuilder.buildEdmTypeField(
          'ItemDisplayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'inventSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link configId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIG_ID: fieldBuilder.buildEdmTypeField(
          'configId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'inventBatchId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemBasePriceActives)
      };
    }

    return this._schema;
  }
}
