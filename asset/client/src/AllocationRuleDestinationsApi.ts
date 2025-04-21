/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllocationRuleDestinations } from './AllocationRuleDestinations';
import { AllocationRuleDestinationsRequestBuilder } from './AllocationRuleDestinationsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { AllocationRulesApi } from './AllocationRulesApi';
import { AllocationBasisRulesApi } from './AllocationBasisRulesApi';
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
export class AllocationRuleDestinationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AllocationRuleDestinations<DeSerializersT>, DeSerializersT>
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
  ): AllocationRuleDestinationsApi<DeSerializersT> {
    return new AllocationRuleDestinationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      AllocationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationBasisRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_BASIS_RULE: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      AllocationBasisRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      AllocationRulesApi<DeSerializersT>,
      AllocationBasisRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[1]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[2]
      ),
      ALLOCATION_RULE: new OneToOneLink('AllocationRule', this, linkedApis[3]),
      ALLOCATION_BASIS_RULE: new OneToOneLink(
        'AllocationBasisRule',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AllocationRuleDestinations;

  requestBuilder(): AllocationRuleDestinationsRequestBuilder<DeSerializersT> {
    return new AllocationRuleDestinationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllocationRuleDestinations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AllocationRuleDestinations<DeSerializersT>,
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
    typeof AllocationRuleDestinations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AllocationRuleDestinations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASIS_ID: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_WEIGHT: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_COMPANY: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PERCENTAGE: OrderableEdmTypeField<
      AllocationRuleDestinations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      AllocationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link allocationBasisRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_BASIS_RULE: OneToOneLink<
      AllocationRuleDestinations<DeSerializersT>,
      DeSerializersT,
      AllocationBasisRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllocationRuleDestinations<DeSerializers>>;
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
         * Static representation of the {@link rule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE: fieldBuilder.buildEdmTypeField('Rule', 'Edm.String', false),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link basisId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIS_ID: fieldBuilder.buildEdmTypeField('BasisId', 'Edm.String', true),
        /**
         * Static representation of the {@link toAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ToAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_WEIGHT: fieldBuilder.buildEdmTypeField(
          'FixedWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fromCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_COMPANY: fieldBuilder.buildEdmTypeField(
          'FromCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DIMENSIONS_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ToDimensionsDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link fixedPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'FixedPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllocationRuleDestinations)
      };
    }

    return this._schema;
  }
}
