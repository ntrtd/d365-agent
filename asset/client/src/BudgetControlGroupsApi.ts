/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlGroups } from './BudgetControlGroups';
import { BudgetControlGroupsRequestBuilder } from './BudgetControlGroupsRequestBuilder';
import { BudgetControlGroupCriteriaApi } from './BudgetControlGroupCriteriaApi';
import { BudgetControlGroupOverBudgetPermissionsApi } from './BudgetControlGroupOverBudgetPermissionsApi';
import { SystemUsersApi } from './SystemUsersApi';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetCycleTimeSpansApi } from './BudgetCycleTimeSpansApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetInterval } from './BudgetInterval';
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
export class BudgetControlGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetControlGroups<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlGroupsApi<DeSerializersT> {
    return new BudgetControlGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupCriterionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_CRITERION_GROUP: OneToManyLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupOverBudgetPermissionsBudgetControlGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_OVER_BUDGET_PERMISSIONS_BUDGET_CONTROL_GROUP: OneToManyLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupOverBudgetPermissionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetManagers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MANAGERS: OneToOneLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCycleTimeSpans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLE_TIME_SPANS: OneToOneLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetCycleTimeSpansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlGroupCriteriaApi<DeSerializersT>,
      BudgetControlGroupOverBudgetPermissionsApi<DeSerializersT>,
      SystemUsersApi<DeSerializersT>,
      BudgetControlConfigurationsApi<DeSerializersT>,
      BudgetCycleTimeSpansApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_GROUP_CRITERION_GROUP: new OneToManyLink(
        'BudgetControlGroupCriterionGroup',
        this,
        linkedApis[0]
      ),
      BUDGET_CONTROL_GROUP_OVER_BUDGET_PERMISSIONS_BUDGET_CONTROL_GROUP:
        new OneToManyLink(
          'BudgetControlGroupOverBudgetPermissionsBudgetControlGroup',
          this,
          linkedApis[1]
        ),
      BUDGET_MANAGERS: new OneToOneLink('BudgetManagers', this, linkedApis[2]),
      BUDGET_CONTROL_CONFIGURATIONS: new OneToOneLink(
        'BudgetControlConfigurations',
        this,
        linkedApis[3]
      ),
      BUDGET_CYCLE_TIME_SPANS: new OneToOneLink(
        'BudgetCycleTimeSpans',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlGroups;

  requestBuilder(): BudgetControlGroupsRequestBuilder<DeSerializersT> {
    return new BudgetControlGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetControlGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlGroups<DeSerializersT>,
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
    typeof BudgetControlGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    MEMBER_NAME: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MEMBER_DESCRIPTION: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN_NAME: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_THRESHOLD_PERCENT: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_MEMBER_NAME: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CONTROL_INTERVAL: EnumField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      BudgetInterval,
      true,
      true
    >;
    BUDGET_MANAGER: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR_ID: OrderableEdmTypeField<
      BudgetControlGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupCriterionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_CRITERION_GROUP: OneToManyLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupOverBudgetPermissionsBudgetControlGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_OVER_BUDGET_PERMISSIONS_BUDGET_CONTROL_GROUP: OneToManyLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupOverBudgetPermissionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetManagers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MANAGERS: OneToOneLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCycleTimeSpans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLE_TIME_SPANS: OneToOneLink<
      BudgetControlGroups<DeSerializersT>,
      DeSerializersT,
      BudgetCycleTimeSpansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BudgetControlConfigurationStatus,
          true
        ),
        /**
         * Static representation of the {@link memberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'MemberName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link memberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMBER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MemberDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpanName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCycleTimeSpanName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'BudgetThresholdPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentMemberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'ParentMemberName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetControlInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CONTROL_INTERVAL: fieldBuilder.buildEnumField(
          'BudgetControlInterval',
          BudgetInterval,
          true
        ),
        /**
         * Static representation of the {@link budgetManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MANAGER: fieldBuilder.buildEdmTypeField(
          'BudgetManager',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpanFiscalCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR_ID:
          fieldBuilder.buildEdmTypeField(
            'BudgetCycleTimeSpanFiscalCalendarId',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlGroups)
      };
    }

    return this._schema;
  }
}
