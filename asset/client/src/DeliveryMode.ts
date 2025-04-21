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
import type { DeliveryModeApi } from './DeliveryModeApi';

/**
 * This class represents the entity "DeliveryMode" of service "d365_metadata".
 */
export class DeliveryMode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeliveryModeType<T>
{
  /**
   * Technical entity name for DeliveryMode.
   */
  static override _entityName = 'DeliveryMode';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeliveryMode entity.
   */
  static _keys = ['DeliveryModeId'];
  /**
   * Delivery Mode Id.
   */
  declare deliveryModeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Mode Name.
   * @nullable
   */
  declare deliveryModeName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DeliveryModeApi<T>) {
    super(_entityApi);
  }
}

export interface DeliveryModeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  deliveryModeId: DeserializedType<T, 'Edm.String'>;
  deliveryModeName?: DeserializedType<T, 'Edm.String'> | null;
}
