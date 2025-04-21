/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipmentReceiptJournalLines } from './ShipmentReceiptJournalLines';
import { ShipmentReceiptJournalLinesRequestBuilder } from './ShipmentReceiptJournalLinesRequestBuilder';
import { ShipmentReceiptTransactionDimensionsApi } from './ShipmentReceiptTransactionDimensionsApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
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
export class ShipmentReceiptJournalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipmentReceiptJournalLines<DeSerializersT>, DeSerializersT>
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
  ): ShipmentReceiptJournalLinesApi<DeSerializersT> {
    return new ShipmentReceiptJournalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptTransactionDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentReceiptJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECEIPT_JOURNAL: OneToOneLink<
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ShipmentReceiptTransactionDimensionsApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DETAILS: new OneToManyLink('Details', this, linkedApis[0]),
      SHIPMENT_RECEIPT_JOURNAL: new OneToOneLink(
        'ShipmentReceiptJournal',
        this,
        linkedApis[1]
      ),
      PRODUCT: new OneToOneLink('Product', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ShipmentReceiptJournalLines;

  requestBuilder(): ShipmentReceiptJournalLinesRequestBuilder<DeSerializersT> {
    return new ShipmentReceiptJournalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipmentReceiptJournalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipmentReceiptJournalLines<DeSerializersT>,
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
    typeof ShipmentReceiptJournalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipmentReceiptJournalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIPMENT_RECEIPT_VERSION_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LINE_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CONSIGNER_ORDER_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_HANDLING_QUANTITY: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_ITEM_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_MASTER_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WEIGHT_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_HANDLING_QUANTITY: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_QUANTITY: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNEE_LINE_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSIGNEE_ORDER_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ORDER_TYPE: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_WEIGHT: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDERED_QUANTITY: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HANDLING_UNIT_SYMBOL: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVED_QUANTITY: OrderableEdmTypeField<
      ShipmentReceiptJournalLines<DeSerializers>,
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
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptTransactionDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link shipmentReceiptJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECEIPT_JOURNAL: OneToOneLink<
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      ShipmentReceiptJournalLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ShipmentReceiptJournalLines<DeSerializers>>;
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
         * Static representation of the {@link shipmentReceiptVersionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_RECEIPT_VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipmentReceiptVersionNumber',
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
         * Static representation of the {@link receivedHandlingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_HANDLING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedHandlingQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link consignerItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerItemNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link weightUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'WeightUnitSymbol',
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
         * Static representation of the {@link consigneeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNEE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsigneeOrderNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link sourceSystemOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceSystemOrderType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ConsignerReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receivedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ReceivedWeight',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link receivedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipmentReceiptJournalLines)
      };
    }

    return this._schema;
  }
}
