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
import type { ProjGrantFrequenciesApi } from './ProjGrantFrequenciesApi';
import { ProjGrantFrequencyType } from './ProjGrantFrequencyType';

/**
 * This class represents the entity "ProjGrantFrequencies" of service "d365_metadata".
 */
export class ProjGrantFrequencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjGrantFrequenciesType<T>
{
  /**
   * Technical entity name for ProjGrantFrequencies.
   */
  static override _entityName = 'ProjGrantFrequencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjGrantFrequencies entity.
   */
  static _keys = ['dataAreaId', 'ProjGrant_GrantId', 'Frequency'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Grant Grant Id.
   */
  declare projGrantGrantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: ProjGrantFrequencyType | null;
  /**
   * Frequency Comments.
   * @nullable
   */
  declare frequencyComments?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjGrantFrequenciesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjGrantFrequenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projGrantGrantId: DeserializedType<T, 'Edm.String'>;
  frequency?: ProjGrantFrequencyType | null;
  frequencyComments?: DeserializedType<T, 'Edm.String'> | null;
}
