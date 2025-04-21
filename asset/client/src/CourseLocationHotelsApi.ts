/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseLocationHotels } from './CourseLocationHotels';
import { CourseLocationHotelsRequestBuilder } from './CourseLocationHotelsRequestBuilder';
import { CoursesApi } from './CoursesApi';
import { CourseLocationsApi } from './CourseLocationsApi';
import { CourseHotelsApi } from './CourseHotelsApi';
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
export class CourseLocationHotelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseLocationHotels<DeSerializersT>, DeSerializersT>
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
  ): CourseLocationHotelsApi<DeSerializersT> {
    return new CourseLocationHotelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToOneLink<
      CourseLocationHotels<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCourseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_COURSE_LOCATION: OneToOneLink<
      CourseLocationHotels<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_HOTEL: OneToOneLink<
      CourseLocationHotels<DeSerializersT>,
      DeSerializersT,
      CourseHotelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CoursesApi<DeSerializersT>,
      CourseLocationsApi<DeSerializersT>,
      CourseHotelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COURSE: new OneToOneLink('Course', this, linkedApis[0]),
      RELATED_COURSE_LOCATION: new OneToOneLink(
        'RelatedCourseLocation',
        this,
        linkedApis[1]
      ),
      COURSE_HOTEL: new OneToOneLink('CourseHotel', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = CourseLocationHotels;

  requestBuilder(): CourseLocationHotelsRequestBuilder<DeSerializersT> {
    return new CourseLocationHotelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseLocationHotels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseLocationHotels<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CourseLocationHotels<DeSerializersT>,
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
    typeof CourseLocationHotels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseLocationHotels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseLocationHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      CourseLocationHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_LOCATION: OrderableEdmTypeField<
      CourseLocationHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOTEL: OrderableEdmTypeField<
      CourseLocationHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      CourseLocationHotels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToOneLink<
      CourseLocationHotels<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedCourseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_COURSE_LOCATION: OneToOneLink<
      CourseLocationHotels<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseHotel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_HOTEL: OneToOneLink<
      CourseLocationHotels<DeSerializersT>,
      DeSerializersT,
      CourseHotelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseLocationHotels<DeSerializers>>;
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
         * Static representation of the {@link courseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_LOCATION: fieldBuilder.buildEdmTypeField(
          'CourseLocation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hotel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOTEL: fieldBuilder.buildEdmTypeField('Hotel', 'Edm.String', false),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseLocationHotels)
      };
    }

    return this._schema;
  }
}
