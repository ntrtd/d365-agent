/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanPeriods } from './BenefitsPlanPeriods';
import { BenefitsPlanPeriodsRequestBuilder } from './BenefitsPlanPeriodsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BenefitsPlanPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsPlanPeriods<DeSerializersT>, DeSerializersT>
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
  ): BenefitsPlanPeriodsApi<DeSerializersT> {
    return new BenefitsPlanPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsPlanPeriods;

  requestBuilder(): BenefitsPlanPeriodsRequestBuilder<DeSerializersT> {
    return new BenefitsPlanPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BenefitsPlanPeriods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanPeriods<DeSerializersT>,
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
    typeof BenefitsPlanPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BenefitsPlanPeriods<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsPlanPeriods)
      };
    }

    return this._schema;
  }
}
