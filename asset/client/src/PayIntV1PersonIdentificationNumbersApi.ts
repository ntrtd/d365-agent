/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1PersonIdentificationNumbers } from './PayIntV1PersonIdentificationNumbers';
import { PayIntV1PersonIdentificationNumbersRequestBuilder } from './PayIntV1PersonIdentificationNumbersRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1PersonIdentificationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PayIntV1PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT
    >
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
  ): PayIntV1PersonIdentificationNumbersApi<DeSerializersT> {
    return new PayIntV1PersonIdentificationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1PersonIdentificationNumbers;

  requestBuilder(): PayIntV1PersonIdentificationNumbersRequestBuilder<DeSerializersT> {
    return new PayIntV1PersonIdentificationNumbersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1PersonIdentificationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1PersonIdentificationNumbers<DeSerializersT>,
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
    typeof PayIntV1PersonIdentificationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1PersonIdentificationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ISSUED_DATE: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISSUING_AGENCY_ID: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TYPE: OrderableEdmTypeField<
      PayIntV1PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1PersonIdentificationNumbers<DeSerializers>>;
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
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
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
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link issuedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUED_DATE: fieldBuilder.buildEdmTypeField(
          'IssuedDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link entryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TYPE: fieldBuilder.buildEdmTypeField(
          'EntryType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1PersonIdentificationNumbers)
      };
    }

    return this._schema;
  }
}
