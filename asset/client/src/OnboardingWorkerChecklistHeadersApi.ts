/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingWorkerChecklistHeaders } from './OnboardingWorkerChecklistHeaders';
import { OnboardingWorkerChecklistHeadersRequestBuilder } from './OnboardingWorkerChecklistHeadersRequestBuilder';
import { OnboardingWorkerChecklistTasksApi } from './OnboardingWorkerChecklistTasksApi';
import { EmploymentsApi } from './EmploymentsApi';
import { WorkersApi } from './WorkersApi';
import { BusinessProcessHeaderStatus } from './BusinessProcessHeaderStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class OnboardingWorkerChecklistHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<OnboardingWorkerChecklistHeaders<DeSerializersT>, DeSerializersT>
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
  ): OnboardingWorkerChecklistHeadersApi<DeSerializersT> {
    return new OnboardingWorkerChecklistHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link checklistTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TASKS: OneToManyLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEmployment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_EMPLOYMENT: OneToOneLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklistOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_OWNER: OneToOneLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resolvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOLVING_WORKER: OneToOneLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnboardingWorkerChecklistTasksApi<DeSerializersT>,
      EmploymentsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHECKLIST_TASKS: new OneToManyLink('ChecklistTasks', this, linkedApis[0]),
      WORKER_EMPLOYMENT: new OneToOneLink(
        'WorkerEmployment',
        this,
        linkedApis[1]
      ),
      CHECKLIST_OWNER: new OneToOneLink('ChecklistOwner', this, linkedApis[2]),
      RESOLVING_WORKER: new OneToOneLink('ResolvingWorker', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = OnboardingWorkerChecklistHeaders;

  requestBuilder(): OnboardingWorkerChecklistHeadersRequestBuilder<DeSerializersT> {
    return new OnboardingWorkerChecklistHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OnboardingWorkerChecklistHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardingWorkerChecklistHeaders<DeSerializersT>,
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
    typeof OnboardingWorkerChecklistHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardingWorkerChecklistHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHECKLIST_ID: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CHECKLIST_END_DATE: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_COMPANY: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKLIST_START_DATE: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CHECKLIST_STATUS: EnumField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessHeaderStatus,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKLIST_RESOLVED_BY: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardingWorkerChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TASKS: OneToManyLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistTasksApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEmployment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_EMPLOYMENT: OneToOneLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklistOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_OWNER: OneToOneLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resolvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOLVING_WORKER: OneToOneLink<
      OnboardingWorkerChecklistHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardingWorkerChecklistHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link checklistId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_ID: fieldBuilder.buildEdmTypeField(
          'ChecklistId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link checklistEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_END_DATE: fieldBuilder.buildEdmTypeField(
          'ChecklistEndDate',
          'Edm.DateTimeOffset',
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
        /**
         * Static representation of the {@link employeePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmployeePersonnelNumber',
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
         * Static representation of the {@link employmentCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_COMPANY: fieldBuilder.buildEdmTypeField(
          'EmploymentCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checklistStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_START_DATE: fieldBuilder.buildEdmTypeField(
          'ChecklistStartDate',
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
         * Static representation of the {@link checklistStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_STATUS: fieldBuilder.buildEnumField(
          'ChecklistStatus',
          BusinessProcessHeaderStatus,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link checklistResolvedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKLIST_RESOLVED_BY: fieldBuilder.buildEdmTypeField(
          'ChecklistResolvedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ownerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OwnerPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OnboardingWorkerChecklistHeaders)
      };
    }

    return this._schema;
  }
}
