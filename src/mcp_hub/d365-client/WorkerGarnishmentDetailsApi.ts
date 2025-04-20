/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerGarnishmentDetails } from './WorkerGarnishmentDetails';
import { WorkerGarnishmentDetailsRequestBuilder } from './WorkerGarnishmentDetailsRequestBuilder';
import { WorkerEnrolledBenefitsApi } from './WorkerEnrolledBenefitsApi';
import { PayrollGarnishmentTaxLevyType } from './PayrollGarnishmentTaxLevyType';
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
export class WorkerGarnishmentDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerGarnishmentDetails<DeSerializersT>, DeSerializersT>
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
  ): WorkerGarnishmentDetailsApi<DeSerializersT> {
    return new WorkerGarnishmentDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      WorkerGarnishmentDetails<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WorkerEnrolledBenefitsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WORKER_ENROLLED_BENEFIT: new OneToOneLink(
        'WorkerEnrolledBenefit',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WorkerGarnishmentDetails;

  requestBuilder(): WorkerGarnishmentDetailsRequestBuilder<DeSerializersT> {
    return new WorkerGarnishmentDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerGarnishmentDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkerGarnishmentDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkerGarnishmentDetails<DeSerializersT>,
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
    typeof WorkerGarnishmentDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerGarnishmentDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BENEFIT_ID: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENROLLMENT_START: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ENROLLMENT_END: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADMINISTRATIVE_FEE: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GARNISHMENT_TAX_LEVY_TYPE: EnumField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      PayrollGarnishmentTaxLevyType,
      true,
      true
    >;
    CASE_NUMBER: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      WorkerGarnishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerEnrolledBenefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_ENROLLED_BENEFIT: OneToOneLink<
      WorkerGarnishmentDetails<DeSerializersT>,
      DeSerializersT,
      WorkerEnrolledBenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerGarnishmentDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitID',
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
         * Static representation of the {@link enrollmentStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_START: fieldBuilder.buildEdmTypeField(
          'EnrollmentStart',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link enrollmentEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_END: fieldBuilder.buildEdmTypeField(
          'EnrollmentEnd',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link administrativeFee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMINISTRATIVE_FEE: fieldBuilder.buildEdmTypeField(
          'AdministrativeFee',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link garnishmentTaxLevyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GARNISHMENT_TAX_LEVY_TYPE: fieldBuilder.buildEnumField(
          'GarnishmentTaxLevyType',
          PayrollGarnishmentTaxLevyType,
          true
        ),
        /**
         * Static representation of the {@link caseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CaseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerGarnishmentDetails)
      };
    }

    return this._schema;
  }
}
