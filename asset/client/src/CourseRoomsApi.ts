/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseRooms } from './CourseRooms';
import { CourseRoomsRequestBuilder } from './CourseRoomsRequestBuilder';
import { CourseLocationsApi } from './CourseLocationsApi';
import { ClassroomGroupsApi } from './ClassroomGroupsApi';
import { CourseTablesApi } from './CourseTablesApi';
import { CoursesApi } from './CoursesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CourseRoomsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseRooms<DeSerializersT>, DeSerializersT>
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
  ): CourseRoomsApi<DeSerializersT> {
    return new CourseRoomsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link group} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP: OneToOneLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      ClassroomGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TABLE: OneToManyLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CourseLocationsApi<DeSerializersT>,
      ClassroomGroupsApi<DeSerializersT>,
      CourseTablesApi<DeSerializersT>,
      CoursesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOCATION: new OneToOneLink('Location', this, linkedApis[0]),
      GROUP: new OneToOneLink('Group', this, linkedApis[1]),
      COURSE_TABLE: new OneToManyLink('CourseTable', this, linkedApis[2]),
      COURSE: new OneToManyLink('Course', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = CourseRooms;

  requestBuilder(): CourseRoomsRequestBuilder<DeSerializersT> {
    return new CourseRoomsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseRooms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseRooms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseRooms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CourseRooms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CourseRooms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLASSROOM: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAX_ATTENDEES: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COURSE_LOCATION: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_INTENSITY: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLASSROOM_GROUP: OrderableEdmTypeField<
      CourseRooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link group} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP: OneToOneLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      ClassroomGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TABLE: OneToManyLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseRooms<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseRooms<DeSerializers>>;
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
         * Static representation of the {@link classroom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSROOM: fieldBuilder.buildEdmTypeField(
          'Classroom',
          'Edm.String',
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
         * Static representation of the {@link courseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_LOCATION: fieldBuilder.buildEdmTypeField(
          'CourseLocation',
          'Edm.String',
          true
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
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link useIntensity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_INTENSITY: fieldBuilder.buildEdmTypeField(
          'UseIntensity',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link classroomGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSROOM_GROUP: fieldBuilder.buildEdmTypeField(
          'ClassroomGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseRooms)
      };
    }

    return this._schema;
  }
}
