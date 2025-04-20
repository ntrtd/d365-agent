/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerAdvancedRuleStructures } from './LedgerAdvancedRuleStructures';
import { LedgerAdvancedRuleStructuresRequestBuilder } from './LedgerAdvancedRuleStructuresRequestBuilder';
import { AdvancedRuleStructureActivationsApi } from './AdvancedRuleStructureActivationsApi';
import { LedgerAdvancedRuleStructureConstraintsApi } from './LedgerAdvancedRuleStructureConstraintsApi';
import { AdvancedRulesApi } from './AdvancedRulesApi';
import { DimensionAttributesApi } from './DimensionAttributesApi';
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
export class LedgerAdvancedRuleStructuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerAdvancedRuleStructures<DeSerializersT>, DeSerializersT>
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
  ): LedgerAdvancedRuleStructuresApi<DeSerializersT> {
    return new LedgerAdvancedRuleStructuresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureActivationEntityRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ACTIVATION_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleStructureActivationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructureConstraintsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_3: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_4: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_1: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_2: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_04: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_05: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_06: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_07: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_01: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_02: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_03: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_08: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_09: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_10: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_11: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AdvancedRuleStructureActivationsApi<DeSerializersT>,
      LedgerAdvancedRuleStructureConstraintsApi<DeSerializersT>,
      AdvancedRulesApi<DeSerializersT>,
      AdvancedRulesApi<DeSerializersT>,
      AdvancedRulesApi<DeSerializersT>,
      AdvancedRulesApi<DeSerializersT>,
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
      DimensionAttributesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ADVANCED_RULE_STRUCTURE_ACTIVATION_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureActivationEntity_Role_LedgerAdvancedRuleStructureEntity',
          this,
          linkedApis[0]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY:
        new OneToManyLink(
          'LedgerAdvancedRuleStructureConstraintEntity_RelatedRole_LedgerAdvancedRuleStructureConstraintEntity_Role_LedgerAdvancedRuleStructureEntity',
          this,
          linkedApis[1]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_3:
        new OneToManyLink(
          'LedgerAdvancedRuleEntity_Role_LedgerAdvancedRuleStructureEntity3',
          this,
          linkedApis[2]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_4:
        new OneToManyLink(
          'LedgerAdvancedRuleEntity_Role_LedgerAdvancedRuleStructureEntity4',
          this,
          linkedApis[3]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_1:
        new OneToManyLink(
          'LedgerAdvancedRuleEntity_Role_LedgerAdvancedRuleStructureEntity1',
          this,
          linkedApis[4]
        ),
      LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_2:
        new OneToManyLink(
          'LedgerAdvancedRuleEntity_Role_LedgerAdvancedRuleStructureEntity2',
          this,
          linkedApis[5]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_04:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName04',
          this,
          linkedApis[6]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_05:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName05',
          this,
          linkedApis[7]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_06:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName06',
          this,
          linkedApis[8]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_07:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName07',
          this,
          linkedApis[9]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_01:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName01',
          this,
          linkedApis[10]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_02:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName02',
          this,
          linkedApis[11]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_03:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName03',
          this,
          linkedApis[12]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_08:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName08',
          this,
          linkedApis[13]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_09:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName09',
          this,
          linkedApis[14]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_10:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName10',
          this,
          linkedApis[15]
        ),
      LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_11:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureEntity_RelatedRole_SegmentName11',
          this,
          linkedApis[16]
        )
    };
    return this;
  }

  entityConstructor = LedgerAdvancedRuleStructures;

  requestBuilder(): LedgerAdvancedRuleStructuresRequestBuilder<DeSerializersT> {
    return new LedgerAdvancedRuleStructuresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerAdvancedRuleStructures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerAdvancedRuleStructures<DeSerializersT>,
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
    typeof LedgerAdvancedRuleStructures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerAdvancedRuleStructures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_RULE_STRUCTURE_NAME: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_04: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_05: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_06: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_07: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_01: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_02: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_03: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_08: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_09: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_10: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_11: OrderableEdmTypeField<
      LedgerAdvancedRuleStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureActivationEntityRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ACTIVATION_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRuleStructureActivationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructureConstraintsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_3: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity4} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_4: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_1: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAdvancedRuleEntityRoleLedgerAdvancedRuleStructureEntity2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_ENTITY_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_2: OneToManyLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      AdvancedRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_04: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_05: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_06: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_07: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_01: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_02: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_03: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_08: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_09: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_10: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureEntityRelatedRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY_RELATED_ROLE_SEGMENT_NAME_11: OneToOneLink<
      LedgerAdvancedRuleStructures<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerAdvancedRuleStructures<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountRuleStructureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RULE_STRUCTURE_NAME: fieldBuilder.buildEdmTypeField(
          'AccountRuleStructureName',
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
        ALL_FIELDS: new AllFields('*', LedgerAdvancedRuleStructures)
      };
    }

    return this._schema;
  }
}
