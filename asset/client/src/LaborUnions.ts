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
import type { LaborUnionsApi } from './LaborUnionsApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LaborUnions" of service "d365_metadata".
 */
export class LaborUnions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LaborUnionsType<T>
{
  /**
   * Technical entity name for LaborUnions.
   */
  static override _entityName = 'LaborUnions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LaborUnions entity.
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

  constructor(_entityApi: LaborUnionsApi<T>) {
    super(_entityApi);
  }
}

export interface LaborUnionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unionId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  negotiator?: NoYes | null;
}
