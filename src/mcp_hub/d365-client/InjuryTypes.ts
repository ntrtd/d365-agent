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
import type { InjuryTypesApi } from './InjuryTypesApi';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';

/**
 * This class represents the entity "InjuryTypes" of service "d365_metadata".
 */
export class InjuryTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InjuryTypesType<T>
{
  /**
   * Technical entity name for InjuryTypes.
   */
  static override _entityName = 'InjuryTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryTypes entity.
   */
  static _keys = ['InjuryTypeId'];
  /**
   * Injury Type Id.
   */
  declare injuryTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncidents: InjuryIncidents<T>[];

  constructor(_entityApi: InjuryTypesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  injuryTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  injuryIncidents: InjuryIncidentsType<T>[];
}
