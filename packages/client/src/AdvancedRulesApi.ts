/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancedRules } from './AdvancedRules';
import { AdvancedRulesRequestBuilder } from './AdvancedRulesRequestBuilder';
import { LedgerAdvancedRuleStructuresApi } from './LedgerAdvancedRuleStructuresApi';
import { AdvancedRuleCriteriaApi } from './AdvancedRuleCriteriaApi';
import { AccountStructuresApi } from './AccountStructuresApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
import { DimensionRuleType } from './DimensionRuleType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AdvancedRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdvancedRules<DeSerializersT>, DeSerializersT>
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
  ): AdvancedRulesApi<DeSerializersT> {
    return new AdvancedRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_3: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_4: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_1: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleCriterionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_CRITERION_ENTITY: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_2: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleCriterionEntityRoleLedgerAdvancedRuleEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_ROLE_LEDGER_ADVANCED_RULE_ENTITY: OneToManyLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleCriteriaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      AdvancedRuleCriteriaApi<DeSerializersT>,
      AccountStructuresApi<DeSerializersT>,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>,
      AdvancedRuleCriteriaApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_3:
        new OneToOneLink(
          'LedgerAdvancedRuleEntity_RelatedRole_LedgerAdvancedRuleStructureEntity3',
          this,
          linkedApis[0]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_4:
        new OneToOneLink(
          'LedgerAdvancedRuleEntity_RelatedRole_LedgerAdvancedRuleStructureEntity4',
          this,
          linkedApis[1]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_1:
        new OneToOneLink(
          'LedgerAdvancedRuleEntity_RelatedRole_LedgerAdvancedRuleStructureEntity1',
          this,
          linkedApis[2]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_CRITERION_ENTITY:
        new OneToOneLink(
          'LedgerAdvancedRuleEntity_RelatedRole_LedgerAdvancedRuleCriterionEntity',
          this,
          linkedApis[3]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY:
        new OneToOneLink(
          'LedgerAdvancedRuleEntity_RelatedRole_LedgerAccountStructureEntity',
          this,
          linkedApis[4]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_2:
        new OneToOneLink(
          'LedgerAdvancedRuleEntity_RelatedRole_LedgerAdvancedRuleStructureEntity2',
          this,
          linkedApis[5]
        ),
      LEDGER_ADVANCED_RULE_CRITERION_ENTITY_ROLE_LEDGER_ADVANCED_RULE_ENTITY:
        new OneToManyLink(
          'LedgerAdvancedRuleCriterionEntity_Role_LedgerAdvancedRuleEntity',
          this,
          linkedApis[6]
        )
    };
    return this;
  }

  entityConstructor = AdvancedRules;

  requestBuilder(): AdvancedRulesRequestBuilder<DeSerializersT> {
    return new AdvancedRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdvancedRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdvancedRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AdvancedRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AdvancedRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AdvancedRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADVANCED_RULE_NAME: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    ADVANCED_RULE_STRUCTURE_2: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RULE_TYPE: EnumField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      DimensionRuleType,
      true,
      true
    >;
    ADVANCED_RULE_STRUCTURE_1: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCED_RULE_STRUCTURE_4: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCED_RULE_STRUCTURE_3: OrderableEdmTypeField<
      AdvancedRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_3: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_4: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_1: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleCriterionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_CRITERION_ENTITY: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleEntityRelatedRoleLedgerAdvancedRuleStructureEntity2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_2: OneToOneLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleCriterionEntityRoleLedgerAdvancedRuleEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_ROLE_LEDGER_ADVANCED_RULE_ENTITY: OneToManyLink<
      AdvancedRules<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleCriteriaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdvancedRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AccountStructure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link advancedRuleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_NAME: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          DimensionHierarchyConstraintStatus,
          true
        ),
        /**
         * Static representation of the {@link advancedRuleStructure2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_STRUCTURE_2: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleStructure2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ruleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_TYPE: fieldBuilder.buildEnumField(
          'RuleType',
          DimensionRuleType,
          true
        ),
        /**
         * Static representation of the {@link advancedRuleStructure1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_STRUCTURE_1: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleStructure1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advancedRuleStructure4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_STRUCTURE_4: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleStructure4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advancedRuleStructure3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_STRUCTURE_3: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleStructure3',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdvancedRules)
      };
    }

    return this._schema;
  }
}
