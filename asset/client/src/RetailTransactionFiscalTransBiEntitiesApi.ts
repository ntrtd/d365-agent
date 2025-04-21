/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionFiscalTransBiEntities } from './RetailTransactionFiscalTransBiEntities';
import { RetailTransactionFiscalTransBiEntitiesRequestBuilder } from './RetailTransactionFiscalTransBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailFiscalRegistrationType } from './RetailFiscalRegistrationType';
import { RetailFiscalIntegrationFiscalTransStatus } from './RetailFiscalIntegrationFiscalTransStatus';
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
export class RetailTransactionFiscalTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailTransactionFiscalTransBiEntities<DeSerializersT>,
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
  ): RetailTransactionFiscalTransBiEntitiesApi<DeSerializersT> {
    return new RetailTransactionFiscalTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionFiscalTransBiEntities;

  requestBuilder(): RetailTransactionFiscalTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailTransactionFiscalTransBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionFiscalTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionFiscalTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionFiscalTransBiEntities<DeSerializersT>,
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
    typeof RetailTransactionFiscalTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionFiscalTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECORD_GUID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPLICATION_COUNTER_FROM_ORIGIN: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_COPY: EnumField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_TYPE: EnumField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailFiscalRegistrationType,
      true,
      true
    >;
    CONNECTOR_FUNCTIONALITY_PROFILE_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGISTER_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONNECTOR_GROUP: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_RESPONSE: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_TERMINAL: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_STATUS: EnumField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      RetailFiscalIntegrationFiscalTransStatus,
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_PROCESS_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_NAME: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_STORE: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_INFO: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTROL_CODE: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANS_TIME: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      RetailTransactionFiscalTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      RetailTransactionFiscalTransBiEntities<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('Store', 'Edm.String', false),
        /**
         * Static representation of the {@link terminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL: fieldBuilder.buildEdmTypeField(
          'Terminal',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recordGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_GUID: fieldBuilder.buildEdmTypeField(
          'RecordGuid',
          'Edm.Guid',
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
         * Static representation of the {@link replicationCounterFromOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPLICATION_COUNTER_FROM_ORIGIN: fieldBuilder.buildEdmTypeField(
          'ReplicationCounterFromOrigin',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link connectorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_NAME: fieldBuilder.buildEdmTypeField(
          'ConnectorName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptCopy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_COPY: fieldBuilder.buildEnumField('ReceiptCopy', NoYes, true),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link staffId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAFF_ID: fieldBuilder.buildEdmTypeField('StaffId', 'Edm.String', true),
        /**
         * Static representation of the {@link registrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_TYPE: fieldBuilder.buildEnumField(
          'RegistrationType',
          RetailFiscalRegistrationType,
          true
        ),
        /**
         * Static representation of the {@link connectorFunctionalityProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_FUNCTIONALITY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ConnectorFunctionalityProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link registerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_ID: fieldBuilder.buildEdmTypeField(
          'RegisterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link connectorGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_GROUP: fieldBuilder.buildEdmTypeField(
          'ConnectorGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registerResponse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_RESPONSE: fieldBuilder.buildEdmTypeField(
          'RegisterResponse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registerTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_TERMINAL: fieldBuilder.buildEdmTypeField(
          'RegisterTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_STATUS: fieldBuilder.buildEnumField(
          'RegistrationStatus',
          RetailFiscalIntegrationFiscalTransStatus,
          true
        ),
        /**
         * Static representation of the {@link documentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DocumentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationProcessId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'RegistrationProcessId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registerStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_STORE: fieldBuilder.buildEdmTypeField(
          'RegisterStore',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registerInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_INFO: fieldBuilder.buildEdmTypeField(
          'RegisterInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link controlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTROL_CODE: fieldBuilder.buildEdmTypeField(
          'ControlCode',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_TIME: fieldBuilder.buildEdmTypeField(
          'TransTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('Origin', 'Edm.String', true),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionFiscalTransBiEntities)
      };
    }

    return this._schema;
  }
}
