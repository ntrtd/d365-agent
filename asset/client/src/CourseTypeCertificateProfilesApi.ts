/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CourseTypeCertificateProfiles } from './CourseTypeCertificateProfiles';
import { CourseTypeCertificateProfilesRequestBuilder } from './CourseTypeCertificateProfilesRequestBuilder';
import { CertificateTypesApi } from './CertificateTypesApi';
import { CourseTypesApi } from './CourseTypesApi';
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
export class CourseTypeCertificateProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CourseTypeCertificateProfiles<DeSerializersT>, DeSerializersT>
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
  ): CourseTypeCertificateProfilesApi<DeSerializersT> {
    return new CourseTypeCertificateProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      CourseTypeCertificateProfiles<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeCertificateProfiles<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CertificateTypesApi<DeSerializersT>,
      CourseTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CERTIFICATE_TYPE: new OneToOneLink(
        'CertificateType',
        this,
        linkedApis[0]
      ),
      COURSE_TYPE: new OneToOneLink('CourseType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CourseTypeCertificateProfiles;

  requestBuilder(): CourseTypeCertificateProfilesRequestBuilder<DeSerializersT> {
    return new CourseTypeCertificateProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CourseTypeCertificateProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CourseTypeCertificateProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CourseTypeCertificateProfiles<DeSerializersT>,
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
    typeof CourseTypeCertificateProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CourseTypeCertificateProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COURSE_TYPE_ID: OrderableEdmTypeField<
      CourseTypeCertificateProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFICATE_TYPE_ID: OrderableEdmTypeField<
      CourseTypeCertificateProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      CourseTypeCertificateProfiles<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link courseType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COURSE_TYPE: OneToOneLink<
      CourseTypeCertificateProfiles<DeSerializersT>,
      DeSerializersT,
      CourseTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CourseTypeCertificateProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link courseTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COURSE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CourseTypeId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CourseTypeCertificateProfiles)
      };
    }

    return this._schema;
  }
}
