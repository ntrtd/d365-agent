/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryIncidentFilingAgencies } from './InjuryIncidentFilingAgencies';
import { InjuryIncidentFilingAgenciesRequestBuilder } from './InjuryIncidentFilingAgenciesRequestBuilder';
import { InjuryIncidentsApi } from './InjuryIncidentsApi';
import { InjuryFilingAgenciesApi } from './InjuryFilingAgenciesApi';
import { NoYes } from './NoYes';
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
export class InjuryIncidentFilingAgenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InjuryIncidentFilingAgencies<DeSerializersT>, DeSerializersT>
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
  ): InjuryIncidentFilingAgenciesApi<DeSerializersT> {
    return new InjuryIncidentFilingAgenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncident} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT: OneToOneLink<
      InjuryIncidentFilingAgencies<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryFilingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_FILING_AGENCY: OneToOneLink<
      InjuryIncidentFilingAgencies<DeSerializersT>,
      DeSerializersT,
      InjuryFilingAgenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InjuryIncidentsApi<DeSerializersT>,
      InjuryFilingAgenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INJURY_INCIDENT: new OneToOneLink('InjuryIncident', this, linkedApis[0]),
      INJURY_FILING_AGENCY: new OneToOneLink(
        'InjuryFilingAgency',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = InjuryIncidentFilingAgencies;

  requestBuilder(): InjuryIncidentFilingAgenciesRequestBuilder<DeSerializersT> {
    return new InjuryIncidentFilingAgenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryIncidentFilingAgencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InjuryIncidentFilingAgencies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InjuryIncidentFilingAgencies<DeSerializersT>,
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
    typeof InjuryIncidentFilingAgencies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryIncidentFilingAgencies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CASE_NUMBER: OrderableEdmTypeField<
      InjuryIncidentFilingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FILING_AGENCY_ID: OrderableEdmTypeField<
      InjuryIncidentFilingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      InjuryIncidentFilingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENCY_WAS_NOTIFIED: EnumField<
      InjuryIncidentFilingAgencies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_SUBMIT_DATE_TIME: OrderableEdmTypeField<
      InjuryIncidentFilingAgencies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncident} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT: OneToOneLink<
      InjuryIncidentFilingAgencies<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryFilingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_FILING_AGENCY: OneToOneLink<
      InjuryIncidentFilingAgencies<DeSerializersT>,
      DeSerializersT,
      InjuryFilingAgenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryIncidentFilingAgencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link caseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CaseNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link filingAgencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILING_AGENCY_ID: fieldBuilder.buildEdmTypeField(
          'FilingAgencyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agencyWasNotified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENCY_WAS_NOTIFIED: fieldBuilder.buildEnumField(
          'AgencyWasNotified',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportSubmitDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_SUBMIT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ReportSubmitDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InjuryIncidentFilingAgencies)
      };
    }

    return this._schema;
  }
}
