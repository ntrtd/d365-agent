/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentTerms } from './EmploymentTerms';
import { EmploymentTermsRequestBuilder } from './EmploymentTermsRequestBuilder';
import { EmploymentsV2Api } from './EmploymentsV2Api';
import { AgreementTermsApi } from './AgreementTermsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EmploymentTermsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmploymentTerms<DeSerializersT>, DeSerializersT>
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
  ): EmploymentTermsApi<DeSerializersT> {
    return new EmploymentTermsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      EmploymentTerms<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_TERM: OneToOneLink<
      EmploymentTerms<DeSerializersT>,
      DeSerializersT,
      AgreementTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmploymentsV2Api<DeSerializersT>,
      AgreementTermsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYMENT: new OneToOneLink('Employment', this, linkedApis[0]),
      AGREEMENT_TERM: new OneToOneLink('AgreementTerm', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = EmploymentTerms;

  requestBuilder(): EmploymentTermsRequestBuilder<DeSerializersT> {
    return new EmploymentTermsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmploymentTerms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmploymentTerms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmploymentTerms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmploymentTerms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmploymentTerms,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGREEMENT_TERM_ID: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      EmploymentTerms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      EmploymentTerms<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link agreementTerm} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AGREEMENT_TERM: OneToOneLink<
      EmploymentTerms<DeSerializersT>,
      DeSerializersT,
      AgreementTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmploymentTerms<DeSerializers>>;
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
         * Static representation of the {@link agreementTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_TERM_ID: fieldBuilder.buildEdmTypeField(
          'AgreementTermId',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmploymentTerms)
      };
    }

    return this._schema;
  }
}
