/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryCountingJournalLines } from './InventoryCountingJournalLines';
import { InventoryCountingJournalLinesRequestBuilder } from './InventoryCountingJournalLinesRequestBuilder';
import { InventoryOwnersApi } from './InventoryOwnersApi';
import { InventoryCountingReasonCodesApi } from './InventoryCountingReasonCodesApi';
import { InventoryCountingJournalHeadersApi } from './InventoryCountingJournalHeadersApi';
import { ReleasedProductVariantsV2Api } from './ReleasedProductVariantsV2Api';
import { OperationalSitesApi } from './OperationalSitesApi';
import { WorkersApi } from './WorkersApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryCountingJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryCountingJournalLines<DeSerializersT>, DeSerializersT>
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
  ): InventoryCountingJournalLinesApi<DeSerializersT> {
    return new InventoryCountingJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link consignmentInventoryOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNMENT_INVENTORY_OWNER: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCountingReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_REASON_CODE: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryCountingReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCountingJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_HEADER: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventDimCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_DIM_COMBINATION: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SITE: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InventoryOwnersApi<DeSerializersT>,
      InventoryCountingReasonCodesApi<DeSerializersT>,
      InventoryCountingJournalHeadersApi<DeSerializersT>,
      ReleasedProductVariantsV2Api<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CONSIGNMENT_INVENTORY_OWNER: new OneToOneLink(
        'ConsignmentInventoryOwner',
        this,
        linkedApis[0]
      ),
      INVENTORY_COUNTING_REASON_CODE: new OneToOneLink(
        'InventoryCountingReasonCode',
        this,
        linkedApis[1]
      ),
      INVENTORY_COUNTING_JOURNAL_HEADER: new OneToOneLink(
        'InventoryCountingJournalHeader',
        this,
        linkedApis[2]
      ),
      INVENT_DIM_COMBINATION: new OneToOneLink(
        'InventDimCombination',
        this,
        linkedApis[3]
      ),
      INVENTORY_SITE: new OneToOneLink('InventorySite', this, linkedApis[4]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = InventoryCountingJournalLines;

  requestBuilder(): InventoryCountingJournalLinesRequestBuilder<DeSerializersT> {
    return new InventoryCountingJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventoryCountingJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryCountingJournalLines<DeSerializersT>,
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
    typeof InventoryCountingJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryCountingJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTMENT_QUANTITY: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HAND_QUANTITY: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTED_QUANTITY: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTMENT_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTING_REASON_CODE: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_DATE: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HAND_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CATCH_WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COUNTED_QUANTITY_ZERO: EnumField<
      InventoryCountingJournalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consignmentInventoryOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNMENT_INVENTORY_OWNER: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryOwnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCountingReasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_REASON_CODE: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryCountingReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryCountingJournalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_COUNTING_JOURNAL_HEADER: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      InventoryCountingJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventDimCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENT_DIM_COMBINATION: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductVariantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SITE: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      InventoryCountingJournalLines<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryCountingJournalLines<DeSerializers>>;
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
         * Static representation of the {@link countedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CountedCatchWeightQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjustmentQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AdjustmentQuantity',
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
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnHandQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link countedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CountedQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link adjustmentCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'AdjustmentCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countingReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'CountingReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'CountingDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
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
         * Static representation of the {@link workerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerPersonnelNumber',
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
         * Static representation of the {@link onHandCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnHandCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link catchWeightUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'CatchWeightUnitSymbol',
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
         * Static representation of the {@link isCountedQuantityZero} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COUNTED_QUANTITY_ZERO: fieldBuilder.buildEnumField(
          'IsCountedQuantityZero',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryCountingJournalLines)
      };
    }

    return this._schema;
  }
}
