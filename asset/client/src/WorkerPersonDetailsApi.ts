/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerPersonDetails } from './WorkerPersonDetails';
import { WorkerPersonDetailsRequestBuilder } from './WorkerPersonDetailsRequestBuilder';
import { VeteranStatusesApi } from './VeteranStatusesApi';
import { EthnicOriginsApi } from './EthnicOriginsApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { LanguageCodesApi } from './LanguageCodesApi';
import { HcmPersonGender } from './HcmPersonGender';
import { NoYes } from './NoYes';
import { HcmPersonMaritalStatus } from './HcmPersonMaritalStatus';
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
export class WorkerPersonDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerPersonDetails<DeSerializersT>, DeSerializersT>
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
  ): WorkerPersonDetailsApi<DeSerializersT> {
    return new WorkerPersonDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ethnicOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ETHNIC_ORIGIN: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      EthnicOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link languageCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LANGUAGE_CODE: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      LanguageCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      VeteranStatusesApi<DeSerializersT>,
      EthnicOriginsApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      LanguageCodesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VETERAN_STATUS: new OneToOneLink('VeteranStatus', this, linkedApis[0]),
      ETHNIC_ORIGIN: new OneToOneLink('EthnicOrigin', this, linkedApis[1]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[2]),
      LANGUAGE_CODE: new OneToOneLink('LanguageCode', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = WorkerPersonDetails;

  requestBuilder(): WorkerPersonDetailsRequestBuilder<DeSerializersT> {
    return new WorkerPersonDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerPersonDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerPersonDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerPersonDetails<DeSerializersT>,
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
    typeof WorkerPersonDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerPersonDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENDER: EnumField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    NUMBER_OF_DEPENDENTS: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VETERAN_STATUS_ID: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP_COUNTRY_REGION: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_EXPATRIATE_RULING_APPLICABLE: EnumField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ETHNIC_ORIGIN_ID: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISABLED_VERIFICATION_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MOTHER_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPATRIATE_START_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NATIVE_LANGUAGE_ID: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EDUCATION: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARITAL_STATUS: EnumField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      HcmPersonMaritalStatus,
      true,
      true
    >;
    DECEASED_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSON_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY_COUNTRY_REGION: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_BIRTH_CITY: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FATHER_BIRTH_COUNTRY_REGION: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MILITARY_SERVICE_END_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPATRIATE_END_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MILITARY_SERVICE_START_DATE: OrderableEdmTypeField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DISABLED: EnumField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_FULLTIME_STUDENT: EnumField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DISABLED_VETERAN: EnumField<
      WorkerPersonDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link veteranStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VETERAN_STATUS: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      VeteranStatusesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ethnicOrigin} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ETHNIC_ORIGIN: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      EthnicOriginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link languageCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LANGUAGE_CODE: OneToOneLink<
      WorkerPersonDetails<DeSerializersT>,
      DeSerializersT,
      LanguageCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerPersonDetails<DeSerializers>>;
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
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
        /**
         * Static representation of the {@link numberOfDependents} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_DEPENDENTS: fieldBuilder.buildEdmTypeField(
          'NumberOfDependents',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link veteranStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'VeteranStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link citizenshipCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CitizenshipCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isExpatriateRulingApplicable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPATRIATE_RULING_APPLICABLE: fieldBuilder.buildEnumField(
          'IsExpatriateRulingApplicable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ethnicOriginId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNIC_ORIGIN_ID: fieldBuilder.buildEdmTypeField(
          'EthnicOriginId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link disabledVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'DisabledVerificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link motherBirthCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOTHER_BIRTH_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'MotherBirthCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expatriateStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPATRIATE_START_DATE: fieldBuilder.buildEdmTypeField(
          'ExpatriateStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link nativeLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIVE_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'NativeLanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link education} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION: fieldBuilder.buildEdmTypeField(
          'Education',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEnumField(
          'MaritalStatus',
          HcmPersonMaritalStatus,
          true
        ),
        /**
         * Static representation of the {@link deceasedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECEASED_DATE: fieldBuilder.buildEdmTypeField(
          'DeceasedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link personBirthCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'PersonBirthCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationalityCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'NationalityCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personBirthCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_BIRTH_CITY: fieldBuilder.buildEdmTypeField(
          'PersonBirthCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fatherBirthCountryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FATHER_BIRTH_COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'FatherBirthCountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link militaryServiceEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILITARY_SERVICE_END_DATE: fieldBuilder.buildEdmTypeField(
          'MilitaryServiceEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link expatriateEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPATRIATE_END_DATE: fieldBuilder.buildEdmTypeField(
          'ExpatriateEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link militaryServiceStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILITARY_SERVICE_START_DATE: fieldBuilder.buildEdmTypeField(
          'MilitaryServiceStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLED: fieldBuilder.buildEnumField('IsDisabled', NoYes, true),
        /**
         * Static representation of the {@link isFulltimeStudent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FULLTIME_STUDENT: fieldBuilder.buildEnumField(
          'IsFulltimeStudent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link disabledVeteran} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLED_VETERAN: fieldBuilder.buildEnumField(
          'DisabledVeteran',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerPersonDetails)
      };
    }

    return this._schema;
  }
}
