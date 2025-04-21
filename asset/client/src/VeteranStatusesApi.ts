/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VeteranStatuses } from './VeteranStatuses';
import { VeteranStatusesRequestBuilder } from './VeteranStatusesRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { EmployeesApi } from './EmployeesApi';
import { ApplicantsApi } from './ApplicantsApi';
import { ContractorsV2Api } from './ContractorsV2Api';
import { WorkerPersonDetailsApi } from './WorkerPersonDetailsApi';
import { PayIntV1HcmPersonDetailsApi } from './PayIntV1HcmPersonDetailsApi';
import { PersonDetailsApi } from './PersonDetailsApi';
import { ContractorsApi } from './ContractorsApi';
import { CandidatesToHireApi } from './CandidatesToHireApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { NoYes } from './NoYes';
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
export class VeteranStatusesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VeteranStatuses<DeSerializersT>, DeSerializersT>
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
  ): VeteranStatusesApi<DeSerializersT> {
    return new VeteranStatusesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link workers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKERS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_PERSON_DETAILS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_DETAILS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      PersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      EmployeesApi<DeSerializersT>,
      ApplicantsApi<DeSerializersT>,
      ContractorsV2Api<DeSerializersT>,
      WorkerPersonDetailsApi<DeSerializersT>,
      PayIntV1HcmPersonDetailsApi<DeSerializersT>,
      PersonDetailsApi<DeSerializersT>,
      ContractorsApi<DeSerializersT>,
      CandidatesToHireApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>
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
      PAY_INT_PERSON_DETAILS: new OneToManyLink(
        'PayIntPersonDetails',
        this,
        linkedApis[5]
      ),
      PERSON_DETAILS: new OneToManyLink('PersonDetails', this, linkedApis[6]),
      CONTRACTORS: new OneToManyLink('Contractors', this, linkedApis[7]),
      CANDIDATES_TO_HIRE: new OneToManyLink(
        'CandidatesToHire',
        this,
        linkedApis[8]
      ),
      EMPLOYEES_V_2: new OneToManyLink('EmployeesV2', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = VeteranStatuses;

  requestBuilder(): VeteranStatusesRequestBuilder<DeSerializersT> {
    return new VeteranStatusesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VeteranStatuses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VeteranStatuses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VeteranStatuses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VeteranStatuses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VeteranStatuses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VETERAN_STATUS_ID: OrderableEdmTypeField<
      VeteranStatuses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PROTECTED_VETERAN: EnumField<
      VeteranStatuses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VeteranStatuses<DeSerializers>,
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
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employees} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      EmployeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractorsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS_V_2: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      ContractorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_PERSON_DETAILS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      WorkerPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntPersonDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_PERSON_DETAILS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      PayIntV1HcmPersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_DETAILS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      PersonDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contractors} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTRACTORS: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      ContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link candidatesToHire} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CANDIDATES_TO_HIRE: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      CandidatesToHireApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employeesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEES_V_2: OneToManyLink<
      VeteranStatuses<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VeteranStatuses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link veteranStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'VeteranStatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isProtectedVeteran} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROTECTED_VETERAN: fieldBuilder.buildEnumField(
          'IsProtectedVeteran',
          NoYes,
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
        ALL_FIELDS: new AllFields('*', VeteranStatuses)
      };
    }

    return this._schema;
  }
}
