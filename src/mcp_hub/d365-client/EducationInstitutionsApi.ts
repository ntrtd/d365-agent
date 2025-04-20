/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationInstitutions } from './EducationInstitutions';
import { EducationInstitutionsRequestBuilder } from './EducationInstitutionsRequestBuilder';
import { PersonEducationsApi } from './PersonEducationsApi';
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
export class EducationInstitutionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EducationInstitutions<DeSerializersT>, DeSerializersT>
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
  ): EducationInstitutionsApi<DeSerializersT> {
    return new EducationInstitutionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      EducationInstitutions<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PersonEducationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERSON_EDUCATION: new OneToManyLink(
        'PersonEducation',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EducationInstitutions;

  requestBuilder(): EducationInstitutionsRequestBuilder<DeSerializersT> {
    return new EducationInstitutionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EducationInstitutions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EducationInstitutions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EducationInstitutions<DeSerializersT>,
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
    typeof EducationInstitutions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EducationInstitutions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INSTITUTION: OrderableEdmTypeField<
      EducationInstitutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      EducationInstitutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EducationInstitutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERNET_ADDRESS: OrderableEdmTypeField<
      EducationInstitutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      EducationInstitutions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      EducationInstitutions<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EducationInstitutions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link institution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTITUTION: fieldBuilder.buildEdmTypeField(
          'Institution',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
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
        /**
         * Static representation of the {@link internetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'InternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EducationInstitutions)
      };
    }

    return this._schema;
  }
}
