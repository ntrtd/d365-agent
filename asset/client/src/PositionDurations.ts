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
import type { PositionDurationsApi } from './PositionDurationsApi';
import { PositionsV2, PositionsV2Type } from './PositionsV2';

/**
 * This class represents the entity "PositionDurations" of service "d365_metadata".
 */
export class PositionDurations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PositionDurationsType<T>
{
  /**
   * Technical entity name for PositionDurations.
   */
  static override _entityName = 'PositionDurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PositionDurations entity.
   */
  static _keys = ['PositionId', 'ValidFrom', 'ValidTo'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link PositionsV2} entity.
   */
  declare position?: PositionsV2<T> | null;

  constructor(_entityApi: PositionDurationsApi<T>) {
    super(_entityApi);
  }
}

export interface PositionDurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  position?: PositionsV2Type<T> | null;
}
