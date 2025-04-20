/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationRegistrationProcessTerminalExceptions } from './FiscalIntegrationRegistrationProcessTerminalExceptions';
import { FiscalIntegrationRegistrationProcessTerminalExceptionsRequestBuilder } from './FiscalIntegrationRegistrationProcessTerminalExceptionsRequestBuilder';
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
export class FiscalIntegrationRegistrationProcessTerminalExceptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializersT>,
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
  ): FiscalIntegrationRegistrationProcessTerminalExceptionsApi<DeSerializersT> {
    return new FiscalIntegrationRegistrationProcessTerminalExceptionsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationRegistrationProcessTerminalExceptions;

  requestBuilder(): FiscalIntegrationRegistrationProcessTerminalExceptionsRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationRegistrationProcessTerminalExceptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializersT>,
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
    typeof FiscalIntegrationRegistrationProcessTerminalExceptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationRegistrationProcessTerminalExceptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationRegistrationProcessTerminalExceptions<DeSerializers>
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
         * Static representation of the {@link terminalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERMINAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'TerminalNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FiscalIntegrationRegistrationProcessTerminalExceptions
        )
      };
    }

    return this._schema;
  }
}
