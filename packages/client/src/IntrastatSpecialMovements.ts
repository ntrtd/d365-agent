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
import type { IntrastatSpecialMovementsApi } from './IntrastatSpecialMovementsApi';

/**
 * This class represents the entity "IntrastatSpecialMovements" of service "d365_metadata".
 */
export class IntrastatSpecialMovements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntrastatSpecialMovementsType<T>
{
  /**
   * Technical entity name for IntrastatSpecialMovements.
   */
  static override _entityName = 'IntrastatSpecialMovements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntrastatSpecialMovements entity.
   */
  static _keys = ['dataAreaId', 'SpecialMovement'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Special Movement.
   */
  declare specialMovement: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntrastatSpecialMovementsApi<T>) {
    super(_entityApi);
  }
}

export interface IntrastatSpecialMovementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  specialMovement: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
