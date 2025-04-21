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
import type { DimensionAttributesApi } from './DimensionAttributesApi';
import { NoYes } from './NoYes';
import {
  FinancialDimensionValueLegalEntityOverridesV2,
  FinancialDimensionValueLegalEntityOverridesV2Type
} from './FinancialDimensionValueLegalEntityOverridesV2';
import {
  LedgerAdvancedRuleStructures,
  LedgerAdvancedRuleStructuresType
} from './LedgerAdvancedRuleStructures';
import {
  AdvancedRuleCriteria,
  AdvancedRuleCriteriaType
} from './AdvancedRuleCriteria';
import { AccountStructures, AccountStructuresType } from './AccountStructures';
import {
  FinancialDimensionValueTotalAccountIntervals,
  FinancialDimensionValueTotalAccountIntervalsType
} from './FinancialDimensionValueTotalAccountIntervals';
import { BudgetDimensions, BudgetDimensionsType } from './BudgetDimensions';
import {
  DimensionAttributeTranslations,
  DimensionAttributeTranslationsType
} from './DimensionAttributeTranslations';
import {
  FinancialDimensionValueLegalEntityOverrides,
  FinancialDimensionValueLegalEntityOverridesType
} from './FinancialDimensionValueLegalEntityOverrides';
import {
  FinancialDimensionSets,
  FinancialDimensionSetsType
} from './FinancialDimensionSets';
import {
  FinancialDimensionValues,
  FinancialDimensionValuesType
} from './FinancialDimensionValues';
import {
  FinancialDimensionValueTranslations,
  FinancialDimensionValueTranslationsType
} from './FinancialDimensionValueTranslations';
import {
  LedgerAccountAliases,
  LedgerAccountAliasesType
} from './LedgerAccountAliases';
import {
  AttributeValueDerivedDimensions,
  AttributeValueDerivedDimensionsType
} from './AttributeValueDerivedDimensions';

/**
 * This class represents the entity "DimensionAttributes" of service "d365_metadata".
 */
