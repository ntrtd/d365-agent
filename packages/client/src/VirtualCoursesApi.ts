/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VirtualCourses } from './VirtualCourses';
import { VirtualCoursesRequestBuilder } from './VirtualCoursesRequestBuilder';
import { HrmCourseTableStatus } from './HrmCourseTableStatus';
import { HrmCourseSetup } from './HrmCourseSetup';
import { NoYes } from './NoYes';
import { HrmCourseRequiredForAttendees } from './HrmCourseRequiredForAttendees';
import { HcmCourseCostOption } from './HcmCourseCostOption';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class VirtualCoursesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VirtualCourses<DeSerializersT>, DeSerializersT>
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
  ): VirtualCoursesApi<DeSerializersT> {
    return new VirtualCoursesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VirtualCourses;

  requestBuilder(): VirtualCoursesRequestBuilder<DeSerializersT> {
    return new VirtualCoursesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VirtualCourses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VirtualCourses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VirtualCourses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VirtualCourses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VirtualCourses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_DESCRIPTION: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      HrmCourseTableStatus,
      true,
      true
    >;
    COURSE_TYPE_ID: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_LINK: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_SUBJECTS: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETUP: EnumField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      HrmCourseSetup,
      true,
      true
    >;
    COST_FOR_PARTICIPANT: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAX_PARTICIPANTS: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_FOR_COURSE: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIN_PARTICIPANTS: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_EMPLOYEE_SELF_REGISTRATION: EnumField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_ATTENDEES: EnumField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      HrmCourseRequiredForAttendees,
      true,
      true
    >;
    TARGET_AUDIENCE: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_TITLE: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGISTRATION_DEADLINE: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALLOW_SELF_ATTESTATION: EnumField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COURSE_OBJECTIVES: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_OPTION: EnumField<
      VirtualCourses<DeSerializers>,
      DeSerializersT,
      HcmCourseCostOption,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VirtualCourses<DeSerializers>>;
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
         * Static representation of the {@link courseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_ID: fieldBuilder.buildEdmTypeField(
          'CourseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link courseDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CourseDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW: fieldBuilder.buildEdmTypeField(
          'Workflow',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HrmCourseTableStatus,
          true
        ),
        /**
         * Static representation of the {@link courseTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CourseTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link courseLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_LINK: fieldBuilder.buildEdmTypeField(
          'CourseLink',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link courseSubjects} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_SUBJECTS: fieldBuilder.buildEdmTypeField(
          'CourseSubjects',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link setup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP: fieldBuilder.buildEnumField('Setup', HrmCourseSetup, true),
        /**
         * Static representation of the {@link costForParticipant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_FOR_PARTICIPANT: fieldBuilder.buildEdmTypeField(
          'CostForParticipant',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maxParticipants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_PARTICIPANTS: fieldBuilder.buildEdmTypeField(
          'MaxParticipants',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link costForCourse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_FOR_COURSE: fieldBuilder.buildEdmTypeField(
          'CostForCourse',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minParticipants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_PARTICIPANTS: fieldBuilder.buildEdmTypeField(
          'MinParticipants',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowEmployeeSelfRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPLOYEE_SELF_REGISTRATION: fieldBuilder.buildEnumField(
          'AllowEmployeeSelfRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requireAttendees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_ATTENDEES: fieldBuilder.buildEnumField(
          'RequireAttendees',
          HrmCourseRequiredForAttendees,
          true
        ),
        /**
         * Static representation of the {@link targetAudience} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_AUDIENCE: fieldBuilder.buildEdmTypeField(
          'TargetAudience',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link courseTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TITLE: fieldBuilder.buildEdmTypeField(
          'CourseTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link registrationDeadline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_DEADLINE: fieldBuilder.buildEdmTypeField(
          'RegistrationDeadline',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link allowSelfAttestation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SELF_ATTESTATION: fieldBuilder.buildEnumField(
          'AllowSelfAttestation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link courseObjectives} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_OBJECTIVES: fieldBuilder.buildEdmTypeField(
          'CourseObjectives',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link costOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_OPTION: fieldBuilder.buildEnumField(
          'CostOption',
          HcmCourseCostOption,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VirtualCourses)
      };
    }

    return this._schema;
  }
}
