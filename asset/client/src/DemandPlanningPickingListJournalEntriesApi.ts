/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DemandPlanningPickingListJournalEntries } from './DemandPlanningPickingListJournalEntries';
import { DemandPlanningPickingListJournalEntriesRequestBuilder } from './DemandPlanningPickingListJournalEntriesRequestBuilder';
import { ItemType } from './ItemType';
import { ProdJournalType } from './ProdJournalType';
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
export class DemandPlanningPickingListJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DemandPlanningPickingListJournalEntries<DeSerializersT>,
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
  ): DemandPlanningPickingListJournalEntriesApi<DeSerializersT> {
    return new DemandPlanningPickingListJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DemandPlanningPickingListJournalEntries;

  requestBuilder(): DemandPlanningPickingListJournalEntriesRequestBuilder<DeSerializersT> {
    return new DemandPlanningPickingListJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DemandPlanningPickingListJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DemandPlanningPickingListJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DemandPlanningPickingListJournalEntries<DeSerializersT>,
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
    typeof DemandPlanningPickingListJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DemandPlanningPickingListJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOURNAL_NUMBER: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_DATA_AREA_ID: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE: EnumField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      ItemType,
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOURNAL_TYPE: EnumField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      ProdJournalType,
      true,
      true
    >;
    INVENTORY_UNIT_SYMBOL: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_ACCOUNT_PARTY_ID: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRODUCT_VARIANT_ID: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_QUANTITY: OrderableEdmTypeField<
      DemandPlanningPickingListJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      DemandPlanningPickingListJournalEntries<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'JournalDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEnumField(
          'ProductType',
          ItemType,
          true
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PostedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          ProdJournalType,
          true
        ),
        /**
         * Static representation of the {@link inventoryUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'InventoryUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromAccountPartyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_ACCOUNT_PARTY_ID: fieldBuilder.buildEdmTypeField(
          'FromAccountPartyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link productVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'ProductVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InventoryQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DemandPlanningPickingListJournalEntries)
      };
    }

    return this._schema;
  }
}
