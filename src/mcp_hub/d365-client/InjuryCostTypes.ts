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
import type { InjuryCostTypesApi } from './InjuryCostTypesApi';
import {
  InjuryIncidentCostTypes,
  InjuryIncidentCostTypesType
} from './InjuryIncidentCostTypes';

/**
 * This class represents the entity "InjuryCostTypes" of service "d365_metadata".
 */
export class InjuryCostTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InjuryCostTypesType<T>
{
  /**
   * Technical entity name for InjuryCostTypes.
   */
  static override _entityName = 'InjuryCostTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InjuryCostTypes entity.
   */
  static _keys = ['CostTypeId'];
  /**
   * Cost Type Id.
   */
  declare costTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InjuryIncidentCostTypes} entity.
   */
  declare injuryIncidentCostType: InjuryIncidentCostTypes<T>[];

  constructor(_entityApi: InjuryCostTypesApi<T>) {
    super(_entityApi);
  }
}

export interface InjuryCostTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costTypeId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  injuryIncidentCostType: InjuryIncidentCostTypesType<T>[];
}
