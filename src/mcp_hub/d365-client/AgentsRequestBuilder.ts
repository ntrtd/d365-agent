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
import { Agents } from './Agents';

/**
 * Request builder class for operations supported on the {@link Agents} entity.
 */
export class AgentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Agents<T>, T> {
  /**
   * Returns a request builder for querying all `Agents` entities.
   * @returns A request builder for creating requests to retrieve all `Agents` entities.
   */
  getAll(): GetAllRequestBuilder<Agents<T>, T> {
    return new GetAllRequestBuilder<Agents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Agents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Agents`.
   */
  create(entity: Agents<T>): CreateRequestBuilder<Agents<T>, T> {
    return new CreateRequestBuilder<Agents<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Agents` entity based on its keys.
   * @param dataAreaId Key property. See {@link Agents.dataAreaId}.
   * @param agentId Key property. See {@link Agents.agentId}.
   * @returns A request builder for creating requests to retrieve one `Agents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    agentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Agents<T>, T> {
    return new GetByKeyRequestBuilder<Agents<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AgentId: agentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Agents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Agents`.
   */
  update(entity: Agents<T>): UpdateRequestBuilder<Agents<T>, T> {
    return new UpdateRequestBuilder<Agents<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Agents`.
   * @param dataAreaId Key property. See {@link Agents.dataAreaId}.
   * @param agentId Key property. See {@link Agents.agentId}.
   * @returns A request builder for creating requests that delete an entity of type `Agents`.
   */
  delete(
    dataAreaId: string,
    agentId: string
  ): DeleteRequestBuilder<Agents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Agents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Agents` by taking the entity as a parameter.
   */
  delete(entity: Agents<T>): DeleteRequestBuilder<Agents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    agentId?: string
  ): DeleteRequestBuilder<Agents<T>, T> {
    return new DeleteRequestBuilder<Agents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Agents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AgentId: agentId!
          }
    );
  }
}
