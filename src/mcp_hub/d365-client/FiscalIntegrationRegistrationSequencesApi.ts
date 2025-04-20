/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationRegistrationSequences } from './FiscalIntegrationRegistrationSequences';
import { FiscalIntegrationRegistrationSequencesRequestBuilder } from './FiscalIntegrationRegistrationSequencesRequestBuilder';
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
export class FiscalIntegrationRegistrationSequencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationRegistrationSequences<DeSerializersT>,
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
  ): FiscalIntegrationRegistrationSequencesApi<DeSerializersT> {
    return new FiscalIntegrationRegistrationSequencesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationRegistrationSequences;

  requestBuilder(): FiscalIntegrationRegistrationSequencesRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationRegistrationSequencesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationRegistrationSequences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationRegistrationSequences<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationRegistrationSequences<DeSerializersT>,
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
    typeof FiscalIntegrationRegistrationSequences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationRegistrationSequences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    STORE: OrderableEdmTypeField<
      FiscalIntegrationRegistrationSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TERMINAL: OrderableEdmTypeField<
      FiscalIntegrationRegistrationSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_KEY: OrderableEdmTypeField<
      FiscalIntegrationRegistrationSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_OFFLINE: EnumField<
      FiscalIntegrationRegistrationSequences<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_REGISTER_RESPONSE: OrderableEdmTypeField<
      FiscalIntegrationRegistrationSequences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENTIAL_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationRegistrationSequences<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationRegistrationSequences<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link sequenceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_KEY: fieldBuilder.buildEdmTypeField(
          'SequenceKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OFFLINE: fieldBuilder.buildEnumField('IsOffline', NoYes, true),
        /**
         * Static representation of the {@link lastRegisterResponse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_REGISTER_RESPONSE: fieldBuilder.buildEdmTypeField(
          'LastRegisterResponse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sequentialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENTIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequentialNumber',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalIntegrationRegistrationSequences)
      };
    }

    return this._schema;
  }
}
