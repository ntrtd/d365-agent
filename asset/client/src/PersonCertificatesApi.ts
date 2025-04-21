/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonCertificates } from './PersonCertificates';
import { PersonCertificatesRequestBuilder } from './PersonCertificatesRequestBuilder';
import { PeopleApi } from './PeopleApi';
import { CertificateTypesApi } from './CertificateTypesApi';
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
export class PersonCertificatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonCertificates<DeSerializersT>, DeSerializersT>
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
  ): PersonCertificatesApi<DeSerializersT> {
    return new PersonCertificatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonCertificates<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      PersonCertificates<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PeopleApi<DeSerializersT>, CertificateTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERSON: new OneToOneLink('Person', this, linkedApis[0]),
      CERTIFICATE_TYPE: new OneToOneLink('CertificateType', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PersonCertificates;

  requestBuilder(): PersonCertificatesRequestBuilder<DeSerializersT> {
    return new PersonCertificatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonCertificates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonCertificates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonCertificates<DeSerializersT>,
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
    typeof PersonCertificates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonCertificates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFICATE_TYPE_ID: OrderableEdmTypeField<
      PersonCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      PersonCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      PersonCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      PersonCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonCertificates<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificateType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_TYPE: OneToOneLink<
      PersonCertificates<DeSerializersT>,
      DeSerializersT,
      CertificateTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonCertificates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonCertificates)
      };
    }

    return this._schema;
  }
}
