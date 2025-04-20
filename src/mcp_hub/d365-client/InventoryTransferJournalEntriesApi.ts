/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryTransferJournalEntries } from './InventoryTransferJournalEntries';
import { InventoryTransferJournalEntriesRequestBuilder } from './InventoryTransferJournalEntriesRequestBuilder';
import { InventoryTransferJournalHeadersApi } from './InventoryTransferJournalHeadersApi';
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
export class InventoryTransferJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryTransferJournalEntries<DeSerializersT>, DeSerializersT>
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
  ): InventoryTransferJournalEntriesApi<DeSerializersT> {
    return new InventoryTransferJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inventoryTransferJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_JOURNAL_HEADER: OneToOneLink<
      InventoryTransferJournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryTransferJournalHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InventoryTransferJournalHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_TRANSFER_JOURNAL_HEADER: new OneToOneLink(
        'InventoryTransferJournalHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InventoryTransferJournalEntries;

  requestBuilder(): InventoryTransferJournalEntriesRequestBuilder<DeSerializersT> {
    return new InventoryTransferJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryTransferJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryTransferJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryTransferJournalEntries<DeSerializersT>,
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
    typeof InventoryTransferJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryTransferJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_COST_QUANTITY: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_INVENTORY_GTD_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_QUANTITY: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_INVENTORY_GTD_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryTransferJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryTransferJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_TRANSFER_JOURNAL_HEADER: OneToOneLink<
      InventoryTransferJournalEntries<DeSerializersT>,
      DeSerializersT,
      InventoryTransferJournalHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryTransferJournalEntries<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'SourceProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'DestinationProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'SourceProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'SourceProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationItemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'DestinationItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'SourceInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'DestinationProductConfigurationId',
          'Edm.String',
          true
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
         * Static representation of the {@link destinationLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DestinationLicensePlateNumber',
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
         * Static representation of the {@link sourceProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceItemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DestinationInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'SourceProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'SourceWarehouseLocationId',
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
         * Static representation of the {@link destinationInventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'DestinationInventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceInventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'SourceInventoryProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationInventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationInventoryProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DestinationWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceInventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'SourceInventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'SourceWarehouseId',
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
         * Static representation of the {@link destinationItemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DestinationItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationInventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationInventorySiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceLicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceInventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'SourceInventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'DestinationProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationInventoryGtdId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_INVENTORY_GTD_ID: fieldBuilder.buildEdmTypeField(
          'DestinationInventoryGtdId',
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
         * Static representation of the {@link sourceItemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceItemSerialNumber',
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
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceInventoryGtdId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_INVENTORY_GTD_ID: fieldBuilder.buildEdmTypeField(
          'SourceInventoryGtdId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'DestinationProductStyleId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryTransferJournalEntries)
      };
    }

    return this._schema;
  }
}
