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
import { BudgetTransactionCodeBiEntities } from './BudgetTransactionCodeBiEntities';

/**
 * Request builder class for operations supported on the {@link BudgetTransactionCodeBiEntities} entity.
 */
export class BudgetTransactionCodeBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetTransactionCodeBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetTransactionCodeBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetTransactionCodeBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetTransactionCodeBiEntities<T>, T> {
    return new GetAllRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetTransactionCodeBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetTransactionCodeBiEntities`.
   */
  create(
    entity: BudgetTransactionCodeBiEntities<T>
  ): CreateRequestBuilder<BudgetTransactionCodeBiEntities<T>, T> {
    return new CreateRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetTransactionCodeBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetTransactionCodeBiEntities.dataAreaId}.
   * @param name Key property. See {@link BudgetTransactionCodeBiEntities.name}.
   * @returns A request builder for creating requests to retrieve one `BudgetTransactionCodeBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetTransactionCodeBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetTransactionCodeBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetTransactionCodeBiEntities`.
   */
  update(
    entity: BudgetTransactionCodeBiEntities<T>
  ): UpdateRequestBuilder<BudgetTransactionCodeBiEntities<T>, T> {
    return new UpdateRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetTransactionCodeBiEntities`.
   * @param dataAreaId Key property. See {@link BudgetTransactionCodeBiEntities.dataAreaId}.
   * @param name Key property. See {@link BudgetTransactionCodeBiEntities.name}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTransactionCodeBiEntities`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetTransactionCodeBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTransactionCodeBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetTransactionCodeBiEntities<T>
  ): DeleteRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<BudgetTransactionCodeBiEntities<T>, T> {
    return new DeleteRequestBuilder<BudgetTransactionCodeBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetTransactionCodeBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
