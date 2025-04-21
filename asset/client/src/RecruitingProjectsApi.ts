/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecruitingProjects } from './RecruitingProjects';
import { RecruitingProjectsRequestBuilder } from './RecruitingProjectsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { JobsApi } from './JobsApi';
import { DepartmentsApi } from './DepartmentsApi';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { RecruitingMediasApi } from './RecruitingMediasApi';
import { HrmRecruitingStatus } from './HrmRecruitingStatus';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RecruitingProjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RecruitingProjects<DeSerializersT>, DeSerializersT>
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
  ): RecruitingProjectsApi<DeSerializersT> {
    return new RecruitingProjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link hiringManagerWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HIRING_MANAGER_WORKER: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruiterWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITER_WORKER: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omOperatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_OPERATING_UNIT: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternateWorkerContact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATE_WORKER_CONTACT: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingMedia} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_MEDIA: OneToManyLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      RecruitingMediasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      RecruitingMediasApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      HIRING_MANAGER_WORKER: new OneToOneLink(
        'HiringManagerWorker',
        this,
        linkedApis[0]
      ),
      JOB: new OneToOneLink('Job', this, linkedApis[1]),
      RECRUITER_WORKER: new OneToOneLink(
        'RecruiterWorker',
        this,
        linkedApis[2]
      ),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[3]),
      OM_OPERATING_UNIT: new OneToOneLink(
        'OMOperatingUnit',
        this,
        linkedApis[4]
      ),
      ALTERNATE_WORKER_CONTACT: new OneToOneLink(
        'AlternateWorkerContact',
        this,
        linkedApis[5]
      ),
      RECRUITING_MEDIA: new OneToManyLink(
        'RecruitingMedia',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = RecruitingProjects;

  requestBuilder(): RecruitingProjectsRequestBuilder<DeSerializersT> {
    return new RecruitingProjectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RecruitingProjects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RecruitingProjects<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RecruitingProjects<DeSerializersT>,
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
    typeof RecruitingProjects,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RecruitingProjects,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITMENT_PROJECT: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUISITION_APPROVED_ON: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_DEADLINE: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_STATUS: EnumField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      HrmRecruitingStatus,
      true,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_OPENINGS: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ESTIMATED_START_DATE: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECRUITER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIRING_MANAGER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_ON_EMPLOYE_SELF_SERVICE: EnumField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLOSE_DATE: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_AD_TEXT: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPEN_DATE: OrderableEdmTypeField<
      RecruitingProjects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hiringManagerWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HIRING_MANAGER_WORKER: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recruiterWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITER_WORKER: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omOperatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_OPERATING_UNIT: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link alternateWorkerContact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ALTERNATE_WORKER_CONTACT: OneToOneLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingMedia} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_MEDIA: OneToManyLink<
      RecruitingProjects<DeSerializersT>,
      DeSerializersT,
      RecruitingMediasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RecruitingProjects<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recruitmentProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITMENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'RecruitmentProject',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requisitionApprovedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_APPROVED_ON: fieldBuilder.buildEdmTypeField(
          'RequisitionApprovedOn',
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
         * Static representation of the {@link applicationDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_DEADLINE: fieldBuilder.buildEdmTypeField(
          'ApplicationDeadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STATUS: fieldBuilder.buildEnumField(
          'ProjectStatus',
          HrmRecruitingStatus,
          true
        ),
        /**
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link alternativeContactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'AlternativeContactPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfOpenings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_OPENINGS: fieldBuilder.buildEdmTypeField(
          'NumberOfOpenings',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link estimatedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_START_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link recruiterPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'RecruiterPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hiringManagerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRING_MANAGER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'HiringManagerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayOnEmployeSelfService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ON_EMPLOYE_SELF_SERVICE: fieldBuilder.buildEnumField(
          'DisplayOnEmployeSelfService',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link closeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSE_DATE: fieldBuilder.buildEdmTypeField(
          'CloseDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobAdText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_AD_TEXT: fieldBuilder.buildEdmTypeField(
          'JobAdText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link openDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_DATE: fieldBuilder.buildEdmTypeField(
          'OpenDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RecruitingProjects)
      };
    }

    return this._schema;
  }
}
