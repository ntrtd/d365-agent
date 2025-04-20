/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateTypes } from './CertificateTypes';
import { CertificateTypesRequestBuilder } from './CertificateTypesRequestBuilder';
import { PersonCertificatesApi } from './PersonCertificatesApi';
import { CourseTypeCertificateProfilesApi } from './CourseTypeCertificateProfilesApi';
import { JobTemplateCertificatesApi } from './JobTemplateCertificatesApi';
import { JobPreferredCertificatesApi } from './JobPreferredCertificatesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CertificateTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CertificateTypes<DeSerializersT>, DeSerializersT>
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
  ): CertificateTypesApi<DeSerializersT> {
    return new CertificateTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link personCertificate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_CERTIFICATE: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      PersonCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeCertificateProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_CERTIFICATE_PROFILE: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeCertificateProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_CERTIFICATES: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      JobTemplateCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_CERTIFICATES: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      JobPreferredCertificatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PersonCertificatesApi<DeSerializersT>,
      CourseTypeCertificateProfilesApi<DeSerializersT>,
      JobTemplateCertificatesApi<DeSerializersT>,
      JobPreferredCertificatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON_CERTIFICATE: new OneToManyLink(
        'PersonCertificate',
        this,
        linkedApis[0]
      ),
      COURSE_TYPE_CERTIFICATE_PROFILE: new OneToManyLink(
        'CourseTypeCertificateProfile',
        this,
        linkedApis[1]
      ),
      JOB_TEMPLATE_CERTIFICATES: new OneToManyLink(
        'JobTemplateCertificates',
        this,
        linkedApis[2]
      ),
      JOB_PREFERRED_CERTIFICATES: new OneToManyLink(
        'JobPreferredCertificates',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = CertificateTypes;

  requestBuilder(): CertificateTypesRequestBuilder<DeSerializersT> {
    return new CertificateTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificateTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CertificateTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CertificateTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CertificateTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificateTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CERTIFICATE_TYPE: OrderableEdmTypeField<
      CertificateTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRE_RENEWAL: EnumField<
      CertificateTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CertificateTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personCertificate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_CERTIFICATE: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      PersonCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link courseTypeCertificateProfile} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE_CERTIFICATE_PROFILE: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      CourseTypeCertificateProfilesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobTemplateCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE_CERTIFICATES: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      JobTemplateCertificatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobPreferredCertificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_PREFERRED_CERTIFICATES: OneToManyLink<
      CertificateTypes<DeSerializersT>,
      DeSerializersT,
      JobPreferredCertificatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CertificateTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link certificateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_TYPE: fieldBuilder.buildEdmTypeField(
          'CertificateType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requireRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_RENEWAL: fieldBuilder.buildEnumField(
          'RequireRenewal',
          NoYes,
          true
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
        ALL_FIELDS: new AllFields('*', CertificateTypes)
      };
    }

    return this._schema;
  }
}
