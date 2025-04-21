/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OrganizationHierarchyTypes } from './OrganizationHierarchyTypes';
import { OrganizationHierarchyTypesRequestBuilder } from './OrganizationHierarchyTypesRequestBuilder';
import { RetailReplenishmentRuleLinesApi } from './RetailReplenishmentRuleLinesApi';
import { ReplenishmentRuleLinesV2Api } from './ReplenishmentRuleLinesV2Api';
import { BudgetTrackingWorkspaceParametersApi } from './BudgetTrackingWorkspaceParametersApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OrganizationHierarchyTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OrganizationHierarchyTypes<DeSerializersT>, DeSerializersT>
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
  ): OrganizationHierarchyTypesApi<DeSerializersT> {
    return new OrganizationHierarchyTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailReplenishmentRuleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE_LINE: OneToManyLink<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRuleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replenishmentRuleLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLENISHMENT_RULE_LINES_V_2: OneToManyLink<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersOrganizationHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_ORGANIZATION_HIERARCHY_TYPE: OneToManyLink<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailReplenishmentRuleLinesApi<DeSerializersT>,
      ReplenishmentRuleLinesV2Api<DeSerializersT>,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_REPLENISHMENT_RULE_LINE: new OneToManyLink(
        'RetailReplenishmentRuleLine',
        this,
        linkedApis[0]
      ),
      REPLENISHMENT_RULE_LINES_V_2: new OneToManyLink(
        'ReplenishmentRuleLinesV2',
        this,
        linkedApis[1]
      ),
      BUDGET_TRACKING_WORKSPACE_PARAMETERS_ORGANIZATION_HIERARCHY_TYPE:
        new OneToManyLink(
          'BudgetTrackingWorkspaceParametersOrganizationHierarchyType',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = OrganizationHierarchyTypes;

  requestBuilder(): OrganizationHierarchyTypesRequestBuilder<DeSerializersT> {
    return new OrganizationHierarchyTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OrganizationHierarchyTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OrganizationHierarchyTypes<DeSerializersT>,
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
    typeof OrganizationHierarchyTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OrganizationHierarchyTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      OrganizationHierarchyTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_TYPE_ID: OrderableEdmTypeField<
      OrganizationHierarchyTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailReplenishmentRuleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_REPLENISHMENT_RULE_LINE: OneToManyLink<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      RetailReplenishmentRuleLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link replenishmentRuleLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPLENISHMENT_RULE_LINES_V_2: OneToManyLink<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      ReplenishmentRuleLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetTrackingWorkspaceParametersOrganizationHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_TRACKING_WORKSPACE_PARAMETERS_ORGANIZATION_HIERARCHY_TYPE: OneToManyLink<
      OrganizationHierarchyTypes<DeSerializersT>,
      DeSerializersT,
      BudgetTrackingWorkspaceParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OrganizationHierarchyTypes<DeSerializers>>;
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
         * Static representation of the {@link relationshipTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'RelationshipTypeID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OrganizationHierarchyTypes)
      };
    }

    return this._schema;
  }
}
