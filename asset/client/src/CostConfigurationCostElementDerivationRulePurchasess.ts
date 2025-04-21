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
import type { CostConfigurationCostElementDerivationRulePurchasessApi } from './CostConfigurationCostElementDerivationRulePurchasessApi';
import { CostConfigurationMeasurementType } from './CostConfigurationMeasurementType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CostConfigurationCostElementDerivationRulePurchasess" of service "d365_metadata".
 */
export class CostConfigurationCostElementDerivationRulePurchasess<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationCostElementDerivationRulePurchasessType<T>
{
  /**
   * Technical entity name for CostConfigurationCostElementDerivationRulePurchasess.
   */
  static override _entityName =
    'CostConfigurationCostElementDerivationRulePurchasess';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationCostElementDerivationRulePurchasess entity.
   */
  static _keys = [
    'CostElementDerivationPolicyName',
    'Measurement',
    'ResourceType'
  ];
  /**
   * Cost Element Derivation Policy Name.
   */
  declare costElementDerivationPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Measurement.
   * @nullable
   */
  declare measurement?: CostConfigurationMeasurementType | null;
  /**
   * Resource Type.
   */
  declare resourceType: DeserializedType<T, 'Edm.String'>;
  /**
   * Cost Element Name.
   * @nullable
   */
  declare costElementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Impact Inventory Cost.
   * @nullable
   */
  declare impactInventoryCost?: NoYes | null;

  constructor(
    _entityApi: CostConfigurationCostElementDerivationRulePurchasessApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostConfigurationCostElementDerivationRulePurchasessType<
  T extends DeSerializers = DefaultDeSerializers
> {
  costElementDerivationPolicyName: DeserializedType<T, 'Edm.String'>;
  measurement?: CostConfigurationMeasurementType | null;
  resourceType: DeserializedType<T, 'Edm.String'>;
  costElementName?: DeserializedType<T, 'Edm.String'> | null;
  impactInventoryCost?: NoYes | null;
}
