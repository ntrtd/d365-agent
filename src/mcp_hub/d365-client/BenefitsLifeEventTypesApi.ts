/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsLifeEventTypes } from './BenefitsLifeEventTypes';
import { BenefitsLifeEventTypesRequestBuilder } from './BenefitsLifeEventTypesRequestBuilder';
import { BenefitsEmployeeFutureLifeEventTransactionsApi } from './BenefitsEmployeeFutureLifeEventTransactionsApi';
import { BenefitsPeriodEmployeeLifeEventTransactionsApi } from './BenefitsPeriodEmployeeLifeEventTransactionsApi';
import { BenefitsLifeEventOptionsApi } from './BenefitsLifeEventOptionsApi';
import { BenefitLifeEventTypes } from './BenefitLifeEventTypes';
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
export class BenefitsLifeEventTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BenefitsLifeEventTypes<DeSerializersT>, DeSerializersT>
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
  ): BenefitsLifeEventTypesApi<DeSerializersT> {
    return new BenefitsLifeEventTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitsEmployeeFutureLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_EMPLOYEE_FUTURE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsEmployeeFutureLifeEventTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPeriodEmployeeLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsLifeEventOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_OPTION: OneToManyLink<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventOptionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitsEmployeeFutureLifeEventTransactionsApi<DeSerializersT>,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>,
      BenefitsLifeEventOptionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFITS_EMPLOYEE_FUTURE_LIFE_EVENT_TRANSACTION: new OneToManyLink(
        'BenefitsEmployeeFutureLifeEventTransaction',
        this,
        linkedApis[0]
      ),
      BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: new OneToManyLink(
        'BenefitsPeriodEmployeeLifeEventTransaction',
        this,
        linkedApis[1]
      ),
      BENEFITS_LIFE_EVENT_OPTION: new OneToManyLink(
        'BenefitsLifeEventOption',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BenefitsLifeEventTypes;

  requestBuilder(): BenefitsLifeEventTypesRequestBuilder<DeSerializersT> {
    return new BenefitsLifeEventTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BenefitsLifeEventTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsLifeEventTypes<DeSerializersT>,
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
    typeof BenefitsLifeEventTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsLifeEventTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIFE_EVENT_TYPE_ID: OrderableEdmTypeField<
      BenefitsLifeEventTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_TYPE: EnumField<
      BenefitsLifeEventTypes<DeSerializers>,
      DeSerializersT,
      BenefitLifeEventTypes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsLifeEventTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsEmployeeFutureLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_EMPLOYEE_FUTURE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsEmployeeFutureLifeEventTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPeriodEmployeeLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsLifeEventOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_LIFE_EVENT_OPTION: OneToManyLink<
      BenefitsLifeEventTypes<DeSerializersT>,
      DeSerializersT,
      BenefitsLifeEventOptionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BenefitsLifeEventTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link lifeEventTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LifeEventTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lifeEventType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_TYPE: fieldBuilder.buildEnumField(
          'LifeEventType',
          BenefitLifeEventTypes,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsLifeEventTypes)
      };
    }

    return this._schema;
  }
}
