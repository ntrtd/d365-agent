/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationDegrees } from './EducationDegrees';
import { EducationDegreesRequestBuilder } from './EducationDegreesRequestBuilder';
import { ApplicantsApi } from './ApplicantsApi';
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
export class EducationDegreesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EducationDegrees<DeSerializersT>, DeSerializersT>
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
  ): EducationDegreesApi<DeSerializersT> {
    return new EducationDegreesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      EducationDegrees<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      EducationDegrees<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApplicantsApi<DeSerializersT>,
      PersonEducationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      APPLICANTS: new OneToManyLink('Applicants', this, linkedApis[0]),
      PERSON_EDUCATION: new OneToManyLink(
        'PersonEducation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EducationDegrees;

  requestBuilder(): EducationDegreesRequestBuilder<DeSerializersT> {
    return new EducationDegreesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EducationDegrees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EducationDegrees<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EducationDegrees<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EducationDegrees, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EducationDegrees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEVEL_OF_EDUCATION: OrderableEdmTypeField<
      EducationDegrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EducationDegrees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applicants} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICANTS: OneToManyLink<
      EducationDegrees<DeSerializersT>,
      DeSerializersT,
      ApplicantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personEducation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_EDUCATION: OneToManyLink<
      EducationDegrees<DeSerializersT>,
      DeSerializersT,
      PersonEducationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EducationDegrees<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link levelOfEducation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_OF_EDUCATION: fieldBuilder.buildEdmTypeField(
          'LevelOfEducation',
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
        ALL_FIELDS: new AllFields('*', EducationDegrees)
      };
    }

    return this._schema;
  }
}
