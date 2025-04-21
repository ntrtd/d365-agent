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
import type { ProjRevenueProfileRulesApi } from './ProjRevenueProfileRulesApi';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';

/**
 * This class represents the entity "ProjRevenueProfileRules" of service "d365_metadata".
 */
export class ProjRevenueProfileRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjRevenueProfileRulesType<T>
{
  /**
   * Technical entity name for ProjRevenueProfileRules.
   */
  static override _entityName = 'ProjRevenueProfileRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjRevenueProfileRules entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectRevenueProfileId',
    'ProjectContractBillingMethod',
    'ProjectContractId',
    'ProjectId',
    'ProjectGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Revenue Profile Id.
   */
  declare projectRevenueProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Billing Method.
   * @nullable
   */
  declare projectContractBillingMethod?: ProjContractBillingMethod | null;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Group Id.
   */
  declare projectGroupId: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProjRevenueProfileRulesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjRevenueProfileRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectRevenueProfileId: DeserializedType<T, 'Edm.String'>;
  projectContractBillingMethod?: ProjContractBillingMethod | null;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  projectGroupId: DeserializedType<T, 'Edm.String'>;
}
