/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryItemSectionLocations } from './InventoryItemSectionLocations';
import { InventoryItemSectionLocationsRequestBuilder } from './InventoryItemSectionLocationsRequestBuilder';
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
export class InventoryItemSectionLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryItemSectionLocations<DeSerializersT>, DeSerializersT>
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
  ): InventoryItemSectionLocationsApi<DeSerializersT> {
    return new InventoryItemSectionLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventoryItemSectionLocations;

  requestBuilder(): InventoryItemSectionLocationsRequestBuilder<DeSerializersT> {
    return new InventoryItemSectionLocationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryItemSectionLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryItemSectionLocations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryItemSectionLocations<DeSerializersT>,
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
    typeof InventoryItemSectionLocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryItemSectionLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryItemSectionLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryItemSectionLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NUMBER: OrderableEdmTypeField<
      InventoryItemSectionLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECTION_NUMBER: OrderableEdmTypeField<
      InventoryItemSectionLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHELF_NUMBER: OrderableEdmTypeField<
      InventoryItemSectionLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHOWS_SALES_STATISTICS: EnumField<
      InventoryItemSectionLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventoryItemSectionLocations<DeSerializers>>;
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
         * Static representation of the {@link storeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NUMBER: fieldBuilder.buildEdmTypeField(
          'StoreNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sectionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'SectionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shelfNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShelfNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link showsSalesStatistics} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOWS_SALES_STATISTICS: fieldBuilder.buildEnumField(
          'ShowsSalesStatistics',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryItemSectionLocations)
      };
    }

    return this._schema;
  }
}
