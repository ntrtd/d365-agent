/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy } from './AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy';
import { AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyRequestBuilder } from './AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyRequestBuilder';
import { FiscalPeriodMonth } from './FiscalPeriodMonth';
import { FiscalQuarter } from './FiscalQuarter';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializersT>,
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
  ): AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyApi<DeSerializersT> {
    return new AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor =
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy;

  requestBuilder(): AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyRequestBuilder<DeSerializersT> {
    return new AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchyRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializersT>,
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
    typeof AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_ACCOUNTING_DATE: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_ACCOUNTING_LEDGER_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_CONTROL_UNIT_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAGNITUDE: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_2: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_14: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_15: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_15: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_10: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_11: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_12: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_13: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION_IDENTIFICATION_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_MEMBER_DESCRIPTION: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_11: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_MEMBER_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_9: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_OFFSET: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    YEAR_OFFSET: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_VERSION_IDENTIFICATION_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_MEMBER_DESCRIPTION: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_5: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTH: EnumField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      FiscalPeriodMonth,
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_1: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_4: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_14: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_MEMBER_NAME: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUARTER_OFFSET: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_10: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUARTER: EnumField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      FiscalQuarter,
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_7: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_13: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_3: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_2: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_1: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_7: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_6: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_5: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_4: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_9: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_8: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_8: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_3: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_6: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION_TYPE: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATISTICAL_DIMENSION_HIERARCHY_LEVEL_12: OrderableEdmTypeField<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link costAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'CostAccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costAccountingLedgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNTING_LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'CostAccountingLedgerName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costControlUnitName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CONTROL_UNIT_NAME: fieldBuilder.buildEdmTypeField(
          'CostControlUnitName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link magnitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAGNITUDE: fieldBuilder.buildEdmTypeField(
          'Magnitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_2: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_14:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionHierarchyLevel14',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_15:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionHierarchyLevel15',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_15:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionHierarchyLevel15',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_10:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionHierarchyLevel10',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_11:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionHierarchyLevel11',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_12:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionHierarchyLevel12',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_13:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionHierarchyLevel13',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link versionIdentificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_IDENTIFICATION_NAME: fieldBuilder.buildEdmTypeField(
          'VersionIdentificationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionMemberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_MEMBER_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionMemberDescription',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_11:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionHierarchyLevel11',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionMemberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionMemberName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_9: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_OFFSET: fieldBuilder.buildEdmTypeField(
          'PeriodOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link yearOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_OFFSET: fieldBuilder.buildEdmTypeField(
          'YearOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceVersionIdentificationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_VERSION_IDENTIFICATION_NAME: fieldBuilder.buildEdmTypeField(
          'SourceVersionIdentificationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'PeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_NAME: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionMemberDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_MEMBER_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'CostObjectDimensionMemberDescription',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_5: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link month} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTH: fieldBuilder.buildEnumField('Month', FiscalPeriodMonth, true),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_1: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_4: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_14:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionHierarchyLevel14',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link yearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'YearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionMemberName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_MEMBER_NAME: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionMemberName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quarterOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER_OFFSET: fieldBuilder.buildEdmTypeField(
          'QuarterOffset',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_10:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionHierarchyLevel10',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link quarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARTER: fieldBuilder.buildEnumField('Quarter', FiscalQuarter, true),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_7: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_13:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionHierarchyLevel13',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_3: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_2: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_1: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_7: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_6: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_5: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_4: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_9: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_8: fieldBuilder.buildEdmTypeField(
          'StatisticalDimensionHierarchyLevel8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_8: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_3: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costObjectDimensionHierarchyLevel6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OBJECT_DIMENSION_HIERARCHY_LEVEL_6: fieldBuilder.buildEdmTypeField(
          'CostObjectDimensionHierarchyLevel6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link versionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_TYPE: fieldBuilder.buildEdmTypeField(
          'VersionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link statisticalDimensionHierarchyLevel12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATISTICAL_DIMENSION_HIERARCHY_LEVEL_12:
          fieldBuilder.buildEdmTypeField(
            'StatisticalDimensionHierarchyLevel12',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AggregatedStatisticalEntriesWithDefaultCostObjectHierarchyAndStatisticalHierarchy
        )
      };
    }

    return this._schema;
  }
}
