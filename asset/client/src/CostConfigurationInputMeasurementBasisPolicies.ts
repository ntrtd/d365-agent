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
import type { CostConfigurationInputMeasurementBasisPoliciesApi } from './CostConfigurationInputMeasurementBasisPoliciesApi';

/**
 * This class represents the entity "CostConfigurationInputMeasurementBasisPolicies" of service "d365_metadata".
 */
export class CostConfigurationInputMeasurementBasisPolicies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationInputMeasurementBasisPoliciesType<T>
{
  /**
   * Technical entity name for CostConfigurationInputMeasurementBasisPolicies.
   */
  static override _entityName =
    'CostConfigurationInputMeasurementBasisPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationInputMeasurementBasisPolicies entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(
    _entityApi: CostConfigurationInputMeasurementBasisPoliciesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostConfigurationInputMeasurementBasisPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
