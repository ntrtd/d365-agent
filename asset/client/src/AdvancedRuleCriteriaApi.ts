/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancedRuleCriteria } from './AdvancedRuleCriteria';
import { AdvancedRuleCriteriaRequestBuilder } from './AdvancedRuleCriteriaRequestBuilder';
import { AdvancedRulesApi } from './AdvancedRulesApi';
import { DimensionAttributesApi } from './DimensionAttributesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AdvancedRuleCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdvancedRuleCriteria<DeSerializersT>, DeSerializersT>
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
  ): AdvancedRuleCriteriaApi<DeSerializersT> {
    return new AdvancedRuleCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleCriterionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_CRITERION_ENTITY: OneToManyLink<
      AdvancedRuleCriteria<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleCriterionEntityRelatedRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToOneLink<
      AdvancedRuleCriteria<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleCriterionEntityRelatedRoleLedgerAdvancedRuleEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_ENTITY: OneToOneLink<
      AdvancedRuleCriteria<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AdvancedRulesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      AdvancedRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_CRITERION_ENTITY:
        new OneToManyLink(
          'LedgerAdvancedRuleEntity_Role_LedgerAdvancedRuleCriterionEntity',
          this,
          linkedApis[0]
        ),
      LEDGER_ADVANCED_RULE_CRITERION_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY:
        new OneToOneLink(
          'LedgerAdvancedRuleCriterionEntity_RelatedRole_DimensionAttributeEntity',
          this,
          linkedApis[1]
        ),
      LEDGER_ADVANCED_RULE_CRITERION_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_ENTITY:
        new OneToOneLink(
          'LedgerAdvancedRuleCriterionEntity_RelatedRole_LedgerAdvancedRuleEntity',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = AdvancedRuleCriteria;

  requestBuilder(): AdvancedRuleCriteriaRequestBuilder<DeSerializersT> {
    return new AdvancedRuleCriteriaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdvancedRuleCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdvancedRuleCriteria<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdvancedRuleCriteria<DeSerializersT>,
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
    typeof AdvancedRuleCriteria,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdvancedRuleCriteria,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      AdvancedRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADVANCED_RULE: OrderableEdmTypeField<
      AdvancedRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      AdvancedRuleCriteria<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    SEGMENT_NAME: OrderableEdmTypeField<
      AdvancedRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_TYPE: EnumField<
      AdvancedRuleCriteria<DeSerializers>,
      DeSerializersT,
      DimensionRuleType,
      true,
      true
    >;
    ADVANCED_RULE_CRITERION: OrderableEdmTypeField<
      AdvancedRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleCriterionEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_CRITERION_ENTITY: OneToManyLink<
      AdvancedRuleCriteria<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleCriterionEntityRelatedRoleDimensionAttributeEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_RELATED_ROLE_DIMENSION_ATTRIBUTE_ENTITY: OneToOneLink<
      AdvancedRuleCriteria<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleCriterionEntityRelatedRoleLedgerAdvancedRuleEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_CRITERION_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_ENTITY: OneToOneLink<
      AdvancedRuleCriteria<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdvancedRuleCriteria<DeSerializers>>;
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
         * Static representation of the {@link advancedRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE: fieldBuilder.buildEdmTypeField(
          'AdvancedRule',
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
         * Static representation of the {@link segmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME: fieldBuilder.buildEdmTypeField(
          'SegmentName',
          'Edm.String',
          false
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
         * Static representation of the {@link advancedRuleCriterion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_CRITERION: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleCriterion',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdvancedRuleCriteria)
      };
    }

    return this._schema;
  }
}
