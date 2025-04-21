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
import type { BudgetDimensionsApi } from './BudgetDimensionsApi';
import { Ledgers, LedgersType } from './Ledgers';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';
import {
  BudgetAllowTransferRules,
  BudgetAllowTransferRulesType
} from './BudgetAllowTransferRules';

/**
 * This class represents the entity "BudgetDimensions" of service "d365_metadata".
 */
export class BudgetDimensions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetDimensionsType<T>
{
  /**
   * Technical entity name for BudgetDimensions.
   */
  static override _entityName = 'BudgetDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetDimensions entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'DimensionAttributeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Attribute Id.
   */
  declare dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare budgetDimensions?: Ledgers<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare budgetPrimaryLedgers?: DimensionAttributes<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetAllowTransferRules} entity.
   */
  declare budgetAllowTransferRuleBudgetDimension: BudgetAllowTransferRules<T>[];

  constructor(_entityApi: BudgetDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  budgetDimensions?: LedgersType<T> | null;
  budgetPrimaryLedgers?: DimensionAttributesType<T> | null;
  budgetAllowTransferRuleBudgetDimension: BudgetAllowTransferRulesType<T>[];
}
