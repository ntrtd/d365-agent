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
import type { PayIntV1UnionsApi } from './PayIntV1UnionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1Unions" of service "d365_metadata".
 */
export class PayIntV1Unions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1UnionsType<T>
{
  /**
   * Technical entity name for PayIntV1Unions.
   */
  static override _entityName = 'PayIntV1Unions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1Unions entity.
   */
  static _keys = ['UnionId'];
  /**
   * Union Id.
   */
  declare unionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entitled To Negotiate.
   * @nullable
   */
  declare entitledToNegotiate?: NoYes | null;

  constructor(_entityApi: PayIntV1UnionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1UnionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unionId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  entitledToNegotiate?: NoYes | null;
}
