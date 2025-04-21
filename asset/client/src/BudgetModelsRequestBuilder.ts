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
import { BudgetModels } from './BudgetModels';

/**
 * Request builder class for operations supported on the {@link BudgetModels} entity.
 */
export class BudgetModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetModels<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetModels` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetModels` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetModels<T>, T> {
    return new GetAllRequestBuilder<BudgetModels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetModels`.
   */
  create(entity: BudgetModels<T>): CreateRequestBuilder<BudgetModels<T>, T> {
    return new CreateRequestBuilder<BudgetModels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetModels.dataAreaId}.
   * @param budgetModel Key property. See {@link BudgetModels.budgetModel}.
   * @returns A request builder for creating requests to retrieve one `BudgetModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetModel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetModels<T>, T> {
    return new GetByKeyRequestBuilder<BudgetModels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetModel: budgetModel
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetModels`.
   */
  update(entity: BudgetModels<T>): UpdateRequestBuilder<BudgetModels<T>, T> {
    return new UpdateRequestBuilder<BudgetModels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetModels`.
   * @param dataAreaId Key property. See {@link BudgetModels.dataAreaId}.
   * @param budgetModel Key property. See {@link BudgetModels.budgetModel}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetModels`.
   */
  delete(
    dataAreaId: string,
    budgetModel: string
  ): DeleteRequestBuilder<BudgetModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetModels` by taking the entity as a parameter.
   */
  delete(entity: BudgetModels<T>): DeleteRequestBuilder<BudgetModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetModel?: string
  ): DeleteRequestBuilder<BudgetModels<T>, T> {
    return new DeleteRequestBuilder<BudgetModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetModel: budgetModel!
          }
    );
  }
}
