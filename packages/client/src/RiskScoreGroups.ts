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
import type { RiskScoreGroupsApi } from './RiskScoreGroupsApi';
import { CredManRiskScoreType } from './CredManRiskScoreType';
import { CredManRiskGroupType } from './CredManRiskGroupType';

/**
 * This class represents the entity "RiskScoreGroups" of service "d365_metadata".
 */
export class RiskScoreGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RiskScoreGroupsType<T>
{
  /**
   * Technical entity name for RiskScoreGroups.
   */
  static override _entityName = 'RiskScoreGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RiskScoreGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Risk Score Type.
   * @nullable
   */
  declare riskScoreType?: CredManRiskScoreType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Type.
   * @nullable
   */
  declare groupType?: CredManRiskGroupType | null;

  constructor(_entityApi: RiskScoreGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface RiskScoreGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  riskScoreType?: CredManRiskScoreType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  groupType?: CredManRiskGroupType | null;
}
