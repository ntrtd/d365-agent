/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlRuleCriteria } from './BudgetControlRuleCriteria';
import { BudgetControlRuleCriteriaRequestBuilder } from './BudgetControlRuleCriteriaRequestBuilder';
import { BudgetControlRulesApi } from './BudgetControlRulesApi';
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
export class BudgetControlRuleCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetControlRuleCriteria<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlRuleCriteriaApi<DeSerializersT> {
    return new BudgetControlRuleCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULES: OneToOneLink<
      BudgetControlRuleCriteria<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BudgetControlRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_RULES: new OneToOneLink(
        'BudgetControlRules',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlRuleCriteria;

  requestBuilder(): BudgetControlRuleCriteriaRequestBuilder<DeSerializersT> {
    return new BudgetControlRuleCriteriaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlRuleCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlRuleCriteria<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlRuleCriteria<DeSerializersT>,
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
    typeof BudgetControlRuleCriteria,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlRuleCriteria,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_ID: OrderableEdmTypeField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CRITERION: OrderableEdmTypeField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlRuleCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULES: OneToOneLink<
      BudgetControlRuleCriteria<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlRuleCriteria<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', BudgetControlRuleCriteria)
      };
    }

    return this._schema;
  }
}
