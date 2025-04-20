/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HcmProcessTaskAssignments } from './HcmProcessTaskAssignments';
import { HcmProcessTaskAssignmentsRequestBuilder } from './HcmProcessTaskAssignmentsRequestBuilder';
import { BaseWorkersApi } from './BaseWorkersApi';
import { ProcessTasksApi } from './ProcessTasksApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import { BusinessProcessAssignmentType } from './BusinessProcessAssignmentType';
import { BusinessProcessTaskStatus } from './BusinessProcessTaskStatus';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
import { NoYes } from './NoYes';
import { BusinessProcessType } from './BusinessProcessType';
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
export class HcmProcessTaskAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<HcmProcessTaskAssignments<DeSerializersT>, DeSerializersT>
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
  ): HcmProcessTaskAssignmentsApi<DeSerializersT> {
    return new HcmProcessTaskAssignmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assignedWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_WORKER: OneToOneLink<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resolvedByWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOLVED_BY_WORKER: OneToOneLink<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESS_TASK: OneToOneLink<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BaseWorkersApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      ProcessTasksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSIGNED_WORKER: new OneToOneLink('Assigned_Worker', this, linkedApis[0]),
      RESOLVED_BY_WORKER: new OneToOneLink(
        'ResolvedByWorker',
        this,
        linkedApis[1]
      ),
      PROCESS_TASK: new OneToOneLink('Process_Task', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = HcmProcessTaskAssignments;

  requestBuilder(): HcmProcessTaskAssignmentsRequestBuilder<DeSerializersT> {
    return new HcmProcessTaskAssignmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HcmProcessTaskAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HcmProcessTaskAssignments<DeSerializersT>,
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
    typeof HcmProcessTaskAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HcmProcessTaskAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ASSIGNED_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_ID: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    WORKER_TYPE: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    ASSIGNMENT_TYPE: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      BusinessProcessAssignmentType,
      true,
      true
    >;
    TASK: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      BusinessProcessTaskStatus,
      true,
      true
    >;
    EMPLOYMENT_ID: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PARTY_NUMBER: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERIC_SUBTYPE: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    IS_OPTIONAL: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTACT_NAME: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONBOARDED_EMPLOYEE_NAME: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INSTRUCTIONS: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_EMAIL: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNED_WORKER_NAME: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLVED_BY_EMAIL: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLVED_BY_NAME: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_URL_FOR_TASK_LINK: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ONBOARDED_EMPLOYEE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINK_TO_TASK: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETION_DATE_TIME: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ASSIGNED_WORKER_EMAIL: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    RESOLVED_BY_PERSONNEL_NUMBER: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESS_ID: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ONBOARDED_EMPLOYEE_EMAIL: OrderableEdmTypeField<
      HcmProcessTaskAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assignedWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSIGNED_WORKER: OneToOneLink<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resolvedByWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOLVED_BY_WORKER: OneToOneLink<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESS_TASK: OneToOneLink<
      HcmProcessTaskAssignments<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<HcmProcessTaskAssignments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link assignedWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssignedWorkerPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_ID: fieldBuilder.buildEdmTypeField('TaskId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link workerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_TYPE: fieldBuilder.buildEnumField(
          'WorkerType',
          HcmEmploymentType,
          true
        ),
        /**
         * Static representation of the {@link assignmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_TYPE: fieldBuilder.buildEnumField(
          'AssignmentType',
          BusinessProcessAssignmentType,
          true
        ),
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BusinessProcessTaskStatus,
          true
        ),
        /**
         * Static representation of the {@link employmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', true),
        /**
         * Static representation of the {@link genericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'GenericSubtype',
          BusinessProcessGenericSubtype,
          true
        ),
        /**
         * Static representation of the {@link isOptional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPTIONAL: fieldBuilder.buildEnumField('IsOptional', NoYes, true),
        /**
         * Static representation of the {@link contactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'ContactName',
          'Edm.String',
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
        /**
         * Static representation of the {@link onboardedEmployeeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONBOARDED_EMPLOYEE_NAME: fieldBuilder.buildEdmTypeField(
          'OnboardedEmployeeName',
          'Edm.String',
          true
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
         * Static representation of the {@link instructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'Instructions',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_EMAIL: fieldBuilder.buildEdmTypeField(
          'ContactEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assignedWorkerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'AssignedWorkerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resolvedByEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_BY_EMAIL: fieldBuilder.buildEdmTypeField(
          'ResolvedByEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resolvedByName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_BY_NAME: fieldBuilder.buildEdmTypeField(
          'ResolvedByName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useUrlForTaskLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_URL_FOR_TASK_LINK: fieldBuilder.buildEnumField(
          'UseUrlForTaskLink',
          NoYes,
          true
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
         * Static representation of the {@link linkToTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINK_TO_TASK: fieldBuilder.buildEdmTypeField(
          'LinkToTask',
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
         * Static representation of the {@link completionDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CompletionDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link assignedWorkerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNED_WORKER_EMAIL: fieldBuilder.buildEdmTypeField(
          'AssignedWorkerEmail',
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
         * Static representation of the {@link processType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ProcessType',
          BusinessProcessType,
          true
        ),
        /**
         * Static representation of the {@link resolvedByPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_BY_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResolvedByPersonnelNumber',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link onboardedEmployeeEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONBOARDED_EMPLOYEE_EMAIL: fieldBuilder.buildEdmTypeField(
          'OnboardedEmployeeEmail',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HcmProcessTaskAssignments)
      };
    }

    return this._schema;
  }
}
