/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayRateConversions } from './PayRateConversions';
import { PayRateConversionsRequestBuilder } from './PayRateConversionsRequestBuilder';
import { CompFixedPlanTablesApi } from './CompFixedPlanTablesApi';
import { PayIntV1CompFixedPlanTablesApi } from './PayIntV1CompFixedPlanTablesApi';
import { HrmCompPayFrequencyPeriod } from './HrmCompPayFrequencyPeriod';
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
export class PayRateConversionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayRateConversions<DeSerializersT>, DeSerializersT>
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
  ): PayRateConversionsApi<DeSerializersT> {
    return new PayRateConversionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToManyLink<
      PayRateConversions<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1CompFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_COMP_FIXED_PLAN_TABLE: OneToManyLink<
      PayRateConversions<DeSerializersT>,
      DeSerializersT,
      PayIntV1CompFixedPlanTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompFixedPlanTablesApi<DeSerializersT>,
      PayIntV1CompFixedPlanTablesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMP_FIXED_PLAN_TABLE: new OneToManyLink(
        'CompFixedPlanTable',
        this,
        linkedApis[0]
      ),
      PAY_INT_V_1_COMP_FIXED_PLAN_TABLE: new OneToManyLink(
        'PayIntV1CompFixedPlanTable',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PayRateConversions;

  requestBuilder(): PayRateConversionsRequestBuilder<DeSerializersT> {
    return new PayRateConversionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayRateConversions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayRateConversions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayRateConversions<DeSerializersT>,
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
    typeof PayRateConversions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayRateConversions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_RATE_CONVERSION: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEEKLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MONTHLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD: EnumField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      HrmCompPayFrequencyPeriod,
      true,
      true
    >;
    ANNUAL_CONVERSION_FACTOR: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURLY_CONVERSION_FACTOR: OrderableEdmTypeField<
      PayRateConversions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToManyLink<
      PayRateConversions<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1CompFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_COMP_FIXED_PLAN_TABLE: OneToManyLink<
      PayRateConversions<DeSerializersT>,
      DeSerializersT,
      PayIntV1CompFixedPlanTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayRateConversions<DeSerializers>>;
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
         * Static representation of the {@link payRateConversion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_RATE_CONVERSION: fieldBuilder.buildEdmTypeField(
          'PayRateConversion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weeklyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEEKLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'WeeklyConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link monthlyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'MonthlyConversionFactor',
          'Edm.Decimal',
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
         * Static representation of the {@link period} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD: fieldBuilder.buildEnumField(
          'Period',
          HrmCompPayFrequencyPeriod,
          true
        ),
        /**
         * Static representation of the {@link annualConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'AnnualConversionFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hourlyConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURLY_CONVERSION_FACTOR: fieldBuilder.buildEdmTypeField(
          'HourlyConversionFactor',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayRateConversions)
      };
    }

    return this._schema;
  }
}
