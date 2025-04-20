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
import type { CostConfigurationCostElementDerivationRuleProductionsApi } from './CostConfigurationCostElementDerivationRuleProductionsApi';
import { CostConfigurationMeasurementTypeProduction } from './CostConfigurationMeasurementTypeProduction';

/**
 * This class represents the entity "CostConfigurationCostElementDerivationRuleProductions" of service "d365_metadata".
 */
export class CostConfigurationCostElementDerivationRuleProductions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationCostElementDerivationRuleProductionsType<T>
{
  /**
   * Technical entity name for CostConfigurationCostElementDerivationRuleProductions.
   */
  static override _entityName =
    'CostConfigurationCostElementDerivationRuleProductions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationCostElementDerivationRuleProductions entity.
   */
  static _keys = [
    'CostElementDerivationPolicyName',
    'Measurement',
    'ResourceTypeName'
  ];
  /**
   * Cost Element Derivation Policy Name.
   */
  declare costElementDerivationPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Measurement.
   * @nullable
   */
  declare measurement?: CostConfigurationMeasurementTypeProduction | null;
  /**
   * Resource Type Name.
   */
  declare resourceTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element Name.
   * @nullable
   */
  declare costElementName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: CostConfigurationCostElementDerivationRuleProductionsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostConfigurationCostElementDerivationRuleProductionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costElementDerivationPolicyName: DeserializedType<T, 'Edm.String'>;
  measurement?: CostConfigurationMeasurementTypeProduction | null;
  resourceTypeName: DeserializedType<T, 'Edm.String'>;
  costElementName?: DeserializedType<T, 'Edm.String'> | null;
}
