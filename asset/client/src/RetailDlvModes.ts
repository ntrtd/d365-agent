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
import type { RetailDlvModesApi } from './RetailDlvModesApi';
import { RetailDlvModeType } from './RetailDlvModeType';
import {
  OutboundShipmentOrderHeaders,
  OutboundShipmentOrderHeadersType
} from './OutboundShipmentOrderHeaders';

/**
 * This class represents the entity "RetailDlvModes" of service "d365_metadata".
 */
export class RetailDlvModes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailDlvModesType<T>
{
  /**
   * Technical entity name for RetailDlvModes.
   */
  static override _entityName = 'RetailDlvModes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDlvModes entity.
   */
  static _keys = ['dataAreaId', 'Code'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Order.
   */
  declare displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: RetailDlvModeType | null;
  /**
   * One-to-many navigation property to the {@link OutboundShipmentOrderHeaders} entity.
   */
  declare outboundShipmentOrderHeaders: OutboundShipmentOrderHeaders<T>[];

  constructor(_entityApi: RetailDlvModesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDlvModesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  code: DeserializedType<T, 'Edm.String'>;
  displayOrder: DeserializedType<T, 'Edm.Decimal'>;
  type?: RetailDlvModeType | null;
  outboundShipmentOrderHeaders: OutboundShipmentOrderHeadersType<T>[];
}
