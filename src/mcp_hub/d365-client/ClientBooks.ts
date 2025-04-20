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
import type { ClientBooksApi } from './ClientBooksApi';

/**
 * This class represents the entity "ClientBooks" of service "d365_metadata".
 */
export class ClientBooks<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ClientBooksType<T>
{
  /**
   * Technical entity name for ClientBooks.
   */
  static override _entityName = 'ClientBooks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClientBooks entity.
   */
  static _keys = ['dataAreaId', 'Id'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ClientBooksApi<T>) {
    super(_entityApi);
  }
}

export interface ClientBooksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
