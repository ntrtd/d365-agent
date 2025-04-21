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
import type { RetailTenderTypesApi } from './RetailTenderTypesApi';
import { RetailTenderFunction } from './RetailTenderFunction';

/**
 * This class represents the entity "RetailTenderTypes" of service "d365_metadata".
 */
export class RetailTenderTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailTenderTypesType<T>
{
  /**
   * Technical entity name for RetailTenderTypes.
   */
  static override _entityName = 'RetailTenderTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTenderTypes entity.
   */
  static _keys = ['PaymentMethodNumber'];
  /**
   * Payment Method Number.
   */
  declare paymentMethodNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Function.
   * @nullable
   */
  declare defaultFunction?: RetailTenderFunction | null;

  constructor(_entityApi: RetailTenderTypesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTenderTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  paymentMethodNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  defaultFunction?: RetailTenderFunction | null;
}
