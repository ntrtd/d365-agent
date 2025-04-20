/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssWorkers } from './EssWorkers';
import { EssWorkersRequestBuilder } from './EssWorkersRequestBuilder';
import { EssLeaveTimeOffDatesApi } from './EssLeaveTimeOffDatesApi';
import { EssLeaveRequestHeadersApi } from './EssLeaveRequestHeadersApi';
import { EssWorkerManagerRelationsApi } from './EssWorkerManagerRelationsApi';
import { MssLeaveTimeOffDatesApi } from './MssLeaveTimeOffDatesApi';
import { EssLeaveRequestAssignedHeadersApi } from './EssLeaveRequestAssignedHeadersApi';
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
export class EssWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EssWorkers<DeSerializersT>, DeSerializersT>
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
  ): EssWorkersApi<DeSerializersT> {
    return new EssWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link timeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_OFF_DATES: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link essLeaveRequestHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESS_LEAVE_REQUEST_HEADERS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link submittedLeaveRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBMITTED_LEAVE_REQUESTS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_RELATIONS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssWorkerManagerRelationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link managerRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER_RELATIONS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssWorkerManagerRelationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportsTimeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TIME_OFF_DATES: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      MssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link submittedLeaveRequestAssignedHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBMITTED_LEAVE_REQUEST_ASSIGNED_HEADERS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestAssignedHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EssLeaveTimeOffDatesApi<DeSerializersT>,
      EssLeaveRequestHeadersApi<DeSerializersT>,
      EssLeaveRequestHeadersApi<DeSerializersT>,
      EssWorkerManagerRelationsApi<DeSerializersT>,
      EssWorkerManagerRelationsApi<DeSerializersT>,
      MssLeaveTimeOffDatesApi<DeSerializersT>,
      EssLeaveRequestAssignedHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TIME_OFF_DATES: new OneToManyLink('TimeOffDates', this, linkedApis[0]),
      ESS_LEAVE_REQUEST_HEADERS: new OneToManyLink(
        'EssLeaveRequestHeaders',
        this,
        linkedApis[1]
      ),
      SUBMITTED_LEAVE_REQUESTS: new OneToManyLink(
        'SubmittedLeaveRequests',
        this,
        linkedApis[2]
      ),
      REPORT_RELATIONS: new OneToManyLink(
        'ReportRelations',
        this,
        linkedApis[3]
      ),
      MANAGER_RELATIONS: new OneToManyLink(
        'ManagerRelations',
        this,
        linkedApis[4]
      ),
      REPORTS_TIME_OFF_DATES: new OneToManyLink(
        'ReportsTimeOffDates',
        this,
        linkedApis[5]
      ),
      SUBMITTED_LEAVE_REQUEST_ASSIGNED_HEADERS: new OneToManyLink(
        'SubmittedLeaveRequestAssignedHeaders',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = EssWorkers;

  requestBuilder(): EssWorkersRequestBuilder<DeSerializersT> {
    return new EssWorkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EssWorkers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EssWorkers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EssWorkers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EssWorkers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_TYPE: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SEQUENCE_DISPLAY_AS: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_SUFFIX: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_SUFFIX: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFESSIONAL_TITLE: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AAD_USER_PRINCIPAL_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONAL_TITLE: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AAD_USER_OBJECT_ID: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PHONETIC_FIRST_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KNOWN_AS: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_MIDDLE_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONETIC_LAST_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ALIAS: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      EssWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_OFF_DATES: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link essLeaveRequestHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESS_LEAVE_REQUEST_HEADERS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link submittedLeaveRequests} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBMITTED_LEAVE_REQUESTS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_RELATIONS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssWorkerManagerRelationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link managerRelations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER_RELATIONS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssWorkerManagerRelationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportsTimeOffDates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORTS_TIME_OFF_DATES: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      MssLeaveTimeOffDatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link submittedLeaveRequestAssignedHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBMITTED_LEAVE_REQUEST_ASSIGNED_HEADERS: OneToManyLink<
      EssWorkers<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestAssignedHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EssWorkers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link partyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE: fieldBuilder.buildEdmTypeField(
          'PartyType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameSequenceDisplayAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SEQUENCE_DISPLAY_AS: fieldBuilder.buildEdmTypeField(
          'NameSequenceDisplayAs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'PersonalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
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
         * Static representation of the {@link professionalSuffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_SUFFIX: fieldBuilder.buildEdmTypeField(
          'ProfessionalSuffix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link professionalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFESSIONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'ProfessionalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aadUserPrincipalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AAD_USER_PRINCIPAL_NAME: fieldBuilder.buildEdmTypeField(
          'AadUserPrincipalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personalTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONAL_TITLE: fieldBuilder.buildEdmTypeField(
          'PersonalTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aadUserObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AAD_USER_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'AadUserObjectId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link phoneticFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'LastNamePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link knownAs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KNOWN_AS: fieldBuilder.buildEdmTypeField('KnownAs', 'Edm.String', true),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link phoneticMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticMiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneticLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONETIC_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'PhoneticLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ALIAS: fieldBuilder.buildEdmTypeField(
          'NameAlias',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssWorkers)
      };
    }

    return this._schema;
  }
}
