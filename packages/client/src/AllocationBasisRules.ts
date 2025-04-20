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
import type { AllocationBasisRulesApi } from './AllocationBasisRulesApi';
import { NoYes } from './NoYes';
import {
  AllocationRuleDestinations,
  AllocationRuleDestinationsType
} from './AllocationRuleDestinations';
import {
  AllocationBasisRuleSources,
  AllocationBasisRuleSourcesType
} from './AllocationBasisRuleSources';

/**
 * This class represents the entity "AllocationBasisRules" of service "d365_metadata".
 */
export class AllocationBasisRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AllocationBasisRulesType<T>
{
  /**
   * Technical entity name for AllocationBasisRules.
   */
  static override _entityName = 'AllocationBasisRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllocationBasisRules entity.
   */
  static _keys = ['dataAreaId', 'BasisId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Basis Id.
   */
  declare basisId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Date Interval.
   * @nullable
   */
  declare dateInterval?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link AllocationRuleDestinations} entity.
   */
  declare allocationRuleDestination?: AllocationRuleDestinations<T> | null;
  /**
   * One-to-many navigation property to the {@link AllocationBasisRuleSources} entity.
   */
  declare allocationBasisRuleSource: AllocationBasisRuleSources<T>[];

  constructor(_entityApi: AllocationBasisRulesApi<T>) {
    super(_entityApi);
  }
}

export interface AllocationBasisRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  basisId: DeserializedType<T, 'Edm.String'>;
  isActive?: NoYes | null;
  dateInterval?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allocationRuleDestination?: AllocationRuleDestinationsType<T> | null;
  allocationBasisRuleSource: AllocationBasisRuleSourcesType<T>[];
}
