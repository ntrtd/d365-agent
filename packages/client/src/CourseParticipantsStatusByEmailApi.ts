/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseParticipantsStatusByEmail } from './CourseParticipantsStatusByEmail';
import { CourseParticipantsStatusByEmailRequestBuilder } from './CourseParticipantsStatusByEmailRequestBuilder';
import { HrmCourseAttendeeIsRequired } from './HrmCourseAttendeeIsRequired';
import { HrmCourseAttendeeStatus } from './HrmCourseAttendeeStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class CourseParticipantsStatusByEmailApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CourseParticipantsStatusByEmail<DeSerializersT>, DeSerializersT>
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
  ): CourseParticipantsStatusByEmailApi<DeSerializersT> {
    return new CourseParticipantsStatusByEmailApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CourseParticipantsStatusByEmail;

  requestBuilder(): CourseParticipantsStatusByEmailRequestBuilder<DeSerializersT> {
    return new CourseParticipantsStatusByEmailRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CourseParticipantsStatusByEmail<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CourseParticipantsStatusByEmail<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CourseParticipantsStatusByEmail<DeSerializersT>,
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
    typeof CourseParticipantsStatusByEmail,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseParticipantsStatusByEmail,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_EMAIL: OrderableEdmTypeField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REQUIRED: EnumField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      HrmCourseAttendeeIsRequired,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      CourseParticipantsStatusByEmail<DeSerializers>,
      DeSerializersT,
      HrmCourseAttendeeStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CourseParticipantsStatusByEmail<DeSerializers>>;
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
         * Static representation of the {@link userEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_EMAIL: fieldBuilder.buildEdmTypeField(
          'UserEmail',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REQUIRED: fieldBuilder.buildEnumField(
          'IsRequired',
          HrmCourseAttendeeIsRequired,
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HrmCourseAttendeeStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseParticipantsStatusByEmail)
      };
    }

    return this._schema;
  }
}
