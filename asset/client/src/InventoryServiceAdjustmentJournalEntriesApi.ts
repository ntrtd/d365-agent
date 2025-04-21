/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryServiceAdjustmentJournalEntries } from './InventoryServiceAdjustmentJournalEntries';
import { InventoryServiceAdjustmentJournalEntriesRequestBuilder } from './InventoryServiceAdjustmentJournalEntriesRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { InventoryServiceAdjustmentJournalHeadersApi } from './InventoryServiceAdjustmentJournalHeadersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryServiceAdjustmentJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
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
  ): InventoryServiceAdjustmentJournalEntriesApi<DeSerializersT> {
    return new InventoryServiceAdjustmentJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryServiceAdjustmentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SERVICE_ADJUSTMENT_JOURNAL_HEADER: OneToOneLink<
      InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryServiceAdjustmentJournalHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      InventoryServiceAdjustmentJournalHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      INVENTORY_SERVICE_ADJUSTMENT_JOURNAL_HEADER: new OneToOneLink(
        'InventoryServiceAdjustmentJournalHeader',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = InventoryServiceAdjustmentJournalEntries;

  requestBuilder(): InventoryServiceAdjustmentJournalEntriesRequestBuilder<DeSerializersT> {
    return new InventoryServiceAdjustmentJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
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
    typeof InventoryServiceAdjustmentJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryServiceAdjustmentJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SERVICE_TRANSACTION_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST_QUANTITY: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_COST_CHARGES: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_QUANTITY: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryServiceAdjustmentJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SERVICE_ADJUSTMENT_JOURNAL_HEADER: OneToOneLink<
      InventoryServiceAdjustmentJournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryServiceAdjustmentJournalHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      InventoryServiceAdjustmentJournalEntries<DeSerializers>
    >;
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
         * Static representation of the {@link inventoryServiceTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'InventoryServiceTransactionId',
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
          true
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryServiceAdjustmentOffsetDatasource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_ADJUSTMENT_OFFSET_DATASOURCE:
          fieldBuilder.buildEdmTypeField(
            'InventoryServiceAdjustmentOffsetDatasource',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCostQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UnitCostQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryServiceAdjustmentOffsetPhysicalMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SERVICE_ADJUSTMENT_OFFSET_PHYSICAL_MEASURE:
          fieldBuilder.buildEdmTypeField(
            'InventoryServiceAdjustmentOffsetPhysicalMeasure',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedCostCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_COST_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedCostCharges',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryServiceAdjustmentJournalEntries)
      };
    }

    return this._schema;
  }
}
