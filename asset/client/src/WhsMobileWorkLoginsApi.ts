/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WhsMobileWorkLogins } from './WhsMobileWorkLogins';
import { WhsMobileWorkLoginsRequestBuilder } from './WhsMobileWorkLoginsRequestBuilder';
import { WhsMobileWorkSessionsApi } from './WhsMobileWorkSessionsApi';
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
export class WhsMobileWorkLoginsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WhsMobileWorkLogins<DeSerializersT>, DeSerializersT>
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
  ): WhsMobileWorkLoginsApi<DeSerializersT> {
    return new WhsMobileWorkLoginsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link session} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SESSION: OneToOneLink<
      WhsMobileWorkLogins<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkSessionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WhsMobileWorkSessionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SESSION: new OneToOneLink('Session', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = WhsMobileWorkLogins;

  requestBuilder(): WhsMobileWorkLoginsRequestBuilder<DeSerializersT> {
    return new WhsMobileWorkLoginsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WhsMobileWorkLogins<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WhsMobileWorkLogins<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WhsMobileWorkLogins<DeSerializersT>,
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
    typeof WhsMobileWorkLogins,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WhsMobileWorkLogins,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      WhsMobileWorkLogins<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SESSION_REC_ID: OrderableEdmTypeField<
      WhsMobileWorkLogins<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBMISSION_TYPE: OrderableEdmTypeField<
      WhsMobileWorkLogins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WhsMobileWorkLogins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      WhsMobileWorkLogins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR: OrderableEdmTypeField<
      WhsMobileWorkLogins<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link session} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SESSION: OneToOneLink<
      WhsMobileWorkLogins<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkSessionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WhsMobileWorkLogins<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sessionRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_REC_ID: fieldBuilder.buildEdmTypeField(
          'SessionRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link submissionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_TYPE: fieldBuilder.buildEdmTypeField(
          'SubmissionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'Password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link error} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR: fieldBuilder.buildEdmTypeField('Error', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WhsMobileWorkLogins)
      };
    }

    return this._schema;
  }
}
