/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationRegistrationProcesses } from './FiscalIntegrationRegistrationProcesses';
import { FiscalIntegrationRegistrationProcessesRequestBuilder } from './FiscalIntegrationRegistrationProcessesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailFiscalIntegrationConnectorType } from './RetailFiscalIntegrationConnectorType';
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
export class FiscalIntegrationRegistrationProcessesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationRegistrationProcesses<DeSerializersT>,
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
  ): FiscalIntegrationRegistrationProcessesApi<DeSerializersT> {
    return new FiscalIntegrationRegistrationProcessesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationRegistrationProcesses;

  requestBuilder(): FiscalIntegrationRegistrationProcessesRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationRegistrationProcessesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationRegistrationProcesses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationRegistrationProcesses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationRegistrationProcesses<DeSerializersT>,
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
    typeof FiscalIntegrationRegistrationProcesses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationRegistrationProcesses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALLOW_MARK_AS_REGISTERED: EnumField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SKIP: EnumField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUP_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONNECTOR_TYPE: EnumField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      RetailFiscalIntegrationConnectorType,
      true,
      true
    >;
    OPTIONAL: EnumField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationRegistrationProcesses<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProcessNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link allowMarkAsRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MARK_AS_REGISTERED: fieldBuilder.buildEnumField(
          'AllowMarkAsRegistered',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowSkip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SKIP: fieldBuilder.buildEnumField('AllowSkip', NoYes, true),
        /**
         * Static representation of the {@link groupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'GroupNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link connectorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONNECTOR_TYPE: fieldBuilder.buildEnumField(
          'ConnectorType',
          RetailFiscalIntegrationConnectorType,
          true
        ),
        /**
         * Static representation of the {@link optional} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTIONAL: fieldBuilder.buildEnumField('Optional', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalIntegrationRegistrationProcesses)
      };
    }

    return this._schema;
  }
}
