/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SurveyCompanies } from './SurveyCompanies';
import { SurveyCompaniesRequestBuilder } from './SurveyCompaniesRequestBuilder';
import { JobsApi } from './JobsApi';
import { JobCompensationsApi } from './JobCompensationsApi';
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
export class SurveyCompaniesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SurveyCompanies<DeSerializersT>, DeSerializersT>
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
  ): SurveyCompaniesApi<DeSerializersT> {
    return new SurveyCompaniesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      SurveyCompanies<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCompensations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_COMPENSATIONS: OneToManyLink<
      SurveyCompanies<DeSerializersT>,
      DeSerializersT,
      JobCompensationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [JobsApi<DeSerializersT>, JobCompensationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      JOBS: new OneToManyLink('Jobs', this, linkedApis[0]),
      JOB_COMPENSATIONS: new OneToManyLink(
        'JobCompensations',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SurveyCompanies;

  requestBuilder(): SurveyCompaniesRequestBuilder<DeSerializersT> {
    return new SurveyCompaniesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SurveyCompanies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SurveyCompanies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SurveyCompanies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SurveyCompanies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SurveyCompanies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SURVEY_COMPANY_ID: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMS: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      SurveyCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOBS: OneToManyLink<
      SurveyCompanies<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCompensations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_COMPENSATIONS: OneToManyLink<
      SurveyCompanies<DeSerializersT>,
      DeSerializersT,
      JobCompensationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SurveyCompanies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link surveyCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SURVEY_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'SurveyCompanyId',
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
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link internetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMS: fieldBuilder.buildEdmTypeField('SMS', 'Edm.String', true),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SurveyCompanies)
      };
    }

    return this._schema;
  }
}
