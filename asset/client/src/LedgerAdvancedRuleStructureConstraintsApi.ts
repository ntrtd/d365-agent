/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerAdvancedRuleStructureConstraints } from './LedgerAdvancedRuleStructureConstraints';
import { LedgerAdvancedRuleStructureConstraintsRequestBuilder } from './LedgerAdvancedRuleStructureConstraintsRequestBuilder';
import { LedgerAdvancedRuleStructuresApi } from './LedgerAdvancedRuleStructuresApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerAdvancedRuleStructureConstraintsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LedgerAdvancedRuleStructureConstraints<DeSerializersT>,
      DeSerializersT
    >
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
  ): LedgerAdvancedRuleStructureConstraintsApi<DeSerializersT> {
    return new LedgerAdvancedRuleStructureConstraintsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToOneLink<
      LedgerAdvancedRuleStructureConstraints<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [LedgerAdvancedRuleStructuresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureConstraintEntity_RelatedRole_LedgerAdvancedRuleStructureConstraintEntity_RelatedRole_LedgerAdvancedRuleStructureEntity',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = LedgerAdvancedRuleStructureConstraints;

  requestBuilder(): LedgerAdvancedRuleStructureConstraintsRequestBuilder<DeSerializersT> {
    return new LedgerAdvancedRuleStructureConstraintsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LedgerAdvancedRuleStructureConstraints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerAdvancedRuleStructureConstraints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerAdvancedRuleStructureConstraints<DeSerializersT>,
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
    typeof LedgerAdvancedRuleStructureConstraints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerAdvancedRuleStructureConstraints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADVANCED_RULE_STRUCTURE: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    POSITION: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEGMENT_CRITERIA_11: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_10: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_05: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_04: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_07: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_06: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_01: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_03: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_02: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_09: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_08: OrderableEdmTypeField<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureConstraintEntityRelatedRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToOneLink<
      LedgerAdvancedRuleStructureConstraints<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LedgerAdvancedRuleStructureConstraints<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link advancedRuleStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleStructure',
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
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEdmTypeField(
          'Position',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link activeTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_TO: fieldBuilder.buildEdmTypeField(
          'ActiveTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link segmentCriteria11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_11: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_10: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_05: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_04: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_07: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_06: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_01: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_03: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_02: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_09: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link segmentCriteria08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_CRITERIA_08: fieldBuilder.buildEdmTypeField(
          'SegmentCriteria08',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerAdvancedRuleStructureConstraints)
      };
    }

    return this._schema;
  }
}
