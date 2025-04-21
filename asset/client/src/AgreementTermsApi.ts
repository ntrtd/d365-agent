/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AgreementTerms } from './AgreementTerms';
import { AgreementTermsRequestBuilder } from './AgreementTermsRequestBuilder';
import { EmploymentTermsApi } from './EmploymentTermsApi';
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
export class AgreementTermsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AgreementTerms<DeSerializersT>, DeSerializersT>
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
  ): AgreementTermsApi<DeSerializersT> {
    return new AgreementTermsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link employmentTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_TERMS: OneToManyLink<
      AgreementTerms<DeSerializersT>,
      DeSerializersT,
      EmploymentTermsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EmploymentTermsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYMENT_TERMS: new OneToManyLink(
        'EmploymentTerms',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AgreementTerms;

  requestBuilder(): AgreementTermsRequestBuilder<DeSerializersT> {
    return new AgreementTermsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AgreementTerms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AgreementTerms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AgreementTerms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AgreementTerms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AgreementTerms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TERMS_OF_EMPLOYMENT: OrderableEdmTypeField<
      AgreementTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AgreementTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentTerms} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_TERMS: OneToManyLink<
      AgreementTerms<DeSerializersT>,
      DeSerializersT,
      EmploymentTermsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AgreementTerms<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link termsOfEmployment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMS_OF_EMPLOYMENT: fieldBuilder.buildEdmTypeField(
          'TermsOfEmployment',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AgreementTerms)
      };
    }

    return this._schema;
  }
}
