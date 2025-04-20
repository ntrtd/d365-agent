/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { WarehouseIntegrationSourceSystemsApi } from './WarehouseIntegrationSourceSystemsApi';
import { WhsSourceSystemOrderIdCreationPolicy } from './WhsSourceSystemOrderIdCreationPolicy';
import { WhsOutboundShipmentOrderReservationAtImportPolicy } from './WhsOutboundShipmentOrderReservationAtImportPolicy';
import { NoYes } from './NoYes';
import { WhsOutboundShipmentOrderConsolidationPolicy } from './WhsOutboundShipmentOrderConsolidationPolicy';
import { WhsSourceSystemItemNumberCreationPolicy } from './WhsSourceSystemItemNumberCreationPolicy';
import { WhsOutboundShipmentOrderCrossDockRequestPolicy } from './WhsOutboundShipmentOrderCrossDockRequestPolicy';
import {
  InboundShipmentOrderHeaders,
  InboundShipmentOrderHeadersType
} from './InboundShipmentOrderHeaders';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';
import {
  ShipmentPackingSlipJournalHeaders,
  ShipmentPackingSlipJournalHeadersType
} from './ShipmentPackingSlipJournalHeaders';
import { ConsignersV2, ConsignersV2Type } from './ConsignersV2';
import {
  ExternalWarehouseSourceSystemRelations,
  ExternalWarehouseSourceSystemRelationsType
} from './ExternalWarehouseSourceSystemRelations';
import { Consignees, ConsigneesType } from './Consignees';
import {
  ShipmentReceiptJournalHeaders,
  ShipmentReceiptJournalHeadersType
} from './ShipmentReceiptJournalHeaders';
import {
  OutboundNotifications,
  OutboundNotificationsType
} from './OutboundNotifications';

/**
 * This class represents the entity "WarehouseIntegrationSourceSystems" of service "d365_metadata".
 */
