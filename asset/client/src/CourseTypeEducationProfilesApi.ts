/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseTypeEducationProfiles } from './CourseTypeEducationProfiles';
import { CourseTypeEducationProfilesRequestBuilder } from './CourseTypeEducationProfilesRequestBuilder';
import { EducationDisciplinesApi } from './EducationDisciplinesApi';
import { CourseTypesApi } from './CourseTypesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CourseTypeEducationProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CourseTypeEducationProfiles<DeSerializersT>, DeSerializersT>
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
  ): CourseTypeEducationProfilesApi<DeSerializersT> {
    return new CourseTypeEducationProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      CourseTypeEducationProfiles<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeEducationProfiles<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EducationDisciplinesApi<DeSerializersT>,
      CourseTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EDUCATION_DISCIPLINE: new OneToOneLink(
        'EducationDiscipline',
        this,
        linkedApis[0]
      ),
      COURSE_TYPE: new OneToOneLink('CourseType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CourseTypeEducationProfiles;

  requestBuilder(): CourseTypeEducationProfilesRequestBuilder<DeSerializersT> {
    return new CourseTypeEducationProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseTypeEducationProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CourseTypeEducationProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CourseTypeEducationProfiles<DeSerializersT>,
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
    typeof CourseTypeEducationProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseTypeEducationProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COURSE_TYPE_ID: OrderableEdmTypeField<
      CourseTypeEducationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_ID: OrderableEdmTypeField<
      CourseTypeEducationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      CourseTypeEducationProfiles<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeEducationProfiles<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseTypeEducationProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link courseTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CourseTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link educationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_ID: fieldBuilder.buildEdmTypeField(
          'EducationId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseTypeEducationProfiles)
      };
    }

    return this._schema;
  }
}
