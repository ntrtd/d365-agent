/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { I9DocumentTypes } from './I9DocumentTypes';
import { I9DocumentTypesRequestBuilder } from './I9DocumentTypesRequestBuilder';
import { IdentificationTypesApi } from './IdentificationTypesApi';
import { IssuingAgenciesApi } from './IssuingAgenciesApi';
import { NoYes } from './NoYes';
import { Hcmi9ListType } from './Hcmi9ListType';
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
export class I9DocumentTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<I9DocumentTypes<DeSerializersT>, DeSerializersT>
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
  ): I9DocumentTypesApi<DeSerializersT> {
    return new I9DocumentTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link identificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_TYPE: OneToOneLink<
      I9DocumentTypes<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link issuingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ISSUING_AGENCY: OneToOneLink<
      I9DocumentTypes<DeSerializersT>,
      DeSerializersT,
      IssuingAgenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      IdentificationTypesApi<DeSerializersT>,
      IssuingAgenciesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      IDENTIFICATION_TYPE: new OneToOneLink(
        'IdentificationType',
        this,
        linkedApis[0]
      ),
      ISSUING_AGENCY: new OneToOneLink('IssuingAgency', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = I9DocumentTypes;

  requestBuilder(): I9DocumentTypesRequestBuilder<DeSerializersT> {
    return new I9DocumentTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    I9DocumentTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<I9DocumentTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<I9DocumentTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof I9DocumentTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        I9DocumentTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    I_9_DOCUMENT_TYPE_ID: OrderableEdmTypeField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ISSUING_AGENCY_ID: OrderableEdmTypeField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRE_DATE: OrderableEdmTypeField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FORM_ID: OrderableEdmTypeField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIST_TYPE: EnumField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      Hcmi9ListType,
      true,
      true
    >;
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      I9DocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link identificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_TYPE: OneToOneLink<
      I9DocumentTypes<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link issuingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ISSUING_AGENCY: OneToOneLink<
      I9DocumentTypes<DeSerializersT>,
      DeSerializersT,
      IssuingAgenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<I9DocumentTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link i9DocumentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        I_9_DOCUMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'I9DocumentTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link issuingAgencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_AGENCY_ID: fieldBuilder.buildEdmTypeField(
          'IssuingAgencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRE_DATE: fieldBuilder.buildEdmTypeField(
          'ExpireDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link formId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_ID: fieldBuilder.buildEdmTypeField('FormId', 'Edm.String', true),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link listType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_TYPE: fieldBuilder.buildEnumField('ListType', Hcmi9ListType, true),
        /**
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', I9DocumentTypes)
      };
    }

    return this._schema;
  }
}
