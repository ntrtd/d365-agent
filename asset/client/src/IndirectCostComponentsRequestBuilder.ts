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
import { IndirectCostComponents } from './IndirectCostComponents';

/**
 * Request builder class for operations supported on the {@link IndirectCostComponents} entity.
 */
export class IndirectCostComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IndirectCostComponents<T>, T> {
  /**
   * Returns a request builder for querying all `IndirectCostComponents` entities.
   * @returns A request builder for creating requests to retrieve all `IndirectCostComponents` entities.
   */
  getAll(): GetAllRequestBuilder<IndirectCostComponents<T>, T> {
    return new GetAllRequestBuilder<IndirectCostComponents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IndirectCostComponents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IndirectCostComponents`.
   */
  create(
    entity: IndirectCostComponents<T>
  ): CreateRequestBuilder<IndirectCostComponents<T>, T> {
    return new CreateRequestBuilder<IndirectCostComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IndirectCostComponents` entity based on its keys.
   * @param dataAreaId Key property. See {@link IndirectCostComponents.dataAreaId}.
   * @param componentId Key property. See {@link IndirectCostComponents.componentId}.
   * @returns A request builder for creating requests to retrieve one `IndirectCostComponents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    componentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IndirectCostComponents<T>, T> {
    return new GetByKeyRequestBuilder<IndirectCostComponents<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ComponentId: componentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IndirectCostComponents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IndirectCostComponents`.
   */
  update(
    entity: IndirectCostComponents<T>
  ): UpdateRequestBuilder<IndirectCostComponents<T>, T> {
    return new UpdateRequestBuilder<IndirectCostComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IndirectCostComponents`.
   * @param dataAreaId Key property. See {@link IndirectCostComponents.dataAreaId}.
   * @param componentId Key property. See {@link IndirectCostComponents.componentId}.
   * @returns A request builder for creating requests that delete an entity of type `IndirectCostComponents`.
   */
  delete(
    dataAreaId: string,
    componentId: string
  ): DeleteRequestBuilder<IndirectCostComponents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IndirectCostComponents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IndirectCostComponents` by taking the entity as a parameter.
   */
  delete(
    entity: IndirectCostComponents<T>
  ): DeleteRequestBuilder<IndirectCostComponents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    componentId?: string
  ): DeleteRequestBuilder<IndirectCostComponents<T>, T> {
    return new DeleteRequestBuilder<IndirectCostComponents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IndirectCostComponents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ComponentId: componentId!
          }
    );
  }
}
