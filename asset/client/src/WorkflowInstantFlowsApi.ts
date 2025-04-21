/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowInstantFlows } from './WorkflowInstantFlows';
import { WorkflowInstantFlowsRequestBuilder } from './WorkflowInstantFlowsRequestBuilder';
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
export class WorkflowInstantFlowsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkflowInstantFlows<DeSerializersT>, DeSerializersT>
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
  ): WorkflowInstantFlowsApi<DeSerializersT> {
    return new WorkflowInstantFlowsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WorkflowInstantFlows;

  requestBuilder(): WorkflowInstantFlowsRequestBuilder<DeSerializersT> {
    return new WorkflowInstantFlowsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkflowInstantFlows<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkflowInstantFlows<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkflowInstantFlows<DeSerializersT>,
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
    typeof WorkflowInstantFlows,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkflowInstantFlows,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FLOW_ENDPOINT_URL: OrderableEdmTypeField<
      WorkflowInstantFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATA_AREA: OrderableEdmTypeField<
      WorkflowInstantFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTANT_FLOW_NAME: OrderableEdmTypeField<
      WorkflowInstantFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_ENTITY_NAME: OrderableEdmTypeField<
      WorkflowInstantFlows<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WorkflowInstantFlows<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link flowEndpointUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLOW_ENDPOINT_URL: fieldBuilder.buildEdmTypeField(
          'FlowEndpointURL',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA: fieldBuilder.buildEdmTypeField(
          'DataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link instantFlowName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANT_FLOW_NAME: fieldBuilder.buildEdmTypeField(
          'InstantFlowName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'DataEntityName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkflowInstantFlows)
      };
    }

    return this._schema;
  }
}
