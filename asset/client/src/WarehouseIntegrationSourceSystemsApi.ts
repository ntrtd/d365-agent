/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseIntegrationSourceSystems } from './WarehouseIntegrationSourceSystems';
import { WarehouseIntegrationSourceSystemsRequestBuilder } from './WarehouseIntegrationSourceSystemsRequestBuilder';
import { InboundShipmentOrderHeadersApi } from './InboundShipmentOrderHeadersApi';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
import { ShipmentPackingSlipJournalHeadersApi } from './ShipmentPackingSlipJournalHeadersApi';
import { ConsignersV2Api } from './ConsignersV2Api';
import { ExternalWarehouseSourceSystemRelationsApi } from './ExternalWarehouseSourceSystemRelationsApi';
import { ConsigneesApi } from './ConsigneesApi';
import { ShipmentReceiptJournalHeadersApi } from './ShipmentReceiptJournalHeadersApi';
import { OutboundNotificationsApi } from './OutboundNotificationsApi';
import { WhsSourceSystemOrderIdCreationPolicy } from './WhsSourceSystemOrderIdCreationPolicy';
import { WhsOutboundShipmentOrderReservationAtImportPolicy } from './WhsOutboundShipmentOrderReservationAtImportPolicy';
import { NoYes } from './NoYes';
import { WhsOutboundShipmentOrderConsolidationPolicy } from './WhsOutboundShipmentOrderConsolidationPolicy';
import { WhsSourceSystemItemNumberCreationPolicy } from './WhsSourceSystemItemNumberCreationPolicy';
import { WhsOutboundShipmentOrderCrossDockRequestPolicy } from './WhsOutboundShipmentOrderCrossDockRequestPolicy';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WarehouseIntegrationSourceSystemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarehouseIntegrationSourceSystems<DeSerializersT>, DeSerializersT>
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
  ): WarehouseIntegrationSourceSystemsApi<DeSerializersT> {
    return new WarehouseIntegrationSourceSystemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consigners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ConsignersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalWarehouseSourceSystemRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_SOURCE_SYSTEM_RELATION: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseSourceSystemRelationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consignees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNEES: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ConsigneesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundNotifications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_NOTIFICATIONS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      OutboundNotificationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InboundShipmentOrderHeadersApi<DeSerializersT>,
      OutboundShipmentOrderHeadersApi<DeSerializersT>,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>,
      ConsignersV2Api<DeSerializersT>,
      ExternalWarehouseSourceSystemRelationsApi<DeSerializersT>,
      ConsigneesApi<DeSerializersT>,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>,
      OutboundNotificationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INBOUND_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'InboundShipmentOrderHeaders',
        this,
        linkedApis[0]
      ),
      OUTBOUND_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'OutboundShipmentOrderHeaders',
        this,
        linkedApis[1]
      ),
      SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentPackingSlipJournalHeaders',
        this,
        linkedApis[2]
      ),
      CONSIGNERS: new OneToManyLink('Consigners', this, linkedApis[3]),
      EXTERNAL_WAREHOUSE_SOURCE_SYSTEM_RELATION: new OneToManyLink(
        'ExternalWarehouseSourceSystemRelation',
        this,
        linkedApis[4]
      ),
      CONSIGNEES: new OneToManyLink('Consignees', this, linkedApis[5]),
      SHIPMENT_RECIPT_JOURNAL_HEADERS: new OneToManyLink(
        'ShipmentReciptJournalHeaders',
        this,
        linkedApis[6]
      ),
      OUTBOUND_NOTIFICATIONS: new OneToManyLink(
        'OutboundNotifications',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = WarehouseIntegrationSourceSystems;

  requestBuilder(): WarehouseIntegrationSourceSystemsRequestBuilder<DeSerializersT> {
    return new WarehouseIntegrationSourceSystemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseIntegrationSourceSystems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseIntegrationSourceSystems<DeSerializersT>,
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
    typeof WarehouseIntegrationSourceSystems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseIntegrationSourceSystems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_ID: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_FULFILLMENT_POLICY_NAME: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_NUMBER_CREATION_PREFIX: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_NUMBER_CREATION_POLICY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      WhsSourceSystemOrderIdCreationPolicy,
      true,
      true
    >;
    RESERVATION_AT_IMPORT_POLICY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentOrderReservationAtImportPolicy,
      true,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_NUMBER_CREATION_SUFFIX: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_RETURN_DETAILS_CREATION: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER_PREFIX: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_MANUAL_OUTBOUND_SHIPMENT_ORDER_CREATION: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANUAL_OUTBOUND_SHIPMENT_ORDER_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_NUMBER_CREATION_SUFFIX: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATION_POLICY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentOrderConsolidationPolicy,
      true,
      true
    >;
    ENABLE_INBOUND_SHIPMENT_ORDER_WAREHOUSE_INVENTORY_UPDATE_LOGS: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER_POLICY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      WhsSourceSystemItemNumberCreationPolicy,
      true,
      true
    >;
    MANUAL_INBOUND_SHIPMENT_ORDER_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_ORDER_TYPE: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER_SUFFIX: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_SHIPMENT_PROCESSING_POLICY: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_OUTBOUND_SHIPMENT_ORDER_WAREHOUSE_INVENTORY_UPDATE_LOGS: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_CROSS_DOCK_REQUEST_POLICY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      WhsOutboundShipmentOrderCrossDockRequestPolicy,
      true,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_NUMBER_CREATION_PREFIX: OrderableEdmTypeField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUTBOUND_SHIPMENT_ORDER_NUMBER_CREATION_POLICY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      WhsSourceSystemOrderIdCreationPolicy,
      true,
      true
    >;
    IS_RESERVATION_AT_IMPORT_POLICY_MANDATORY: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_MANUAL_INBOUND_SHIPMENT_ORDER_CREATION: EnumField<
      WarehouseIntegrationSourceSystems<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentPackingSlipJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_PACKING_SLIP_JOURNAL_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ShipmentPackingSlipJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consigners} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ConsignersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalWarehouseSourceSystemRelation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_WAREHOUSE_SOURCE_SYSTEM_RELATION: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ExternalWarehouseSourceSystemRelationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link consignees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNEES: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ConsigneesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link shipmentReciptJournalHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SHIPMENT_RECIPT_JOURNAL_HEADERS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      ShipmentReceiptJournalHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outboundNotifications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBOUND_NOTIFICATIONS: OneToManyLink<
      WarehouseIntegrationSourceSystems<DeSerializersT>,
      DeSerializersT,
      OutboundNotificationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseIntegrationSourceSystems<DeSerializers>>;
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
         * Static representation of the {@link sourceSystemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link outboundShipmentOrderFulfillmentPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_FULFILLMENT_POLICY_NAME:
          fieldBuilder.buildEdmTypeField(
            'OutboundShipmentOrderFulfillmentPolicyName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link inboundShipmentOrderNumberCreationPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_NUMBER_CREATION_PREFIX:
          fieldBuilder.buildEdmTypeField(
            'InboundShipmentOrderNumberCreationPrefix',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link inboundShipmentOrderNumberCreationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_NUMBER_CREATION_POLICY:
          fieldBuilder.buildEnumField(
            'InboundShipmentOrderNumberCreationPolicy',
            WhsSourceSystemOrderIdCreationPolicy,
            true
          ),
        /**
         * Static representation of the {@link reservationAtImportPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION_AT_IMPORT_POLICY: fieldBuilder.buildEnumField(
          'ReservationAtImportPolicy',
          WhsOutboundShipmentOrderReservationAtImportPolicy,
          true
        ),
        /**
         * Static representation of the {@link outboundShipmentOrderNumberCreationSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_NUMBER_CREATION_SUFFIX:
          fieldBuilder.buildEdmTypeField(
            'OutboundShipmentOrderNumberCreationSuffix',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link enableReturnDetailsCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_RETURN_DETAILS_CREATION: fieldBuilder.buildEnumField(
          'EnableReturnDetailsCreation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumberPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER_PREFIX: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumberPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableManualOutboundShipmentOrderCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_MANUAL_OUTBOUND_SHIPMENT_ORDER_CREATION:
          fieldBuilder.buildEnumField(
            'EnableManualOutboundShipmentOrderCreation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link manualOutboundShipmentOrderNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_OUTBOUND_SHIPMENT_ORDER_NUMBER_SEQUENCE_CODE:
          fieldBuilder.buildEdmTypeField(
            'ManualOutboundShipmentOrderNumberSequenceCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link inboundShipmentOrderNumberCreationSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_NUMBER_CREATION_SUFFIX:
          fieldBuilder.buildEdmTypeField(
            'InboundShipmentOrderNumberCreationSuffix',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link consolidationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATION_POLICY: fieldBuilder.buildEnumField(
          'ConsolidationPolicy',
          WhsOutboundShipmentOrderConsolidationPolicy,
          true
        ),
        /**
         * Static representation of the {@link enableInboundShipmentOrderWarehouseInventoryUpdateLogs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_INBOUND_SHIPMENT_ORDER_WAREHOUSE_INVENTORY_UPDATE_LOGS:
          fieldBuilder.buildEnumField(
            'EnableInboundShipmentOrderWarehouseInventoryUpdateLogs',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sourceSystemItemNumberPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER_POLICY: fieldBuilder.buildEnumField(
          'SourceSystemItemNumberPolicy',
          WhsSourceSystemItemNumberCreationPolicy,
          true
        ),
        /**
         * Static representation of the {@link manualInboundShipmentOrderNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL_INBOUND_SHIPMENT_ORDER_NUMBER_SEQUENCE_CODE:
          fieldBuilder.buildEdmTypeField(
            'ManualInboundShipmentOrderNumberSequenceCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link returnOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_ORDER_TYPE: fieldBuilder.buildEdmTypeField(
          'ReturnOrderType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumberSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER_SUFFIX: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumberSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outboundShipmentProcessingPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_PROCESSING_POLICY: fieldBuilder.buildEdmTypeField(
          'OutboundShipmentProcessingPolicy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableOutboundShipmentOrderWarehouseInventoryUpdateLogs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_OUTBOUND_SHIPMENT_ORDER_WAREHOUSE_INVENTORY_UPDATE_LOGS:
          fieldBuilder.buildEnumField(
            'EnableOutboundShipmentOrderWarehouseInventoryUpdateLogs',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link outboundShipmentOrderCrossDockRequestPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_CROSS_DOCK_REQUEST_POLICY:
          fieldBuilder.buildEnumField(
            'OutboundShipmentOrderCrossDockRequestPolicy',
            WhsOutboundShipmentOrderCrossDockRequestPolicy,
            true
          ),
        /**
         * Static representation of the {@link outboundShipmentOrderNumberCreationPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_NUMBER_CREATION_PREFIX:
          fieldBuilder.buildEdmTypeField(
            'OutboundShipmentOrderNumberCreationPrefix',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link outboundShipmentOrderNumberCreationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTBOUND_SHIPMENT_ORDER_NUMBER_CREATION_POLICY:
          fieldBuilder.buildEnumField(
            'OutboundShipmentOrderNumberCreationPolicy',
            WhsSourceSystemOrderIdCreationPolicy,
            true
          ),
        /**
         * Static representation of the {@link isReservationAtImportPolicyMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESERVATION_AT_IMPORT_POLICY_MANDATORY: fieldBuilder.buildEnumField(
          'IsReservationAtImportPolicyMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableManualInboundShipmentOrderCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_MANUAL_INBOUND_SHIPMENT_ORDER_CREATION:
          fieldBuilder.buildEnumField(
            'EnableManualInboundShipmentOrderCreation',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseIntegrationSourceSystems)
      };
    }

    return this._schema;
  }
}
