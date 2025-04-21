/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobTemplateCertificates } from './JobTemplateCertificates';
import { JobTemplateCertificatesRequestBuilder } from './JobTemplateCertificatesRequestBuilder';
import { CertificateTypesApi } from './CertificateTypesApi';
import { JobTemplatesApi } from './JobTemplatesApi';
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
export class JobTemplateCertificatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JobTemplateCertificates<DeSerializersT>, DeSerializersT>
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
  ): JobTemplateCertificatesApi<DeSerializersT> {
    return new JobTemplateCertificatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      JobTemplateCertificates<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateCertificates<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CertificateTypesApi<DeSerializersT>,
      JobTemplatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CERTIFICATE_TYPE: new OneToOneLink(
        'CertificateType',
        this,
        linkedApis[0]
      ),
      JOB_TEMPLATE: new OneToOneLink('JobTemplate', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = JobTemplateCertificates;

  requestBuilder(): JobTemplateCertificatesRequestBuilder<DeSerializersT> {
    return new JobTemplateCertificatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JobTemplateCertificates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobTemplateCertificates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobTemplateCertificates<DeSerializersT>,
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
    typeof JobTemplateCertificates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobTemplateCertificates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_TEMPLATE_ID: OrderableEdmTypeField<
      JobTemplateCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFICATE_TYPE_ID: OrderableEdmTypeField<
      JobTemplateCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORTANCE: EnumField<
      JobTemplateCertificates<DeSerializers>,
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
      JobTemplateCertificates<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobTemplate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TEMPLATE: OneToOneLink<
      JobTemplateCertificates<DeSerializersT>,
      DeSerializersT,
      JobTemplatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobTemplateCertificates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JobTemplateId',
          'Edm.String',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', JobTemplateCertificates)
      };
    }

    return this._schema;
  }
}
