/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlGroupCriteria } from './BudgetControlGroupCriteria';
import { BudgetControlGroupCriteriaRequestBuilder } from './BudgetControlGroupCriteriaRequestBuilder';
import { BudgetControlGroupsApi } from './BudgetControlGroupsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
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
export class BudgetControlGroupCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetControlGroupCriteria<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlGroupCriteriaApi<DeSerializersT> {
    return new BudgetControlGroupCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUPS: OneToOneLink<
      BudgetControlGroupCriteria<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BudgetControlGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_GROUPS: new OneToOneLink(
        'BudgetControlGroups',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlGroupCriteria;

  requestBuilder(): BudgetControlGroupCriteriaRequestBuilder<DeSerializersT> {
    return new BudgetControlGroupCriteriaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlGroupCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlGroupCriteria<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlGroupCriteria<DeSerializersT>,
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
    typeof BudgetControlGroupCriteria,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlGroupCriteria,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    MEMBER_NAME: OrderableEdmTypeField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_ID: OrderableEdmTypeField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CRITERION: OrderableEdmTypeField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlGroupCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUPS: OneToOneLink<
      BudgetControlGroupCriteria<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlGroupCriteria<DeSerializers>>;
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
         * Static representation of the {@link dimensionAttributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link criterion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITERION: fieldBuilder.buildEdmTypeField(
          'Criterion',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlGroupCriteria)
      };
    }

    return this._schema;
  }
}
