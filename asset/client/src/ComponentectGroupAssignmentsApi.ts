/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComponentectGroupAssignments } from './ComponentectGroupAssignments';
import { ComponentectGroupAssignmentsRequestBuilder } from './ComponentectGroupAssignmentsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ComponentectGroupAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ComponentectGroupAssignments<DeSerializersT>, DeSerializersT>
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
  ): ComponentectGroupAssignmentsApi<DeSerializersT> {
    return new ComponentectGroupAssignmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ComponentectGroupAssignments;

  requestBuilder(): ComponentectGroupAssignmentsRequestBuilder<DeSerializersT> {
    return new ComponentectGroupAssignmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ComponentectGroupAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ComponentectGroupAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ComponentectGroupAssignments<DeSerializersT>,
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
    typeof ComponentectGroupAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ComponentectGroupAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_FROM: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDIRECT_COST_COMPONENT_GROUP: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RULE_SEARCH_KEY: OrderableEdmTypeField<
      ComponentectGroupAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ComponentectGroupAssignments<DeSerializers>>;
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
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effectiveFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'EffectiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourcePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResourcePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link indirectCostComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDIRECT_COST_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'IndirectCostComponentGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ruleSearchKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_SEARCH_KEY: fieldBuilder.buildEdmTypeField(
          'RuleSearchKey',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ComponentectGroupAssignments)
      };
    }

    return this._schema;
  }
}
