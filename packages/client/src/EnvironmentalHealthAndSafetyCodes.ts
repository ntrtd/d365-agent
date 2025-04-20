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
import type { EnvironmentalHealthAndSafetyCodesApi } from './EnvironmentalHealthAndSafetyCodesApi';

/**
 * This class represents the entity "EnvironmentalHealthAndSafetyCodes" of service "d365_metadata".
 */
export class EnvironmentalHealthAndSafetyCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EnvironmentalHealthAndSafetyCodesType<T>
{
  /**
   * Technical entity name for EnvironmentalHealthAndSafetyCodes.
   */
  static override _entityName = 'EnvironmentalHealthAndSafetyCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EnvironmentalHealthAndSafetyCodes entity.
   */
  static _keys = ['EnvironmentalHealthAndSafetyCode'];
  /**
   * Environmental Health And Safety Code.
   */
  declare environmentalHealthAndSafetyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Environmental Health And Safety Description.
   * @nullable
   */
  declare environmentalHealthAndSafetyDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: EnvironmentalHealthAndSafetyCodesApi<T>) {
    super(_entityApi);
  }
}

export interface EnvironmentalHealthAndSafetyCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  environmentalHealthAndSafetyCode: DeserializedType<T, 'Edm.String'>;
  environmentalHealthAndSafetyDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
