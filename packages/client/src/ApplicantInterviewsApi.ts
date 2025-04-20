/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicantInterviews } from './ApplicantInterviews';
import { ApplicantInterviewsRequestBuilder } from './ApplicantInterviewsRequestBuilder';
import { HrmInterviewStatus } from './HrmInterviewStatus';
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
export class ApplicantInterviewsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicantInterviews<DeSerializersT>, DeSerializersT>
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
  ): ApplicantInterviewsApi<DeSerializersT> {
    return new ApplicantInterviewsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicantInterviews;

  requestBuilder(): ApplicantInterviewsRequestBuilder<DeSerializersT> {
    return new ApplicantInterviewsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicantInterviews<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicantInterviews<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApplicantInterviews<DeSerializersT>,
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
    typeof ApplicantInterviews,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicantInterviews,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HRM_APPLICATION_ID: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RECRUITER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      HrmInterviewStatus,
      true,
      true
    >;
    INTERVIEW_LOCATION: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIR_PERSON_FK_PARTY_NUMBER: OrderableEdmTypeField<
      ApplicantInterviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicantInterviews<DeSerializers>>;
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
         * Static representation of the {@link hrmApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HRM_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'hrmApplicationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link start} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START: fieldBuilder.buildEdmTypeField(
          'Start',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link end} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END: fieldBuilder.buildEdmTypeField('End', 'Edm.DateTimeOffset', false),
        /**
         * Static representation of the {@link recruiterPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'Recruiter_PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('status', HrmInterviewStatus, true),
        /**
         * Static representation of the {@link interviewLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVIEW_LOCATION: fieldBuilder.buildEdmTypeField(
          'interviewLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dirPersonFkPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIR_PERSON_FK_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'DirPerson_FK_PartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApplicantInterviews)
      };
    }

    return this._schema;
  }
}
