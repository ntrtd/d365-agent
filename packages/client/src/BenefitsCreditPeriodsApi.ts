/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsCreditPeriods } from './BenefitsCreditPeriods';
import { BenefitsCreditPeriodsRequestBuilder } from './BenefitsCreditPeriodsRequestBuilder';
import { BenefitCreditProrateRule } from './BenefitCreditProrateRule';
import { BenefitCreditProrateFormulaType } from './BenefitCreditProrateFormulaType';
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
export class BenefitsCreditPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsCreditPeriods<DeSerializersT>, DeSerializersT>
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
  ): BenefitsCreditPeriodsApi<DeSerializersT> {
    return new BenefitsCreditPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsCreditPeriods;

  requestBuilder(): BenefitsCreditPeriodsRequestBuilder<DeSerializersT> {
    return new BenefitsCreditPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsCreditPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsCreditPeriods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsCreditPeriods<DeSerializersT>,
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
    typeof BenefitsCreditPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsCreditPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BenefitsCreditPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      BenefitsCreditPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREDIT_ID: OrderableEdmTypeField<
      BenefitsCreditPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_CREDIT_VALUE: OrderableEdmTypeField<
      BenefitsCreditPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRORATE_RULE: EnumField<
      BenefitsCreditPeriods<DeSerializers>,
      DeSerializersT,
      BenefitCreditProrateRule,
      true,
      true
    >;
    PRORATE_FORMULA: EnumField<
      BenefitsCreditPeriods<DeSerializers>,
      DeSerializersT,
      BenefitCreditProrateFormulaType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BenefitsCreditPeriods<DeSerializers>>;
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
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creditId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_ID: fieldBuilder.buildEdmTypeField(
          'CreditId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalCreditValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_CREDIT_VALUE: fieldBuilder.buildEdmTypeField(
          'TotalCreditValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link prorateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_RULE: fieldBuilder.buildEnumField(
          'ProrateRule',
          BenefitCreditProrateRule,
          true
        ),
        /**
         * Static representation of the {@link prorateFormula} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATE_FORMULA: fieldBuilder.buildEnumField(
          'ProrateFormula',
          BenefitCreditProrateFormulaType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsCreditPeriods)
      };
    }

    return this._schema;
  }
}
