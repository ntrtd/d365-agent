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
import type { BudgetPlanProcessAdministrationsApi } from './BudgetPlanProcessAdministrationsApi';

/**
 * This class represents the entity "BudgetPlanProcessAdministrations" of service "d365_metadata".
 */
export class BudgetPlanProcessAdministrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanProcessAdministrationsType<T>
{
  /**
   * Technical entity name for BudgetPlanProcessAdministrations.
   */
  static override _entityName = 'BudgetPlanProcessAdministrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanProcessAdministrations entity.
   */
  static _keys = ['Process', 'PartyNumber'];
  /**
   * Process.
   */
  declare process: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Party Name.
   * @nullable
   */
  declare partyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow.
   * @nullable
   */
  declare workflow?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanProcessAdministrationsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanProcessAdministrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  process: DeserializedType<T, 'Edm.String'>;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  partyName?: DeserializedType<T, 'Edm.String'> | null;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
}
