/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DimensionAttributes } from './DimensionAttributes';
import { DimensionAttributesRequestBuilder } from './DimensionAttributesRequestBuilder';
import { FinancialDimensionValueLegalEntityOverridesV2Api } from './FinancialDimensionValueLegalEntityOverridesV2Api';
import { LedgerAdvancedRuleStructuresApi } from './LedgerAdvancedRuleStructuresApi';
import { AdvancedRuleCriteriaApi } from './AdvancedRuleCriteriaApi';
import { AccountStructuresApi } from './AccountStructuresApi';
import { FinancialDimensionValueTotalAccountIntervalsApi } from './FinancialDimensionValueTotalAccountIntervalsApi';
import { BudgetDimensionsApi } from './BudgetDimensionsApi';
import { DimensionAttributeTranslationsApi } from './DimensionAttributeTranslationsApi';
import { FinancialDimensionValueLegalEntityOverridesApi } from './FinancialDimensionValueLegalEntityOverridesApi';
import { FinancialDimensionSetsApi } from './FinancialDimensionSetsApi';
import { FinancialDimensionValuesApi } from './FinancialDimensionValuesApi';
import { FinancialDimensionValueTranslationsApi } from './FinancialDimensionValueTranslationsApi';
import { LedgerAccountAliasesApi } from './LedgerAccountAliasesApi';
import { AttributeValueDerivedDimensionsApi } from './AttributeValueDerivedDimensionsApi';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DimensionAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DimensionAttributes<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): DimensionAttributesApi<DeSerializersT> {
    return new DimensionAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueLegalEntityOverrideV2EntityRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_V_2_ENTITY_ROLE_FINANCIAL_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_04: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_05: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_06: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_07: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_01: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_02: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_03: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_08: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_09: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_11: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleCriterionEntityRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_04: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_05: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_06: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_07: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_01: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_02: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_03: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_08: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_09: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_11: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueTotalAccountIntervalEntityRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dimensionAttributeBudgetPrimaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_ATTRIBUTE_BUDGET_PRIMARY_LEDGER: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      BudgetDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dimensionAttributeTranslationEntityDimensionAttributeEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_ATTRIBUTE_TRANSLATION_ENTITY_DIMENSION_ATTRIBUTE_ENTITY_ROLE: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      DimensionAttributeTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueLegalEntityOverrideEntityRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_ROLE_FINANCIAL_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueLegalEntityOverridesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_03: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_04: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_11: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_01: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_02: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_09: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_07: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_08: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_05: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_06: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueEntityRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_ROLE_FINANCIAL_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueTranslationEntityRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TRANSLATION_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension9} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_9: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension8} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_8: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_1: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDrivingDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DRIVING_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_3: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_2: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension5} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_5: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_4: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension7} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_7: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_6: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      AdvancedRuleCriteriaApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT>,
      BudgetDimensionsApi<DeSerializersT>,
      DimensionAttributeTranslationsApi<DeSerializersT>,
      FinancialDimensionValueLegalEntityOverridesApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionSetsApi<DeSerializersT>,
      FinancialDimensionValuesApi<DeSerializersT>,
      FinancialDimensionValueTranslationsApi<DeSerializersT>,
      LedgerAccountAliasesApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_V_2_ENTITY_ROLE_FINANCIAL_DIMENSION:
        new OneToManyLink(
          'FinancialDimensionValueLegalEntityOverrideV2Entity_Role_FinancialDimension',
          this,
          linkedApis[0]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_04:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName04',
          this,
          linkedApis[1]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_05:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName05',
          this,
          linkedApis[2]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_06:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName06',
          this,
          linkedApis[3]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_07:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName07',
          this,
          linkedApis[4]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_01:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName01',
          this,
          linkedApis[5]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_02:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName02',
          this,
          linkedApis[6]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_03:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName03',
          this,
          linkedApis[7]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_08:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName08',
          this,
          linkedApis[8]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_09:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName09',
          this,
          linkedApis[9]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_10:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName10',
          this,
          linkedApis[10]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_11:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureEntity_Role_SegmentName11',
          this,
          linkedApis[11]
        ),
      LEDGER_ADVANCED_RULE_CRITERION_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY:
        new OneToManyLink(
          'LedgerAdvancedRuleCriterionEntity_Role_DimensionAttributeEntity',
          this,
          linkedApis[12]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_04: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName04',
        this,
        linkedApis[13]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_05: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName05',
        this,
        linkedApis[14]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_06: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName06',
        this,
        linkedApis[15]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_07: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName07',
        this,
        linkedApis[16]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_01: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName01',
        this,
        linkedApis[17]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_02: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName02',
        this,
        linkedApis[18]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_03: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName03',
        this,
        linkedApis[19]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_08: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName08',
        this,
        linkedApis[20]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_09: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName09',
        this,
        linkedApis[21]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_10: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName10',
        this,
        linkedApis[22]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_11: new OneToManyLink(
        'LedgerAccountStructureEntity_Role_SegmentName11',
        this,
        linkedApis[23]
      ),
      FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY:
        new OneToManyLink(
          'FinancialDimensionValueTotalAccountIntervalEntity_Role_DimensionAttributeEntity',
          this,
          linkedApis[24]
        ),
      DIMENSION_ATTRIBUTE_BUDGET_PRIMARY_LEDGER: new OneToManyLink(
        'DimensionAttributeBudgetPrimaryLedger',
        this,
        linkedApis[25]
      ),
      DIMENSION_ATTRIBUTE_TRANSLATION_ENTITY_DIMENSION_ATTRIBUTE_ENTITY_ROLE:
        new OneToManyLink(
          'DimensionAttributeTranslationEntity_DimensionAttributeEntity_Role',
          this,
          linkedApis[26]
        ),
      FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_ROLE_FINANCIAL_DIMENSION:
        new OneToManyLink(
          'FinancialDimensionValueLegalEntityOverrideEntity_Role_FinancialDimension',
          this,
          linkedApis[27]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_03: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName03',
        this,
        linkedApis[28]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_04: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName04',
        this,
        linkedApis[29]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_11: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName11',
        this,
        linkedApis[30]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_01: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName01',
        this,
        linkedApis[31]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_02: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName02',
        this,
        linkedApis[32]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_09: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName09',
        this,
        linkedApis[33]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_07: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName07',
        this,
        linkedApis[34]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_10: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName10',
        this,
        linkedApis[35]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_08: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName08',
        this,
        linkedApis[36]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_05: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName05',
        this,
        linkedApis[37]
      ),
      FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_06: new OneToManyLink(
        'FinancialDimensionSetEntity_Role_SegmentName06',
        this,
        linkedApis[38]
      ),
      FINANCIAL_DIMENSION_VALUE_ENTITY_ROLE_FINANCIAL_DIMENSION:
        new OneToManyLink(
          'FinancialDimensionValueEntity_Role_FinancialDimension',
          this,
          linkedApis[39]
        ),
      FINANCIAL_DIMENSION_VALUE_TRANSLATION_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY:
        new OneToManyLink(
          'FinancialDimensionValueTranslationEntity_Role_DimensionAttributeEntity',
          this,
          linkedApis[40]
        ),
      LEDGER_ACCOUNT_ALIAS: new OneToManyLink(
        'LedgerAccountAlias',
        this,
        linkedApis[41]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_9: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension9',
        this,
        linkedApis[42]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_8: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension8',
        this,
        linkedApis[43]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_10: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension10',
        this,
        linkedApis[44]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_1: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension1',
        this,
        linkedApis[45]
      ),
      DERIVED_DIMENSION_ROLE_DRIVING_DIMENSION: new OneToManyLink(
        'DerivedDimension_Role_DrivingDimension',
        this,
        linkedApis[46]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_3: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension3',
        this,
        linkedApis[47]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_2: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension2',
        this,
        linkedApis[48]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_5: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension5',
        this,
        linkedApis[49]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_4: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension4',
        this,
        linkedApis[50]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_7: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension7',
        this,
        linkedApis[51]
      ),
      DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_6: new OneToManyLink(
        'DerivedDimension_Role_DerivedDimension6',
        this,
        linkedApis[52]
      )
    };
    return this;
  }

  entityConstructor = DimensionAttributes;

  requestBuilder(): DimensionAttributesRequestBuilder<DeSerializersT> {
    return new DimensionAttributesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DimensionAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DimensionAttributes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DimensionAttributes<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DimensionAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DimensionAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DIMENSION_NAME: OrderableEdmTypeField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_COLUMN_NAME: OrderableEdmTypeField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_VALUES_FROM: OrderableEdmTypeField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_VALUE_MASK: OrderableEdmTypeField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPY_VALUES_ON_CREATE: EnumField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GIVE_DERIVED_DIMENSIONS_PRECEDENCE: EnumField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BALANCING_DIMENSION_PSN: OrderableEdmTypeField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_BALANCING_PSN: EnumField<
      DimensionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueLegalEntityOverrideV2EntityRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_V_2_ENTITY_ROLE_FINANCIAL_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueLegalEntityOverridesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_04: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_05: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_06: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_07: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_01: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_02: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_03: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_08: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_09: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureEntityRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_11: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleCriterionEntityRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_04: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_05: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_06: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_07: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_01: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_02: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_03: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_08: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_09: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureEntityRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_ROLE_SEGMENT_NAME_11: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueTotalAccountIntervalEntityRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TOTAL_ACCOUNT_INTERVAL_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueTotalAccountIntervalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dimensionAttributeBudgetPrimaryLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_ATTRIBUTE_BUDGET_PRIMARY_LEDGER: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      BudgetDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dimensionAttributeTranslationEntityDimensionAttributeEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_ATTRIBUTE_TRANSLATION_ENTITY_DIMENSION_ATTRIBUTE_ENTITY_ROLE: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      DimensionAttributeTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueLegalEntityOverrideEntityRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_LEGAL_ENTITY_OVERRIDE_ENTITY_ROLE_FINANCIAL_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueLegalEntityOverridesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_03: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_04: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_11: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_01: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_02: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_09: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_07: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_08: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_05: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionSetEntityRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_ROLE_SEGMENT_NAME_06: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueEntityRoleFinancialDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_ENTITY_ROLE_FINANCIAL_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValuesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link financialDimensionValueTranslationEntityRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_VALUE_TRANSLATION_ENTITY_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      FinancialDimensionValueTranslationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension9} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_9: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension8} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_8: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_10: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_1: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDrivingDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DRIVING_DIMENSION: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_3: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_2: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension5} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_5: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_4: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension7} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_7: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link derivedDimensionRoleDerivedDimension6} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DERIVED_DIMENSION_ROLE_DERIVED_DIMENSION_6: OneToManyLink<
      DimensionAttributes<DeSerializersT>,
      DeSerializersT,
      AttributeValueDerivedDimensionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DimensionAttributes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dimensionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reportColumnName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_COLUMN_NAME: fieldBuilder.buildEdmTypeField(
          'ReportColumnName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useValuesFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_VALUES_FROM: fieldBuilder.buildEdmTypeField(
          'UseValuesFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionValueMask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_VALUE_MASK: fieldBuilder.buildEdmTypeField(
          'DimensionValueMask',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link copyValuesOnCreate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_VALUES_ON_CREATE: fieldBuilder.buildEnumField(
          'CopyValuesOnCreate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link giveDerivedDimensionsPrecedence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIVE_DERIVED_DIMENSIONS_PRECEDENCE: fieldBuilder.buildEnumField(
          'GiveDerivedDimensionsPrecedence',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link balancingDimensionPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCING_DIMENSION_PSN: fieldBuilder.buildEdmTypeField(
          'BalancingDimension_PSN',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link isBalancingPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BALANCING_PSN: fieldBuilder.buildEnumField(
          'IsBalancing_PSN',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DimensionAttributes)
      };
    }

    return this._schema;
  }
}
