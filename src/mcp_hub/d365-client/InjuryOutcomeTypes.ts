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
import type { InjuryOutcomeTypesApi } from './InjuryOutcomeTypesApi';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';

/**
 * This class represents the entity "InjuryOutcomeTypes" of service "d365_metadata".
 */
export class InjuryOutcomeTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InjuryOutcomeTypesType<T>
{
  /**
   * Technical entity name for InjuryOutcomeTypes.
   */
  static override _entityName = 'InjuryOutcomeTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryOutcomeTypes entity.
   */
  static _keys = ['OutcomeTypeId'];
  /**
   * Outcome Type Id.
   */
  declare outcomeTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncidents: InjuryIncidents<T>[];

  constructor(_entityApi: InjuryOutcomeTypesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryOutcomeTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  outcomeTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  injuryIncidents: InjuryIncidentsType<T>[];
}
