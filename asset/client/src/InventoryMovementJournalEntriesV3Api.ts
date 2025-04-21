/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryMovementJournalEntriesV3 } from './InventoryMovementJournalEntriesV3';
import { InventoryMovementJournalEntriesV3RequestBuilder } from './InventoryMovementJournalEntriesV3RequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
export class InventoryMovementJournalEntriesV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryMovementJournalEntriesV3<DeSerializersT>, DeSerializersT>
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
  ): InventoryMovementJournalEntriesV3Api<DeSerializersT> {
    return new InventoryMovementJournalEntriesV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      InventoryMovementJournalEntriesV3<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      InventoryMovementJournalEntriesV3<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = InventoryMovementJournalEntriesV3;

  requestBuilder(): InventoryMovementJournalEntriesV3RequestBuilder<DeSerializersT> {
    return new InventoryMovementJournalEntriesV3RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryMovementJournalEntriesV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryMovementJournalEntriesV3<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryMovementJournalEntriesV3<DeSerializersT>,
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
    typeof InventoryMovementJournalEntriesV3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryMovementJournalEntriesV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_GTD_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_COST_CHARGES: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_QUANTITY: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_COST_QUANTITY: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryMovementJournalEntriesV3<DeSerializers>,
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
      InventoryMovementJournalEntriesV3<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      InventoryMovementJournalEntriesV3<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryMovementJournalEntriesV3<DeSerializers>>;
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryWarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryGtdId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_GTD_ID: fieldBuilder.buildEdmTypeField(
          'InventoryGtdId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryProfileId',
          'Edm.String',
          false
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
         * Static representation of the {@link fixedCostCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_COST_CHARGES: fieldBuilder.buildEdmTypeField(
          'FixedCostCharges',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link unitCostQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UnitCostQuantity',
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
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetMainAccountIdDisplayValue',
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
         * Static representation of the {@link unitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST: fieldBuilder.buildEdmTypeField(
          'UnitCost',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryMovementJournalEntriesV3)
      };
    }

    return this._schema;
  }
}
