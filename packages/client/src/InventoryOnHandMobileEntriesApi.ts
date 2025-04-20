/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryOnHandMobileEntries } from './InventoryOnHandMobileEntries';
import { InventoryOnHandMobileEntriesRequestBuilder } from './InventoryOnHandMobileEntriesRequestBuilder';
import { InventInventoryOnHandMobileAggregateType } from './InventInventoryOnHandMobileAggregateType';
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
export class InventoryOnHandMobileEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryOnHandMobileEntries<DeSerializersT>, DeSerializersT>
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
  ): InventoryOnHandMobileEntriesApi<DeSerializersT> {
    return new InventoryOnHandMobileEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryOnHandMobileEntries;

  requestBuilder(): InventoryOnHandMobileEntriesRequestBuilder<DeSerializersT> {
    return new InventoryOnHandMobileEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryOnHandMobileEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryOnHandMobileEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryOnHandMobileEntries<DeSerializersT>,
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
    typeof InventoryOnHandMobileEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryOnHandMobileEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESERVED_PHYSICAL: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVAIL_PHYSICAL: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AGGREGATE_TYPE: EnumField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      InventInventoryOnHandMobileAggregateType,
      true,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_AVAILABLE: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_WHS_ITEM: EnumField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_BATCH_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_COLOR_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SIZE_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    W_MS_LOCATION_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_VERSION_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STYLE_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_ORDER: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_INVENT: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STATUS_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFIG_ID: OrderableEdmTypeField<
      InventoryOnHandMobileEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventoryOnHandMobileEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link reservedPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVED_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'ReservedPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link availPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAIL_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'AvailPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link aggregateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGGREGATE_TYPE: fieldBuilder.buildEnumField(
          'AggregateType',
          InventInventoryOnHandMobileAggregateType,
          true
        ),
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalAvailable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AVAILABLE: fieldBuilder.buildEdmTypeField(
          'TotalAvailable',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isWhsItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WHS_ITEM: fieldBuilder.buildEnumField('IsWHSItem', NoYes, true),
        /**
         * Static representation of the {@link inventBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'InventBatchId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link inventVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'InventVersionId',
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
         * Static representation of the {@link onOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ORDER: fieldBuilder.buildEdmTypeField(
          'OnOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link physicalInvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_INVENT: fieldBuilder.buildEdmTypeField(
          'PhysicalInvent',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventStatusId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryOnHandMobileEntries)
      };
    }

    return this._schema;
  }
}
