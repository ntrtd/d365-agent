/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SigningLimitAgreements } from './SigningLimitAgreements';
import { SigningLimitAgreementsRequestBuilder } from './SigningLimitAgreementsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SigningLimitAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SigningLimitAgreements<DeSerializersT>, DeSerializersT>
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
  ): SigningLimitAgreementsApi<DeSerializersT> {
    return new SigningLimitAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SigningLimitAgreements;

  requestBuilder(): SigningLimitAgreementsRequestBuilder<DeSerializersT> {
    return new SigningLimitAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SigningLimitAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SigningLimitAgreements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SigningLimitAgreements<DeSerializersT>,
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
    typeof SigningLimitAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SigningLimitAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AGREEMENT_NAME: OrderableEdmTypeField<
      SigningLimitAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    URL: OrderableEdmTypeField<
      SigningLimitAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTESTATION_PERIOD: OrderableEdmTypeField<
      SigningLimitAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SigningLimitAgreements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link agreementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'AgreementName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link attestationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTESTATION_PERIOD: fieldBuilder.buildEdmTypeField(
          'AttestationPeriod',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SigningLimitAgreements)
      };
    }

    return this._schema;
  }
}
