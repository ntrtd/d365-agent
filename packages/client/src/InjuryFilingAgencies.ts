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
import type { InjuryFilingAgenciesApi } from './InjuryFilingAgenciesApi';
import { NoYes } from './NoYes';
import {
  InjuryIncidentFilingAgencies,
  InjuryIncidentFilingAgenciesType
} from './InjuryIncidentFilingAgencies';

/**
 * This class represents the entity "InjuryFilingAgencies" of service "d365_metadata".
 */
export class InjuryFilingAgencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InjuryFilingAgenciesType<T>
{
  /**
   * Technical entity name for InjuryFilingAgencies.
   */
  static override _entityName = 'InjuryFilingAgencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryFilingAgencies entity.
   */
  static _keys = ['FilingAgencyId'];
  /**
   * Filing Agency Id.
   */
  declare filingAgencyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default.
   * @nullable
   */
  declare default?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link InjuryIncidentFilingAgencies} entity.
   */
  declare injuryIncidentFilingAgency?: InjuryIncidentFilingAgencies<T> | null;

  constructor(_entityApi: InjuryFilingAgenciesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryFilingAgenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  filingAgencyId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  default?: NoYes | null;
  injuryIncidentFilingAgency?: InjuryIncidentFilingAgenciesType<T> | null;
}
