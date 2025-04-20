/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccrualPlanRules } from './AccrualPlanRules';
import { AccrualPlanRulesRequestBuilder } from './AccrualPlanRulesRequestBuilder';
import { AccrualPlansApi } from './AccrualPlansApi';
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
export class AccrualPlanRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccrualPlanRules<DeSerializersT>, DeSerializersT>
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
  ): AccrualPlanRulesApi<DeSerializersT> {
    return new AccrualPlanRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      AccrualPlanRules<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccrualPlansApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ACCRUAL_PLAN: new OneToOneLink('AccrualPlan', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AccrualPlanRules;

  requestBuilder(): AccrualPlanRulesRequestBuilder<DeSerializersT> {
    return new AccrualPlanRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccrualPlanRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccrualPlanRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AccrualPlanRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AccrualPlanRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccrualPlanRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCRUAL_ID: OrderableEdmTypeField<
      AccrualPlanRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_MONTHS: OrderableEdmTypeField<
      AccrualPlanRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LIMIT: OrderableEdmTypeField<
      AccrualPlanRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURLY_RATE: OrderableEdmTypeField<
      AccrualPlanRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_LIMIT: OrderableEdmTypeField<
      AccrualPlanRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CARRY_FORWARD_LIMIT: OrderableEdmTypeField<
      AccrualPlanRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accrualPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCRUAL_PLAN: OneToOneLink<
      AccrualPlanRules<DeSerializersT>,
      DeSerializersT,
      AccrualPlansApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccrualPlanRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_MONTHS: fieldBuilder.buildEdmTypeField(
          'EmploymentMonths',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MaximumLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hourlyRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURLY_RATE: fieldBuilder.buildEdmTypeField(
          'HourlyRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MinimumLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link carryForwardLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRY_FORWARD_LIMIT: fieldBuilder.buildEdmTypeField(
          'CarryForwardLimit',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccrualPlanRules)
      };
    }

    return this._schema;
  }
}
