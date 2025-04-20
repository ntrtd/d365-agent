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
import type { AlcoholProductionTypesApi } from './AlcoholProductionTypesApi';
import { NoYesCombo } from './NoYesCombo';

/**
 * This class represents the entity "AlcoholProductionTypes" of service "d365_metadata".
 */
export class AlcoholProductionTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AlcoholProductionTypesType<T>
{
  /**
   * Technical entity name for AlcoholProductionTypes.
   */
  static override _entityName = 'AlcoholProductionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AlcoholProductionTypes entity.
   */
  static _keys = ['TypeId'];
  /**
   * Type Id.
   */
  declare typeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Beer.
   * @nullable
   */
  declare isBeer?: NoYesCombo | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Type.
   * @nullable
   */
  declare parentType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AlcoholProductionTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AlcoholProductionTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  typeId: DeserializedType<T, 'Edm.String'>;
  isBeer?: NoYesCombo | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  parentType?: DeserializedType<T, 'Edm.String'> | null;
}
