/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClassroomGroups } from './ClassroomGroups';
import { ClassroomGroupsRequestBuilder } from './ClassroomGroupsRequestBuilder';
import { CourseRoomsApi } from './CourseRoomsApi';
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
export class ClassroomGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ClassroomGroups<DeSerializersT>, DeSerializersT>
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
  ): ClassroomGroupsApi<DeSerializersT> {
    return new ClassroomGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link courseRooms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOMS: OneToManyLink<
      ClassroomGroups<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CourseRoomsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      COURSE_ROOMS: new OneToManyLink('CourseRooms', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ClassroomGroups;

  requestBuilder(): ClassroomGroupsRequestBuilder<DeSerializersT> {
    return new ClassroomGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ClassroomGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ClassroomGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ClassroomGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ClassroomGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClassroomGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ClassroomGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLASSROOM_GROUP_ID: OrderableEdmTypeField<
      ClassroomGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ClassroomGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseRooms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_ROOMS: OneToManyLink<
      ClassroomGroups<DeSerializersT>,
      DeSerializersT,
      CourseRoomsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ClassroomGroups<DeSerializers>>;
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
         * Static representation of the {@link classroomGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSROOM_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ClassroomGroupId',
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
        ALL_FIELDS: new AllFields('*', ClassroomGroups)
      };
    }

    return this._schema;
  }
}
