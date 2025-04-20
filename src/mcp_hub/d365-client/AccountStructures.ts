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
import type { AccountStructuresApi } from './AccountStructuresApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import {
  AccountStructureActivations,
  AccountStructureActivationsType
} from './AccountStructureActivations';
import { AdvancedRules, AdvancedRulesType } from './AdvancedRules';
import {
  AccountStructureConstraints,
  AccountStructureConstraintsType
} from './AccountStructureConstraints';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';
import {
  BudgetAllowTransferRules,
  BudgetAllowTransferRulesType
} from './BudgetAllowTransferRules';

/**
 * This class represents the entity "AccountStructures" of service "d365_metadata".
 */
export class AccountStructures<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccountStructuresType<T>
{
  /**
   * Technical entity name for AccountStructures.
   */
  static override _entityName = 'AccountStructures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccountStructures entity.
   */
  static _keys = ['AccountStructureName', 'Status'];
  /**
   * Account Structure Name.
   */
  declare accountStructureName: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DimensionHierarchyConstraintStatus | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 04.
   * @nullable
   */
  declare segmentName04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 05.
   * @nullable
   */
  declare segmentName05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 06.
   * @nullable
   */
  declare segmentName06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 07.
   * @nullable
   */
  declare segmentName07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 01.
   * @nullable
   */
  declare segmentName01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 02.
   * @nullable
   */
  declare segmentName02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 03.
   * @nullable
   */
  declare segmentName03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 08.
   * @nullable
   */
  declare segmentName08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 09.
   * @nullable
   */
  declare segmentName09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 10.
   * @nullable
   */
  declare segmentName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Segment Name 11.
   * @nullable
   */
  declare segmentName11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare accountStructure: BudgetControlConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructureActivations} entity.
   */
  declare ledgerAccountStructureActivationEntityRoleLedgerAccountStructureEntity: AccountStructureActivations<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedRules} entity.
   */
  declare ledgerAdvancedRuleEntityRoleLedgerAccountStructureEntity: AdvancedRules<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructureConstraints} entity.
   */
  declare ledgerAccountStructureConstraintEntityRoleLedgerAccountStructureEntity: AccountStructureConstraints<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName04?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName05?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName06?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName07?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName01?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName02?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName03?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName08?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName09?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName10?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare ledgerAccountStructureEntityRelatedRoleSegmentName11?: DimensionAttributes<T> | null;
  /**
   * One-to-many navigation property to the {@link BudgetAllowTransferRules} entity.
   */
  declare budgetAllowTransferRuleAccountStructure: BudgetAllowTransferRules<T>[];

  constructor(_entityApi: AccountStructuresApi<T>) {
    super(_entityApi);
  }
}

export interface AccountStructuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountStructureName: DeserializedType<T, 'Edm.String'>;
  status?: DimensionHierarchyConstraintStatus | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  segmentName04?: DeserializedType<T, 'Edm.String'> | null;
  segmentName05?: DeserializedType<T, 'Edm.String'> | null;
  segmentName06?: DeserializedType<T, 'Edm.String'> | null;
  segmentName07?: DeserializedType<T, 'Edm.String'> | null;
  segmentName01?: DeserializedType<T, 'Edm.String'> | null;
  segmentName02?: DeserializedType<T, 'Edm.String'> | null;
  segmentName03?: DeserializedType<T, 'Edm.String'> | null;
  segmentName08?: DeserializedType<T, 'Edm.String'> | null;
  segmentName09?: DeserializedType<T, 'Edm.String'> | null;
  segmentName10?: DeserializedType<T, 'Edm.String'> | null;
  segmentName11?: DeserializedType<T, 'Edm.String'> | null;
  accountStructure: BudgetControlConfigurationsType<T>[];
  ledgerAccountStructureActivationEntityRoleLedgerAccountStructureEntity: AccountStructureActivationsType<T>[];
  ledgerAdvancedRuleEntityRoleLedgerAccountStructureEntity: AdvancedRulesType<T>[];
  ledgerAccountStructureConstraintEntityRoleLedgerAccountStructureEntity: AccountStructureConstraintsType<T>[];
  ledgerAccountStructureEntityRelatedRoleSegmentName04?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName05?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName06?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName07?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName01?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName02?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName03?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName08?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName09?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName10?: DimensionAttributesType<T> | null;
  ledgerAccountStructureEntityRelatedRoleSegmentName11?: DimensionAttributesType<T> | null;
  budgetAllowTransferRuleAccountStructure: BudgetAllowTransferRulesType<T>[];
}
