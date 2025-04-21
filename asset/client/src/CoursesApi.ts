/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Courses } from './Courses';
import { CoursesRequestBuilder } from './CoursesRequestBuilder';
import { CourseParticipantsApi } from './CourseParticipantsApi';
import { CourseLocationHotelsApi } from './CourseLocationHotelsApi';
import { CourseParticipantsV2Api } from './CourseParticipantsV2Api';
import { PersonCoursesApi } from './PersonCoursesApi';
import { CourseRoomsApi } from './CourseRoomsApi';
import { CourseLocationsApi } from './CourseLocationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { CourseTypesApi } from './CourseTypesApi';
import { HrmCourseSetup } from './HrmCourseSetup';
import { NoYes } from './NoYes';
import { HrmCourseRequiredForAttendees } from './HrmCourseRequiredForAttendees';
import { HrmCourseTableStatus } from './HrmCourseTableStatus';
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
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CoursesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Courses<DeSerializersT>, DeSerializersT>
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
  ): CoursesApi<DeSerializersT> {
    return new CoursesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANT: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseLocationHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION_HOTEL: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseLocationHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANT_V_2: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCourse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COURSE: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      PersonCoursesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseRoom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOM: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCourseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_COURSE_LOCATION: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CourseParticipantsApi<DeSerializersT>,
      CourseLocationHotelsApi<DeSerializersT>,
      CourseParticipantsV2Api<DeSerializersT>,
      PersonCoursesApi<DeSerializersT>,
      CourseRoomsApi<DeSerializersT>,
      CourseLocationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      CourseTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COURSE_PARTICIPANT: new OneToManyLink(
        'CourseParticipant',
        this,
        linkedApis[0]
      ),
      COURSE_LOCATION_HOTEL: new OneToManyLink(
        'CourseLocationHotel',
        this,
        linkedApis[1]
      ),
      COURSE_PARTICIPANT_V_2: new OneToManyLink(
        'CourseParticipantV2',
        this,
        linkedApis[2]
      ),
      PERSON_COURSE: new OneToManyLink('PersonCourse', this, linkedApis[3]),
      COURSE_ROOM: new OneToOneLink('CourseRoom', this, linkedApis[4]),
      RELATED_COURSE_LOCATION: new OneToOneLink(
        'RelatedCourseLocation',
        this,
        linkedApis[5]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[6]),
      COURSE_TYPE: new OneToOneLink('CourseType', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = Courses;

  requestBuilder(): CoursesRequestBuilder<DeSerializersT> {
    return new CoursesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Courses<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Courses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Courses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Courses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Courses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_DESCRIPTION: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_TYPE_ID: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_LINK: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_SUBJECTS: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETUP: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      HrmCourseSetup,
      true,
      true
    >;
    COST_FOR_PARTICIPANT: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAX_PARTICIPANTS: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COST_FOR_COURSE: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MIN_PARTICIPANTS: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_EMPLOYEE_SELF_REGISTRATION: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_ATTENDEES: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      HrmCourseRequiredForAttendees,
      true,
      true
    >;
    TARGET_AUDIENCE: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_TITLE: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_STATUS: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      HrmCourseTableStatus,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COURSE_LOCATION: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_DEADLINE: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALLOW_SELF_ATTESTATION: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLASSROOM: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VIRTUAL: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COURSE_OBJECTIVES: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COST_OPTION: EnumField<
      Courses<DeSerializers>,
      DeSerializersT,
      HcmCourseCostOption,
      true,
      true
    >;
    ORGANIZER: OrderableEdmTypeField<
      Courses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANT: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseLocationHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_LOCATION_HOTEL: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseLocationHotelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseParticipantV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_PARTICIPANT_V_2: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseParticipantsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCourse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_COURSE: OneToManyLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      PersonCoursesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseRoom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOM: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCourseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_COURSE_LOCATION: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      Courses<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Courses<DeSerializers>>;
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
         * Static representation of the {@link courseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_STATUS: fieldBuilder.buildEnumField(
          'CourseStatus',
          HrmCourseTableStatus,
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
         * Static representation of the {@link courseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_LOCATION: fieldBuilder.buildEdmTypeField(
          'CourseLocation',
          'Edm.String',
          true
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
         * Static representation of the {@link classroom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSROOM: fieldBuilder.buildEdmTypeField(
          'Classroom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isVirtual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VIRTUAL: fieldBuilder.buildEnumField('IsVirtual', NoYes, true),
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
        /**
         * Static representation of the {@link organizer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZER: fieldBuilder.buildEdmTypeField(
          'Organizer',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Courses)
      };
    }

    return this._schema;
  }
}
