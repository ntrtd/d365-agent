/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventDimSetupGridEntities } from './InventDimSetupGridEntities';
import { InventDimSetupGridEntitiesRequestBuilder } from './InventDimSetupGridEntitiesRequestBuilder';
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
export class InventDimSetupGridEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventDimSetupGridEntities<DeSerializersT>, DeSerializersT>
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
  ): InventDimSetupGridEntitiesApi<DeSerializersT> {
    return new InventDimSetupGridEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventDimSetupGridEntities;

  requestBuilder(): InventDimSetupGridEntitiesRequestBuilder<DeSerializersT> {
    return new InventDimSetupGridEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventDimSetupGridEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventDimSetupGridEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventDimSetupGridEntities<DeSerializersT>,
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
    typeof InventDimSetupGridEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventDimSetupGridEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_ID: OrderableEdmTypeField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHOW_GRID_ASSET: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_GRID_PROD_JOURNAL_BOM: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_ORDER_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_BLOCKING: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUOTATION_LINES_PROJECT: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_EVENT: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_OWNERSHIP_CHANGE: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_TRANSACTIONS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_CONSUMPTION: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ARRIVAL: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTING: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CERTIFICATE_OF_ANALYSIS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHOW_GRID_PROD_JOURNAL_PRODUCTION: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NON_CONFORMANCES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROD_BOMRAF: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLS_OF_MATERIALS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPMENT_ITEM: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_ORDERS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MOVEMENT: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUOTATION_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PICKING_WORKBENCH_BATCH: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_ADJUSTMENT: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUALITY_ORDERS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PICKING_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_INPUT: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPMENT_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFER_ORDERS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSFERS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSIGNMENT_REPLENISHMENT_ORDER_LINE: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUARANTINE_ORDERS: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANSPORT_LINES: EnumField<
      InventDimSetupGridEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventDimSetupGridEntities<DeSerializers>>;
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
         * Static representation of the {@link fieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_ID: fieldBuilder.buildEdmTypeField('FieldID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link showGridAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_GRID_ASSET: fieldBuilder.buildEnumField(
          'ShowGridAsset',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showGridProdJournalBom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_GRID_PROD_JOURNAL_BOM: fieldBuilder.buildEnumField(
          'ShowGridProdJournalBOM',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINES: fieldBuilder.buildEnumField(
          'PurchaseOrderLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINES: fieldBuilder.buildEnumField('OrderLines', NoYes, true),
        /**
         * Static representation of the {@link inventoryBlocking} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_BLOCKING: fieldBuilder.buildEnumField(
          'InventoryBlocking',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link quotationLinesProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_LINES_PROJECT: fieldBuilder.buildEnumField(
          'QuotationLinesProject',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderEvent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_EVENT: fieldBuilder.buildEnumField('OrderEvent', NoYes, true),
        /**
         * Static representation of the {@link inventoryOwnershipChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNERSHIP_CHANGE: fieldBuilder.buildEnumField(
          'InventoryOwnershipChange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_TRANSACTIONS: fieldBuilder.buildEnumField(
          'InventoryTransactions',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemConsumption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CONSUMPTION: fieldBuilder.buildEnumField(
          'ItemConsumption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemArrival} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ARRIVAL: fieldBuilder.buildEnumField('ItemArrival', NoYes, true),
        /**
         * Static representation of the {@link counting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING: fieldBuilder.buildEnumField('Counting', NoYes, true),
        /**
         * Static representation of the {@link certificateOfAnalysis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_OF_ANALYSIS: fieldBuilder.buildEnumField(
          'CertificateOfAnalysis',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link showGridProdJournalProduction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_GRID_PROD_JOURNAL_PRODUCTION: fieldBuilder.buildEnumField(
          'ShowGridProdJournalProduction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link nonConformances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_CONFORMANCES: fieldBuilder.buildEnumField(
          'NonConformances',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prodBomraf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_BOMRAF: fieldBuilder.buildEnumField('ProdBOMRAF', NoYes, true),
        /**
         * Static representation of the {@link billsOfMaterials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLS_OF_MATERIALS: fieldBuilder.buildEnumField(
          'BillsOfMaterials',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipmentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_ITEM: fieldBuilder.buildEnumField('ShipmentItem', NoYes, true),
        /**
         * Static representation of the {@link productionOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDERS: fieldBuilder.buildEnumField(
          'ProductionOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link movement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT: fieldBuilder.buildEnumField('Movement', NoYes, true),
        /**
         * Static representation of the {@link quotationLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTATION_LINES: fieldBuilder.buildEnumField(
          'QuotationLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pickingWorkbenchBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_WORKBENCH_BATCH: fieldBuilder.buildEnumField(
          'PickingWorkbenchBatch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_ADJUSTMENT: fieldBuilder.buildEnumField(
          'InventoryAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link qualityOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDERS: fieldBuilder.buildEnumField(
          'QualityOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pickingLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_LINES: fieldBuilder.buildEnumField('PickingLines', NoYes, true),
        /**
         * Static representation of the {@link productionInput} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_INPUT: fieldBuilder.buildEnumField(
          'ProductionInput',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipmentLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_LINES: fieldBuilder.buildEnumField(
          'ShipmentLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_LINES: fieldBuilder.buildEnumField(
          'ProductionLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transferOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_ORDERS: fieldBuilder.buildEnumField(
          'TransferOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transfers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFERS: fieldBuilder.buildEnumField('Transfers', NoYes, true),
        /**
         * Static representation of the {@link consignmentReplenishmentOrderLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_REPLENISHMENT_ORDER_LINE: fieldBuilder.buildEnumField(
          'ConsignmentReplenishmentOrderLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link quarantineOrders} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARANTINE_ORDERS: fieldBuilder.buildEnumField(
          'QuarantineOrders',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link transportLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_LINES: fieldBuilder.buildEnumField(
          'TransportLines',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventDimSetupGridEntities)
      };
    }

    return this._schema;
  }
}
