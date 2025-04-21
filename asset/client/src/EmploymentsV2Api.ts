/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentsV2 } from './EmploymentsV2';
import { EmploymentsV2RequestBuilder } from './EmploymentsV2RequestBuilder';
import { RegulatoryEstablishmentDetailsApi } from './RegulatoryEstablishmentDetailsApi';
import { WorkersApi } from './WorkersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { EmploymentDetailsApi } from './EmploymentDetailsApi';
import { EmploymentTermsApi } from './EmploymentTermsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EmploymentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmploymentsV2<DeSerializersT>, DeSerializersT>
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
  ): EmploymentsV2Api<DeSerializersT> {
    return new EmploymentsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT_DETAIL: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAILS: OneToManyLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_TERMS: OneToManyLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      EmploymentTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulatoryEstablishmentDetailsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>,
      EmploymentDetailsApi<DeSerializersT>,
      EmploymentTermsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATORY_ESTABLISHMENT_DETAIL: new OneToOneLink(
        'RegulatoryEstablishmentDetail',
        this,
        linkedApis[0]
      ),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[2]),
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[3]),
      EMPLOYMENT_DETAILS: new OneToManyLink(
        'EmploymentDetails',
        this,
        linkedApis[4]
      ),
      EMPLOYMENT_TERMS: new OneToManyLink(
        'EmploymentTerms',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = EmploymentsV2;

  requestBuilder(): EmploymentsV2RequestBuilder<DeSerializersT> {
    return new EmploymentsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmploymentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmploymentsV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmploymentsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmploymentsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EmploymentsV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_ID: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATORY_ESTABLISHMENT_ID: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_TYPE: EnumField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EmploymentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT_DETAIL: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAILS: OneToManyLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_TERMS: OneToManyLink<
      EmploymentsV2<DeSerializersT>,
      DeSerializersT,
      EmploymentTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmploymentsV2<DeSerializers>>;
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
         * Static representation of the {@link employmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentId',
          'Edm.String',
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
         * Static representation of the {@link employmentStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentStartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
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
        ALL_FIELDS: new AllFields('*', EmploymentsV2)
      };
    }

    return this._schema;
  }
}
