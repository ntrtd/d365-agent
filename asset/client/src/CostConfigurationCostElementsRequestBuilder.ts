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
import { CostConfigurationCostElements } from './CostConfigurationCostElements';

/**
 * Request builder class for operations supported on the {@link CostConfigurationCostElements} entity.
 */
export class CostConfigurationCostElementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostConfigurationCostElements<T>, T> {
  /**
   * Returns a request builder for querying all `CostConfigurationCostElements` entities.
   * @returns A request builder for creating requests to retrieve all `CostConfigurationCostElements` entities.
   */
  getAll(): GetAllRequestBuilder<CostConfigurationCostElements<T>, T> {
    return new GetAllRequestBuilder<CostConfigurationCostElements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostConfigurationCostElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostConfigurationCostElements`.
   */
  create(
    entity: CostConfigurationCostElements<T>
  ): CreateRequestBuilder<CostConfigurationCostElements<T>, T> {
    return new CreateRequestBuilder<CostConfigurationCostElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostConfigurationCostElements` entity based on its keys.
   * @param costElementListName Key property. See {@link CostConfigurationCostElements.costElementListName}.
   * @param costElement Key property. See {@link CostConfigurationCostElements.costElement}.
   * @returns A request builder for creating requests to retrieve one `CostConfigurationCostElements` entity based on its keys.
   */
  getByKey(
    costElementListName: DeserializedType<T, 'Edm.String'>,
    costElement: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostConfigurationCostElements<T>, T> {
    return new GetByKeyRequestBuilder<CostConfigurationCostElements<T>, T>(
      this.entityApi,
      {
        CostElementListName: costElementListName,
        CostElement: costElement
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostConfigurationCostElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostConfigurationCostElements`.
   */
  update(
    entity: CostConfigurationCostElements<T>
  ): UpdateRequestBuilder<CostConfigurationCostElements<T>, T> {
    return new UpdateRequestBuilder<CostConfigurationCostElements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElements`.
   * @param costElementListName Key property. See {@link CostConfigurationCostElements.costElementListName}.
   * @param costElement Key property. See {@link CostConfigurationCostElements.costElement}.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElements`.
   */
  delete(
    costElementListName: string,
    costElement: string
  ): DeleteRequestBuilder<CostConfigurationCostElements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostConfigurationCostElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostConfigurationCostElements` by taking the entity as a parameter.
   */
  delete(
    entity: CostConfigurationCostElements<T>
  ): DeleteRequestBuilder<CostConfigurationCostElements<T>, T>;
  delete(
    costElementListNameOrEntity: any,
    costElement?: string
  ): DeleteRequestBuilder<CostConfigurationCostElements<T>, T> {
    return new DeleteRequestBuilder<CostConfigurationCostElements<T>, T>(
      this.entityApi,
      costElementListNameOrEntity instanceof CostConfigurationCostElements
        ? costElementListNameOrEntity
        : {
            CostElementListName: costElementListNameOrEntity!,
            CostElement: costElement!
          }
    );
  }
}
