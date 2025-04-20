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
import type { BenefitPlanDefaultDimensionsApi } from './BenefitPlanDefaultDimensionsApi';
import { BenefitPlans, BenefitPlansType } from './BenefitPlans';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BenefitPlanDefaultDimensions" of service "d365_metadata".
 */
export class BenefitPlanDefaultDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitPlanDefaultDimensionsType<T>
{
  /**
   * Technical entity name for BenefitPlanDefaultDimensions.
   */
  static override _entityName = 'BenefitPlanDefaultDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitPlanDefaultDimensions entity.
   */
  static _keys = ['BenefitPlanId', 'LegalEntityId'];
  /**
   * Benefit Plan Id.
   */
  declare benefitPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Financial Dimensions Display Value.
   * @nullable
   */
  declare defaultFinancialDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor.
   * @nullable
   */
  declare vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BenefitPlans} entity.
   */
  declare benefitPlan?: BenefitPlans<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BenefitPlanDefaultDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitPlanDefaultDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  benefitPlanId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  defaultFinancialDimensionsDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  benefitPlan?: BenefitPlansType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
