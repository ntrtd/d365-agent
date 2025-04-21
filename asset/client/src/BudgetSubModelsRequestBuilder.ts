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
import { BudgetSubModels } from './BudgetSubModels';

/**
 * Request builder class for operations supported on the {@link BudgetSubModels} entity.
 */
export class BudgetSubModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetSubModels<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetSubModels` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetSubModels` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetSubModels<T>, T> {
    return new GetAllRequestBuilder<BudgetSubModels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetSubModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetSubModels`.
   */
  create(
    entity: BudgetSubModels<T>
  ): CreateRequestBuilder<BudgetSubModels<T>, T> {
    return new CreateRequestBuilder<BudgetSubModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetSubModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetSubModels.dataAreaId}.
   * @param budgetModel Key property. See {@link BudgetSubModels.budgetModel}.
   * @param submodel Key property. See {@link BudgetSubModels.submodel}.
   * @returns A request builder for creating requests to retrieve one `BudgetSubModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetModel: DeserializedType<T, 'Edm.String'>,
    submodel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetSubModels<T>, T> {
    return new GetByKeyRequestBuilder<BudgetSubModels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BudgetModel: budgetModel,
      Submodel: submodel
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetSubModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetSubModels`.
   */
  update(
    entity: BudgetSubModels<T>
  ): UpdateRequestBuilder<BudgetSubModels<T>, T> {
    return new UpdateRequestBuilder<BudgetSubModels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetSubModels`.
   * @param dataAreaId Key property. See {@link BudgetSubModels.dataAreaId}.
   * @param budgetModel Key property. See {@link BudgetSubModels.budgetModel}.
   * @param submodel Key property. See {@link BudgetSubModels.submodel}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetSubModels`.
   */
  delete(
    dataAreaId: string,
    budgetModel: string,
    submodel: string
  ): DeleteRequestBuilder<BudgetSubModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetSubModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetSubModels` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetSubModels<T>
  ): DeleteRequestBuilder<BudgetSubModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetModel?: string,
    submodel?: string
  ): DeleteRequestBuilder<BudgetSubModels<T>, T> {
    return new DeleteRequestBuilder<BudgetSubModels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetSubModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetModel: budgetModel!,
            Submodel: submodel!
          }
    );
  }
}
