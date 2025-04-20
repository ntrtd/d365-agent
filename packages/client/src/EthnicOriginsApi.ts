/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EthnicOrigins } from './EthnicOrigins';
import { EthnicOriginsRequestBuilder } from './EthnicOriginsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { EmployeesApi } from './EmployeesApi';
import { ApplicantsApi } from './ApplicantsApi';
import { ContractorsV2Api } from './ContractorsV2Api';
import { WorkerPersonDetailsApi } from './WorkerPersonDetailsApi';
import { ContractorsApi } from './ContractorsApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { BaseWorkersApi } from './BaseWorkersApi';
import { HcmEeoEthnicOrigin } from './HcmEeoEthnicOrigin';
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
export class EthnicOriginsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EthnicOrigins<DeSerializersT>, DeSerializersT>
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
  ): EthnicOriginsApi<DeSerializersT> {
    return new EthnicOriginsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKERS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link baseWorkers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKERS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      ApplicantsApi<DeSerializersT>,
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
      APPLICANTS: new OneToManyLink('Applicants', this, linkedApis[2]),
      CONTRACTORS_V_2: new OneToManyLink('ContractorsV2', this, linkedApis[3]),
      WORKER_PERSON_DETAILS: new OneToManyLink(
        'WorkerPersonDetails',
        this,
        linkedApis[4]
      ),
      CONTRACTORS: new OneToManyLink('Contractors', this, linkedApis[5]),
      EMPLOYEES_V_2: new OneToManyLink('EmployeesV2', this, linkedApis[6]),
      BASE_WORKERS: new OneToManyLink('BaseWorkers', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = EthnicOrigins;

  requestBuilder(): EthnicOriginsRequestBuilder<DeSerializersT> {
    return new EthnicOriginsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EthnicOrigins<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EthnicOrigins<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EthnicOrigins<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EthnicOrigins, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EthnicOrigins, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      EthnicOrigins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EEO_ETHNIC_ORIGIN: EnumField<
      EthnicOrigins<DeSerializers>,
      DeSerializersT,
      HcmEeoEthnicOrigin,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EthnicOrigins<DeSerializers>,
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
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link baseWorkers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKERS: OneToManyLink<
      EthnicOrigins<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EthnicOrigins<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link eeoEthnicOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EEO_ETHNIC_ORIGIN: fieldBuilder.buildEnumField(
          'EeoEthnicOrigin',
          HcmEeoEthnicOrigin,
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
        ALL_FIELDS: new AllFields('*', EthnicOrigins)
      };
    }

    return this._schema;
  }
}