export class WarehouseIntegrationSourceSystems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseIntegrationSourceSystemsType<T>
{
  /**
   * Technical entity name for WarehouseIntegrationSourceSystems.
   */
  static override _entityName = 'WarehouseIntegrationSourceSystems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseIntegrationSourceSystems entity.
   */
  static _keys = ['dataAreaId', 'SourceSystemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Shipment Order Fulfillment Policy Name.
   * @nullable
   */
  declare outboundShipmentOrderFulfillmentPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inbound Shipment Order Number Creation Prefix.
   * @nullable
   */
  declare inboundShipmentOrderNumberCreationPrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inbound Shipment Order Number Creation Policy.
   * @nullable
   */
  declare inboundShipmentOrderNumberCreationPolicy?: WhsSourceSystemOrderIdCreationPolicy | null;
  /**
   * Reservation At Import Policy.
   * @nullable
   */
  declare reservationAtImportPolicy?: WhsOutboundShipmentOrderReservationAtImportPolicy | null;
  /**
   * Outbound Shipment Order Number Creation Suffix.
   * @nullable
   */
  declare outboundShipmentOrderNumberCreationSuffix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Return Details Creation.
   * @nullable
   */
  declare enableReturnDetailsCreation?: NoYes | null;
  /**
   * Source System Item Number Prefix.
   * @nullable
   */
  declare sourceSystemItemNumberPrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Manual Outbound Shipment Order Creation.
   * @nullable
   */
  declare enableManualOutboundShipmentOrderCreation?: NoYes | null;
  /**
   * Manual Outbound Shipment Order Number Sequence Code.
   * @nullable
   */
  declare manualOutboundShipmentOrderNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inbound Shipment Order Number Creation Suffix.
   * @nullable
   */
  declare inboundShipmentOrderNumberCreationSuffix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consolidation Policy.
   * @nullable
   */
  declare consolidationPolicy?: WhsOutboundShipmentOrderConsolidationPolicy | null;
  /**
   * Enable Inbound Shipment Order Warehouse Inventory Update Logs.
   * @nullable
   */
  declare enableInboundShipmentOrderWarehouseInventoryUpdateLogs?: NoYes | null;
  /**
   * Source System Item Number Policy.
   * @nullable
   */
  declare sourceSystemItemNumberPolicy?: WhsSourceSystemItemNumberCreationPolicy | null;
  /**
   * Manual Inbound Shipment Order Number Sequence Code.
   * @nullable
   */
  declare manualInboundShipmentOrderNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Return Order Type.
   * @nullable
   */
  declare returnOrderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number Suffix.
   * @nullable
   */
  declare sourceSystemItemNumberSuffix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Outbound Shipment Processing Policy.
   * @nullable
   */
  declare outboundShipmentProcessingPolicy?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Enable Outbound Shipment Order Warehouse Inventory Update Logs.
   * @nullable
   */
  declare enableOutboundShipmentOrderWarehouseInventoryUpdateLogs?: NoYes | null;
  /**
   * Outbound Shipment Order Cross Dock Request Policy.
   * @nullable
   */
  declare outboundShipmentOrderCrossDockRequestPolicy?: WhsOutboundShipmentOrderCrossDockRequestPolicy | null;
  /**
   * Outbound Shipment Order Number Creation Prefix.
   * @nullable
   */
  declare outboundShipmentOrderNumberCreationPrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Outbound Shipment Order Number Creation Policy.
   * @nullable
   */
  declare outboundShipmentOrderNumberCreationPolicy?: WhsSourceSystemOrderIdCreationPolicy | null;
  /**
   * Is Reservation At Import Policy Mandatory.
   * @nullable
   */
  declare isReservationAtImportPolicyMandatory?: NoYes | null;
  /**
   * Enable Manual Inbound Shipment Order Creation.
   * @nullable
   */
  declare enableManualInboundShipmentOrderCreation?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderHeaders} entity.
   */
  declare inboundShipmentOrderHeaders: InboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentPackingSlipJournalHeaders} entity.
   */
  declare shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ConsignersV2} entity.
   */
  declare consigners: ConsignersV2<T>[];
  /**
   * One-to-many navigation property to the {@link ExternalWarehouseSourceSystemRelations} entity.
   */
  declare externalWarehouseSourceSystemRelation: ExternalWarehouseSourceSystemRelations<T>[];
  /**
   * One-to-many navigation property to the {@link Consignees} entity.
   */
  declare consignees: Consignees<T>[];
  /**
   * One-to-many navigation property to the {@link ShipmentReceiptJournalHeaders} entity.
   */
  declare shipmentReciptJournalHeaders: ShipmentReceiptJournalHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundNotifications} entity.
   */
  declare outboundNotifications: OutboundNotifications<T>[];

  constructor(_entityApi: WarehouseIntegrationSourceSystemsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseIntegrationSourceSystemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderFulfillmentPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inboundShipmentOrderNumberCreationPrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inboundShipmentOrderNumberCreationPolicy?: WhsSourceSystemOrderIdCreationPolicy | null;
  reservationAtImportPolicy?: WhsOutboundShipmentOrderReservationAtImportPolicy | null;
  outboundShipmentOrderNumberCreationSuffix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  enableReturnDetailsCreation?: NoYes | null;
  sourceSystemItemNumberPrefix?: DeserializedType<T, 'Edm.String'> | null;
  enableManualOutboundShipmentOrderCreation?: NoYes | null;
  manualOutboundShipmentOrderNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  inboundShipmentOrderNumberCreationSuffix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  consolidationPolicy?: WhsOutboundShipmentOrderConsolidationPolicy | null;
  enableInboundShipmentOrderWarehouseInventoryUpdateLogs?: NoYes | null;
  sourceSystemItemNumberPolicy?: WhsSourceSystemItemNumberCreationPolicy | null;
  manualInboundShipmentOrderNumberSequenceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  returnOrderType?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumberSuffix?: DeserializedType<T, 'Edm.String'> | null;
  outboundShipmentProcessingPolicy?: DeserializedType<T, 'Edm.String'> | null;
  enableOutboundShipmentOrderWarehouseInventoryUpdateLogs?: NoYes | null;
  outboundShipmentOrderCrossDockRequestPolicy?: WhsOutboundShipmentOrderCrossDockRequestPolicy | null;
  outboundShipmentOrderNumberCreationPrefix?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  outboundShipmentOrderNumberCreationPolicy?: WhsSourceSystemOrderIdCreationPolicy | null;
  isReservationAtImportPolicyMandatory?: NoYes | null;
  enableManualInboundShipmentOrderCreation?: NoYes | null;
  inboundShipmentOrderHeaders: InboundShipmentOrderHeadersType<T>[];
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  shipmentPackingSlipJournalHeaders: ShipmentPackingSlipJournalHeadersType<T>[];
  consigners: ConsignersV2Type<T>[];
  externalWarehouseSourceSystemRelation: ExternalWarehouseSourceSystemRelationsType<T>[];
  consignees: ConsigneesType<T>[];
  shipmentReciptJournalHeaders: ShipmentReceiptJournalHeadersType<T>[];
  outboundNotifications: OutboundNotificationsType<T>[];
}
