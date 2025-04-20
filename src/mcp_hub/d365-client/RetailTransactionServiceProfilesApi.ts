/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionServiceProfiles } from './RetailTransactionServiceProfiles';
import { RetailTransactionServiceProfilesRequestBuilder } from './RetailTransactionServiceProfilesRequestBuilder';
import { OnlineChannelV2SApi } from './OnlineChannelV2SApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { RetailStoresApi } from './RetailStoresApi';
import { NoYes } from './NoYes';
import { RetailProfileVersion } from './RetailProfileVersion';
import { RetailTransactionServiceProtocolType } from './RetailTransactionServiceProtocolType';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTransactionServiceProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionServiceProfiles<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionServiceProfilesApi<DeSerializersT> {
    return new RetailTransactionServiceProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnlineChannelV2SApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      OnlineChannelsApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL_V_2: new OneToManyLink(
        'OnlineChannelV2',
        this,
        linkedApis[0]
      ),
      RETAIL_CALL_CENTER: new OneToManyLink(
        'RetailCallCenter',
        this,
        linkedApis[1]
      ),
      ONLINE_CHANNEL: new OneToManyLink('OnlineChannel', this, linkedApis[2]),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = RetailTransactionServiceProfiles;

  requestBuilder(): RetailTransactionServiceProfilesRequestBuilder<DeSerializersT> {
    return new RetailTransactionServiceProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionServiceProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionServiceProfiles<DeSerializersT>,
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
    typeof RetailTransactionServiceProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionServiceProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROFILE_ID: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFER_FILE_CHUNK_SIZE: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_TS_DATA: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CENTRAL_TABLE_SERVER_PORT: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_OFF: EnumField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TS_VERSION: EnumField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      RetailProfileVersion,
      true,
      true
    >;
    PROTOCOL: EnumField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      RetailTransactionServiceProtocolType,
      true,
      true
    >;
    SERVER_SERVICE_NAME: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUDIENCE_URN: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_HOST_URL: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVER_CERTIFICATE_DNS: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTITY_PROVIDER_CLAIM_TYPE: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AOS_URL: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTITY_PROVIDER: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUER_URI: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POS_TS_PASSWORD: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUED_TOKEN_TYPE: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TS_STAFF: EnumField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CENTRAL_TABLE_SERVER: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_EXECUTION_TIMEOUT: OrderableEdmTypeField<
      RetailTransactionServiceProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      RetailTransactionServiceProfiles<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTransactionServiceProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link transferFileChunkSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_FILE_CHUNK_SIZE: fieldBuilder.buildEdmTypeField(
          'TransferFileChunkSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link retailTsData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_TS_DATA: fieldBuilder.buildEdmTypeField(
          'RetailTSData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link centralTableServerPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_TABLE_SERVER_PORT: fieldBuilder.buildEdmTypeField(
          'CentralTableServerPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_OFF: fieldBuilder.buildEnumField('SecurityOff', NoYes, true),
        /**
         * Static representation of the {@link tsVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TS_VERSION: fieldBuilder.buildEnumField(
          'TSVersion',
          RetailProfileVersion,
          true
        ),
        /**
         * Static representation of the {@link protocol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROTOCOL: fieldBuilder.buildEnumField(
          'Protocol',
          RetailTransactionServiceProtocolType,
          true
        ),
        /**
         * Static representation of the {@link serverServiceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER_SERVICE_NAME: fieldBuilder.buildEdmTypeField(
          'ServerServiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link audienceUrn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUDIENCE_URN: fieldBuilder.buildEdmTypeField(
          'AudienceUrn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceHostUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_HOST_URL: fieldBuilder.buildEdmTypeField(
          'ServiceHostUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serverCertificateDns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER_CERTIFICATE_DNS: fieldBuilder.buildEdmTypeField(
          'ServerCertificateDNS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identityProviderClaimType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_PROVIDER_CLAIM_TYPE: fieldBuilder.buildEdmTypeField(
          'IdentityProviderClaimType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aosUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AOS_URL: fieldBuilder.buildEdmTypeField('AosUrl', 'Edm.String', true),
        /**
         * Static representation of the {@link identityProvider} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_PROVIDER: fieldBuilder.buildEdmTypeField(
          'IdentityProvider',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issuerUri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER_URI: fieldBuilder.buildEdmTypeField(
          'IssuerUri',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link posTsPassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_TS_PASSWORD: fieldBuilder.buildEdmTypeField(
          'PosTSPassword',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issuedTokenType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUED_TOKEN_TYPE: fieldBuilder.buildEdmTypeField(
          'IssuedTokenType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link tsStaff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TS_STAFF: fieldBuilder.buildEnumField('TSStaff', NoYes, true),
        /**
         * Static representation of the {@link centralTableServer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_TABLE_SERVER: fieldBuilder.buildEdmTypeField(
          'CentralTableServer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportExecutionTimeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_EXECUTION_TIMEOUT: fieldBuilder.buildEdmTypeField(
          'ReportExecutionTimeout',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionServiceProfiles)
      };
    }

    return this._schema;
  }
}
