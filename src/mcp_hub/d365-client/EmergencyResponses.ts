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
import type { EmergencyResponsesApi } from './EmergencyResponsesApi';

/**
 * This class represents the entity "EmergencyResponses" of service "d365_metadata".
 */
export class EmergencyResponses<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmergencyResponsesType<T>
{
  /**
   * Technical entity name for EmergencyResponses.
   */
  static override _entityName = 'EmergencyResponses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmergencyResponses entity.
   */
  static _keys = ['EMSCode'];
  /**
   * Ems Code.
   */
  declare emsCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmergencyResponsesApi<T>) {
    super(_entityApi);
  }
}

export interface EmergencyResponsesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  emsCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
