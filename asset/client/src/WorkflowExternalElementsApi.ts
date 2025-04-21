/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowExternalElements } from './WorkflowExternalElements';
import { WorkflowExternalElementsRequestBuilder } from './WorkflowExternalElementsRequestBuilder';
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
export class WorkflowExternalElementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkflowExternalElements<DeSerializersT>, DeSerializersT>
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
  ): WorkflowExternalElementsApi<DeSerializersT> {
    return new WorkflowExternalElementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WorkflowExternalElements;

  requestBuilder(): WorkflowExternalElementsRequestBuilder<DeSerializersT> {
    return new WorkflowExternalElementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkflowExternalElements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkflowExternalElements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkflowExternalElements<DeSerializersT>,
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
    typeof WorkflowExternalElements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkflowExternalElements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CORRELATION_ID: OrderableEdmTypeField<
      WorkflowExternalElements<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ELEMENT_ID: OrderableEdmTypeField<
      WorkflowExternalElements<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ELEMENT_STARTED_DATE_TIME: OrderableEdmTypeField<
      WorkflowExternalElements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<WorkflowExternalElements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link correlationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRELATION_ID: fieldBuilder.buildEdmTypeField(
          'CorrelationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link elementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEMENT_ID: fieldBuilder.buildEdmTypeField(
          'ElementId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link elementStartedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEMENT_STARTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ElementStartedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkflowExternalElements)
      };
    }

    return this._schema;
  }
}