export class DimensionAttributes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimensionAttributesType<T>
{
  /**
   * Technical entity name for DimensionAttributes.
   */
  static override _entityName = 'DimensionAttributes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionAttributes entity.
   */
  static _keys = ['DimensionName'];
  /**
   * Dimension Name.
   */
  declare dimensionName: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Column Name.
   * @nullable
   */
  declare reportColumnName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Values From.
   * @nullable
   */
  declare useValuesFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value Mask.
   * @nullable
   */
  declare dimensionValueMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Copy Values On Create.
   * @nullable
   */
  declare copyValuesOnCreate?: NoYes | null;
  /**
   * Give Derived Dimensions Precedence.
   * @nullable
   */
  declare giveDerivedDimensionsPrecedence?: NoYes | null;
  /**
   * Balancing Dimension Psn.
   */
  declare balancingDimensionPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Balancing Psn.
   * @nullable
   */
  declare isBalancingPsn?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueLegalEntityOverridesV2} entity.
   */
  declare financialDimensionValueLegalEntityOverrideV2EntityRoleFinancialDimension: FinancialDimensionValueLegalEntityOverridesV2<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName04: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName05: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName06: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName07: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName01: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName02: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName03: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName08: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName09: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName10: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAdvancedRuleStructures} entity.
   */
  declare ledgerAdvancedRuleStructureEntityRoleSegmentName11: LedgerAdvancedRuleStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AdvancedRuleCriteria} entity.
   */
  declare ledgerAdvancedRuleCriterionEntityRoleDimensionAttributeEntity: AdvancedRuleCriteria<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName04: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName05: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName06: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName07: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName01: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName02: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName03: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName08: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName09: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName10: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureEntityRoleSegmentName11: AccountStructures<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueTotalAccountIntervals} entity.
   */
  declare financialDimensionValueTotalAccountIntervalEntityRoleDimensionAttributeEntity: FinancialDimensionValueTotalAccountIntervals<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetDimensions} entity.
   */
  declare dimensionAttributeBudgetPrimaryLedger: BudgetDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link DimensionAttributeTranslations} entity.
   */
  declare dimensionAttributeTranslationEntityDimensionAttributeEntityRole: DimensionAttributeTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueLegalEntityOverrides} entity.
   */
  declare financialDimensionValueLegalEntityOverrideEntityRoleFinancialDimension: FinancialDimensionValueLegalEntityOverrides<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName03: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName04: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName11: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName01: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName02: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName09: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName07: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName10: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName08: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName05: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionSets} entity.
   */
  declare financialDimensionSetEntityRoleSegmentName06: FinancialDimensionSets<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValues} entity.
   */
  declare financialDimensionValueEntityRoleFinancialDimension: FinancialDimensionValues<T>[];
  /**
   * One-to-many navigation property to the {@link FinancialDimensionValueTranslations} entity.
   */
  declare financialDimensionValueTranslationEntityRoleDimensionAttributeEntity: FinancialDimensionValueTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAccountAliases} entity.
   */
  declare ledgerAccountAlias: LedgerAccountAliases<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension9: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension8: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension10: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension1: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDrivingDimension: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension3: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension2: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension5: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension4: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension7: AttributeValueDerivedDimensions<T>[];
  /**
   * One-to-many navigation property to the {@link AttributeValueDerivedDimensions} entity.
   */
  declare derivedDimensionRoleDerivedDimension6: AttributeValueDerivedDimensions<T>[];

  constructor(_entityApi: DimensionAttributesApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionAttributesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dimensionName: DeserializedType<T, 'Edm.String'>;
  reportColumnName?: DeserializedType<T, 'Edm.String'> | null;
  useValuesFrom?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValueMask?: DeserializedType<T, 'Edm.String'> | null;
  copyValuesOnCreate?: NoYes | null;
  giveDerivedDimensionsPrecedence?: NoYes | null;
  balancingDimensionPsn: DeserializedType<T, 'Edm.Int64'>;
  isBalancingPsn?: NoYes | null;
  financialDimensionValueLegalEntityOverrideV2EntityRoleFinancialDimension: FinancialDimensionValueLegalEntityOverridesV2Type<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName04: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName05: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName06: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName07: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName01: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName02: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName03: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName08: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName09: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName10: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleStructureEntityRoleSegmentName11: LedgerAdvancedRuleStructuresType<T>[];
  ledgerAdvancedRuleCriterionEntityRoleDimensionAttributeEntity: AdvancedRuleCriteriaType<T>[];
  ledgerAccountStructureEntityRoleSegmentName04: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName05: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName06: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName07: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName01: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName02: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName03: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName08: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName09: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName10: AccountStructuresType<T>[];
  ledgerAccountStructureEntityRoleSegmentName11: AccountStructuresType<T>[];
  financialDimensionValueTotalAccountIntervalEntityRoleDimensionAttributeEntity: FinancialDimensionValueTotalAccountIntervalsType<T>[];
  dimensionAttributeBudgetPrimaryLedger: BudgetDimensionsType<T>[];
  dimensionAttributeTranslationEntityDimensionAttributeEntityRole: DimensionAttributeTranslationsType<T>[];
  financialDimensionValueLegalEntityOverrideEntityRoleFinancialDimension: FinancialDimensionValueLegalEntityOverridesType<T>[];
  financialDimensionSetEntityRoleSegmentName03: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName04: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName11: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName01: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName02: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName09: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName07: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName10: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName08: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName05: FinancialDimensionSetsType<T>[];
  financialDimensionSetEntityRoleSegmentName06: FinancialDimensionSetsType<T>[];
  financialDimensionValueEntityRoleFinancialDimension: FinancialDimensionValuesType<T>[];
  financialDimensionValueTranslationEntityRoleDimensionAttributeEntity: FinancialDimensionValueTranslationsType<T>[];
  ledgerAccountAlias: LedgerAccountAliasesType<T>[];
  derivedDimensionRoleDerivedDimension9: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension8: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension10: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension1: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDrivingDimension: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension3: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension2: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension5: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension4: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension7: AttributeValueDerivedDimensionsType<T>[];
  derivedDimensionRoleDerivedDimension6: AttributeValueDerivedDimensionsType<T>[];
}
