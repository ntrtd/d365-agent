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
import type { MultiSourcePoliciesApi } from './MultiSourcePoliciesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MultiSourcePolicies" of service "d365_metadata".
 */
export class MultiSourcePolicies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MultiSourcePoliciesType<T>
{
  /**
   * Technical entity name for MultiSourcePolicies.
   */
  static override _entityName = 'MultiSourcePolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MultiSourcePolicies entity.
   */
  static _keys = ['dataAreaId', 'PolicyName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Balance Period Days.
   */
  declare balancePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Policy Description.
   * @nullable
   */
  declare policyDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MultiSourcePoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface MultiSourcePoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  policyName: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  balancePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  policyDescription?: DeserializedType<T, 'Edm.String'> | null;
}
