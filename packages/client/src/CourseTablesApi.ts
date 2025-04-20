/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseTables } from './CourseTables';
import { CourseTablesRequestBuilder } from './CourseTablesRequestBuilder';
import { CourseRoomsApi } from './CourseRoomsApi';
import { CourseLocationsApi } from './CourseLocationsApi';
import { CourseTypesApi } from './CourseTypesApi';
import { CourseInstructorsApi } from './CourseInstructorsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { HrmCourseSetup } from './HrmCourseSetup';
import { NoYes } from './NoYes';
import { HrmCourseTableStatus } from './HrmCourseTableStatus';
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
export class CourseTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseTables<DeSerializersT>, DeSerializersT>
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
  ): CourseTablesApi<DeSerializersT> {
    return new CourseTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link courseRoom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOM: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCourseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_COURSE_LOCATION: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseInstructor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_INSTRUCTOR: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseInstructorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CourseRoomsApi<DeSerializersT>,
      CourseLocationsApi<DeSerializersT>,
      CourseTypesApi<DeSerializersT>,
      CourseInstructorsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COURSE_ROOM: new OneToOneLink('CourseRoom', this, linkedApis[0]),
      RELATED_COURSE_LOCATION: new OneToOneLink(
        'RelatedCourseLocation',
        this,
        linkedApis[1]
      ),
      COURSE_TYPE: new OneToOneLink('CourseType', this, linkedApis[2]),
      COURSE_INSTRUCTOR: new OneToOneLink(
        'CourseInstructor',
        this,
        linkedApis[3]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = CourseTables;

  requestBuilder(): CourseTablesRequestBuilder<DeSerializersT> {
    return new CourseTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseTables<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CourseTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CourseTables, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SETUP: EnumField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      HrmCourseSetup,
      true,
      true
    >;
    COURSES: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_EMPLOYEE_SELF_REGISTRATION: EnumField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REGISTRATION_DEADLINE: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLASSROOM: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAX_ATTENDEES: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_NUMBER_OF_PARTICIPANTS: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COURSE_LOCATION: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_TYPE_ID: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTRUCTOR_ID: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COURSE_STATUS: EnumField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      HrmCourseTableStatus,
      true,
      true
    >;
    ORGANIZER: OrderableEdmTypeField<
      CourseTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseRoom} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOM: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCourseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_COURSE_LOCATION: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseInstructor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_INSTRUCTOR: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      CourseInstructorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CourseTables<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseTables<DeSerializers>>;
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
         * Static representation of the {@link setup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP: fieldBuilder.buildEnumField('Setup', HrmCourseSetup, true),
        /**
         * Static representation of the {@link courses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSES: fieldBuilder.buildEdmTypeField('Courses', 'Edm.String', true),
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
         * Static representation of the {@link allowEmployeeSelfRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPLOYEE_SELF_REGISTRATION: fieldBuilder.buildEnumField(
          'AllowEmployeeSelfRegistration',
          NoYes,
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
         * Static representation of the {@link classroom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSROOM: fieldBuilder.buildEdmTypeField(
          'Classroom',
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
         * Static representation of the {@link maxAttendees} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ATTENDEES: fieldBuilder.buildEdmTypeField(
          'MaxAttendees',
          'Edm.Int32',
          false
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link minimumNumberOfParticipants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_NUMBER_OF_PARTICIPANTS: fieldBuilder.buildEdmTypeField(
          'MinimumNumberOfParticipants',
          'Edm.Int32',
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
         * Static representation of the {@link courseTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CourseTypeId',
          'Edm.String',
          true
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
         * Static representation of the {@link instructorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTOR_ID: fieldBuilder.buildEdmTypeField(
          'InstructorId',
          'Edm.Int64',
          false
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
        ALL_FIELDS: new AllFields('*', CourseTables)
      };
    }

    return this._schema;
  }
}
