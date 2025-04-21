/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentsPerCompany } from './EmploymentsPerCompany';
import { EmploymentsPerCompanyRequestBuilder } from './EmploymentsPerCompanyRequestBuilder';
import { RegulatoryEstablishmentDetailsApi } from './RegulatoryEstablishmentDetailsApi';
import { ReasonCodesApi } from './ReasonCodesApi';
import { WorkersApi } from './WorkersApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EmploymentsPerCompanyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmploymentsPerCompany<DeSerializersT>, DeSerializersT>
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
  ): EmploymentsPerCompanyApi<DeSerializersT> {
    return new EmploymentsPerCompanyApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT_DETAIL: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODES: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulatoryEstablishmentDetailsApi<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATORY_ESTABLISHMENT_DETAIL: new OneToOneLink(
        'RegulatoryEstablishmentDetail',
        this,
        linkedApis[0]
      ),
      REASON_CODES: new OneToOneLink('ReasonCodes', this, linkedApis[1]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[2]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = EmploymentsPerCompany;

  requestBuilder(): EmploymentsPerCompanyRequestBuilder<DeSerializersT> {
    return new EmploymentsPerCompanyRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmploymentsPerCompany<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmploymentsPerCompany<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EmploymentsPerCompany<DeSerializersT>,
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
    typeof EmploymentsPerCompany,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmploymentsPerCompany,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_NOTICE_AMOUNT: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EMPLOYMENT_EMPLOYEE_VALID_FROM: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_EMPLOYEE_VALID_TO: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSITION_REASON_CODE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSITION_DATE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_DATE_WORKED: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSITION_REASON_CODE_NAME: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_NOTICE_AMOUNT: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATORY_ESTABLISHMENT_ID: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_UNIT_OF_NOTICE: EnumField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      HcmUnitOfNotice,
      true,
      true
    >;
    ADJUSTED_WORKER_START_DATE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_START_DATE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROBATION_END_DATE: OrderableEdmTypeField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_TYPE: EnumField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    WORKER_UNIT_OF_NOTICE: EnumField<
      EmploymentsPerCompany<DeSerializers>,
      DeSerializersT,
      HcmUnitOfNotice,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT_DETAIL: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODES: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      EmploymentsPerCompany<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmploymentsPerCompany<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
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
         * Static representation of the {@link workerNoticeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NOTICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WorkerNoticeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link employmentEmployeeValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_EMPLOYEE_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'EmploymentEmployeeValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentEmployeeValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_EMPLOYEE_VALID_TO: fieldBuilder.buildEdmTypeField(
          'EmploymentEmployeeValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transitionReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'TransitionReasonCode',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
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
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_DATE: fieldBuilder.buildEdmTypeField(
          'TransitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lastDateWorked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE_WORKED: fieldBuilder.buildEdmTypeField(
          'LastDateWorked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transitionReasonCodeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_REASON_CODE_NAME: fieldBuilder.buildEdmTypeField(
          'TransitionReasonCodeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employerNoticeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_NOTICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EmployerNoticeAmount',
          'Edm.Int32',
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
         * Static representation of the {@link employerUnitOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_UNIT_OF_NOTICE: fieldBuilder.buildEnumField(
          'EmployerUnitOfNotice',
          HcmUnitOfNotice,
          true
        ),
        /**
         * Static representation of the {@link adjustedWorkerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'AdjustedWorkerStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkerStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link probationEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROBATION_END_DATE: fieldBuilder.buildEdmTypeField(
          'ProbationEndDate',
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
         * Static representation of the {@link workerUnitOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_UNIT_OF_NOTICE: fieldBuilder.buildEnumField(
          'WorkerUnitOfNotice',
          HcmUnitOfNotice,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmploymentsPerCompany)
      };
    }

    return this._schema;
  }
}
