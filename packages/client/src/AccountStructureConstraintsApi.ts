/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountStructureConstraints } from './AccountStructureConstraints';
import { AccountStructureConstraintsRequestBuilder } from './AccountStructureConstraintsRequestBuilder';
import { AccountStructuresApi } from './AccountStructuresApi';
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
export class AccountStructureConstraintsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AccountStructureConstraints<DeSerializersT>, DeSerializersT>
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
  ): AccountStructureConstraintsApi<DeSerializersT> {
    return new AccountStructureConstraintsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureConstraintEntityRelatedRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToOneLink<
      AccountStructureConstraints<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccountStructuresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ACCOUNT_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY:
        new OneToOneLink(
          'LedgerAccountStructureConstraintEntity_RelatedRole_LedgerAccountStructureEntity',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = AccountStructureConstraints;

  requestBuilder(): AccountStructureConstraintsRequestBuilder<DeSerializersT> {
    return new AccountStructureConstraintsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccountStructureConstraints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AccountStructureConstraints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccountStructureConstraints<DeSerializersT>,
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
    typeof AccountStructureConstraints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountStructureConstraints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      DimensionHierarchyConstraintStatus,
      true,
      true
    >;
    POSITION: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACTIVE_TO: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEGMENT_CRITERIA_11: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_10: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_05: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_04: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_07: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_06: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_01: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_03: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_02: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_09: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_CRITERIA_08: OrderableEdmTypeField<
      AccountStructureConstraints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureConstraintEntityRelatedRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_CONSTRAINT_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToOneLink<
      AccountStructureConstraints<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountStructureConstraints<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', AccountStructureConstraints)
      };
    }

    return this._schema;
  }
}
