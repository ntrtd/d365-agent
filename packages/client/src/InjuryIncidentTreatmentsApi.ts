/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryIncidentTreatments } from './InjuryIncidentTreatments';
import { InjuryIncidentTreatmentsRequestBuilder } from './InjuryIncidentTreatmentsRequestBuilder';
import { InjuryTreatmentTypesApi } from './InjuryTreatmentTypesApi';
import { InjuryIncidentsApi } from './InjuryIncidentsApi';
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
export class InjuryIncidentTreatmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryIncidentTreatments<DeSerializersT>, DeSerializersT>
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
  ): InjuryIncidentTreatmentsApi<DeSerializersT> {
    return new InjuryIncidentTreatmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link injuryTreatmentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_TREATMENT_TYPE: OneToOneLink<
      InjuryIncidentTreatments<DeSerializersT>,
      DeSerializersT,
      InjuryTreatmentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncident} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT: OneToOneLink<
      InjuryIncidentTreatments<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      InjuryTreatmentTypesApi<DeSerializersT>,
      InjuryIncidentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      INJURY_TREATMENT_TYPE: new OneToOneLink(
        'InjuryTreatmentType',
        this,
        linkedApis[0]
      ),
      INJURY_INCIDENT: new OneToOneLink('InjuryIncident', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = InjuryIncidentTreatments;

  requestBuilder(): InjuryIncidentTreatmentsRequestBuilder<DeSerializersT> {
    return new InjuryIncidentTreatmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryIncidentTreatments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InjuryIncidentTreatments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InjuryIncidentTreatments<DeSerializersT>,
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
    typeof InjuryIncidentTreatments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryIncidentTreatments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CASE_NUMBER: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMERGENCY_VISIT_REQUIRED: EnumField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TREATMENT_DATE_TIME: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TREATMENT_TYPE_ID: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TREATMENT_DETAILS: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TREATMENT_FACILITY: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERNIGHT_REQUIRED: EnumField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICIAN: OrderableEdmTypeField<
      InjuryIncidentTreatments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryTreatmentType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_TREATMENT_TYPE: OneToOneLink<
      InjuryIncidentTreatments<DeSerializersT>,
      DeSerializersT,
      InjuryTreatmentTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link injuryIncident} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENT: OneToOneLink<
      InjuryIncidentTreatments<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryIncidentTreatments<DeSerializers>>;
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link emergencyVisitRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMERGENCY_VISIT_REQUIRED: fieldBuilder.buildEnumField(
          'EmergencyVisitRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link treatmentDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREATMENT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TreatmentDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link treatmentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREATMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TreatmentTypeId',
          'Edm.String',
          true
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
         * Static representation of the {@link treatmentDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREATMENT_DETAILS: fieldBuilder.buildEdmTypeField(
          'TreatmentDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link treatmentFacility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TREATMENT_FACILITY: fieldBuilder.buildEdmTypeField(
          'TreatmentFacility',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overnightRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERNIGHT_REQUIRED: fieldBuilder.buildEnumField(
          'OvernightRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link physician} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICIAN: fieldBuilder.buildEdmTypeField(
          'Physician',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InjuryIncidentTreatments)
      };
    }

    return this._schema;
  }
}
