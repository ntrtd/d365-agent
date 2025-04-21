/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InboundShipmentOrderLineMessages } from './InboundShipmentOrderLineMessages';
import { InboundShipmentOrderLineMessagesRequestBuilder } from './InboundShipmentOrderLineMessagesRequestBuilder';
import { InboundShipmentOrderMessagesApi } from './InboundShipmentOrderMessagesApi';
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
export class InboundShipmentOrderLineMessagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InboundShipmentOrderLineMessages<DeSerializersT>, DeSerializersT>
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
  ): InboundShipmentOrderLineMessagesApi<DeSerializersT> {
    return new InboundShipmentOrderLineMessagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_MESSAGE: OneToOneLink<
      InboundShipmentOrderLineMessages<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderMessagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InboundShipmentOrderMessagesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_ORDER_MESSAGE: new OneToOneLink(
        'InboundShipmentOrderMessage',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InboundShipmentOrderLineMessages;

  requestBuilder(): InboundShipmentOrderLineMessagesRequestBuilder<DeSerializersT> {
    return new InboundShipmentOrderLineMessagesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InboundShipmentOrderLineMessages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InboundShipmentOrderLineMessages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InboundShipmentOrderLineMessages<DeSerializersT>,
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
    typeof InboundShipmentOrderLineMessages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InboundShipmentOrderLineMessages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MESSAGE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_SYSTEM_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_QUANTITY: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CROSS_DOCK_SOURCE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_INVENTORY_STATUS: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_REFERENCE: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPECTED_UNIT_SYMBOL: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_LINE_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OVERDELIVERY_PERCENTAGE: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSIGNER_ITEM_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      InboundShipmentOrderLineMessages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_MESSAGE: OneToOneLink<
      InboundShipmentOrderLineMessages<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderMessagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InboundShipmentOrderLineMessages<DeSerializers>>;
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
         * Static representation of the {@link orderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link messageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ID: fieldBuilder.buildEdmTypeField(
          'MessageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemInventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemInventoryOwnerId',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ExpectedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link crossDockSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_DOCK_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'CrossDockSourceId',
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
         * Static representation of the {@link expectedInventoryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_INVENTORY_STATUS: fieldBuilder.buildEdmTypeField(
          'ExpectedInventoryStatus',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
         * Static representation of the {@link underdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'UnderdeliveryPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link expectedUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'ExpectedUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consignerLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsignerLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link overdeliveryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDELIVERY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'OverdeliveryPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InboundShipmentOrderLineMessages)
      };
    }

    return this._schema;
  }
}
