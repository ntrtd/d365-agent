/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseParticipantsV2 } from './CourseParticipantsV2';
import { CourseParticipantsV2RequestBuilder } from './CourseParticipantsV2RequestBuilder';
import { PeopleApi } from './PeopleApi';
import { CoursesApi } from './CoursesApi';
import { HcmApprovalStatus } from './HcmApprovalStatus';
import { HrmCourseAttendeeStatus } from './HrmCourseAttendeeStatus';
import { HrmCourseAttendeeIsRequired } from './HrmCourseAttendeeIsRequired';
import { HcmWorkflowOperation } from './HcmWorkflowOperation';
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
export class CourseParticipantsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CourseParticipantsV2<DeSerializersT>, DeSerializersT>
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
  ): CourseParticipantsV2Api<DeSerializersT> {
    return new CourseParticipantsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dirPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIR_PERSON: OneToOneLink<
      CourseParticipantsV2<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToOneLink<
      CourseParticipantsV2<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PeopleApi<DeSerializersT>, CoursesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIR_PERSON: new OneToOneLink('DirPerson', this, linkedApis[0]),
      COURSE: new OneToOneLink('Course', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CourseParticipantsV2;

  requestBuilder(): CourseParticipantsV2RequestBuilder<DeSerializersT> {
    return new CourseParticipantsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CourseParticipantsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CourseParticipantsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CourseParticipantsV2<DeSerializersT>,
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
    typeof CourseParticipantsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseParticipantsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COURSE_ID: OrderableEdmTypeField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSON_ID: OrderableEdmTypeField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPROVAL_STATUS: EnumField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      HcmApprovalStatus,
      true,
      true
    >;
    PRE_CANCEL_STATUS: EnumField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      HrmCourseAttendeeStatus,
      true,
      true
    >;
    IS_REQUIRED: EnumField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      HrmCourseAttendeeIsRequired,
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGISTERED_DATE: OrderableEdmTypeField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      HrmCourseAttendeeStatus,
      true,
      true
    >;
    WORKFLOW_CONTEXT: EnumField<
      CourseParticipantsV2<DeSerializers>,
      DeSerializersT,
      HcmWorkflowOperation,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dirPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIR_PERSON: OneToOneLink<
      CourseParticipantsV2<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link course} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE: OneToOneLink<
      CourseParticipantsV2<DeSerializersT>,
      DeSerializersT,
      CoursesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseParticipantsV2<DeSerializers>>;
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
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PersonId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEnumField(
          'ApprovalStatus',
          HcmApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link preCancelStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_CANCEL_STATUS: fieldBuilder.buildEnumField(
          'PreCancelStatus',
          HrmCourseAttendeeStatus,
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
         * Static representation of the {@link registeredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTERED_DATE: fieldBuilder.buildEdmTypeField(
          'RegisteredDate',
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
        /**
         * Static representation of the {@link workflowContext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_CONTEXT: fieldBuilder.buildEnumField(
          'WorkflowContext',
          HcmWorkflowOperation,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseParticipantsV2)
      };
    }

    return this._schema;
  }
}
