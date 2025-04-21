/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseTypes } from './CourseTypes';
import { CourseTypesRequestBuilder } from './CourseTypesRequestBuilder';
import { CourseTypeNotesApi } from './CourseTypeNotesApi';
import { CourseGroupsApi } from './CourseGroupsApi';
import { CourseTypeCertificateProfilesApi } from './CourseTypeCertificateProfilesApi';
import { CourseTypeSkillProfilesApi } from './CourseTypeSkillProfilesApi';
import { CourseTypeEducationProfilesApi } from './CourseTypeEducationProfilesApi';
import { CourseTablesApi } from './CourseTablesApi';
import { CourseTypeDefaultDimensionsApi } from './CourseTypeDefaultDimensionsApi';
import { CoursesApi } from './CoursesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CourseTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseTypes<DeSerializersT>, DeSerializersT>
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
  ): CourseTypesApi<DeSerializersT> {
    return new CourseTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_NOTES: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_GROUP: OneToOneLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeCertificateProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_CERTIFICATE_PROFILE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeCertificateProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeEducationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_EDUCATION_PROFILE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeEducationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TABLE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_DEFAULT_DIMENSION: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CourseTypeNotesApi<DeSerializersT>,
      CourseGroupsApi<DeSerializersT>,
      CourseTypeCertificateProfilesApi<DeSerializersT>,
      CourseTypeSkillProfilesApi<DeSerializersT>,
      CourseTypeEducationProfilesApi<DeSerializersT>,
      CourseTablesApi<DeSerializersT>,
      CourseTypeDefaultDimensionsApi<DeSerializersT>,
      CoursesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COURSE_TYPE_NOTES: new OneToManyLink(
        'CourseTypeNotes',
        this,
        linkedApis[0]
      ),
      COURSE_GROUP: new OneToOneLink('CourseGroup', this, linkedApis[1]),
      COURSE_TYPE_CERTIFICATE_PROFILE: new OneToManyLink(
        'CourseTypeCertificateProfile',
        this,
        linkedApis[2]
      ),
      COURSE_TYPE_SKILL_PROFILE: new OneToManyLink(
        'CourseTypeSkillProfile',
        this,
        linkedApis[3]
      ),
      COURSE_TYPE_EDUCATION_PROFILE: new OneToManyLink(
        'CourseTypeEducationProfile',
        this,
        linkedApis[4]
      ),
      COURSE_TABLE: new OneToManyLink('CourseTable', this, linkedApis[5]),
      COURSE_TYPE_DEFAULT_DIMENSION: new OneToManyLink(
        'CourseTypeDefaultDimension',
        this,
        linkedApis[6]
      ),
      COURSE: new OneToManyLink('Course', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = CourseTypes;

  requestBuilder(): CourseTypesRequestBuilder<DeSerializersT> {
    return new CourseTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CourseTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CourseTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COURSE_TYPE: OrderableEdmTypeField<
      CourseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      CourseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_EMPLOYEE_SELF_REGISTRATION: EnumField<
      CourseTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MINIMUM_NUMBER_OF_PARTICIPANTS: OrderableEdmTypeField<
      CourseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CourseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_DAYS: OrderableEdmTypeField<
      CourseTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeNotes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_NOTES: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeNotesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_GROUP: OneToOneLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeCertificateProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_CERTIFICATE_PROFILE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeCertificateProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeSkillProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_SKILL_PROFILE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeSkillProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeEducationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_EDUCATION_PROFILE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeEducationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TABLE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeDefaultDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_DEFAULT_DIMENSION: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeDefaultDimensionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseTypes<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link courseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TYPE: fieldBuilder.buildEdmTypeField(
          'CourseType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField('GroupId', 'Edm.String', true),
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
         * Static representation of the {@link minimumNumberOfParticipants} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_NUMBER_OF_PARTICIPANTS: fieldBuilder.buildEdmTypeField(
          'MinimumNumberOfParticipants',
          'Edm.Int32',
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
         * Static representation of the {@link numberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'NumberOfDays',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseTypes)
      };
    }

    return this._schema;
  }
}
