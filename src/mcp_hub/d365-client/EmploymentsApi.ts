/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Employments } from './Employments';
import { EmploymentsRequestBuilder } from './EmploymentsRequestBuilder';
import { OnboardingWorkerChecklistHeadersApi } from './OnboardingWorkerChecklistHeadersApi';
import { EmploymentContractorsApi } from './EmploymentContractorsApi';
import { RegulatoryEstablishmentDetailsApi } from './RegulatoryEstablishmentDetailsApi';
import { WorkersApi } from './WorkersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { HcmEmploymentType } from './HcmEmploymentType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EmploymentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Employments<DeSerializersT>, DeSerializersT>
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
  ): EmploymentsApi<DeSerializersT> {
    return new EmploymentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link onboardingChecklists} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARDING_CHECKLISTS: OneToManyLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentContractor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CONTRACTOR: OneToManyLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      EmploymentContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT_DETAIL: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnboardingWorkerChecklistHeadersApi<DeSerializersT>,
      EmploymentContractorsApi<DeSerializersT>,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ONBOARDING_CHECKLISTS: new OneToManyLink(
        'OnboardingChecklists',
        this,
        linkedApis[0]
      ),
      EMPLOYMENT_CONTRACTOR: new OneToManyLink(
        'EmploymentContractor',
        this,
        linkedApis[1]
      ),
      REGULATORY_ESTABLISHMENT_DETAIL: new OneToOneLink(
        'RegulatoryEstablishmentDetail',
        this,
        linkedApis[2]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[3]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4]),
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = Employments;

  requestBuilder(): EmploymentsRequestBuilder<DeSerializersT> {
    return new EmploymentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Employments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Employments<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Employments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Employments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Employments, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATORY_ESTABLISHMENT_ID: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_TYPE: EnumField<
      Employments<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      Employments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onboardingChecklists} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARDING_CHECKLISTS: OneToManyLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      OnboardingWorkerChecklistHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentContractor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CONTRACTOR: OneToManyLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      EmploymentContractorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT_DETAIL: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      Employments<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Employments<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regulatoryEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATORY_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'RegulatoryEstablishmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_TYPE: fieldBuilder.buildEnumField(
          'WorkerType',
          HcmEmploymentType,
          true
        ),
        /**
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calendarLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'CalendarLegalEntityId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Employments)
      };
    }

    return this._schema;
  }
}
