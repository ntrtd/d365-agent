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
import type { CostConfigurationInputMeasurementBasisRulesApi } from './CostConfigurationInputMeasurementBasisRulesApi';
import { CostConfigurationInputMeasurementBasis } from './CostConfigurationInputMeasurementBasis';
import { CostConfigurationInputMeasurementBasisExchangeRate } from './CostConfigurationInputMeasurementBasisExchangeRate';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CostConfigurationInputMeasurementBasisRules" of service "d365_metadata".
 */
export class CostConfigurationInputMeasurementBasisRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostConfigurationInputMeasurementBasisRulesType<T>
{
  /**
   * Technical entity name for CostConfigurationInputMeasurementBasisRules.
   */
  static override _entityName = 'CostConfigurationInputMeasurementBasisRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostConfigurationInputMeasurementBasisRules entity.
   */
  static _keys = ['ValidFrom', 'InputMeasurementBasisPolicyName'];
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Input Measurement Basis Policy Name.
   */
  declare inputMeasurementBasisPolicyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Input Measurement Basis.
   * @nullable
   */
  declare inputMeasurementBasis?: CostConfigurationInputMeasurementBasis | null;
  /**
   * Exchange Rate.
   * @nullable
   */
  declare exchangeRate?: CostConfigurationInputMeasurementBasisExchangeRate | null;
  /**
   * Price Per Manufacturing Unit.
   * @nullable
   */
  declare pricePerManufacturingUnit?: NoYes | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price List Name.
   * @nullable
   */
  declare priceListName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostConfigurationInputMeasurementBasisRulesApi<T>) {
    super(_entityApi);
  }
}

export interface CostConfigurationInputMeasurementBasisRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inputMeasurementBasisPolicyName: DeserializedType<T, 'Edm.String'>;
  inputMeasurementBasis?: CostConfigurationInputMeasurementBasis | null;
  exchangeRate?: CostConfigurationInputMeasurementBasisExchangeRate | null;
  pricePerManufacturingUnit?: NoYes | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceListName?: DeserializedType<T, 'Edm.String'> | null;
}
