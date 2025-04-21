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
import type { InboundShipmentOrderExternalOriginLinesApi } from './InboundShipmentOrderExternalOriginLinesApi';

/**
 * This class represents the entity "InboundShipmentOrderExternalOriginLines" of service "d365_metadata".
 */
export class InboundShipmentOrderExternalOriginLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderExternalOriginLinesType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderExternalOriginLines.
   */
  static override _entityName = 'InboundShipmentOrderExternalOriginLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderExternalOriginLines entity.
   */
  static _keys = [];
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inbound Shipment Order Origin Id.
   * @nullable
   */
  declare inboundShipmentOrderOriginId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inbound Shipment Order Update Id.
   * @nullable
   */
  declare inboundShipmentOrderUpdateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Line Number.
   */
  declare sourceSystemLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InboundShipmentOrderExternalOriginLinesApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderExternalOriginLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderOriginId?: DeserializedType<T, 'Edm.String'> | null;
  inboundShipmentOrderUpdateId?: DeserializedType<T, 'Edm.String'> | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemLineNumber: DeserializedType<T, 'Edm.Int64'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
}
