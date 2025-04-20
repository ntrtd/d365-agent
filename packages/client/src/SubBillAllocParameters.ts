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
import type { SubBillAllocParametersApi } from './SubBillAllocParametersApi';
import { SubBillAllocStandaloneSellingPriceOrigin } from './SubBillAllocStandaloneSellingPriceOrigin';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SubBillAllocParametersCollection" of service "d365_metadata".
 */
export class SubBillAllocParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillAllocParametersType<T>
{
  /**
   * Technical entity name for SubBillAllocParameters.
   */
  static override _entityName = 'SubBillAllocParametersCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillAllocParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Standalone Selling Price Origin.
   * @nullable
   */
  declare standaloneSellingPriceOrigin?: SubBillAllocStandaloneSellingPriceOrigin | null;
  /**
   * Deferral Rounding Account Display Value.
   * @nullable
   */
  declare deferralRoundingAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare subBillAllocDeferralRoundingAccountCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SubBillAllocParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillAllocParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  standaloneSellingPriceOrigin?: SubBillAllocStandaloneSellingPriceOrigin | null;
  deferralRoundingAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  subBillAllocDeferralRoundingAccountCombination?: DimensionCombinationsType<T> | null;
}
