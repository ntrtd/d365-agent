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
import type { CreditManagementRiskGroupsApi } from './CreditManagementRiskGroupsApi';
import { CredManRiskGroupIndicator } from './CredManRiskGroupIndicator';

/**
 * This class represents the entity "CreditManagementRiskGroups" of service "d365_metadata".
 */
export class CreditManagementRiskGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementRiskGroupsType<T>
{
  /**
   * Technical entity name for CreditManagementRiskGroups.
   */
  static override _entityName = 'CreditManagementRiskGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementRiskGroups entity.
   */
  static _keys = ['dataAreaId', 'RiskGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Risk Group Id.
   */
  declare riskGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Risk Group Indicator.
   * @nullable
   */
  declare riskGroupIndicator?: CredManRiskGroupIndicator | null;
  /**
   * Percent To.
   */
  declare percentTo: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent From.
   */
  declare percentFrom: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CreditManagementRiskGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementRiskGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  riskGroupId: DeserializedType<T, 'Edm.String'>;
  riskGroupIndicator?: CredManRiskGroupIndicator | null;
  percentTo: DeserializedType<T, 'Edm.Decimal'>;
  percentFrom: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
