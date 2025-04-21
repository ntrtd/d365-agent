/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationProcessDatas } from './FiscalIntegrationProcessDatas';
import { FiscalIntegrationProcessDatasRequestBuilder } from './FiscalIntegrationProcessDatasRequestBuilder';
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
export class FiscalIntegrationProcessDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalIntegrationProcessDatas<DeSerializersT>, DeSerializersT>
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
  ): FiscalIntegrationProcessDatasApi<DeSerializersT> {
    return new FiscalIntegrationProcessDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationProcessDatas;

  requestBuilder(): FiscalIntegrationProcessDatasRequestBuilder<DeSerializersT> {
    return new FiscalIntegrationProcessDatasRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationProcessDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationProcessDatas<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationProcessDatas<DeSerializersT>,
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
    typeof FiscalIntegrationProcessDatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationProcessDatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TERMINAL: OrderableEdmTypeField<
      FiscalIntegrationProcessDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANNEL: OrderableEdmTypeField<
      FiscalIntegrationProcessDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE: OrderableEdmTypeField<
      FiscalIntegrationProcessDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESS_DATA: OrderableEdmTypeField<
      FiscalIntegrationProcessDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_COMPLETED: EnumField<
      FiscalIntegrationProcessDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalIntegrationProcessDatas<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEdmTypeField('Channel', 'Edm.String', false),
        /**
         * Static representation of the {@link store} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE: fieldBuilder.buildEdmTypeField('Store', 'Edm.String', false),
        /**
         * Static representation of the {@link processData} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_DATA: fieldBuilder.buildEdmTypeField(
          'ProcessData',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPLETED: fieldBuilder.buildEnumField('IsCompleted', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalIntegrationProcessDatas)
      };
    }

    return this._schema;
  }
}
