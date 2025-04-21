/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardProcessHeadersDualWrite } from './OnboardProcessHeadersDualWrite';
import { OnboardProcessHeadersDualWriteRequestBuilder } from './OnboardProcessHeadersDualWriteRequestBuilder';
import { BaseWorkersApi } from './BaseWorkersApi';
import { ProcessHeadersApi } from './ProcessHeadersApi';
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
export class OnboardProcessHeadersDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnboardProcessHeadersDualWrite<DeSerializersT>, DeSerializersT>
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
  ): OnboardProcessHeadersDualWriteApi<DeSerializersT> {
    return new OnboardProcessHeadersDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardProcessHeadersDualWrite<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSES: OneToOneLink<
      OnboardProcessHeadersDualWrite<DeSerializersT>,
      DeSerializersT,
      ProcessHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BaseWorkersApi<DeSerializersT>,
      ProcessHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      PROCESSES: new OneToOneLink('Processes', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = OnboardProcessHeadersDualWrite;

  requestBuilder(): OnboardProcessHeadersDualWriteRequestBuilder<DeSerializersT> {
    return new OnboardProcessHeadersDualWriteRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OnboardProcessHeadersDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardProcessHeadersDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardProcessHeadersDualWrite<DeSerializersT>,
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
    typeof OnboardProcessHeadersDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardProcessHeadersDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_ID: OrderableEdmTypeField<
      OnboardProcessHeadersDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ONBOARDED_EMPLOYEE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardProcessHeadersDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      OnboardProcessHeadersDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      OnboardProcessHeadersDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      OnboardProcessHeadersDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardProcessHeadersDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      OnboardProcessHeadersDualWrite<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSES: OneToOneLink<
      OnboardProcessHeadersDualWrite<DeSerializersT>,
      DeSerializersT,
      ProcessHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardProcessHeadersDualWrite<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link onboardedEmployeePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONBOARDED_EMPLOYEE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OnboardedEmployeePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
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
         * Static representation of the {@link employmentPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmploymentPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardProcessHeadersDualWrite)
      };
    }

    return this._schema;
  }
}
