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
import type { MiscellaneousDeliveryTermConnectionsApi } from './MiscellaneousDeliveryTermConnectionsApi';

/**
 * This class represents the entity "MiscellaneousDeliveryTermConnections" of service "d365_metadata".
 */
export class MiscellaneousDeliveryTermConnections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MiscellaneousDeliveryTermConnectionsType<T>
{
  /**
   * Technical entity name for MiscellaneousDeliveryTermConnections.
   */
  static override _entityName = 'MiscellaneousDeliveryTermConnections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MiscellaneousDeliveryTermConnections entity.
   */
  static _keys = ['dataAreaId', 'DeliveryTermId', 'ChargesCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Term Id.
   */
  declare deliveryTermId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charges Code.
   */
  declare chargesCode: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: MiscellaneousDeliveryTermConnectionsApi<T>) {
    super(_entityApi);
  }
}

export interface MiscellaneousDeliveryTermConnectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  deliveryTermId: DeserializedType<T, 'Edm.String'>;
  chargesCode: DeserializedType<T, 'Edm.String'>;
}
