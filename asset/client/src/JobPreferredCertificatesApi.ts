/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobPreferredCertificates } from './JobPreferredCertificates';
import { JobPreferredCertificatesRequestBuilder } from './JobPreferredCertificatesRequestBuilder';
import { CertificateTypesApi } from './CertificateTypesApi';
import { JobsApi } from './JobsApi';
import { HrmSkillImportance } from './HrmSkillImportance';
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
export class JobPreferredCertificatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobPreferredCertificates<DeSerializersT>, DeSerializersT>
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
  ): JobPreferredCertificatesApi<DeSerializersT> {
    return new JobPreferredCertificatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      JobPreferredCertificates<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredCertificates<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CertificateTypesApi<DeSerializersT>, JobsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CERTIFICATE_TYPE: new OneToOneLink(
        'CertificateType',
        this,
        linkedApis[0]
      ),
      JOB: new OneToOneLink('Job', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobPreferredCertificates;

  requestBuilder(): JobPreferredCertificatesRequestBuilder<DeSerializersT> {
    return new JobPreferredCertificatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobPreferredCertificates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobPreferredCertificates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobPreferredCertificates<DeSerializersT>,
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
    typeof JobPreferredCertificates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobPreferredCertificates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      JobPreferredCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFICATE_TYPE_ID: OrderableEdmTypeField<
      JobPreferredCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORTANCE: EnumField<
      JobPreferredCertificates<DeSerializers>,
      DeSerializersT,
      HrmSkillImportance,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      JobPreferredCertificates<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      JobPreferredCertificates<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobPreferredCertificates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link certificateTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CertificateTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link importance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORTANCE: fieldBuilder.buildEnumField(
          'Importance',
          HrmSkillImportance,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobPreferredCertificates)
      };
    }

    return this._schema;
  }
}
