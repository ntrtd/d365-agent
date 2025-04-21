/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LanguageCodes } from './LanguageCodes';
import { LanguageCodesRequestBuilder } from './LanguageCodesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { EmployeesApi } from './EmployeesApi';
import { ContractorsV2Api } from './ContractorsV2Api';
import { WorkerPersonDetailsApi } from './WorkerPersonDetailsApi';
import { ContractorsApi } from './ContractorsApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { BaseWorkersApi } from './BaseWorkersApi';
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
export class LanguageCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LanguageCodes<DeSerializersT>, DeSerializersT>
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
  ): LanguageCodesApi<DeSerializersT> {
    return new LanguageCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKERS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link baseWorkers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKERS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      ContractorsV2Api<DeSerializersT>,
      WorkerPersonDetailsApi<DeSerializersT>,
      ContractorsApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKERS: new OneToManyLink('Workers', this, linkedApis[0]),
      EMPLOYEES: new OneToManyLink('Employees', this, linkedApis[1]),
      CONTRACTORS_V_2: new OneToManyLink('ContractorsV2', this, linkedApis[2]),
      WORKER_PERSON_DETAILS: new OneToManyLink(
        'WorkerPersonDetails',
        this,
        linkedApis[3]
      ),
      CONTRACTORS: new OneToManyLink('Contractors', this, linkedApis[4]),
      EMPLOYEES_V_2: new OneToManyLink('EmployeesV2', this, linkedApis[5]),
      BASE_WORKERS: new OneToManyLink('BaseWorkers', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = LanguageCodes;

  requestBuilder(): LanguageCodesRequestBuilder<DeSerializersT> {
    return new LanguageCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LanguageCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LanguageCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LanguageCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LanguageCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LanguageCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LANGUAGE_CODE_ID: OrderableEdmTypeField<
      LanguageCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LanguageCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKERS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link baseWorkers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKERS: OneToManyLink<
      LanguageCodes<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LanguageCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link languageCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_CODE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageCodeId',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LanguageCodes)
      };
    }

    return this._schema;
  }
}
