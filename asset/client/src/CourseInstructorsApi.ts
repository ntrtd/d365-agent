/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseInstructors } from './CourseInstructors';
import { CourseInstructorsRequestBuilder } from './CourseInstructorsRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { CourseLocationsApi } from './CourseLocationsApi';
import { CourseTablesApi } from './CourseTablesApi';
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
export class CourseInstructorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseInstructors<DeSerializersT>, DeSerializersT>
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
  ): CourseInstructorsApi<DeSerializersT> {
    return new CourseInstructorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      CourseInstructors<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CourseInstructors<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseInstructors<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeopleApi<DeSerializersT>,
      CourseLocationsApi<DeSerializersT>,
      CourseTablesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      LOCATION: new OneToOneLink('Location', this, linkedApis[1]),
      COURSE: new OneToManyLink('Course', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = CourseInstructors;

  requestBuilder(): CourseInstructorsRequestBuilder<DeSerializersT> {
    return new CourseInstructorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseInstructors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseInstructors<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseInstructors<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CourseInstructors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseInstructors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseInstructors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON_ID: OrderableEdmTypeField<
      CourseInstructors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_LOCATION: OrderableEdmTypeField<
      CourseInstructors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      CourseInstructors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      CourseInstructors<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CourseInstructors<DeSerializersT>,
      DeSerializersT,
      CourseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToManyLink<
      CourseInstructors<DeSerializersT>,
      DeSerializersT,
      CourseTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseInstructors<DeSerializers>>;
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
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PersonId',
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
          true
        ),
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
        ALL_FIELDS: new AllFields('*', CourseInstructors)
      };
    }

    return this._schema;
  }
}
