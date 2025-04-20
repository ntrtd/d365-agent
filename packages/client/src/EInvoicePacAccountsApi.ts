/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EInvoicePacAccounts } from './EInvoicePacAccounts';
import { EInvoicePacAccountsRequestBuilder } from './EInvoicePacAccountsRequestBuilder';
import { EInvoiceCfdiEnvironmentMx } from './EInvoiceCfdiEnvironmentMx';
import { EInvoiceCfdiWebServiceMx } from './EInvoiceCfdiWebServiceMx';
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
export class EInvoicePacAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EInvoicePacAccounts<DeSerializersT>, DeSerializersT>
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
  ): EInvoicePacAccountsApi<DeSerializersT> {
    return new EInvoicePacAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EInvoicePacAccounts;

  requestBuilder(): EInvoicePacAccountsRequestBuilder<DeSerializersT> {
    return new EInvoicePacAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EInvoicePacAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EInvoicePacAccounts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EInvoicePacAccounts<DeSerializersT>,
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
    typeof EInvoicePacAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EInvoicePacAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAC_ACCOUNT_ID: OrderableEdmTypeField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENVIRONMENT: EnumField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      EInvoiceCfdiEnvironmentMx,
      true,
      true
    >;
    WEB_SERVICE: EnumField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      EInvoiceCfdiWebServiceMx,
      true,
      true
    >;
    WEB_SERVICE_METHOD: OrderableEdmTypeField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFC_NUMBER: OrderableEdmTypeField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAC_ACCOUNT_NAME: OrderableEdmTypeField<
      EInvoicePacAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EInvoicePacAccounts<DeSerializers>>;
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
         * Static representation of the {@link pacAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAC_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'PACAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link environment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENT: fieldBuilder.buildEnumField(
          'Environment',
          EInvoiceCfdiEnvironmentMx,
          true
        ),
        /**
         * Static representation of the {@link webService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_SERVICE: fieldBuilder.buildEnumField(
          'WebService',
          EInvoiceCfdiWebServiceMx,
          true
        ),
        /**
         * Static representation of the {@link webServiceMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_SERVICE_METHOD: fieldBuilder.buildEdmTypeField(
          'WebServiceMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfcNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFC_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFCNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('URL', 'Edm.String', true),
        /**
         * Static representation of the {@link pacAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAC_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'PACAccountName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EInvoicePacAccounts)
      };
    }

    return this._schema;
  }
}
