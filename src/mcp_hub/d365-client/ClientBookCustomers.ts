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
import type { ClientBookCustomersApi } from './ClientBookCustomersApi';

/**
 * This class represents the entity "ClientBookCustomers" of service "d365_metadata".
 */
export class ClientBookCustomers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ClientBookCustomersType<T>
{
  /**
   * Technical entity name for ClientBookCustomers.
   */
  static override _entityName = 'ClientBookCustomers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClientBookCustomers entity.
   */
  static _keys = ['dataAreaId', 'CustomerAccountNumber', 'ClientBookId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Client Book Id.
   */
  declare clientBookId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ClientBookCustomersApi<T>) {
    super(_entityApi);
  }
}

export interface ClientBookCustomersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  clientBookId: DeserializedType<T, 'Edm.String'>;
}
