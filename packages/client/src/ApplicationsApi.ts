/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Applications } from './Applications';
import { ApplicationsRequestBuilder } from './ApplicationsRequestBuilder';
import { ApplicantsApi } from './ApplicantsApi';
import { JobsApi } from './JobsApi';
import { DepartmentsApi } from './DepartmentsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { WorkersApi } from './WorkersApi';
import { MediaApi } from './MediaApi';
import { HrmApplicationStatus } from './HrmApplicationStatus';
import { HrmApplicantRating } from './HrmApplicantRating';
import { HrmApplicationBasketCreatedSource } from './HrmApplicationBasketCreatedSource';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';
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
export class ApplicationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Applications<DeSerializersT>, DeSerializersT>
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
  ): ApplicationsApi<DeSerializersT> {
    return new ApplicationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link hcmApplicant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_APPLICANT: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hiringManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HIRING_MANAGER: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceMedia} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_MEDIA: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      MediaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApplicantsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      MediaApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      HCM_APPLICANT: new OneToOneLink('HcmApplicant', this, linkedApis[0]),
      JOB: new OneToOneLink('Job', this, linkedApis[1]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[2]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[3]),
      HIRING_MANAGER: new OneToOneLink('HiringManager', this, linkedApis[4]),
      SOURCE_MEDIA: new OneToOneLink('SourceMedia', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = Applications;

  requestBuilder(): ApplicationsRequestBuilder<DeSerializersT> {
    return new ApplicationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Applications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Applications<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Applications<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Applications, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Applications, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRAVEL_COST: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OTHER_COST: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_OF_RECEIPT: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEPARTMENT_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      Applications<DeSerializers>,
      DeSerializersT,
      HrmApplicationStatus,
      true,
      true
    >;
    RECRUITMENT_PROJECT: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICANT_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEDIA: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING: EnumField<
      Applications<DeSerializers>,
      DeSerializersT,
      HrmApplicantRating,
      true,
      true
    >;
    EXPIRE_DATE: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_SOURCE: EnumField<
      Applications<DeSerializers>,
      DeSerializersT,
      HrmApplicationBasketCreatedSource,
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_ACTION: EnumField<
      Applications<DeSerializers>,
      DeSerializersT,
      HrmApplicationCorrespondanceAction,
      true,
      true
    >;
    START_DATE_AND_TIME: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LODGING_COST: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hcmApplicant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HCM_APPLICANT: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hiringManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HIRING_MANAGER: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceMedia} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_MEDIA: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      MediaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Applications<DeSerializers>>;
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
         * Static representation of the {@link application} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION: fieldBuilder.buildEdmTypeField(
          'Application',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link travelCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAVEL_COST: fieldBuilder.buildEdmTypeField(
          'TravelCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link otherCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_COST: fieldBuilder.buildEdmTypeField(
          'OtherCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dateOfReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_RECEIPT: fieldBuilder.buildEdmTypeField(
          'DateOfReceipt',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link departmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_ID: fieldBuilder.buildEdmTypeField(
          'DepartmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HrmApplicationStatus,
          true
        ),
        /**
         * Static representation of the {@link recruitmentProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITMENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'RecruitmentProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'ContactId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link applicantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT_ID: fieldBuilder.buildEdmTypeField(
          'ApplicantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link media} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDIA: fieldBuilder.buildEdmTypeField('Media', 'Edm.String', true),
        /**
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEnumField('Rating', HrmApplicantRating, true),
        /**
         * Static representation of the {@link expireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRE_DATE: fieldBuilder.buildEdmTypeField(
          'ExpireDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link createdSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_SOURCE: fieldBuilder.buildEnumField(
          'CreatedSource',
          HrmApplicationBasketCreatedSource,
          true
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correspondenceAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_ACTION: fieldBuilder.buildEnumField(
          'CorrespondenceAction',
          HrmApplicationCorrespondanceAction,
          true
        ),
        /**
         * Static representation of the {@link startDateAndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_AND_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateAndTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lodgingCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LODGING_COST: fieldBuilder.buildEdmTypeField(
          'LodgingCost',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Applications)
      };
    }

    return this._schema;
  }
}
