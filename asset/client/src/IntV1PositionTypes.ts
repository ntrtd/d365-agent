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
import type { IntV1PositionTypesApi } from './IntV1PositionTypesApi';
import { HcmEmploymentStatus } from './HcmEmploymentStatus';

/**
 * This class represents the entity "IntV1PositionTypes" of service "d365_metadata".
 */
export class IntV1PositionTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntV1PositionTypesType<T>
{
  /**
   * Technical entity name for IntV1PositionTypes.
   */
  static override _entityName = 'IntV1PositionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntV1PositionTypes entity.
   */
  static _keys = ['PositionTypeId'];
  /**
   * Position Type Id.
   */
  declare positionTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Classification.
   * @nullable
   */
  declare classification?: HcmEmploymentStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntV1PositionTypesApi<T>) {
    super(_entityApi);
  }
}

export interface IntV1PositionTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionTypeId: DeserializedType<T, 'Edm.String'>;
  classification?: HcmEmploymentStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
