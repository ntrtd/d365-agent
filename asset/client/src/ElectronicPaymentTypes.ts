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
import type { ElectronicPaymentTypesApi } from './ElectronicPaymentTypesApi';

/**
 * This class represents the entity "ElectronicPaymentTypes" of service "d365_metadata".
 */
export class ElectronicPaymentTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentTypesType<T>
{
  /**
   * Technical entity name for ElectronicPaymentTypes.
   */
  static override _entityName = 'ElectronicPaymentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentTypes entity.
   */
  static _keys = ['dataAreaId', 'PaymentType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Type.
   */
  declare paymentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
