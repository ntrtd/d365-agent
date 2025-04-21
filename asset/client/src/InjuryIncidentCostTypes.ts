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
import type { InjuryIncidentCostTypesApi } from './InjuryIncidentCostTypesApi';
import { InjuryCostTypes, InjuryCostTypesType } from './InjuryCostTypes';
import { InjuryIncidents, InjuryIncidentsType } from './InjuryIncidents';

/**
 * This class represents the entity "InjuryIncidentCostTypes" of service "d365_metadata".
 */
export class InjuryIncidentCostTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InjuryIncidentCostTypesType<T>
{
  /**
   * Technical entity name for InjuryIncidentCostTypes.
   */
  static override _entityName = 'InjuryIncidentCostTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryIncidentCostTypes entity.
   */
  static _keys = ['CaseNumber', 'LineNum'];
  /**
   * Case Number.
   */
  declare caseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Date.
   */
  declare costDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Type Id.
   * @nullable
   */
  declare costTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link InjuryCostTypes} entity.
   */
  declare injuryCostType?: InjuryCostTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link InjuryIncidents} entity.
   */
  declare injuryIncident?: InjuryIncidents<T> | null;

  constructor(_entityApi: InjuryIncidentCostTypesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryIncidentCostTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  caseNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  costDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costTypeId?: DeserializedType<T, 'Edm.String'> | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  injuryCostType?: InjuryCostTypesType<T> | null;
  injuryIncident?: InjuryIncidentsType<T> | null;
}
