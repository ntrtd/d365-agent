/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationDisciplines } from './EducationDisciplines';
import { EducationDisciplinesRequestBuilder } from './EducationDisciplinesRequestBuilder';
import { JobPreferredEducationDisciplinesApi } from './JobPreferredEducationDisciplinesApi';
import { RecruitingRequestEducationsApi } from './RecruitingRequestEducationsApi';
import { JobTemplateEducationDisciplinesApi } from './JobTemplateEducationDisciplinesApi';
import { PersonEducationsApi } from './PersonEducationsApi';
import { CourseTypeEducationProfilesApi } from './CourseTypeEducationProfilesApi';
import { EducationDisciplineGroupsApi } from './EducationDisciplineGroupsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EducationDisciplinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EducationDisciplines<DeSerializersT>, DeSerializersT>
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
  ): EducationDisciplinesApi<DeSerializersT> {
    return new EducationDisciplinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EDUCATION_DISCIPLINES: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobPreferredEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_EDUCATION_DISCIPLINES: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EDUCATION_DISCIPLINES: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobTemplateEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeEducationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_EDUCATION_PROFILE: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      CourseTypeEducationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link educationDisciplineGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE_GROUPS: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      EducationDisciplineGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobPreferredEducationDisciplinesApi<DeSerializersT>,
      RecruitingRequestEducationsApi<DeSerializersT>,
      JobTemplateEducationDisciplinesApi<DeSerializersT>,
      PersonEducationsApi<DeSerializersT>,
      CourseTypeEducationProfilesApi<DeSerializersT>,
      EducationDisciplineGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_PREFERRED_EDUCATION_DISCIPLINES: new OneToManyLink(
        'JobPreferredEducationDisciplines',
        this,
        linkedApis[0]
      ),
      RECRUITING_REQUEST_EDUCATION_DISCIPLINES: new OneToManyLink(
        'RecruitingRequestEducationDisciplines',
        this,
        linkedApis[1]
      ),
      JOB_TEMPLATE_EDUCATION_DISCIPLINES: new OneToManyLink(
        'JobTemplateEducationDisciplines',
        this,
        linkedApis[2]
      ),
      PERSON_EDUCATION: new OneToManyLink(
        'PersonEducation',
        this,
        linkedApis[3]
      ),
      COURSE_TYPE_EDUCATION_PROFILE: new OneToManyLink(
        'CourseTypeEducationProfile',
        this,
        linkedApis[4]
      ),
      EDUCATION_DISCIPLINE_GROUPS: new OneToManyLink(
        'EducationDisciplineGroups',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = EducationDisciplines;

  requestBuilder(): EducationDisciplinesRequestBuilder<DeSerializersT> {
    return new EducationDisciplinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EducationDisciplines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EducationDisciplines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EducationDisciplines<DeSerializersT>,
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
    typeof EducationDisciplines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EducationDisciplines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EDUCATION_DISCIPLINE: OrderableEdmTypeField<
      EducationDisciplines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EducationDisciplines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_EDUCATION_DISCIPLINES: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobPreferredEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link recruitingRequestEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECRUITING_REQUEST_EDUCATION_DISCIPLINES: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      RecruitingRequestEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateEducationDisciplines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_EDUCATION_DISCIPLINES: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      JobTemplateEducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeEducationProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_EDUCATION_PROFILE: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      CourseTypeEducationProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link educationDisciplineGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE_GROUPS: OneToManyLink<
      EducationDisciplines<DeSerializersT>,
      DeSerializersT,
      EducationDisciplineGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EducationDisciplines<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link educationDiscipline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_DISCIPLINE: fieldBuilder.buildEdmTypeField(
          'EducationDiscipline',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EducationDisciplines)
      };
    }

    return this._schema;
  }
}
