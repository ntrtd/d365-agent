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
import type { AuthorityOkato_RuApi } from './AuthorityOkato_RuApi';

/**
 * This class represents the entity "AuthorityOKATO_RU" of service "d365_metadata".
 */
export class AuthorityOkato_Ru<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AuthorityOkato_RuType<T>
{
  /**
   * Technical entity name for AuthorityOkato_Ru.
   */
  static override _entityName = 'AuthorityOKATO_RU';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AuthorityOkato_Ru entity.
   */
  static _keys = ['dataAreaId', 'OKATO'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Okato.
   */
  declare okato: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Authority.
   * @nullable
   */
  declare taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AuthorityOkato_RuApi<T>) {
    super(_entityApi);
  }
}

export interface AuthorityOkato_RuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  okato: DeserializedType<T, 'Edm.String'>;
  taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
