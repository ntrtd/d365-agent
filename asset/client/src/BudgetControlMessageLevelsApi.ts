/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlMessageLevels } from './BudgetControlMessageLevels';
import { BudgetControlMessageLevelsRequestBuilder } from './BudgetControlMessageLevelsRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { UserGroupsApi } from './UserGroupsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetControlMessageLevelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetControlMessageLevels<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlMessageLevelsApi<DeSerializersT> {
    return new BudgetControlMessageLevelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlMessageLevels<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlMessageLevelEntityRelatedRoleSystemUserGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_MESSAGE_LEVEL_ENTITY_RELATED_ROLE_SYSTEM_USER_GROUP_ENTITY: OneToOneLink<
      BudgetControlMessageLevels<DeSerializersT>,
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
      BUDGET_CONTROL_CONFIGURATIONS: new OneToOneLink(
        'BudgetControlConfigurations',
        this,
        linkedApis[0]
      ),
      BUDGET_CONTROL_MESSAGE_LEVEL_ENTITY_RELATED_ROLE_SYSTEM_USER_GROUP_ENTITY:
        new OneToOneLink(
          'BudgetControlMessageLevelEntity_RelatedRole_SystemUserGroupEntity',
          this,
          linkedApis[1]
        )
    };
    return this;
  }

  entityConstructor = BudgetControlMessageLevels;

  requestBuilder(): BudgetControlMessageLevelsRequestBuilder<DeSerializersT> {
    return new BudgetControlMessageLevelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlMessageLevels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlMessageLevels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlMessageLevels<DeSerializersT>,
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
    typeof BudgetControlMessageLevels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlMessageLevels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    USER_GROUP_ID: OrderableEdmTypeField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SELECTED: EnumField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_GROUP_NAME: OrderableEdmTypeField<
      BudgetControlMessageLevels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlMessageLevels<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlMessageLevelEntityRelatedRoleSystemUserGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_MESSAGE_LEVEL_ENTITY_RELATED_ROLE_SYSTEM_USER_GROUP_ENTITY: OneToOneLink<
      BudgetControlMessageLevels<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlMessageLevels<DeSerializers>>;
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
         * Static representation of the {@link selected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELECTED: fieldBuilder.buildEnumField('Selected', NoYes, true),
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
        ALL_FIELDS: new AllFields('*', BudgetControlMessageLevels)
      };
    }

    return this._schema;
  }
}
