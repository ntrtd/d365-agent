/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1EmploymentEmployees } from './PayIntV1EmploymentEmployees';
import { PayIntV1EmploymentEmployeesRequestBuilder } from './PayIntV1EmploymentEmployeesRequestBuilder';
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
export class PayIntV1EmploymentEmployeesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1EmploymentEmployees<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1EmploymentEmployeesApi<DeSerializersT> {
    return new PayIntV1EmploymentEmployeesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1EmploymentEmployees;

  requestBuilder(): PayIntV1EmploymentEmployeesRequestBuilder<DeSerializersT> {
    return new PayIntV1EmploymentEmployeesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1EmploymentEmployees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1EmploymentEmployees<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1EmploymentEmployees<DeSerializersT>,
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
    typeof PayIntV1EmploymentEmployees,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1EmploymentEmployees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROBATION_PERIOD: OrderableEdmTypeField<
      PayIntV1EmploymentEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1EmploymentEmployees<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link probationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBATION_PERIOD: fieldBuilder.buildEdmTypeField(
          'ProbationPeriod',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1EmploymentEmployees)
      };
    }

    return this._schema;
  }
}
