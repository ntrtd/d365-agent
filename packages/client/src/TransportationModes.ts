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
import type { TransportationModesApi } from './TransportationModesApi';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';
import {
  FreightBillDetails,
  FreightBillDetailsType
} from './FreightBillDetails';

/**
 * This class represents the entity "TransportationModes" of service "d365_metadata".
 */
export class TransportationModes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TransportationModesType<T>
{
  /**
   * Technical entity name for TransportationModes.
   */
  static override _entityName = 'TransportationModes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransportationModes entity.
   */
  static _keys = ['dataAreaId', 'ModeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mode Code.
   */
  declare modeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Mode Description.
   * @nullable
   */
  declare modeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outbonudShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link FreightBillDetails} entity.
   */
  declare freightBillDetails: FreightBillDetails<T>[];

  constructor(_entityApi: TransportationModesApi<T>) {
    super(_entityApi);
  }
}

export interface TransportationModesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  modeCode: DeserializedType<T, 'Edm.String'>;
  modeDescription?: DeserializedType<T, 'Edm.String'> | null;
  outbonudShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
  freightBillDetails: FreightBillDetailsType<T>[];
}
