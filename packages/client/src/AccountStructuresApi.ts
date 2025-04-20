/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountStructures } from './AccountStructures';
import { AccountStructuresRequestBuilder } from './AccountStructuresRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { AccountStructureActivationsApi } from './AccountStructureActivationsApi';
import { AdvancedRulesApi } from './AdvancedRulesApi';
import { AccountStructureConstraintsApi } from './AccountStructureConstraintsApi';
import { DimensionAttributesApi } from './DimensionAttributesApi';
import { BudgetAllowTransferRulesApi } from './BudgetAllowTransferRulesApi';
import { DimensionHierarchyConstraintStatus } from './DimensionHierarchyConstraintStatus';
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
export class AccountStructuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccountStructures<DeSerializersT>, DeSerializersT>
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
  ): AccountStructuresApi<DeSerializersT> {
    return new AccountStructuresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link accountStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_STRUCTURE: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureActivationEntityRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ACTIVATION_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      AccountStructureActivationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureConstraintEntityRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_CONSTRAINT_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      AccountStructureConstraintsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_04: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_05: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_06: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_07: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_01: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_02: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_03: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_08: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_09: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_10: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_11: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetAllowTransferRuleAccountStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_ALLOW_TRANSFER_RULE_ACCOUNT_STRUCTURE: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      BudgetAllowTransferRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlConfigurationsApi<DeSerializersT>,
      AccountStructureActivationsApi<DeSerializersT>,
      AdvancedRulesApi<DeSerializersT>,
      AccountStructureConstraintsApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      BudgetAllowTransferRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ACCOUNT_STRUCTURE: new OneToManyLink(
        'AccountStructure',
        this,
        linkedApis[0]
      ),
      LEDGER_ACCOUNT_STRUCTURE_ACTIVATION_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY:
        new OneToManyLink(
          'LedgerAccountStructureActivationEntity_Role_LedgerAccountStructureEntity',
          this,
          linkedApis[1]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY:
        new OneToManyLink(
          'LedgerAdvancedRuleEntity_Role_LedgerAccountStructureEntity',
          this,
          linkedApis[2]
        ),
      LEDGER_ACCOUNT_STRUCTURE_CONSTRAINT_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY:
        new OneToManyLink(
          'LedgerAccountStructureConstraintEntity_Role_LedgerAccountStructureEntity',
          this,
          linkedApis[3]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_04:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName04',
          this,
          linkedApis[4]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_05:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName05',
          this,
          linkedApis[5]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_06:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName06',
          this,
          linkedApis[6]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_07:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName07',
          this,
          linkedApis[7]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_01:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName01',
          this,
          linkedApis[8]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_02:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName02',
          this,
          linkedApis[9]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_03:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName03',
          this,
          linkedApis[10]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_08:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName08',
          this,
          linkedApis[11]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_09:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName09',
          this,
          linkedApis[12]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_10:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName10',
          this,
          linkedApis[13]
        ),
      LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_11:
        new OneToOneLink(
          'LedgerAccountStructureEntity_RelatedRole_SegmentName11',
          this,
          linkedApis[14]
        ),
      BUDGET_ALLOW_TRANSFER_RULE_ACCOUNT_STRUCTURE: new OneToManyLink(
        'BudgetAllowTransferRuleAccountStructure',
        this,
        linkedApis[15]
      )
    };
    return this;
  }

  entityConstructor = AccountStructures;

  requestBuilder(): AccountStructuresRequestBuilder<DeSerializersT> {
    return new AccountStructuresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccountStructures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccountStructures<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AccountStructures<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AccountStructures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountStructures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_STRUCTURE_NAME: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_04: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_05: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_06: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_07: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_01: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_02: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_03: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_08: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_09: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_10: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_11: OrderableEdmTypeField<
      AccountStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link accountStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_STRUCTURE: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureActivationEntityRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ACTIVATION_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      AccountStructureActivationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountStructureConstraintEntityRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_CONSTRAINT_ENTITY_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      AccountStructureConstraintsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_04: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_05: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_06: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_07: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_01: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_02: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_03: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_08: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_09: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_10: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureEntityRelatedRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_11: OneToOneLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetAllowTransferRuleAccountStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_ALLOW_TRANSFER_RULE_ACCOUNT_STRUCTURE: OneToManyLink<
      AccountStructures<DeSerializersT>,
      DeSerializersT,
      BudgetAllowTransferRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountStructures<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountStructureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_NAME: fieldBuilder.buildEdmTypeField(
          'AccountStructureName',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_04: fieldBuilder.buildEdmTypeField(
          'SegmentName04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_05: fieldBuilder.buildEdmTypeField(
          'SegmentName05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_06: fieldBuilder.buildEdmTypeField(
          'SegmentName06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_07: fieldBuilder.buildEdmTypeField(
          'SegmentName07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_01: fieldBuilder.buildEdmTypeField(
          'SegmentName01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_02: fieldBuilder.buildEdmTypeField(
          'SegmentName02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_03: fieldBuilder.buildEdmTypeField(
          'SegmentName03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_08: fieldBuilder.buildEdmTypeField(
          'SegmentName08',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_09: fieldBuilder.buildEdmTypeField(
          'SegmentName09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_10: fieldBuilder.buildEdmTypeField(
          'SegmentName10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentName11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NAME_11: fieldBuilder.buildEdmTypeField(
          'SegmentName11',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccountStructures)
      };
    }

    return this._schema;
  }
}
