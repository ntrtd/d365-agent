/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentBenefitsElevateHr } from './EmploymentBenefitsElevateHr';
import { EmploymentBenefitsElevateHrRequestBuilder } from './EmploymentBenefitsElevateHrRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class EmploymentBenefitsElevateHrApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EmploymentBenefitsElevateHr<DeSerializersT>, DeSerializersT>
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
  ): EmploymentBenefitsElevateHrApi<DeSerializersT> {
    return new EmploymentBenefitsElevateHrApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmploymentBenefitsElevateHr;

  requestBuilder(): EmploymentBenefitsElevateHrRequestBuilder<DeSerializersT> {
    return new EmploymentBenefitsElevateHrRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmploymentBenefitsElevateHr<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EmploymentBenefitsElevateHr<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EmploymentBenefitsElevateHr<DeSerializersT>,
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
    typeof EmploymentBenefitsElevateHr,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmploymentBenefitsElevateHr,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_VALID_FROM: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_VALID_TO: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EVIDENCE_OF_INSURABILITY_DATE_TIME: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EVIDENCE_OF_INSURABILITY: EnumField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICAL_EXAM: EnumField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICAL_EXAM_DATE_TIME: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MEDICARE_ELIGIBLE: EnumField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ELIGIBILITY_DATE_TIME: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MEDICARE_ELIGIBLE_DATE_TIME: OrderableEdmTypeField<
      EmploymentBenefitsElevateHr<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<EmploymentBenefitsElevateHr<DeSerializers>>;
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
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'Employment_ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_VALID_TO: fieldBuilder.buildEdmTypeField(
          'Employment_ValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link evidenceOfInsurabilityDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVIDENCE_OF_INSURABILITY_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EvidenceOfInsurabilityDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link evidenceOfInsurability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVIDENCE_OF_INSURABILITY: fieldBuilder.buildEnumField(
          'EvidenceOfInsurability',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link physicalExam} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_EXAM: fieldBuilder.buildEnumField('PhysicalExam', NoYes, true),
        /**
         * Static representation of the {@link physicalExamDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_EXAM_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PhysicalExamDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link medicareEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDICARE_ELIGIBLE: fieldBuilder.buildEnumField(
          'MedicareEligible',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link eligibilityDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EligibilityDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link medicareEligibleDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDICARE_ELIGIBLE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'MedicareEligibleDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmploymentBenefitsElevateHr)
      };
    }

    return this._schema;
  }
}
