/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Companies } from './Companies';
import { CompaniesRequestBuilder } from './CompaniesRequestBuilder';
import { BenefitPeriodEmployeesApi } from './BenefitPeriodEmployeesApi';
import { BenefitPeriodEmplLifeEventsApi } from './BenefitPeriodEmplLifeEventsApi';
import { BenefitsPeriodEmployeeLifeEventTransactionsApi } from './BenefitsPeriodEmployeeLifeEventTransactionsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CompaniesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Companies<DeSerializersT>, DeSerializersT>
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
  ): CompaniesApi<DeSerializersT> {
    return new CompaniesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPLOYEE: OneToManyLink<
      Companies<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmplLifeEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPL_LIFE_EVENT: OneToManyLink<
      Companies<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmplLifeEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPeriodEmployeeLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      Companies<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BenefitPeriodEmployeesApi<DeSerializersT>,
      BenefitPeriodEmplLifeEventsApi<DeSerializersT>,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BENEFIT_PERIOD_EMPLOYEE: new OneToManyLink(
        'BenefitPeriodEmployee',
        this,
        linkedApis[0]
      ),
      BENEFIT_PERIOD_EMPL_LIFE_EVENT: new OneToManyLink(
        'BenefitPeriodEmplLifeEvent',
        this,
        linkedApis[1]
      ),
      BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: new OneToManyLink(
        'BenefitsPeriodEmployeeLifeEventTransaction',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = Companies;

  requestBuilder(): CompaniesRequestBuilder<DeSerializersT> {
    return new CompaniesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Companies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Companies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Companies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Companies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Companies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA: OrderableEdmTypeField<
      Companies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Companies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      Companies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      Companies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      Companies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPLOYEE: OneToManyLink<
      Companies<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitPeriodEmplLifeEvent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT_PERIOD_EMPL_LIFE_EVENT: OneToManyLink<
      Companies<DeSerializersT>,
      DeSerializersT,
      BenefitPeriodEmplLifeEventsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link benefitsPeriodEmployeeLifeEventTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFITS_PERIOD_EMPLOYEE_LIFE_EVENT_TRANSACTION: OneToManyLink<
      Companies<DeSerializersT>,
      DeSerializersT,
      BenefitsPeriodEmployeeLifeEventTransactionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Companies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Companies)
      };
    }

    return this._schema;
  }
}
