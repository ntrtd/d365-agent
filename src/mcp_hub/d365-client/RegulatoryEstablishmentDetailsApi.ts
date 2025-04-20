/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegulatoryEstablishmentDetails } from './RegulatoryEstablishmentDetails';
import { RegulatoryEstablishmentDetailsRequestBuilder } from './RegulatoryEstablishmentDetailsRequestBuilder';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { RegulatoryEstablishmentsApi } from './RegulatoryEstablishmentsApi';
import { EmploymentsV2Api } from './EmploymentsV2Api';
import { EmploymentsApi } from './EmploymentsApi';
import { EmploymentsPerCompanyApi } from './EmploymentsPerCompanyApi';
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
export class RegulatoryEstablishmentDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RegulatoryEstablishmentDetails<DeSerializersT>, DeSerializersT>
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
  ): RegulatoryEstablishmentDetailsApi<DeSerializersT> {
    return new RegulatoryEstablishmentDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_V_2: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentPerCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_PER_COMPANY: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsPerCompanyApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LegalEntitiesApi<DeSerializersT>,
      RegulatoryEstablishmentsApi<DeSerializersT>,
      EmploymentsV2Api<DeSerializersT>,
      EmploymentsApi<DeSerializersT>,
      EmploymentsPerCompanyApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[0]),
      REGULATORY_ESTABLISHMENT: new OneToOneLink(
        'RegulatoryEstablishment',
        this,
        linkedApis[1]
      ),
      EMPLOYMENT_V_2: new OneToOneLink('EmploymentV2', this, linkedApis[2]),
      EMPLOYMENT: new OneToOneLink('Employment', this, linkedApis[3]),
      EMPLOYMENT_PER_COMPANY: new OneToOneLink(
        'EmploymentPerCompany',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = RegulatoryEstablishmentDetails;

  requestBuilder(): RegulatoryEstablishmentDetailsRequestBuilder<DeSerializersT> {
    return new RegulatoryEstablishmentDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RegulatoryEstablishmentDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RegulatoryEstablishmentDetails<DeSerializersT>,
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
    typeof RegulatoryEstablishmentDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegulatoryEstablishmentDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGULATORY_ESTABLISHMENT_ID: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDUSTRY_DESCRIPTION: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_NUMBER: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_HEADQUARTER: EnumField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYER_IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAICS_CODE: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_NUMBER: OrderableEdmTypeField<
      RegulatoryEstablishmentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulatoryEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATORY_ESTABLISHMENT: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_V_2: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentPerCompany} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_PER_COMPANY: OneToOneLink<
      RegulatoryEstablishmentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsPerCompanyApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RegulatoryEstablishmentDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link regulatoryEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATORY_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'RegulatoryEstablishmentId',
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
         * Static representation of the {@link industryDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'IndustryDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isHeadquarter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HEADQUARTER: fieldBuilder.buildEnumField(
          'IsHeadquarter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link employerIdentificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'EmployerIdentificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link naicsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAICS_CODE: fieldBuilder.buildEdmTypeField(
          'NAICSCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'UnitNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegulatoryEstablishmentDetails)
      };
    }

    return this._schema;
  }
}
