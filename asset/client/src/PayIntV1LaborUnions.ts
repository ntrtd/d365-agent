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
import type { PayIntV1LaborUnionsApi } from './PayIntV1LaborUnionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PayIntV1LaborUnions" of service "d365_metadata".
 */
export class PayIntV1LaborUnions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayIntV1LaborUnionsType<T>
{
  /**
   * Technical entity name for PayIntV1LaborUnions.
   */
  static override _entityName = 'PayIntV1LaborUnions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1LaborUnions entity.
   */
  static _keys = ['UnionID'];
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
   * Negotiator.
   * @nullable
   */
  declare negotiator?: NoYes | null;

  constructor(_entityApi: PayIntV1LaborUnionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1LaborUnionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unionId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  negotiator?: NoYes | null;
}
