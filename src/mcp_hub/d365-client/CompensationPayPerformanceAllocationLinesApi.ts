/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationPayPerformanceAllocationLines } from './CompensationPayPerformanceAllocationLines';
import { CompensationPayPerformanceAllocationLinesRequestBuilder } from './CompensationPayPerformanceAllocationLinesRequestBuilder';
import { CompensationPerformanceRatingsApi } from './CompensationPerformanceRatingsApi';
import { RatingLevelsApi } from './RatingLevelsApi';
import { CompensationPayPerformanceAllocationsApi } from './CompensationPayPerformanceAllocationsApi';
import { HrmCompPlanType } from './HrmCompPlanType';
import { HrmCompRatingModel } from './HrmCompRatingModel';
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
export class CompensationPayPerformanceAllocationLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
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
  ): CompensationPayPerformanceAllocationLinesApi<DeSerializersT> {
    return new CompensationPayPerformanceAllocationLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationPerformanceRating} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PERFORMANCE_RATING: OneToOneLink<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT,
      CompensationPerformanceRatingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationPayPerformanceAllocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATION: OneToOneLink<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationPerformanceRatingsApi<DeSerializersT>,
      RatingLevelsApi<DeSerializersT>,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_PERFORMANCE_RATING: new OneToOneLink(
        'CompensationPerformanceRating',
        this,
        linkedApis[0]
      ),
      RATING_LEVEL: new OneToOneLink('RatingLevel', this, linkedApis[1]),
      COMPENSATION_PAY_PERFORMANCE_ALLOCATION: new OneToOneLink(
        'CompensationPayPerformanceAllocation',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CompensationPayPerformanceAllocationLines;

  requestBuilder(): CompensationPayPerformanceAllocationLinesRequestBuilder<DeSerializersT> {
    return new CompensationPayPerformanceAllocationLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CompensationPayPerformanceAllocationLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationPayPerformanceAllocationLines<DeSerializersT>,
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
    typeof CompensationPayPerformanceAllocationLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationPayPerformanceAllocationLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_LEVEL_ID: OrderableEdmTypeField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOCATION_ID: OrderableEdmTypeField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_TYPE: EnumField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      HrmCompPlanType,
      true,
      true
    >;
    RATING_MODEL_TYPE: EnumField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      HrmCompRatingModel,
      true,
      true
    >;
    COMP_PERF_RATING_ID: OrderableEdmTypeField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING_MODEL_ID: OrderableEdmTypeField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERF_FACTOR_PERCENT: OrderableEdmTypeField<
      CompensationPayPerformanceAllocationLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationPerformanceRating} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PERFORMANCE_RATING: OneToOneLink<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT,
      CompensationPerformanceRatingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ratingLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATING_LEVEL: OneToOneLink<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT,
      RatingLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationPayPerformanceAllocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATION: OneToOneLink<
      CompensationPayPerformanceAllocationLines<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CompensationPayPerformanceAllocationLines<DeSerializers>
    >;
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
         * Static representation of the {@link ratingLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingLevelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_ID: fieldBuilder.buildEdmTypeField(
          'AllocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_TYPE: fieldBuilder.buildEnumField(
          'PlanType',
          HrmCompPlanType,
          true
        ),
        /**
         * Static representation of the {@link ratingModelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_MODEL_TYPE: fieldBuilder.buildEnumField(
          'RatingModelType',
          HrmCompRatingModel,
          true
        ),
        /**
         * Static representation of the {@link compPerfRatingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMP_PERF_RATING_ID: fieldBuilder.buildEdmTypeField(
          'CompPerfRatingId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ratingModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'RatingModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link perfFactorPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERF_FACTOR_PERCENT: fieldBuilder.buildEdmTypeField(
          'PerfFactorPercent',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CompensationPayPerformanceAllocationLines
        )
      };
    }

    return this._schema;
  }
}
