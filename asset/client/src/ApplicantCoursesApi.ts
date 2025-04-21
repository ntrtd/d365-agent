/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicantCourses } from './ApplicantCourses';
import { ApplicantCoursesRequestBuilder } from './ApplicantCoursesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ApplicantCoursesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicantCourses<DeSerializersT>, DeSerializersT>
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
  ): ApplicantCoursesApi<DeSerializersT> {
    return new ApplicantCoursesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicantCourses;

  requestBuilder(): ApplicantCoursesRequestBuilder<DeSerializersT> {
    return new ApplicantCoursesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicantCourses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicantCourses<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApplicantCourses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApplicantCourses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicantCourses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    APPLICANT_ID: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSES: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COURSE_DATA_AREA_ID: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      ApplicantCourses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicantCourses<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link applicantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT_ID: fieldBuilder.buildEdmTypeField(
          'ApplicantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link courses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSES: fieldBuilder.buildEdmTypeField('Courses', 'Edm.String', false),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link courseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_ID: fieldBuilder.buildEdmTypeField(
          'CourseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link courseDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'CourseDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApplicantCourses)
      };
    }

    return this._schema;
  }
}
