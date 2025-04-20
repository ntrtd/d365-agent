/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PeriodAllocationCategories } from './PeriodAllocationCategories';
import { PeriodAllocationCategoriesRequestBuilder } from './PeriodAllocationCategoriesRequestBuilder';
import { BudgetParametersApi } from './BudgetParametersApi';
import { NoYes } from './NoYes';
import { PeriodUnit } from './PeriodUnit';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PeriodAllocationCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PeriodAllocationCategories<DeSerializersT>, DeSerializersT>
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
  ): PeriodAllocationCategoriesApi<DeSerializersT> {
    return new PeriodAllocationCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link budgetParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PARAMETERS: OneToManyLink<
      PeriodAllocationCategories<DeSerializersT>,
      DeSerializersT,
      BudgetParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BudgetParametersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_PARAMETERS: new OneToManyLink(
        'BudgetParameters',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PeriodAllocationCategories;

  requestBuilder(): PeriodAllocationCategoriesRequestBuilder<DeSerializersT> {
    return new PeriodAllocationCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PeriodAllocationCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PeriodAllocationCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PeriodAllocationCategories<DeSerializersT>,
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
    typeof PeriodAllocationCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PeriodAllocationCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_KEY: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_FIXED: EnumField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_INTERVAL: OrderableEdmTypeField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_OF_TIME: EnumField<
      PeriodAllocationCategories<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PARAMETERS: OneToManyLink<
      PeriodAllocationCategories<DeSerializersT>,
      DeSerializersT,
      BudgetParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PeriodAllocationCategories<DeSerializers>>;
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
         * Static representation of the {@link periodKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_KEY: fieldBuilder.buildEdmTypeField(
          'PeriodKey',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link allocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllocationPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED: fieldBuilder.buildEnumField('IsFixed', NoYes, true),
        /**
         * Static representation of the {@link timeInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_INTERVAL: fieldBuilder.buildEdmTypeField(
          'TimeInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link unitOfTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_TIME: fieldBuilder.buildEnumField(
          'UnitOfTime',
          PeriodUnit,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PeriodAllocationCategories)
      };
    }

    return this._schema;
  }
}
