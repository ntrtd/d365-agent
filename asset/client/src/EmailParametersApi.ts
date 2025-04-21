/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmailParameters } from './EmailParameters';
import { EmailParametersRequestBuilder } from './EmailParametersRequestBuilder';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class EmailParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmailParameters<DeSerializersT>, DeSerializersT>
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
  ): EmailParametersApi<DeSerializersT> {
    return new EmailParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EmailParameters;

  requestBuilder(): EmailParametersRequestBuilder<DeSerializersT> {
    return new EmailParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmailParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmailParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmailParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmailParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmailParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SMTP_PORT_NUMBER: OrderableEdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAILER_INTERACTIVE_ENABLED: EdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    SMTP_REQUIRE_SSL: EnumField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAILER_NON_INTERACTIVE: OrderableEdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SMTP_USE_NTLM: EnumField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SMTP_RELAY_SERVER_NAME: OrderableEdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_EMAIL_ATTACHMENT_SIZE: OrderableEdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SMTP_USER_NAME: OrderableEdmTypeField<
      EmailParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EmailParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link smtpPortNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMTP_PORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SMTPPortNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link mailerInteractiveEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAILER_INTERACTIVE_ENABLED: fieldBuilder.buildEdmTypeField(
          'MailerInteractiveEnabled',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link smtpRequireSsl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMTP_REQUIRE_SSL: fieldBuilder.buildEnumField(
          'SMTPRequireSSL',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mailerNonInteractive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAILER_NON_INTERACTIVE: fieldBuilder.buildEdmTypeField(
          'MailerNonInteractive',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link smtpUseNtlm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMTP_USE_NTLM: fieldBuilder.buildEnumField('SMTPUseNTLM', NoYes, true),
        /**
         * Static representation of the {@link smtpRelayServerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMTP_RELAY_SERVER_NAME: fieldBuilder.buildEdmTypeField(
          'SMTPRelayServerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumEmailAttachmentSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_EMAIL_ATTACHMENT_SIZE: fieldBuilder.buildEdmTypeField(
          'MaximumEmailAttachmentSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link smtpUserName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMTP_USER_NAME: fieldBuilder.buildEdmTypeField(
          'SMTPUserName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmailParameters)
      };
    }

    return this._schema;
  }
}
