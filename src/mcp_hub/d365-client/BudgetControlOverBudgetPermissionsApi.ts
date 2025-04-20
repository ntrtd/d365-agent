/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlOverBudgetPermissions } from './BudgetControlOverBudgetPermissions';
import { BudgetControlOverBudgetPermissionsRequestBuilder } from './BudgetControlOverBudgetPermissionsRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { UserGroupsApi } from './UserGroupsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetCheckOverbudgetOption } from './BudgetCheckOverbudgetOption';
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
export class BudgetControlOverBudgetPermissionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BudgetControlOverBudgetPermissions<DeSerializersT>,
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
  ): BudgetControlOverBudgetPermissionsApi<DeSerializersT> {
    return new BudgetControlOverBudgetPermissionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationOverrideUserGroupOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_OVERRIDE_USER_GROUP_OPTION: OneToOneLink<
      BudgetControlOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUserGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER_GROUPS: OneToOneLink<
      BudgetControlOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlConfigurationsApi<DeSerializersT>,
      UserGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_CONFIGURATION_OVERRIDE_USER_GROUP_OPTION: new OneToOneLink(
        'BudgetControlConfigurationOverrideUserGroupOption',
        this,
        linkedApis[0]
      ),
      SYSTEM_USER_GROUPS: new OneToOneLink(
        'SystemUserGroups',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlOverBudgetPermissions;

  requestBuilder(): BudgetControlOverBudgetPermissionsRequestBuilder<DeSerializersT> {
    return new BudgetControlOverBudgetPermissionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlOverBudgetPermissions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlOverBudgetPermissions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlOverBudgetPermissions<DeSerializersT>,
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
    typeof BudgetControlOverBudgetPermissions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlOverBudgetPermissions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    USER_GROUP_ID: OrderableEdmTypeField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVER_BUDGET_OPTION: EnumField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      BudgetCheckOverbudgetOption,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_GROUP_NAME: OrderableEdmTypeField<
      BudgetControlOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationOverrideUserGroupOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_OVERRIDE_USER_GROUP_OPTION: OneToOneLink<
      BudgetControlOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUserGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER_GROUPS: OneToOneLink<
      BudgetControlOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlOverBudgetPermissions<DeSerializers>>;
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
         * Static representation of the {@link userGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'UserGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link overBudgetOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_BUDGET_OPTION: fieldBuilder.buildEnumField(
          'OverBudgetOption',
          BudgetCheckOverbudgetOption,
          true
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
         * Static representation of the {@link userGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'UserGroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlOverBudgetPermissions)
      };
    }

    return this._schema;
  }
}
