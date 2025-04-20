/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllocationRules } from './AllocationRules';
import { AllocationRulesRequestBuilder } from './AllocationRulesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { AllocationRuleDestinationsApi } from './AllocationRuleDestinationsApi';
import { AllocationRuleSourcesApi } from './AllocationRuleSourcesApi';
import { NoYes } from './NoYes';
import { LedgerAllocationFromTo } from './LedgerAllocationFromTo';
import { LedgerAllocationMathType } from './LedgerAllocationMathType';
import { LedgerAllocationSource } from './LedgerAllocationSource';
import { LedgerAllocationMethod } from './LedgerAllocationMethod';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AllocationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AllocationRules<DeSerializersT>, DeSerializersT>
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
  ): AllocationRulesApi<DeSerializersT> {
    return new AllocationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link allocationRuleDestination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_DESTINATION: OneToManyLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      AllocationRuleDestinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link allocationRuleSource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_SOURCE: OneToManyLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      AllocationRuleSourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      AllocationRuleDestinationsApi<DeSerializersT>,
      AllocationRuleSourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1]),
      ALLOCATION_RULE_DESTINATION: new OneToManyLink(
        'AllocationRuleDestination',
        this,
        linkedApis[2]
      ),
      ALLOCATION_RULE_SOURCE: new OneToManyLink(
        'AllocationRuleSource',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = AllocationRules;

  requestBuilder(): AllocationRulesRequestBuilder<DeSerializersT> {
    return new AllocationRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllocationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AllocationRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AllocationRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AllocationRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AllocationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTERCOMPANY_RULE: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_LAST_RUN: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEEP_DIMENSION_FROM: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationFromTo,
      true,
      true
    >;
    ACTIVE: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    KEEP_ACCOUNT_FROM: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationFromTo,
      true,
      true
    >;
    MATHEMATICAL_OPERATION: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationMathType,
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    OFFSET_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_SOURCE: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationSource,
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_VALUE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOCATION_METHOD: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationMethod,
      true,
      true
    >;
    OFFSET_ACCOUNT_FROM: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationFromTo,
      true,
      true
    >;
    OFFSET_DIMENSION_FROM: EnumField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      LedgerAllocationFromTo,
      true,
      true
    >;
    DATE_INTERVAL_CODE: OrderableEdmTypeField<
      AllocationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link allocationRuleDestination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_DESTINATION: OneToManyLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      AllocationRuleDestinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link allocationRuleSource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALLOCATION_RULE_SOURCE: OneToManyLink<
      AllocationRules<DeSerializersT>,
      DeSerializersT,
      AllocationRuleSourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllocationRules<DeSerializers>>;
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
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link intercompanyRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_RULE: fieldBuilder.buildEnumField(
          'IntercompanyRule',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dateLastRun} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_LAST_RUN: fieldBuilder.buildEdmTypeField(
          'DateLastRun',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keepDimensionFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_DIMENSION_FROM: fieldBuilder.buildEnumField(
          'KeepDimensionFrom',
          LedgerAllocationFromTo,
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link keepAccountFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_ACCOUNT_FROM: fieldBuilder.buildEnumField(
          'KeepAccountFrom',
          LedgerAllocationFromTo,
          true
        ),
        /**
         * Static representation of the {@link mathematicalOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATHEMATICAL_OPERATION: fieldBuilder.buildEnumField(
          'MathematicalOperation',
          LedgerAllocationMathType,
          true
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link offsetAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'OffsetAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_SOURCE: fieldBuilder.buildEnumField(
          'DataSource',
          LedgerAllocationSource,
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_VALUE: fieldBuilder.buildEdmTypeField(
          'FixedValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allocationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_METHOD: fieldBuilder.buildEnumField(
          'AllocationMethod',
          LedgerAllocationMethod,
          true
        ),
        /**
         * Static representation of the {@link offsetAccountFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_ACCOUNT_FROM: fieldBuilder.buildEnumField(
          'OffsetAccountFrom',
          LedgerAllocationFromTo,
          true
        ),
        /**
         * Static representation of the {@link offsetDimensionFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_DIMENSION_FROM: fieldBuilder.buildEnumField(
          'OffsetDimensionFrom',
          LedgerAllocationFromTo,
          true
        ),
        /**
         * Static representation of the {@link dateIntervalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_INTERVAL_CODE: fieldBuilder.buildEdmTypeField(
          'DateIntervalCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllocationRules)
      };
    }

    return this._schema;
  }
}
