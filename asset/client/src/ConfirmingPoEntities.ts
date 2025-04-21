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
import type { ConfirmingPoEntitiesApi } from './ConfirmingPoEntitiesApi';

/**
 * This class represents the entity "ConfirmingPOEntities" of service "d365_metadata".
 */
export class ConfirmingPoEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConfirmingPoEntitiesType<T>
{
  /**
   * Technical entity name for ConfirmingPoEntities.
   */
  static override _entityName = 'ConfirmingPOEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ConfirmingPoEntities entity.
   */
  static _keys = ['dataAreaId', 'ConfirmingPOID', 'LanguageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Confirming Poid.
   */
  declare confirmingPoid: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirming Po Message.
   * @nullable
   */
  declare confirmingPoMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ConfirmingPoEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ConfirmingPoEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  confirmingPoid: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  confirmingPoMessage?: DeserializedType<T, 'Edm.String'> | null;
}
