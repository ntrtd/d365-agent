/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTransactionFiscalLines } from './RetailTransactionFiscalLines';
import { RetailTransactionFiscalLinesRequestBuilder } from './RetailTransactionFiscalLinesRequestBuilder';
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
export class RetailTransactionFiscalLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTransactionFiscalLines<DeSerializersT>, DeSerializersT>
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
  ): RetailTransactionFiscalLinesApi<DeSerializersT> {
    return new RetailTransactionFiscalLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTransactionFiscalLines;

  requestBuilder(): RetailTransactionFiscalLinesRequestBuilder<DeSerializersT> {
    return new RetailTransactionFiscalLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTransactionFiscalLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTransactionFiscalLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTransactionFiscalLines<DeSerializersT>,
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
    typeof RetailTransactionFiscalLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTransactionFiscalLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_NUMBER: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECORD_GUID: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CONNECTOR_NAME: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_COPY: EnumField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STAFF_ID: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_TYPE: EnumField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      RetailFiscalRegistrationType,
      true,
      true
    >;
    CONNECTOR_FUNCTIONALITY_PROFILE_ID: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONNECTOR_GROUP: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_RESPONSE: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_TERMINAL: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_STATUS: EnumField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      RetailFiscalIntegrationFiscalTransStatus,
      true,
      true
    >;
    DOCUMENT_NUMBER: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_PROCESS_ID: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_NAME: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTER_STORE: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGISTER_INFO: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TIME: OrderableEdmTypeField<
      RetailTransactionFiscalLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailTransactionFiscalLines<DeSerializers>>;
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link transactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransactionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
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
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
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
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link transactionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TIME: fieldBuilder.buildEdmTypeField(
          'TransactionTime',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTransactionFiscalLines)
      };
    }

    return this._schema;
  }
}
