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
import type { InboundShipmentOrderMessagesApi } from './InboundShipmentOrderMessagesApi';
import { Timezone } from './Timezone';
import { WhsShipmentOrderMessageProcessingStatus } from './WhsShipmentOrderMessageProcessingStatus';
import {
  InboundShipmentOrderDocumentAttachmentMessages,
  InboundShipmentOrderDocumentAttachmentMessagesType
} from './InboundShipmentOrderDocumentAttachmentMessages';
import {
  InboundShipmentOrderLineMessages,
  InboundShipmentOrderLineMessagesType
} from './InboundShipmentOrderLineMessages';

/**
 * This class represents the entity "InboundShipmentOrderMessages" of service "d365_metadata".
 */
export class InboundShipmentOrderMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderMessagesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderMessages.
   */
  static override _entityName = 'InboundShipmentOrderMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderMessages entity.
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
   * Consigner Time Zone.
   * @nullable
   */
  declare consignerTimeZone?: Timezone | null;
  /**
   * Sender Street Number.
   * @nullable
   */
  declare senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Zip Code.
   * @nullable
   */
  declare consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Telephone.
   * @nullable
   */
  declare consignerTelephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Name.
   * @nullable
   */
  declare consignerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Longitude.
   */
  declare consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Building Complement.
   * @nullable
   */
  declare consignerBuildingComplement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender County.
   * @nullable
   */
  declare senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Country Region Id.
   * @nullable
   */
  declare consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Contact Name.
   * @nullable
   */
  declare consignerContactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Zip Code.
   * @nullable
   */
  declare senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender City In Kana.
   * @nullable
   */
  declare senderCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Channel.
   * @nullable
   */
  declare orderChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender City.
   * @nullable
   */
  declare senderCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Building Complement.
   * @nullable
   */
  declare senderBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Latitude.
   */
  declare consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner County.
   * @nullable
   */
  declare consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner City In Kana.
   * @nullable
   */
  declare consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Country Region Id.
   * @nullable
   */
  declare senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Time Zone.
   * @nullable
   */
  declare senderTimeZone?: Timezone | null;
  /**
   * Order Origin.
   * @nullable
   */
  declare orderOrigin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Receipt Period End.
   */
  declare plannedReceiptPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Name.
   * @nullable
   */
  declare senderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Latitude.
   */
  declare senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sender Street In Kana.
   * @nullable
   */
  declare senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Street.
   * @nullable
   */
  declare senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Post Box.
   * @nullable
   */
  declare consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner State.
   * @nullable
   */
  declare consignerState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Post Box.
   * @nullable
   */
  declare senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender Longitude.
   */
  declare senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consigner Street.
   * @nullable
   */
  declare consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Street In Kana.
   * @nullable
   */
  declare consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Type.
   * @nullable
   */
  declare orderType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Email.
   * @nullable
   */
  declare consignerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender State.
   * @nullable
   */
  declare senderState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner Street Number.
   * @nullable
   */
  declare consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsShipmentOrderMessageProcessingStatus | null;
  /**
   * Consigner Account Number.
   * @nullable
   */
  declare consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Receipt Period Start.
   */
  declare plannedReceiptPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consigner District.
   * @nullable
   */
  declare consignerDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consigner City.
   * @nullable
   */
  declare consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sender District.
   * @nullable
   */
  declare senderDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderDocumentAttachmentMessages} entity.
   */
  declare inboundShipmentOrderDocumentAttachmentMessage: InboundShipmentOrderDocumentAttachmentMessages<T>[];
  /**
   * One-to-many navigation property to the {@link InboundShipmentOrderLineMessages} entity.
   */
  declare lines: InboundShipmentOrderLineMessages<T>[];

  constructor(_entityApi: InboundShipmentOrderMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderNumber: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  consignerTimeZone?: Timezone | null;
  senderStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  consignerZipCode?: DeserializedType<T, 'Edm.String'> | null;
  consignerTelephone?: DeserializedType<T, 'Edm.String'> | null;
  consignerName?: DeserializedType<T, 'Edm.String'> | null;
  consignerLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  senderCounty?: DeserializedType<T, 'Edm.String'> | null;
  consignerCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  consignerContactName?: DeserializedType<T, 'Edm.String'> | null;
  senderZipCode?: DeserializedType<T, 'Edm.String'> | null;
  senderCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  orderChannel?: DeserializedType<T, 'Edm.String'> | null;
  senderCity?: DeserializedType<T, 'Edm.String'> | null;
  senderBuildingComplement?: DeserializedType<T, 'Edm.String'> | null;
  consignerLatitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerCounty?: DeserializedType<T, 'Edm.String'> | null;
  consignerCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  senderTimeZone?: Timezone | null;
  orderOrigin?: DeserializedType<T, 'Edm.String'> | null;
  plannedReceiptPeriodEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  senderName?: DeserializedType<T, 'Edm.String'> | null;
  senderLatitude: DeserializedType<T, 'Edm.Decimal'>;
  senderStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  senderStreet?: DeserializedType<T, 'Edm.String'> | null;
  consignerPostBox?: DeserializedType<T, 'Edm.String'> | null;
  consignerState?: DeserializedType<T, 'Edm.String'> | null;
  senderPostBox?: DeserializedType<T, 'Edm.String'> | null;
  senderLongitude: DeserializedType<T, 'Edm.Decimal'>;
  consignerStreet?: DeserializedType<T, 'Edm.String'> | null;
  consignerStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  orderType?: DeserializedType<T, 'Edm.String'> | null;
  consignerEmail?: DeserializedType<T, 'Edm.String'> | null;
  senderState?: DeserializedType<T, 'Edm.String'> | null;
  consignerStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  processingStatus?: WhsShipmentOrderMessageProcessingStatus | null;
  consignerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  plannedReceiptPeriodStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consignerDistrict?: DeserializedType<T, 'Edm.String'> | null;
  consignerCity?: DeserializedType<T, 'Edm.String'> | null;
  senderDistrict?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderDocumentAttachmentMessage: InboundShipmentOrderDocumentAttachmentMessagesType<T>[];
  lines: InboundShipmentOrderLineMessagesType<T>[];
}
