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
import type { CreditManagementCustomerRiskScoresApi } from './CreditManagementCustomerRiskScoresApi';

/**
 * This class represents the entity "CreditManagementCustomerRiskScores" of service "d365_metadata".
 */
export class CreditManagementCustomerRiskScores<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementCustomerRiskScoresType<T>
{
  /**
   * Technical entity name for CreditManagementCustomerRiskScores.
   */
  static override _entityName = 'CreditManagementCustomerRiskScores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementCustomerRiskScores entity.
   */
  static _keys = ['dataAreaId', 'CustAccount', 'RiskScoreGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Cust Account.
   */
  declare custAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Risk Score Group Id.
   */
  declare riskScoreGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CreditManagementCustomerRiskScoresApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementCustomerRiskScoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  custAccount: DeserializedType<T, 'Edm.String'>;
  riskScoreGroupId: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
