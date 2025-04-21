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
import type { InjuryTreatmentTypesApi } from './InjuryTreatmentTypesApi';
import {
  InjuryIncidentTreatments,
  InjuryIncidentTreatmentsType
} from './InjuryIncidentTreatments';

/**
 * This class represents the entity "InjuryTreatmentTypes" of service "d365_metadata".
 */
export class InjuryTreatmentTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InjuryTreatmentTypesType<T>
{
  /**
   * Technical entity name for InjuryTreatmentTypes.
   */
  static override _entityName = 'InjuryTreatmentTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryTreatmentTypes entity.
   */
  static _keys = ['TreatmentTypeId'];
  /**
   * Treatment Type Id.
   */
  declare treatmentTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InjuryIncidentTreatments} entity.
   */
  declare injuryIncidentTreatment: InjuryIncidentTreatments<T>[];

  constructor(_entityApi: InjuryTreatmentTypesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryTreatmentTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  treatmentTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  injuryIncidentTreatment: InjuryIncidentTreatmentsType<T>[];
}
