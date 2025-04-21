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
import { CustomCounterAgents } from './CustomCounterAgents';

/**
 * Request builder class for operations supported on the {@link CustomCounterAgents} entity.
 */
export class CustomCounterAgentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomCounterAgents<T>, T> {
  /**
   * Returns a request builder for querying all `CustomCounterAgents` entities.
   * @returns A request builder for creating requests to retrieve all `CustomCounterAgents` entities.
   */
  getAll(): GetAllRequestBuilder<CustomCounterAgents<T>, T> {
    return new GetAllRequestBuilder<CustomCounterAgents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomCounterAgents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomCounterAgents`.
   */
  create(
    entity: CustomCounterAgents<T>
  ): CreateRequestBuilder<CustomCounterAgents<T>, T> {
    return new CreateRequestBuilder<CustomCounterAgents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomCounterAgents` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomCounterAgents.dataAreaId}.
   * @param agentAccountNumber Key property. See {@link CustomCounterAgents.agentAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomCounterAgents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agentAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomCounterAgents<T>, T> {
    return new GetByKeyRequestBuilder<CustomCounterAgents<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AgentAccountNumber: agentAccountNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomCounterAgents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomCounterAgents`.
   */
  update(
    entity: CustomCounterAgents<T>
  ): UpdateRequestBuilder<CustomCounterAgents<T>, T> {
    return new UpdateRequestBuilder<CustomCounterAgents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomCounterAgents`.
   * @param dataAreaId Key property. See {@link CustomCounterAgents.dataAreaId}.
   * @param agentAccountNumber Key property. See {@link CustomCounterAgents.agentAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomCounterAgents`.
   */
  delete(
    dataAreaId: string,
    agentAccountNumber: string
  ): DeleteRequestBuilder<CustomCounterAgents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomCounterAgents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomCounterAgents` by taking the entity as a parameter.
   */
  delete(
    entity: CustomCounterAgents<T>
  ): DeleteRequestBuilder<CustomCounterAgents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agentAccountNumber?: string
  ): DeleteRequestBuilder<CustomCounterAgents<T>, T> {
    return new DeleteRequestBuilder<CustomCounterAgents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomCounterAgents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgentAccountNumber: agentAccountNumber!
          }
    );
  }
}
