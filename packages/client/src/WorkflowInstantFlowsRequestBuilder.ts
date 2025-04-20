/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { WorkflowInstantFlows } from './WorkflowInstantFlows';

/**
 * Request builder class for operations supported on the {@link WorkflowInstantFlows} entity.
 */
export class WorkflowInstantFlowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkflowInstantFlows<T>, T> {
  /**
   * Returns a request builder for querying all `WorkflowInstantFlows` entities.
   * @returns A request builder for creating requests to retrieve all `WorkflowInstantFlows` entities.
   */
  getAll(): GetAllRequestBuilder<WorkflowInstantFlows<T>, T> {
    return new GetAllRequestBuilder<WorkflowInstantFlows<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkflowInstantFlows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkflowInstantFlows`.
   */
  create(
    entity: WorkflowInstantFlows<T>
  ): CreateRequestBuilder<WorkflowInstantFlows<T>, T> {
    return new CreateRequestBuilder<WorkflowInstantFlows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkflowInstantFlows` entity based on its keys.
   * @param flowEndpointUrl Key property. See {@link WorkflowInstantFlows.flowEndpointUrl}.
   * @returns A request builder for creating requests to retrieve one `WorkflowInstantFlows` entity based on its keys.
   */
  getByKey(
    flowEndpointUrl: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkflowInstantFlows<T>, T> {
    return new GetByKeyRequestBuilder<WorkflowInstantFlows<T>, T>(
      this.entityApi,
      { FlowEndpointURL: flowEndpointUrl }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkflowInstantFlows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkflowInstantFlows`.
   */
  update(
    entity: WorkflowInstantFlows<T>
  ): UpdateRequestBuilder<WorkflowInstantFlows<T>, T> {
    return new UpdateRequestBuilder<WorkflowInstantFlows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkflowInstantFlows`.
   * @param flowEndpointUrl Key property. See {@link WorkflowInstantFlows.flowEndpointUrl}.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowInstantFlows`.
   */
  delete(
    flowEndpointUrl: string
  ): DeleteRequestBuilder<WorkflowInstantFlows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkflowInstantFlows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkflowInstantFlows` by taking the entity as a parameter.
   */
  delete(
    entity: WorkflowInstantFlows<T>
  ): DeleteRequestBuilder<WorkflowInstantFlows<T>, T>;
  delete(
    flowEndpointUrlOrEntity: any
  ): DeleteRequestBuilder<WorkflowInstantFlows<T>, T> {
    return new DeleteRequestBuilder<WorkflowInstantFlows<T>, T>(
      this.entityApi,
      flowEndpointUrlOrEntity instanceof WorkflowInstantFlows
        ? flowEndpointUrlOrEntity
        : { FlowEndpointURL: flowEndpointUrlOrEntity! }
    );
  }
}
