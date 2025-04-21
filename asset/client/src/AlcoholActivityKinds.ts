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
import type { AlcoholActivityKindsApi } from './AlcoholActivityKindsApi';

/**
 * This class represents the entity "AlcoholActivityKinds" of service "d365_metadata".
 */
export class AlcoholActivityKinds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AlcoholActivityKindsType<T>
{
  /**
   * Technical entity name for AlcoholActivityKinds.
   */
  static override _entityName = 'AlcoholActivityKinds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AlcoholActivityKinds entity.
   */
  static _keys = ['KindId'];
  /**
   * Kind Id.
   */
  declare kindId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AlcoholActivityKindsApi<T>) {
    super(_entityApi);
  }
}

export interface AlcoholActivityKindsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  kindId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
