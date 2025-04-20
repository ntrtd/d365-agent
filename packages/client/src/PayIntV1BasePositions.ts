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
import type { PayIntV1BasePositionsApi } from './PayIntV1BasePositionsApi';

/**
 * This class represents the entity "PayIntV1BasePositions" of service "d365_metadata".
 */
export class PayIntV1BasePositions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1BasePositionsType<T>
{
  /**
   * Technical entity name for PayIntV1BasePositions.
   */
  static override _entityName = 'PayIntV1BasePositions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1BasePositions entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PayIntV1BasePositionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1BasePositionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
}
