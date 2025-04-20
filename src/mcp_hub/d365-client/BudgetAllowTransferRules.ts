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
import type { BudgetAllowTransferRulesApi } from './BudgetAllowTransferRulesApi';
import { AccountStructures, AccountStructuresType } from './AccountStructures';
import { Ledgers, LedgersType } from './Ledgers';
import { BudgetDimensions, BudgetDimensionsType } from './BudgetDimensions';

/**
 * This class represents the entity "BudgetAllowTransferRules" of service "d365_metadata".
 */
export class BudgetAllowTransferRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetAllowTransferRulesType<T>
{
  /**
   * Technical entity name for BudgetAllowTransferRules.
   */
  static override _entityName = 'BudgetAllowTransferRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetAllowTransferRules entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'BudgetTransferRule',
    'RuleMember',
    'DimensionAttributeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Transfer Rule.
   */
  declare budgetTransferRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Member.
   */
  declare ruleMember: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Attribute Id.
   */
  declare dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Structure Id.
   * @nullable
   */
  declare accountStructureId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Criterion.
   * @nullable
   */
  declare criterion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AccountStructures} entity.
   */
  declare accountStructures?: AccountStructures<T> | null;
  /**
   * One-to-one navigation property to the {@link Ledgers} entity.
   */
  declare legalEntities?: Ledgers<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetDimensions} entity.
   */
  declare budgetDimensions?: BudgetDimensions<T> | null;

  constructor(_entityApi: BudgetAllowTransferRulesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetAllowTransferRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  budgetTransferRule: DeserializedType<T, 'Edm.String'>;
  ruleMember: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeId: DeserializedType<T, 'Edm.String'>;
  accountStructureId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  criterion?: DeserializedType<T, 'Edm.String'> | null;
  accountStructures?: AccountStructuresType<T> | null;
  legalEntities?: LedgersType<T> | null;
  budgetDimensions?: BudgetDimensionsType<T> | null;
}
