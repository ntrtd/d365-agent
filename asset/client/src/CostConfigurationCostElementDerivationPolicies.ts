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
import type { CostConfigurationCostElementDerivationPoliciesApi } from './CostConfigurationCostElementDerivationPoliciesApi';

/**
 * This class represents the entity "CostConfigurationCostElementDerivationPolicies" of service "d365_metadata".
 */
export class CostConfigurationCostElementDerivationPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationCostElementDerivationPoliciesType<T>
{
  /**
   * Technical entity name for CostConfigurationCostElementDerivationPolicies.
   */
  static override _entityName =
    'CostConfigurationCostElementDerivationPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationCostElementDerivationPolicies entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element List Name.
   * @nullable
   */
  declare costElementListName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: CostConfigurationCostElementDerivationPoliciesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostConfigurationCostElementDerivationPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  costElementListName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
