/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SystemParametersBiEntities } from './SystemParametersBiEntities';
import { SystemParametersBiEntitiesRequestBuilder } from './SystemParametersBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { DimensionLedgerAccountDelimiter } from './DimensionLedgerAccountDelimiter';
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
export class SystemParametersBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SystemParametersBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SystemParametersBiEntitiesApi<DeSerializersT> {
    return new SystemParametersBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SystemParametersBiEntities;

  requestBuilder(): SystemParametersBiEntitiesRequestBuilder<DeSerializersT> {
    return new SystemParametersBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SystemParametersBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SystemParametersBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SystemParametersBiEntities<DeSerializersT>,
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
    typeof SystemParametersBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SystemParametersBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRS_MAX_ROW_CN: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    O_DATA_BUILD_METADATA_CACHE_ON_AOS_STARTUP: EnumField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYSTEM_PRIVACY_STATEMENT_URL: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_LINE_NUMBER_INCREMENT: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYSTEM_EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    THAI_SOFTWARE_SEQ_NO: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_LEGACY_QUERY_RELATIONS: EnumField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHART_OF_ACCOUNTS_DELIMITER: EnumField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccountDelimiter,
      true,
      true
    >;
    USE_ADV_CERTIFICATE_STORE: EnumField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    O_DATA_ALLOW_NULL_FOR_ENUM_KEY_VALUE: EnumField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYSTEM_CURRENCY_CODE: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_LEGAL_TERMS_URL: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_LANGUAGE_ID: OrderableEdmTypeField<
      SystemParametersBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SystemParametersBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link srsMaxRowCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRS_MAX_ROW_CN: fieldBuilder.buildEdmTypeField(
          'SRSMaxRow_CN',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link oDataBuildMetadataCacheOnAosStartup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        O_DATA_BUILD_METADATA_CACHE_ON_AOS_STARTUP: fieldBuilder.buildEnumField(
          'ODataBuildMetadataCacheOnAosStartup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link systemPrivacyStatementUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_PRIVACY_STATEMENT_URL: fieldBuilder.buildEdmTypeField(
          'SystemPrivacyStatementURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link systemLineNumberIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_LINE_NUMBER_INCREMENT: fieldBuilder.buildEdmTypeField(
          'SystemLineNumberIncrement',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link systemExchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'SystemExchangeRateType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link thaiSoftwareSeqNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THAI_SOFTWARE_SEQ_NO: fieldBuilder.buildEdmTypeField(
          'ThaiSoftwareSeqNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useLegacyQueryRelations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_LEGACY_QUERY_RELATIONS: fieldBuilder.buildEnumField(
          'UseLegacyQueryRelations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link chartOfAccountsDelimiter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS_DELIMITER: fieldBuilder.buildEnumField(
          'ChartOfAccountsDelimiter',
          DimensionLedgerAccountDelimiter,
          true
        ),
        /**
         * Static representation of the {@link useAdvCertificateStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ADV_CERTIFICATE_STORE: fieldBuilder.buildEnumField(
          'UseAdvCertificateStore',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link oDataAllowNullForEnumKeyValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        O_DATA_ALLOW_NULL_FOR_ENUM_KEY_VALUE: fieldBuilder.buildEnumField(
          'ODataAllowNullForEnumKeyValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link systemCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SystemCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemLegalTermsUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_LEGAL_TERMS_URL: fieldBuilder.buildEdmTypeField(
          'SystemLegalTermsURL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'SystemLanguageId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SystemParametersBiEntities)
      };
    }

    return this._schema;
  }
}
