/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetAllowTransferRules } from './BudgetAllowTransferRules';
import { BudgetAllowTransferRulesRequestBuilder } from './BudgetAllowTransferRulesRequestBuilder';
import { AccountStructuresApi } from './AccountStructuresApi';
import { LedgersApi } from './LedgersApi';
import { BudgetDimensionsApi } from './BudgetDimensionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetAllowTransferRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetAllowTransferRules<DeSerializersT>, DeSerializersT>
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
  ): BudgetAllowTransferRulesApi<DeSerializersT> {
    return new BudgetAllowTransferRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link accountStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_STRUCTURES: OneToOneLink<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITIES: OneToOneLink<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_DIMENSIONS: OneToOneLink<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT,
      BudgetDimensionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AccountStructuresApi<DeSerializersT>,
      LedgersApi<DeSerializersT>,
      BudgetDimensionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ACCOUNT_STRUCTURES: new OneToOneLink(
        'AccountStructures',
        this,
        linkedApis[0]
      ),
      LEGAL_ENTITIES: new OneToOneLink('LegalEntities', this, linkedApis[1]),
      BUDGET_DIMENSIONS: new OneToOneLink(
        'BudgetDimensions',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BudgetAllowTransferRules;

  requestBuilder(): BudgetAllowTransferRulesRequestBuilder<DeSerializersT> {
    return new BudgetAllowTransferRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetAllowTransferRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetAllowTransferRules<DeSerializersT>,
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
    typeof BudgetAllowTransferRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetAllowTransferRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_TRANSFER_RULE: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_MEMBER: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_ID: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_STRUCTURE_ID: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRITERION: OrderableEdmTypeField<
      BudgetAllowTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accountStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCOUNT_STRUCTURES: OneToOneLink<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITIES: OneToOneLink<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_DIMENSIONS: OneToOneLink<
      BudgetAllowTransferRules<DeSerializersT>,
      DeSerializersT,
      BudgetDimensionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetAllowTransferRules<DeSerializers>>;
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
         * Static representation of the {@link budgetTransferRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_TRANSFER_RULE: fieldBuilder.buildEdmTypeField(
          'BudgetTransferRule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ruleMember} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_MEMBER: fieldBuilder.buildEdmTypeField(
          'RuleMember',
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
         * Static representation of the {@link accountStructureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE_ID: fieldBuilder.buildEdmTypeField(
          'AccountStructureId',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link criterion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITERION: fieldBuilder.buildEdmTypeField(
          'Criterion',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetAllowTransferRules)
      };
    }

    return this._schema;
  }
}
