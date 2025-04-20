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
import type { ElectronicPaymentWaysApi } from './ElectronicPaymentWaysApi';

/**
 * This class represents the entity "ElectronicPaymentWays" of service "d365_metadata".
 */
export class ElectronicPaymentWays<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentWaysType<T>
{
  /**
   * Technical entity name for ElectronicPaymentWays.
   */
  static override _entityName = 'ElectronicPaymentWays';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentWays entity.
   */
  static _keys = ['dataAreaId', 'PaymentWay'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Way.
   */
  declare paymentWay: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentWaysApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentWaysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentWay: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
