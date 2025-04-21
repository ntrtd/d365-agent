/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipmentPackingSlipJournalLines } from './ShipmentPackingSlipJournalLines';
import { ShipmentPackingSlipJournalLinesRequestBuilder } from './ShipmentPackingSlipJournalLinesRequestBuilder';
import { ShipmentPackingSlipTransactionDimensionsApi } from './ShipmentPackingSlipTransactionDimensionsApi';
import { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ShipmentPackingSlipJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipmentPackingSlipJournalLines<DeSerializersT>, DeSerializersT>
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
  ): ShipmentPackingSlipJournalLinesApi<DeSerializersT> {
    return new ShipmentPackingSlipJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipTransactionDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentPackingSlipJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL: OneToOneLink<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ShipmentPackingSlipTransactionDimensionsApi<DeSerializersT>,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DETAILS: new OneToManyLink('Details', this, linkedApis[0]),
      SHIPMENT_PACKING_SLIP_JOURNAL: new OneToOneLink(
        'ShipmentPackingSlipJournal',
        this,
        linkedApis[1]
      ),
      PRODUCT: new OneToOneLink('Product', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ShipmentPackingSlipJournalLines;

  requestBuilder(): ShipmentPackingSlipJournalLinesRequestBuilder<DeSerializersT> {
    return new ShipmentPackingSlipJournalLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShipmentPackingSlipJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipmentPackingSlipJournalLines<DeSerializersT>,
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
    typeof ShipmentPackingSlipJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipmentPackingSlipJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_PACKING_SLIP_VERSION_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNEE_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_HANDLING_QUANTITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LINE_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_ORDER_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_QUANTITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_SYSTEM_ITEM_MASTER_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_HANDLING_QUANTITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_QUANTITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_LINE_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNEE_REFERENCE: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HANDLING_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPED_WEIGHT: OrderableEdmTypeField<
      ShipmentPackingSlipJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipTransactionDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentPackingSlipJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL: OneToOneLink<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      ShipmentPackingSlipJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ShipmentPackingSlipJournalLines<DeSerializers>>;
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
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipmentPackingSlipVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PACKING_SLIP_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentPackingSlipVersionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consigneePurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneePurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ShippedHandlingQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link consignerLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link consignerOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderedUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'OrderedUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ShippedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemItemMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemMasterNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingHandlingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link weightUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'WeightUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consigneeLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consigneeReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsigneeReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OrderedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link handlingUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'HandlingUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ShippedWeight',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipmentPackingSlipJournalLines)
      };
    }

    return this._schema;
  }
}
