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
import type { CostConfigurationConventionsApi } from './CostConfigurationConventionsApi';

/**
 * This class represents the entity "CostConfigurationConventions" of service "d365_metadata".
 */
export class CostConfigurationConventions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationConventionsType<T>
{
  /**
   * Technical entity name for CostConfigurationConventions.
   */
  static override _entityName = 'CostConfigurationConventions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationConventions entity.
   */
  static _keys = ['ConventionName'];
  /**
   * Convention Name.
   */
  declare conventionName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Input Measurement Policy Name.
   * @nullable
   */
  declare inputMeasurementPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flow Assumption Policy Name.
   * @nullable
   */
  declare flowAssumptionPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Object Policy Name.
   * @nullable
   */
  declare costObjectPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Element Derivation Policy Name.
   * @nullable
   */
  declare costElementDerivationPolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: CostConfigurationConventionsApi<T>) {
    super(_entityApi);
  }
}

export interface CostConfigurationConventionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  conventionName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  inputMeasurementPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  flowAssumptionPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  costObjectPolicyName?: DeserializedType<T, 'Edm.String'> | null;
  costElementDerivationPolicyName?: DeserializedType<T, 'Edm.String'> | null;
}
