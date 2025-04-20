/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseTypeNotes } from './CourseTypeNotes';
import { CourseTypeNotesRequestBuilder } from './CourseTypeNotesRequestBuilder';
import { CourseTypesApi } from './CourseTypesApi';
import { HrmCourseNotesType } from './HrmCourseNotesType';
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
export class CourseTypeNotesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseTypeNotes<DeSerializersT>, DeSerializersT>
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
  ): CourseTypeNotesApi<DeSerializersT> {
    return new CourseTypeNotesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeNotes<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CourseTypesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      COURSE_TYPE: new OneToOneLink('CourseType', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CourseTypeNotes;

  requestBuilder(): CourseTypeNotesRequestBuilder<DeSerializersT> {
    return new CourseTypeNotesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseTypeNotes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseTypeNotes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CourseTypeNotes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CourseTypeNotes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseTypeNotes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COURSE_TYPE_ID: OrderableEdmTypeField<
      CourseTypeNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTES_TYPE: EnumField<
      CourseTypeNotes<DeSerializers>,
      DeSerializersT,
      HrmCourseNotesType,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      CourseTypeNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeNotes<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseTypeNotes<DeSerializers>>;
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
         * Static representation of the {@link notesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES_TYPE: fieldBuilder.buildEnumField(
          'NotesType',
          HrmCourseNotesType,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseTypeNotes)
      };
    }

    return this._schema;
  }
}
