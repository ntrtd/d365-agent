/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxDeclarationSetups } from './TaxDeclarationSetups';
import { TaxDeclarationSetupsRequestBuilder } from './TaxDeclarationSetupsRequestBuilder';
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
export class TaxDeclarationSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxDeclarationSetups<DeSerializersT>, DeSerializersT>
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
  ): TaxDeclarationSetupsApi<DeSerializersT> {
    return new TaxDeclarationSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxDeclarationSetups;

  requestBuilder(): TaxDeclarationSetupsRequestBuilder<DeSerializersT> {
    return new TaxDeclarationSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxDeclarationSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxDeclarationSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxDeclarationSetups<DeSerializersT>,
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
    typeof TaxDeclarationSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxDeclarationSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USE_OF_PROXY_SERVER: EnumField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROXY_SERVER_AUTHENTICATION_REQUIRED: EnumField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTHENTICATION: EnumField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROXY_SERVER_PORT_NUMBER: OrderableEdmTypeField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROXY_SERVER_IP_ADDRESS: OrderableEdmTypeField<
      TaxDeclarationSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxDeclarationSetups<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link useOfProxyServer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_OF_PROXY_SERVER: fieldBuilder.buildEnumField(
          'UseOfProxyServer',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link proxyServerAuthenticationRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROXY_SERVER_AUTHENTICATION_REQUIRED: fieldBuilder.buildEnumField(
          'ProxyServerAuthenticationRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link authentication} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHENTICATION: fieldBuilder.buildEnumField(
          'Authentication',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link proxyServerPortNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROXY_SERVER_PORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProxyServerPortNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link proxyServerIpAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROXY_SERVER_IP_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ProxyServerIPAddress',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxDeclarationSetups)
      };
    }

    return this._schema;
  }
}
