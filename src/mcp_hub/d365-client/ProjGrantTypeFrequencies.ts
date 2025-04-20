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
import type { ProjGrantTypeFrequenciesApi } from './ProjGrantTypeFrequenciesApi';
import { ProjGrantFrequencyType } from './ProjGrantFrequencyType';

/**
 * This class represents the entity "ProjGrantTypeFrequencies" of service "d365_metadata".
 */
export class ProjGrantTypeFrequencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjGrantTypeFrequenciesType<T>
{
  /**
   * Technical entity name for ProjGrantTypeFrequencies.
   */
  static override _entityName = 'ProjGrantTypeFrequencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjGrantTypeFrequencies entity.
   */
  static _keys = ['dataAreaId', 'ProjGrantType_GrantType', 'Frequency'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Grant Type Grant Type.
   */
  declare projGrantTypeGrantType: DeserializedType<T, 'Edm.String'>;
  /**
   * Frequency.
   * @nullable
   */
  declare frequency?: ProjGrantFrequencyType | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProjGrantTypeFrequenciesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjGrantTypeFrequenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projGrantTypeGrantType: DeserializedType<T, 'Edm.String'>;
  frequency?: ProjGrantFrequencyType | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
}
