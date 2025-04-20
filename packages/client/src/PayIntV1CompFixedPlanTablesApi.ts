/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1CompFixedPlanTables } from './PayIntV1CompFixedPlanTables';
import { PayIntV1CompFixedPlanTablesRequestBuilder } from './PayIntV1CompFixedPlanTablesRequestBuilder';
import { CompensationGridsApi } from './CompensationGridsApi';
import { PayRateConversionsApi } from './PayRateConversionsApi';
import { NoYes } from './NoYes';
import { HrmCompHireRule } from './HrmCompHireRule';
import { HcmCompensationType } from './HcmCompensationType';
import { HrmCompTolerance } from './HrmCompTolerance';
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
export class PayIntV1CompFixedPlanTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1CompFixedPlanTables<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1CompFixedPlanTablesApi<DeSerializersT> {
    return new PayIntV1CompFixedPlanTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToOneLink<
      PayIntV1CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payRateConversion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_RATE_CONVERSION: OneToOneLink<
      PayIntV1CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      PayRateConversionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationGridsApi<DeSerializersT>,
      PayRateConversionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_GRID: new OneToOneLink(
        'CompensationGrid',
        this,
        linkedApis[0]
      ),
      PAY_RATE_CONVERSION: new OneToOneLink(
        'PayRateConversion',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PayIntV1CompFixedPlanTables;

  requestBuilder(): PayIntV1CompFixedPlanTablesRequestBuilder<DeSerializersT> {
    return new PayIntV1CompFixedPlanTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1CompFixedPlanTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1CompFixedPlanTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1CompFixedPlanTables<DeSerializersT>,
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
    typeof PayIntV1CompFixedPlanTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1CompFixedPlanTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_FREQUENCY: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_POINT: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_STRUCTURE: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKET_PRICE_INDICATOR: EnumField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REF_POINT_SETUP_ID: OrderableEdmTypeField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIRE_RULE: EnumField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompHireRule,
      true,
      true
    >;
    TYPE: EnumField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      HcmCompensationType,
      true,
      true
    >;
    OUT_OF_RANGE_TOLERANCE: EnumField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      HrmCompTolerance,
      true,
      true
    >;
    RECOMMENDATION_ALLOWED: EnumField<
      PayIntV1CompFixedPlanTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToOneLink<
      PayIntV1CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payRateConversion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_RATE_CONVERSION: OneToOneLink<
      PayIntV1CompFixedPlanTables<DeSerializersT>,
      DeSerializersT,
      PayRateConversionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayIntV1CompFixedPlanTables<DeSerializers>>;
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
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', false),
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'PayFrequency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_POINT: fieldBuilder.buildEdmTypeField(
          'ControlPoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'CompensationStructure',
          'Edm.String',
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
         * Static representation of the {@link marketPriceIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKET_PRICE_INDICATOR: fieldBuilder.buildEnumField(
          'MarketPriceIndicator',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link refPointSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_POINT_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'RefPointSetupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hireRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRE_RULE: fieldBuilder.buildEnumField(
          'HireRule',
          HrmCompHireRule,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HcmCompensationType, true),
        /**
         * Static representation of the {@link outOfRangeTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUT_OF_RANGE_TOLERANCE: fieldBuilder.buildEnumField(
          'OutOfRangeTolerance',
          HrmCompTolerance,
          true
        ),
        /**
         * Static representation of the {@link recommendationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOMMENDATION_ALLOWED: fieldBuilder.buildEnumField(
          'RecommendationAllowed',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1CompFixedPlanTables)
      };
    }

    return this._schema;
  }
}
