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
import type { OutboundShipmentOrderMessagesApi } from './OutboundShipmentOrderMessagesApi';
import { WhsShipmentOrderMessageProcessingStatus } from './WhsShipmentOrderMessageProcessingStatus';
import { Timezone } from './Timezone';
import { WhsOutboundShipmentOrderReservationAtImportPolicy } from './WhsOutboundShipmentOrderReservationAtImportPolicy';
import {
  OutboundShipmentOrderDocumentAttachmentMessages,
  OutboundShipmentOrderDocumentAttachmentMessagesType
} from './OutboundShipmentOrderDocumentAttachmentMessages';
import {
  OutboundShipmentOrderLineMessages,
  OutboundShipmentOrderLineMessagesType
} from './OutboundShipmentOrderLineMessages';

/**
 * This class represents the entity "OutboundShipmentOrderMessages" of service "d365_metadata".
 */
export class OutboundShipmentOrderMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderMessagesType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderMessages.
   */
  static override _entityName = 'OutboundShipmentOrderMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderMessages entity.
   */
  static _keys = ['dataAreaId', 'OrderNumber', 'SourceSystemId', 'MessageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Number.
   */
  declare orderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receiver Name.
   * @nullable
   */
  declare receiverName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Route Plan Id.
   * @nullable
   */
  declare transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street.
   * @nullable
   */
  declare consigneeStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street In Kana.
   * @nullable
   */
  declare receiverStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee City.
   * @nullable
   */
  declare consigneeCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver County.
   * @nullable
   */
  declare receiverCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Country Region Id.
   * @nullable
   */
  declare consigneeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street Number.
   * @nullable
   */
  declare consigneeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Purchase Order Number.
   * @nullable
   */
  declare consigneePurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consignee Name.
   * @nullable
   */
  declare consigneeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Origin.
   * @nullable
   */
  declare orderOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Zip Code.
   * @nullable
   */
  declare consigneeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Period Start.
   */
  declare requestedShippingPeriodStart: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Receiver Email.
   * @nullable
   */
  declare receiverEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Contact Name.
   * @nullable
   */
  declare receiverContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Transportation Id.
   * @nullable
   */
  declare plannedTransportationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Country Region Id.
   * @nullable
   */
  declare receiverCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Type.
   * @nullable
   */
  declare orderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship From Warehouse Id.
   * @nullable
   */
  declare shipFromWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsShipmentOrderMessageProcessingStatus | null;
  /**
   * Requested Delivery Period End.
   */
  declare requestedDeliveryPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receiver City.
   * @nullable
   */
  declare receiverCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Mode Id.
   * @nullable
   */
  declare transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver State.
   * @nullable
   */
  declare receiverState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Email.
   * @nullable
   */
  declare consigneeEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Time Zone.
   * @nullable
   */
  declare receiverTimeZone?: Timezone | null;
  /**
   * Requested Delivery Period Start.
   */
  declare requestedDeliveryPeriodStart: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Consignee Post Box.
   * @nullable
   */
  declare consigneePostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street.
   * @nullable
   */
  declare receiverStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Broker Id.
   * @nullable
   */
  declare transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee State.
   * @nullable
   */
  declare consigneeState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Account Number.
   * @nullable
   */
  declare consigneeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Longitude.
   */
  declare consigneeLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiver Zip Code.
   * @nullable
   */
  declare receiverZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee County.
   * @nullable
   */
  declare consigneeCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Street In Kana.
   * @nullable
   */
  declare consigneeStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver District.
   * @nullable
   */
  declare receiverDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee District.
   * @nullable
   */
  declare consigneeDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Street Number.
   * @nullable
   */
  declare receiverStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Channel.
   * @nullable
   */
  declare orderChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Latitude.
   */
  declare receiverLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Time Zone.
   * @nullable
   */
  declare consigneeTimeZone?: Timezone | null;
  /**
   * Receiver Longitude.
   */
  declare receiverLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Shipping Period End.
   */
  declare requestedShippingPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Carrier Service Group Id.
   * @nullable
   */
  declare shippingCarrierServiceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiver Post Box.
   * @nullable
   */
  declare receiverPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Telephone.
   * @nullable
   */
  declare receiverTelephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver Building Complement.
   * @nullable
   */
  declare receiverBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Latitude.
   */
  declare consigneeLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consignee Building Complement.
   * @nullable
   */
  declare consigneeBuildingComplement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consignee Telephone.
   * @nullable
   */
  declare consigneeTelephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Reference.
   * @nullable
   */
  declare consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiver City In Kana.
   * @nullable
   */
  declare receiverCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee City In Kana.
   * @nullable
   */
  declare consigneeCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consignee Contact Name.
   * @nullable
   */
  declare consigneeContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation At Import Policy.
   * @nullable
   */
  declare reservationAtImportPolicy?: WhsOutboundShipmentOrderReservationAtImportPolicy | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderDocumentAttachmentMessages} entity.
   */
  declare outboundShipmentOrderDocumentAttachmentMessage: OutboundShipmentOrderDocumentAttachmentMessages<T>[];
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderLineMessages} entity.
   */
  declare lines: OutboundShipmentOrderLineMessages<T>[];

  constructor(_entityApi: OutboundShipmentOrderMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  receiverName?: DeserializedType<T, 'Edm.String'> | null;
  transportationRoutePlanId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreet?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCity?: DeserializedType<T, 'Edm.String'> | null;
  receiverCounty?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  consigneePurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneeName?: DeserializedType<T, 'Edm.String'> | null;
  orderOrigin?: DeserializedType<T, 'Edm.String'> | null;
  consigneeZipCode?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiverEmail?: DeserializedType<T, 'Edm.String'> | null;
  receiverContactName?: DeserializedType<T, 'Edm.String'> | null;
  plannedTransportationId?: DeserializedType<T, 'Edm.String'> | null;
  receiverCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  orderType?: DeserializedType<T, 'Edm.String'> | null;
  shipFromWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  processingStatus?: WhsShipmentOrderMessageProcessingStatus | null;
  requestedDeliveryPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receiverCity?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  receiverState?: DeserializedType<T, 'Edm.String'> | null;
  consigneeEmail?: DeserializedType<T, 'Edm.String'> | null;
  receiverTimeZone?: Timezone | null;
  requestedDeliveryPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consigneePostBox?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreet?: DeserializedType<T, 'Edm.String'> | null;
  transportationBrokerId?: DeserializedType<T, 'Edm.String'> | null;
  consigneeState?: DeserializedType<T, 'Edm.String'> | null;
  consigneeAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLongitude: DeserializedType<T, 'Edm.Decimal'>;
  receiverZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCounty?: DeserializedType<T, 'Edm.String'> | null;
  consigneeStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  receiverDistrict?: DeserializedType<T, 'Edm.String'> | null;
  consigneeDistrict?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  receiverStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  orderChannel?: DeserializedType<T, 'Edm.String'> | null;
  receiverLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consigneeTimeZone?: Timezone | null;
  receiverLongitude: DeserializedType<T, 'Edm.Decimal'>;
  requestedShippingPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  receiverPostBox?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  receiverTelephone?: DeserializedType<T, 'Edm.String'> | null;
  receiverBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  consigneeLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consigneeBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  consigneeTelephone?: DeserializedType<T, 'Edm.String'> | null;
  consigneeReference?: DeserializedType<T, 'Edm.String'> | null;
  receiverCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  consigneeCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  consigneeContactName?: DeserializedType<T, 'Edm.String'> | null;
  reservationAtImportPolicy?: WhsOutboundShipmentOrderReservationAtImportPolicy | null;
  outboundShipmentOrderDocumentAttachmentMessage: OutboundShipmentOrderDocumentAttachmentMessagesType<T>[];
  lines: OutboundShipmentOrderLineMessagesType<T>[];
}
