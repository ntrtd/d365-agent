/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FinancialDimensionSets } from './FinancialDimensionSets';
import { FinancialDimensionSetsRequestBuilder } from './FinancialDimensionSetsRequestBuilder';
import { DimensionAttributesApi } from './DimensionAttributesApi';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
import { DimensionFocusBalanceInitializationState } from './DimensionFocusBalanceInitializationState';
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
export class FinancialDimensionSetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FinancialDimensionSets<DeSerializersT>, DeSerializersT>
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
  ): FinancialDimensionSetsApi<DeSerializersT> {
    return new FinancialDimensionSetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_03: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_04: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_11: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_01: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_02: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_09: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_07: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_10: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_08: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_05: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_06: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetTrackingWorkspaceParametersExpenseFinancialDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_EXPENSE_FINANCIAL_DIMENSION_SET: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetTrackingWorkspaceParametersRevenueFinancialDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_REVENUE_FINANCIAL_DIMENSION_SET: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
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
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_03:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName03',
          this,
          linkedApis[0]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_04:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName04',
          this,
          linkedApis[1]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_11:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName11',
          this,
          linkedApis[2]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_01:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName01',
          this,
          linkedApis[3]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_02:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName02',
          this,
          linkedApis[4]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_09:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName09',
          this,
          linkedApis[5]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_07:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName07',
          this,
          linkedApis[6]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_10:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName10',
          this,
          linkedApis[7]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_08:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName08',
          this,
          linkedApis[8]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_05:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName05',
          this,
          linkedApis[9]
        ),
      FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_06:
        new OneToOneLink(
          'FinancialDimensionSetEntity_RelatedRole_SegmentName06',
          this,
          linkedApis[10]
        ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_EXPENSE_FINANCIAL_DIMENSION_SET:
        new OneToOneLink(
          'BudgetTrackingWorkspaceParametersExpenseFinancialDimensionSet',
          this,
          linkedApis[11]
        ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_REVENUE_FINANCIAL_DIMENSION_SET:
        new OneToOneLink(
          'BudgetTrackingWorkspaceParametersRevenueFinancialDimensionSet',
          this,
          linkedApis[12]
        )
    };
    return this;
  }

  entityConstructor = FinancialDimensionSets;

  requestBuilder(): FinancialDimensionSetsRequestBuilder<DeSerializersT> {
    return new FinancialDimensionSetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FinancialDimensionSets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FinancialDimensionSets<DeSerializersT>,
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
    typeof FinancialDimensionSets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FinancialDimensionSets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_04: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_05: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_06: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_07: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_01: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_02: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_03: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_08: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_09: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_10: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEGMENT_NAME_11: OrderableEdmTypeField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOCUS_STATE: EnumField<
      FinancialDimensionSets<DeSerializers>,
      DeSerializersT,
      DimensionFocusBalanceInitializationState,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName03} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_03: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName04} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_04: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName11} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_11: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName01} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_01: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName02} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_02: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName09} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_09: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName07} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_07: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName10} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_10: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName08} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_08: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName05} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_05: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link financialDimensionSetEntityRelatedRoleSegmentName06} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FINANCIAL_DIMENSION_SET_ENTITY_RELATED_ROLE_SEGMENT_NAME_06: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetTrackingWorkspaceParametersExpenseFinancialDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_EXPENSE_FINANCIAL_DIMENSION_SET: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetTrackingWorkspaceParametersRevenueFinancialDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_REVENUE_FINANCIAL_DIMENSION_SET: OneToOneLink<
      FinancialDimensionSets<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FinancialDimensionSets<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
        /**
         * Static representation of the {@link focusState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOCUS_STATE: fieldBuilder.buildEnumField(
          'FocusState',
          DimensionFocusBalanceInitializationState,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FinancialDimensionSets)
      };
    }

    return this._schema;
  }
}
