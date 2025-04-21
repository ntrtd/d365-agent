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
import type { LoyaltyLevelsApi } from './LoyaltyLevelsApi';

/**
 * This class represents the entity "LoyaltyLevels" of service "d365_metadata".
 */
export class LoyaltyLevels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LoyaltyLevelsType<T>
{
  /**
   * Technical entity name for LoyaltyLevels.
   */
  static override _entityName = 'LoyaltyLevels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoyaltyLevels entity.
   */
  static _keys = ['dataAreaId', 'LevelPhrase'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Level Phrase.
   */
  declare levelPhrase: DeserializedType<T, 'Edm.String'>;
  /**
   * Level Description.
   * @nullable
   */
  declare levelDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LoyaltyLevelsApi<T>) {
    super(_entityApi);
  }
}

export interface LoyaltyLevelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  levelPhrase: DeserializedType<T, 'Edm.String'>;
  levelDescription?: DeserializedType<T, 'Edm.String'> | null;
}
