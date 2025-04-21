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
import type { TechnicalNamesApi } from './TechnicalNamesApi';

/**
 * This class represents the entity "TechnicalNames" of service "d365_metadata".
 */
export class TechnicalNames<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TechnicalNamesType<T>
{
  /**
   * Technical entity name for TechnicalNames.
   */
  static override _entityName = 'TechnicalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TechnicalNames entity.
   */
  static _keys = ['TechnicalNameCode'];
  /**
   * Technical Name Code.
   */
  declare technicalNameCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TechnicalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface TechnicalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  technicalNameCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
