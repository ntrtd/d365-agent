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
import type { BenefitsRoundingRulesApi } from './BenefitsRoundingRulesApi';
import { BenefitRoundingScenario } from './BenefitRoundingScenario';
import { RoundOffType } from './RoundOffType';

/**
 * This class represents the entity "BenefitsRoundingRules" of service "d365_metadata".
 */
export class BenefitsRoundingRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsRoundingRulesType<T>
{
  /**
   * Technical entity name for BenefitsRoundingRules.
   */
  static override _entityName = 'BenefitsRoundingRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsRoundingRules entity.
   */
  static _keys = ['dataAreaId', 'Scenario'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Scenario.
   * @nullable
   */
  declare scenario?: BenefitRoundingScenario | null;
  /**
   * Round To The Nearest.
   */
  declare roundToTheNearest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Form.
   * @nullable
   */
  declare roundingForm?: RoundOffType | null;

  constructor(_entityApi: BenefitsRoundingRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsRoundingRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scenario?: BenefitRoundingScenario | null;
  roundToTheNearest: DeserializedType<T, 'Edm.Decimal'>;
  roundingForm?: RoundOffType | null;
}
