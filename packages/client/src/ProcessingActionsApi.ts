/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessingActions } from './ProcessingActions';
import { ProcessingActionsRequestBuilder } from './ProcessingActionsRequestBuilder';
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
export class ProcessingActionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessingActions<DeSerializersT>, DeSerializersT>
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
  ): ProcessingActionsApi<DeSerializersT> {
    return new ProcessingActionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProcessingActions;

  requestBuilder(): ProcessingActionsRequestBuilder<DeSerializersT> {
    return new ProcessingActionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessingActions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProcessingActions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProcessingActions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProcessingActions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessingActions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESSING: OrderableEdmTypeField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_PARAMETERS: EnumField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RUN_SEPARATELY: EnumField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXECUTION_ORDER: OrderableEdmTypeField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SEQUENCE_ID: OrderableEdmTypeField<
      ProcessingActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProcessingActions<DeSerializers>>;
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
         * Static representation of the {@link processing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING: fieldBuilder.buildEdmTypeField(
          'Processing',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.String', false),
        /**
         * Static representation of the {@link useParameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_PARAMETERS: fieldBuilder.buildEnumField(
          'UseParameters',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link runSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RUN_SEPARATELY: fieldBuilder.buildEnumField(
          'RunSeparately',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link executionOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTION_ORDER: fieldBuilder.buildEdmTypeField(
          'ExecutionOrder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sequenceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_ID: fieldBuilder.buildEdmTypeField(
          'SequenceId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessingActions)
      };
    }

    return this._schema;
  }
}
